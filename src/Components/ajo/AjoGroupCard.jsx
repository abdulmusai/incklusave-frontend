import  T  from "../ui/theme";
import Btn from '../ui/Button';
import Card from '../ui/Card';  
import Pill from'../ui/Pill';
import fmt from'../../Utils/formatter';
import ProgressBar from'../ui/ProgressBar';

export default function AjoGroupCard({ g, onContribute }) {
  return (
    <Card style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 16 }}>{g.name}</div>
          <div style={{ color: T.sub, fontSize: 12, marginTop: 3 }}>
            {g.members} members · {fmt(g.weekly)}/week
          </div>
        </div>
        <Pill color={T.gold}>Active</Pill>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
        <div style={{ background: T.slate, borderRadius: 10, padding: "10px 14px" }}>
          <div style={{ color: T.sub, fontSize: 11 }}>Weekly pool</div>
          <div style={{ fontWeight: 800, fontSize: 16, color: T.gold }}>{fmt(g.weekly * g.members)}</div>
        </div>
        <div style={{ background: T.slate, borderRadius: 10, padding: "10px 14px" }}>
          <div style={{ color: T.sub, fontSize: 11 }}>Next payout</div>
          <div style={{ fontWeight: 800, fontSize: 15, color: g.nextPayout === "You" ? T.green : T.text }}>
            {g.nextPayout}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: T.sub, marginBottom: 6 }}>
          <span>Cycle progress</span><span>{g.progress}%</span>
        </div>
        <ProgressBar value={g.progress} gradient height={6} />
      </div>
      <div style={{ marginTop: 14 }}>
        <Btn onClick={onContribute} style={{ width: "100%", padding: "10px" }}>
          Contribute {fmt(g.weekly)}
        </Btn>
      </div>
    </Card>
  );
}