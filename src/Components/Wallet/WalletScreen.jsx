import { useState } from "react";
import WalletBalance from'./WalletBalance';
import SavingsVault from'./SavingsVault';
import SendModal from './SendModal';
import PayBillModal from './PayBillModal';
import ReceiveModal from'./ReceiveModal';
import  TxRow from '../ui/TransactionRow';


function WalletScreen({ state, dispatch, toast }) {
  const [modal, setModal] = useState(null);
  return (
    <div style={{ padding: "24px 20px 100px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>My Wallet</h2>
      <WalletBalance
        balance={state.user.balance}
        onSend={() => setModal("send")}
        onReceive={() => setModal("receive")}
        onPay={() => setModal("pay")}
      />
      <SavingsVault savings={state.user.savings} />
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 12 }}>All Transactions</div>
      {state.transactions.map((tx) => <TxRow key={tx.id} tx={tx} large />)}

      {modal === "send"    && <SendModal    onClose={() => setModal(null)} balance={state.user.balance} dispatch={dispatch} toast={toast} />}
      {modal === "receive" && <ReceiveModal onClose={() => setModal(null)} dispatch={dispatch} toast={toast} />}
      {modal === "pay"     && <PayBillModal onClose={() => setModal(null)} balance={state.user.balance} dispatch={dispatch} toast={toast} />}
    </div>
  );
}

export default WalletScreen;