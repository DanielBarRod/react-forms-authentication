import { useContext, useState} from "react";
import  AuthContext from "../context/AuthContext"

const SignIn = () => {
    let {setStep} = useContext(AuthContext);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

        const [emailFocused, setEmailFocused] = useState(false);
        const [passwordFocused, setPasswordFocused] = useState(false); 

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("Sending data to backend...");
        console.log(`El usuario digitó: ${email} y ${password}`);
    }
  return (
    <main>
        <h3>Hello friend!</h3>
        <div className="card">
            <form onSubmit={handlerSubmit} autoComplete="off">
                <fieldset>
                    <label htmlFor="email" >email</label>
                    <input 
                        type="email"  
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        id="email" 
                        autoFocus 
                        required
                        onBlur={() => setEmailFocused(true)}
                        data-Focused={emailFocused}
                    />
                    <p className="error">Valid email required</p>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        id="password"
                        pattern="(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}"
                        required
                        onBlur={() => setPasswordFocused(true)}
                        data-Focused={passwordFocused}
                    />
                    <p className="error">Valid password is required</p>
                </fieldset>
                    <button type="submit">login</button>
                    <div className="forgot" onClick={() => setStep("forgot")}>Forgot password?</div>
            </form>
        </div>
        <p>Dont have an account? {" "} <span onClick={() => setStep("signup")}>Sign up</span></p>
    </main>
  )
}

export default SignIn;



