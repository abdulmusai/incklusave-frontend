import { useState } from 'react';
import SplashView from './SplashView';
import LoginFormView from './LoginFormView'; 
import UssdView from './UssdView';


function LoginScreen({ onLogin }) {
  const [view, setView] = useState("splash");
  if (view === "splash") return <SplashView onGoLogin={() => setView("login")} onGoUssd={() => setView("ussd")} />;
  if (view === "ussd")   return <UssdView   onBack={() => setView("splash")} />;
  return <LoginFormView onLogin={onLogin} onBack={() => setView("splash")} />;
}

export default LoginScreen;