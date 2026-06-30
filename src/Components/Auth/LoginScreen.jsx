import { useState } from "react";
import LoginFormView from './Components/Auth/LoginFormView';
import SplashView from './Components/Auth/SplashView';
import UssdView from './Components/Auth/UssdView';
 

export default  function LoginScreen({ onLogin }) {
  const [view, setView] = useState("splash");
  if (view === "splash") return <SplashView onGoLogin={() => setView("login")} onGoUssd={() => setView("ussd")} />;
  if (view === "ussd")   return <UssdView   onBack={() => setView("splash")} />;
  return <LoginFormView onLogin={onLogin} onBack={() => setView("splash")} />;
}
