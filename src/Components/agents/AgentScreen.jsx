import Btn from '../ui/Button';
import Card from '../ui/Card'; 
import  T  from "../ui/theme.jsx";
import AgentCard from './AgentCard';
import BecomeAgentCard from './BecomeAgent';


const AGENTS = [
  { id: 1, name: "Mama Ngozi's Store",    area: "Oshodi Market, Lagos",   services: ["Deposit","Withdraw","Account"], rating: 4.8, open: true  },
  { id: 2, name: "Emeka Telecoms",        area: "Alaba Int'l, Lagos",     services: ["Deposit","Account"],            rating: 4.5, open: true  },
  { id: 3, name: "Fatima Mini-Mart",      area: "Sabon Gari, Kano",       services: ["Deposit","Withdraw"],           rating: 4.7, open: false },
  { id: 4, name: "Chidi Business Centre", area: "New Market, Onitsha",    services: ["Deposit","Withdraw","Account"], rating: 4.9, open: true  },
  { id: 5, name: "Hauwa Provision Store", area: "Wuse Market, Abuja",     services: ["Deposit","Withdraw"],           rating: 4.6, open: true  },
];

export default function AgentsScreen({ toast }) {
  return (
    <div style={{ padding: "24px 20px 100px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 6 }}>Agent Banking</h2>
      <div style={{ color: T.sub, fontSize: 13, marginBottom: 20 }}>
        Visit a nearby agent to deposit, withdraw, or open an account — no bank branch needed.
      </div>

      <Card style={{ marginBottom: 20, background: `linear-gradient(135deg, ${T.blue}22, ${T.panel})` }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ fontSize: 32 }}>📍</div>
          <div>
            <div style={{ fontWeight: 800 }}>Find Agents Near You</div>
            <div style={{ color: T.sub, fontSize: 13, marginTop: 4 }}>
              Over 2,000 agents across Nigeria. Cash in / cash out without internet.
            </div>
          </div>
        </div>
        <Btn
          onClick={() => toast("Location access needed — enable in browser settings")}
          variant="ghost" style={{ marginTop: 14, width: "100%" }}
        >
          Use My Location
        </Btn>
      </Card>

      {AGENTS.map((a) => (
        <AgentCard
          key={a.id}
          agent={a}
          onDirections={() => toast(`Directions to ${a.name} sent to your phone`)}
        />
      ))}
      <BecomeAgentCard toast={toast} />
    </div>
  );
}