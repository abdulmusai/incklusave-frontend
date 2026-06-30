
import { useState } from "react";
import Btn from '../ui/Button';
import Card from '../ui/Card'; 
import fmt from'../../Utils/formatter';
import  T  from "../ui/theme.jsx";
import Input from'../ui/Input';


export default function LoanApplication({ loanMax, loanEligible, onApply }) {
  const [loanAmt, setLoanAmt] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleApply = () => onApply(loanAmt, purpose);

  return (
    <Card>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 16 }}>Apply for a Loan</div>
      <Input label="Loan Amount" value={loanAmt} onChange={setLoanAmt} type="number" prefix="₦" placeholder={`Max ${fmt(loanMax)}`} />
      <Input label="Purpose"     value={purpose} onChange={setPurpose} placeholder="e.g. Stock for my shop" />
      {loanAmt && (
        <div style={{ background: T.slate, borderRadius: 10, padding: "12px 14px", marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
            <span style={{ color: T.sub }}>Monthly repayment</span>
            <span style={{ fontWeight: 800 }}>{fmt(Math.ceil(parseInt(loanAmt || 0) * 1.05 / 3))}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: T.sub }}>Interest (5% monthly)</span>
            <span style={{ color: T.gold, fontWeight: 800 }}>{fmt(Math.ceil(parseInt(loanAmt || 0) * 0.05))}</span>
          </div>
        </div>
      )}
      <Btn onClick={handleApply} disabled={!loanEligible} style={{ width: "100%" }}>
        {loanEligible ? "Apply Now" : "Not Eligible Yet"}
      </Btn>
    </Card>
  );
}
