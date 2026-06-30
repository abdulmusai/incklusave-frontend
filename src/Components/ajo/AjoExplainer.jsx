
import Card from '../ui/Card'; 
import  T  from "../ui/theme.jsx";

export default function AjoExplainer() {
  return (
    <Card style={{ marginBottom: 20, background: `linear-gradient(135deg, ${T.gold}33, ${T.panel})` }}>
      <div style={{ fontSize: 12, color: T.sub, fontWeight: 700 }}>HOW AJO WORKS</div>
      <div style={{ marginTop: 8, fontSize: 13, color: T.text, lineHeight: 1.6 }}>
        Each member contributes a fixed amount weekly. The full pool is paid out to one member in
        rotation. InkluSave manages contributions, rotations, and records automatically.
      </div>
    </Card>
  );
}
