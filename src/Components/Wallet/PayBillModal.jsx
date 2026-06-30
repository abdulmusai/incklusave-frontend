import { useState } from "react";
import Btn from '../ui/Button';
import Input from'../ui/Input';
import Modal from'../ui/Modal';



function PayBillModal({ onClose, balance, dispatch, toast }) {
  const [amt, setAmt]   = useState("");
  const [note, setNote] = useState("");
  const doPay = () => {
    const n = parseInt(amt);
    if (!n || n > balance) { toast("Insufficient balance"); return; }
    dispatch({ type: "DEBIT", amount: n, label: `Bill payment – ${note || "Utility"}` });
    toast("Bill paid successfully!");
    onClose();
  };
  return (
    <Modal title="Pay Bill" onClose={onClose}>
      <Input label="Bill Type (e.g. EKEDC, DSTV)" value={note} onChange={setNote} placeholder="Electricity" />
      <Input label="Amount" value={amt} onChange={setAmt} type="number" prefix="₦" placeholder="0" />
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <Btn onClick={onClose} variant="ghost" style={{ flex: 1 }}>Cancel</Btn>
        <Btn onClick={doPay}   variant="gold"  style={{ flex: 1 }}>Pay Now</Btn>
      </div>
    </Modal>
  );
}


export default PayBillModal;