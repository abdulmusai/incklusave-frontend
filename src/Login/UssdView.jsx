import  T  from "../Components/ui/theme.jsx";
import Btn from '../Components/ui/Button';
import Card from '../Components/ui/Card'; 


function UssdView({ onBack }) {
  return (
    <div
      style={{
        minHeight: "100vh", background: T.ink, display: "flex",
        alignItems: "center", justifyContent: "center", padding: 24,
      }}
    >
      <Card style={{ width: "100%", maxWidth: 360, textAlign: "center" }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>📱</div>
        <div style={{ fontWeight: 900, fontSize: 18 }}>USSD Access</div>
        <div style={{ color: T.sub, fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          No smartphone? No internet? Dial{" "}
          <strong style={{ color: T.green }}>*123#</strong> from any phone to access InkluSave.
        </div>
        <div
          style={{
            background: T.slate, borderRadius: 12, padding: 16, marginTop: 20,
            textAlign: "left", fontFamily: "monospace", fontSize: 13,
          }}
        >
          <div style={{ color: T.green }}>InkluSave *123#</div>
          <div style={{ color: T.sub, marginTop: 8 }}>1. Check Balance</div>
          <div style={{ color: T.sub }}>2. Send Money</div>
          <div style={{ color: T.sub }}>3. Save Money</div>
          <div style={{ color: T.sub }}>4. Join Ajo Group</div>
          <div style={{ color: T.sub }}>5. Request Loan</div>
        </div>
        <Btn onClick={onBack} variant="ghost" style={{ marginTop: 16, width: "100%" }}>← Back</Btn>
      </Card>
    </div>
  );
}

export default  UssdView;
