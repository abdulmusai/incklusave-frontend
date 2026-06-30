import  T  from "../ui/theme.jsx";

function QuickActions({ setPage }) {
  const actions = [
    { label: "Send",    icon: "↑", page: "send"    },
    { label: "Receive", icon: "↓", page: "receive" },
    { label: "Pay",     icon: "⚡", page: "pay"     },
    { label: "Save",    icon: "🏦", page: "save"    },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginTop: 18, padding: "0 20px" }}>
      {actions.map((a) => (
        <button
          key={a.page}
          onClick={() => setPage(a.page)}
          style={{
            background: T.panel, border: `1px solid ${T.muted}`,
            borderRadius: 14, padding: "14px 0", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            color: T.text, fontFamily: "inherit", transition: "background .2s",
          }}
        >
          <span style={{ fontSize: 22 }}>{a.icon}</span>
          <span style={{ fontSize: 11, fontWeight: 700 }}>{a.label}</span>
        </button>
      ))}
    </div>
  );
}

export default QuickActions;