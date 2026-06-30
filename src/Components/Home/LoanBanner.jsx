import Btn from '../ui/Button';
import Card from '../ui/Card'; 
import  T  from "../ui/theme.jsx";
import Pill from'../ui/Pill';
import fmt from'../../Utils/formatter';

function LoanBanner({ loanMax, setPage }) {
  return (
    <Card style={{ marginTop: 20 }} glow>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Pill>Loan Available</Pill>
          <div style={{ fontWeight: 800, fontSize: 17, marginTop: 6 }}>You qualify for a loan!</div>
          <div style={{ color: T.sub, fontSize: 13, marginTop: 2 }}>Up to {fmt(loanMax)} at 5% monthly</div>
        </div>
        <Btn onClick={() => setPage("loans")} style={{ whiteSpace: "nowrap" }}>Apply →</Btn>
      </div>
    </Card>
  );
}


export default LoanBanner;