import Card from '../ui/Card'; 
import ProgressBar from'../ui/ProgressBar';
import  T  from "../ui/theme.jsx";


export default function ScoreBreakdown() {
  const factors = [
    { label: "Savings history",        score: 90, weight: "High"   },
    { label: "Transaction frequency",  score: 75, weight: "High"   },
    { label: "Ajo participation",      score: 85, weight: "Medium" },
    { label: "Mobile usage",           score: 60, weight: "Medium" },
    { label: "Account age",            score: 70, weight: "Low"    },
  ];
  return (
    <Card style={{ marginBottom: 20 }}>
      <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 14 }}>Score Factors (AI Model)</div>
      {factors.map((f) => (
        <div key={f.label} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
            <span style={{ color: T.text }}>{f.label}</span>
            <span style={{ color: T.sub }}>{f.score}/100</span>
          </div>
          <ProgressBar
            value={f.score}
            color={f.score >= 75 ? T.green : f.score >= 50 ? T.gold : T.danger}
            height={5}
          />
        </div>
      ))}
    </Card>
  );
}
