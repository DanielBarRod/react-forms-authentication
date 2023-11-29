import { useState } from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import AuthContext from './context/AuthContext';

const App = () => {
  const [step, setStep] = useState("signup")
  return (
    <AuthContext.Provider value={{ step, setStep }}>
    <div className="container">
      {step === "signin" && <SignIn />}
      {step === "signup" && <SignUp />}
      {step === "forgot" && <ForgotPassword />}
    </div>
    </AuthContext.Provider>
  )
}

export default App
