import Btn from '../ui/Button';
import Card from '../ui/Card'; 
import  T  from "../ui/theme.jsx";
import Pill from'../ui/Pill';

export default function AgentCard({ agent, onDirections }) {
  return (
    <Card style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 800 }}>{agent.name}</div>
          <div style={{ color: T.sub, fontSize: 12, marginTop: 3 }}>📍 {agent.area}</div>
        </div>
        <Pill color={agent.open ? T.green : T.danger}>{agent.open ? "Open" : "Closed"}</Pill>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
        {agent.services.map((s) => (
          <span
            key={s}
            style={{ background: T.slate, borderRadius: 6, padding: "4px 10px", fontSize: 11, color: T.sub }}
          >
            {s}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
        <span style={{ color: T.gold, fontSize: 13 }}>★ {agent.rating}</span>
        <Btn onClick={onDirections} variant="ghost" style={{ padding: "8px 16px", fontSize: 12 }}>
          Get Directions
        </Btn>
      </div>
    </Card>
  );
}
