import  T  from "../ui/theme.jsx";

export default function Card({ children, style = {}, glow }) {
  return (
    <div
      style={{
        background: T.panel,
        borderRadius: 16,
        padding: "20px 22px",
        position: "relative",
        overflow: "hidden",
        boxShadow: glow ? `0 0 24px ${T.green}33` : "0 2px 12px #0006",
        border: `1px solid ${glow ? T.green + "44" : T.muted + "55"}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

