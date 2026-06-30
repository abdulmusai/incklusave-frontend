import  T  from "../ui/theme.jsx";
import fmt from'../../Utils/formatter';

export default function HomeHeader({ user, loanScore, toast }) {
  return (
    <div style={{ padding: "28px 20px 16px", background: `linear-gradient(160deg, ${T.slate}, ${T.ink})` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ color: T.sub, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
            Welcome back 👋
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, marginTop: 2 }}>{user.name}</div>
          <div style={{ color: T.sub, fontSize: 12, marginTop: 2 }}>{user.phone}</div>
        </div>
        <div
          style={{
            background: T.green + "22", border: `1px solid ${T.green}44`,
            borderRadius: 10, padding: "6px 12px", textAlign: "right",
          }}
        >
          <div style={{ color: T.sub, fontSize: 10, fontWeight: 700 }}>CREDIT SCORE</div>
          <div style={{ color: T.green, fontSize: 20, fontWeight: 900 }}>{loanScore}</div>
        </div>
      </div>

      {/* Balance card */}
      <div
        style={{
          marginTop: 20,
          background: `linear-gradient(135deg, ${T.green}CC, #00957066)`,
          borderRadius: 18, padding: "20px 22px",
          boxShadow: `0 8px 32px ${T.green}33`,
        }}
      >
        <div style={{ color: "#fff9", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>WALLET BALANCE</div>
        <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, marginTop: 4 }}>{fmt(user.balance)}</div>
        <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: "#fff9", fontSize: 11 }}>Total savings</div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{fmt(user.savings)}</div>
          </div>
          <div
            style={{
              background: "#fff2", borderRadius: 10, padding: "6px 14px",
              fontSize: 12, fontWeight: 700, cursor: "pointer",
            }}
            onClick={() => toast("USSD: *123# from any phone")}
          >
            📱 USSD *123#
          </div>
        </div>
      </div>
    </div>
  );
}

