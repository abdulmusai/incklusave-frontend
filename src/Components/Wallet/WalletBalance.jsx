import  T  from "../ui/theme.jsx";
import Card from '../ui/Card'; 
import fmt from'../../Utils/formatter';
import Btn from '../ui/Button';



function WalletBalance({ balance, onSend, onReceive, onPay }) {
  return (
    <Card glow style={{ marginBottom: 20 }}>
      <div style={{ color: T.sub, fontSize: 12, fontWeight: 700 }}>AVAILABLE BALANCE</div>
      <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -1, color: T.green, marginTop: 4 }}>
        {fmt(balance)}
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <Btn onClick={onSend}    style={{ flex: 1 }}>↑ Send</Btn>
        <Btn onClick={onReceive} variant="ghost" style={{ flex: 1 }}>↓ Receive</Btn>
        <Btn onClick={onPay}     variant="gold"  style={{ flex: 1 }}>⚡ Pay Bill</Btn>
      </div>
    </Card>
  );
}
export default WalletBalance;