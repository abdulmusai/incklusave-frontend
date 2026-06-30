import HomeHeader from'./HomeHeader';
import QuickActions from './QuickActions';
import LoanBanner from'./LoanBanner';
import RecentActivity from './RecentActivity';

export default function HomeScreen({ state, setPage, toast }) {
  const { user, transactions, loanEligible, loanScore, loanMax } = state;
  return (
    <div>
      <HomeHeader user={user} loanScore={loanScore} toast={toast} />
      <QuickActions setPage={setPage} />
      <div style={{ padding: "0 20px 100px" }}>
        {loanEligible && <LoanBanner loanMax={loanMax} setPage={setPage} />}
        <RecentActivity transactions={transactions} setPage={setPage} />
      </div>
    </div>
  );
}

