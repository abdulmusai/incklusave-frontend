import Btn from './Components/ui/Button';
import Card from './Components/ui/Card'; 
import { useState } from 'react';
import Input from'./Components/ui/Input';
import  T  from "./Components/ui/theme.jsx";

 
export default function LoginFormView({ onLogin, onBack }) {
  const [phone, setPhone] = useState("");
  const [pin, setPin]     = useState("");
  return (
    <div
      style={{
        minHeight: "100vh", background: T.ink,
        display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      }}
    >
      <div style={{ width: "100%", maxWidth: 380 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 28, fontWeight: 900 }}>Welcome to InkluSave</div>
          <div style={{ color: T.sub, fontSize: 13, marginTop: 6 }}>Enter your details to continue</div>
        </div>
        <Card>
          <Input label="Phone Number" value={phone} onChange={setPhone} placeholder="0803 000 0000" />
          <Input label="PIN" value={pin} onChange={setPin} type="password" placeholder="••••" />
          <Btn onClick={onLogin} style={{ width: "100%", padding: "14px", marginTop: 4 }}>Continue →</Btn>
        </Card>
        <div style={{ textAlign: "center", marginTop: 20, color: T.sub, fontSize: 13 }}>
          No ID required · Works on all phones
        </div>
        <button
          onClick={onBack}
          style={{
            display: "block", margin: "12px auto 0", background: "none",
            border: "none", color: T.sub, cursor: "pointer", fontSize: 13,
          }}
        >
          ← Back to splash
        </button>
      </div>
    </div>
  );
}
