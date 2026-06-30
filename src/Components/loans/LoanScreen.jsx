import { useState } from "react";
import fmt from'../../Utils/formatter';
import CreditScoreCard from './CreditScore';
import LoanApplication from './LoanApplication';
import LoanApprovedCard from'./LoanApprovedCard';
import ScoreBreakdown from'./ScoreBreakdown';


export default function LoansScreen({ state, dispatch, toast }) {
  const [applied, setApplied] = useState(false);
  const { loanScore, loanEligible, loanMax } = state;

  const handleApply = (loanAmt, purpose) => {
    const n = parseInt(loanAmt);
    if (!n || n > loanMax)  { toast(`Max loan is ${fmt(loanMax)}`);           return; }
    if (!loanEligible)      { toast("You are not yet eligible. Keep saving!"); return; }
    dispatch({ type: "CREDIT", amount: n, label: `Micro-loan disbursed – ${purpose || "General"}` });
    toast(`Loan of ${fmt(n)} approved & disbursed!`);
    setApplied(true);
  };

  return (
    <div style={{ padding: "24px 20px 100px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>Micro-Loans</h2>
      <CreditScoreCard loanScore={loanScore} loanEligible={loanEligible} loanMax={loanMax} />
      <ScoreBreakdown />
      {applied
        ? <LoanApprovedCard onReset={() => setApplied(false)} />
        : <LoanApplication loanMax={loanMax} loanEligible={loanEligible} onApply={handleApply} />
      }
    </div>
  );
}