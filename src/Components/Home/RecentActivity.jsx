import  T  from "../ui/theme.jsx";
import TxRow from '../ui/TransactionRow';

function RecentActivity({ transactions, setPage }) {
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontWeight: 800, fontSize: 15 }}>Recent Activity</span>
        <span onClick={() => setPage("wallet")} style={{ color: T.green, fontSize: 13, cursor: "pointer" }}>
          See all
        </span>
      </div>
      {transactions.slice(0, 4).map((tx) => (
        <TxRow key={tx.id} tx={tx} />
      ))}
    </div>
  );
}
export default RecentActivity;