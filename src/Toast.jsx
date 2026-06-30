import T from "./Components/ui/theme";

export default function Toast({ msg, visible }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 80,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : 20}px)`,
        background: T.slate,
        border: `1px solid ${T.green}55`,
        borderRadius: 12,
        padding: "12px 22px",
        fontWeight: 700,
        fontSize: 13,
        color: T.text,
        boxShadow: "0 8px 24px #0008",
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        transition: "all .3s",
        whiteSpace: "nowrap",
        maxWidth: "90vw",
      }}
    >
      {msg}
    </div>
  );
}
