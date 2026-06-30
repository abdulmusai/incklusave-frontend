import  T  from "../Components/ui/theme";
import Btn from '../Components/ui/Button';



function SplashView({ onGoLogin, onGoUssd }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.ink,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 80, height: 80, borderRadius: 24, background: T.green,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36, marginBottom: 24, boxShadow: `0 0 40px ${T.green}55`,
        }}
      >
        💚
      </div>
      <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: -1 }}>InkluSave</div>
      <div style={{ color: T.sub, marginTop: 8, fontSize: 15, lineHeight: 1.6, maxWidth: 320 }}>
        Financial inclusion for every Nigerian — with or without a bank account.
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 40, width: "100%", maxWidth: 320 }}>
        <Btn onClick={onGoLogin} style={{ padding: "15px" }}>Create / Login</Btn>
        <Btn onClick={onGoUssd} variant="ghost" style={{ padding: "15px" }}>📱 Use USSD (*123#)</Btn>
      </div>
      <div style={{ marginTop: 40, color: T.sub, fontSize: 11 }}>
        CBN Licensed · Powered by Africa's Talking · Flutterwave
      </div>
    </div>
  );
}

export default SplashView;