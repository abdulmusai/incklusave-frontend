import  T  from "./theme.jsx";
import fmt from'../../Utils/formatter';


export default function TxRow({ tx, large }) {
  const iconSize = large ? 40 : 38;
  const radius   = large ? 12 : 10;
  const fontSize = large ? 15 : 13;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: `${large ? 14 : 13}px 0`,
        borderBottom: `1px solid ${T.muted}33`,
      }}
    >
      <div
        style={{
          width: iconSize, height: iconSize, borderRadius: radius,
          background: tx.type === "credit" ? T.green + "22" : T.danger + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: large ? 18 : 16, marginRight: large ? 14 : 12,
        }}
      >
        {tx.type === "credit" ? "↓" : "↑"}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize }}>{tx.label}</div>
        <div style={{ color: T.sub, fontSize: 11, marginTop: 2 }}>{tx.date}</div>
      </div>
      <div
        style={{
          fontWeight: 800,
          fontSize: large ? 15 : undefined,
          color: tx.type === "credit" ? T.green : T.text,
        }}
      >
        {tx.type === "credit" ? "+" : "-"}{fmt(tx.amount)}
      </div>
    </div>
  );
}
