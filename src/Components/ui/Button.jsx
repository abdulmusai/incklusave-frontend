import  T  from "../ui/theme.jsx";

export default function Btn({ children, onClick, variant = "primary", style = {}, disabled }) {
  const base = {
    border: "none",
    borderRadius: 10,
    fontFamily: "inherit",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: 700,
    fontSize: 14,
    transition: "transform .12s, opacity .12s",
    opacity: disabled ? 0.5 : 1,
    ...style,
  };
  const variants = {
    primary: { background: T.green,       color: "#fff",  padding: "12px 22px" },
    gold:    { background: T.gold,        color: T.ink,   padding: "12px 22px" },
    ghost:   { background: "transparent", color: T.green, border: `1px solid ${T.green}55`, padding: "11px 22px" },
    danger:  { background: T.danger,      color: "#fff",  padding: "12px 22px" },
  };
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(1.03)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
    >
      {children}
    </button>
  );
}
