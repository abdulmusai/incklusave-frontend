import { useState, useEffect } from "react";
import  INIT from "./Components/navigation/data";
import { useAppState } from "./hooks/useAppState";
import  useToast  from "./hooks/useToast";
import ButtomNav from "./Components/navigation/ButtomNav";
import T from "./Components/ui/theme";
import Toast from "./Toast";
import HomeScreen from "./Components/Home/HomeScreen";
import LoginScreen from "./Login/LoginsScreen";
import WalletScreen from "./Components/Wallet/WalletScreen"
import AjoScreen from "./Components/ajo/AjoScreen";
import LoansScreen from "./Components/loans/LoanScreen";
import LearnScreen from "./Components/learn/LearnScreen";
import AgentsScreen from "./Components/agents/AgentScreen.jsx";




export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab]           = useState("home");
  const [page, setPage]         = useState(null);
  const [state, dispatch]       = useAppState(INIT);
  const [toast, showToast]      = useToast();

  // Wire quick-action page shortcuts → tabs
  useEffect(() => {
    if (page === null) return;
    if (["send","receive","pay","save"].includes(page)) {
      setTab("wallet"); 
      setPage(null);
         
    } else if (page === "loans") {
      setTab("loans"); 
      setPage(null);
    }
  }, [page]);

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  const renderScreen = () => {
    switch (tab) {
      case "home":   return <HomeScreen    state={state} setPage={setPage} toast={showToast} />;
      case "wallet": return <WalletScreen  state={state} dispatch={dispatch} toast={showToast} />;
      case "ajo":    return <AjoScreen     state={state} dispatch={dispatch} toast={showToast} />;
      case "loans":  return <LoansScreen   state={state} dispatch={dispatch} toast={showToast} />;
      case "learn":  return <LearnScreen   state={state} dispatch={dispatch} toast={showToast} />;
      case "agents": return <AgentsScreen  toast={showToast} />;
      default:       return null;
    }
  };

  return (
    <div
      style={{
        background: T.ink, minHeight: "100vh", color: T.text,
        fontFamily: "'Outfit', 'Segoe UI', sans-serif",
        position: "relative", maxWidth: 480, margin: "0 auto", overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div style={{ paddingBottom: 70, minHeight: "100vh" }}>
        {renderScreen()}
      </div>
      <ButtomNav active={tab} setActive={setTab} />
      <Toast msg={toast.msg} visible={toast.visible} />
    </div>
  );
}


