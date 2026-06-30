import  T  from "./theme.jsx";

export default function Pill({ children, color = T.green }) {
  return (
    <span
      style={{
        background: color + "22",
        color,
        border: `1px solid ${color}44`,
        borderRadius: 99,
        padding: "2px 10px",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: ".5px",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}
