import Card from '../ui/Card'; 
import  T  from "../ui/theme.jsx";
import fmt from'../../Utils/formatter';
import Pill from'../ui/Pill'



export default function CreditScoreCard({ loanScore, loanEligible, loanMax }) {
  const scoreColor = loanScore >= 75 ? T.green : loanScore >= 50 ? T.gold : T.danger;
  return (
    <Card glow={loanEligible} style={{ marginBottom: 20, textAlign: "center" }}>
      <div style={{ color: T.sub, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>YOUR AI CREDIT SCORE</div>
      <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke={T.muted} strokeWidth="10" />
          <circle
            cx="60" cy="60" r="50" fill="none" stroke={scoreColor} strokeWidth="10"
            strokeDasharray={`${(loanScore / 100) * 314} 314`}
            strokeLinecap="round" transform="rotate(-90 60 60)"
          />
        </svg>
        <div style={{ position: "absolute", textAlign: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: scoreColor }}>{loanScore}</div>
          <div style={{ fontSize: 10, color: T.sub, fontWeight: 700 }}>/100</div>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <Pill color={scoreColor}>
          {loanScore >= 75 ? "Good Standing" : loanScore >= 50 ? "Fair" : "Needs Improvement"}
        </Pill>
      </div>
      <div style={{ color: T.sub, fontSize: 13, marginTop: 10 }}>
        Max eligible loan: <span style={{ color: T.gold, fontWeight: 800 }}>{fmt(loanMax)}</span>
      </div>
    </Card>
  );
}
