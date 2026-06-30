import  T  from "../ui/theme.jsx";
import Card from '../ui/Card'; 
import Pill from'../ui/Pill';
import ProgressBar from'../ui/ProgressBar';
import fmt from'../../Utils/formatter';

function SavingsVault({ savings }) {
  return (
    <Card style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ color: T.sub, fontSize: 12, fontWeight: 700 }}>SAVINGS VAULT</div>
          <div style={{ fontSize: 26, fontWeight: 900, marginTop: 4 }}>{fmt(savings)}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <Pill color={T.gold}>3.5% p.a.</Pill>
          <div style={{ color: T.sub, fontSize: 11, marginTop: 6 }}>Interest rate</div>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        <ProgressBar value={(savings / 50000) * 100} color={T.gold} />
      </div>
      <div style={{ color: T.sub, fontSize: 11, marginTop: 6 }}>Target: ₦50,000</div>
    </Card>
  );
}

export default SavingsVault;