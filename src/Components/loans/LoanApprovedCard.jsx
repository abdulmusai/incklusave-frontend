import Btn from '../ui/Button';
import Card from '../ui/Card'; 
import  T  from "../ui/theme";


export default function LoanApprovedCard({ onReset }) {
  return (
    <Card glow style={{ textAlign: "center" }}>
      <div style={{ fontSize: 40 }}>✅</div>
      <div style={{ fontWeight: 800, fontSize: 18, marginTop: 8 }}>Loan Approved!</div>
      <div style={{ color: T.sub, marginTop: 6 }}>Amount has been added to your wallet.</div>
      <Btn onClick={onReset} variant="ghost" style={{ marginTop: 16 }}>Apply Again</Btn>
    </Card>
  );
}
