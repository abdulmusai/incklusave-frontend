import Btn from '../ui/Button';
import Card from '../ui/Card'; 
import  T  from "../ui/theme";

export default function BecomeAgentCard({ toast }) {
  return (
    <Card style={{ textAlign: "center", marginTop: 8 }}>
      <div style={{ fontSize: 28, marginBottom: 8 }}>🤝</div>
      <div style={{ fontWeight: 800 }}>Become an Agent</div>
      <div style={{ color: T.sub, fontSize: 13, marginTop: 6 }}>
        Earn commission by helping your community access financial services.
      </div>
      <Btn
        onClick={() => toast("Agent application form opened!")}
        variant="gold" style={{ marginTop: 14, width: "100%" }}
      >
        Apply to Be an Agent
      </Btn>
    </Card>
  );
}
