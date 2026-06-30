import  T  from "./theme.jsx";


export default function Input({ label, value, onChange, type = "text", prefix, placeholder }) {
  return (
    <div style={{ marginBottom: 14 }}>
      {label && (
        <div style={{ color: T.sub, fontSize: 12, marginBottom: 6, fontWeight: 600 }}>{label}</div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: T.slate,
          border: `1px solid ${T.muted}`,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {prefix && (
          <span style={{ padding: "0 12px", color: T.gold, fontWeight: 700, fontSize: 15 }}>{prefix}</span>
        )}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={placeholder}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: T.text,
            padding: "12px 14px",
            fontSize: 15,
            fontFamily: "inherit",
          }}
        />
      </div>
    </div>
  );
}


