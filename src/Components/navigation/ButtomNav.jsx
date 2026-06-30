import T from "../ui/theme";
import NAV from "./navItems";

export default function ButtomNav({ active, setActive }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 480,
        background: T.slate,
        borderTop: `1px solid ${T.muted}`,
        display: "flex",
        zIndex: 50,
      }}
    >
      {NAV.map((n) => (
        <button
          key={n.id}
          onClick={() => setActive(n.id)}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px 0 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            color: active === n.id ? T.green : T.sub,
            transition: "color .2s",
          }}
        >
          <span style={{ fontSize: 18 }}>{n.icon}</span>
          <span
            style={{
              fontSize: 9,
              fontWeight: active === n.id ? 800 : 500,
              letterSpacing: ".4px",
              textTransform: "uppercase",
            }}
          >
            {n.label}
          </span>
          {active === n.id && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: 30,
                height: 2,
                background: T.green,
                borderRadius: 2,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}