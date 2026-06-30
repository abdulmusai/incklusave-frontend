import  T  from "./theme.jsx";

export default function ProgressBar({ value, color, height = 6, gradient }) {
  return (
    <div style={{ background: T.muted + "55", borderRadius: 8, height }}>
      <div
        style={{
          width: `${Math.min(value, 100)}%`,
          height: "100%",
          background: gradient
            ? `linear-gradient(90deg, ${T.green}, ${T.gold})`
            : color || T.green,
          borderRadius: 8,
          transition: "width .4s",
        }}
      />
    </div>
  );
}
