import  T  from "./theme.jsx";


export default function Modal({ title, onClose, children }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000c",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          background: T.panel,
          borderRadius: 20,
          width: "100%",
          maxWidth: 420,
          border: `1px solid ${T.muted}`,
          boxShadow: "0 20px 60px #000a",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 22px",
            borderBottom: `1px solid ${T.muted}`,
          }}
        >
          <span style={{ fontWeight: 800, fontSize: 16 }}>{title}</span>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: T.sub, fontSize: 20, cursor: "pointer" }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: 22 }}>{children}</div>
      </div>
    </div>
  );
}