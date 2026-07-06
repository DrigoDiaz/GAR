import './pageStyling/LoginPage.css';
import { useState } from 'react';

function LoginPage() {
  const approvedUsers: Record<string, string> = {
    "LF_GUARD892" : "D_Luna$cat12"
  };

  const [guardID, SetguardID] = useState("");
  const [password, Setpassword] = useState("");

  function confirmLogin(){
    if (guardID in approvedUsers){
      if (password === approvedUsers[guardID]){
        console.log("User: " + guardID);
        console.log("Pwd: " + password);
        console.log("IN THE SYSTEM!");
      }
    } else if (!(guardID in approvedUsers)){
      console.log("NOT IN SYSTEM!");
    }
  };

  return (
    <>
      <div className='oldschoolEffect'>
        <header>
            <h1 id='titleIncrease'><u>G.A.R</u></h1>
            <p id='garIncrease'><i>Global.Anomaly.Registry</i></p>
        </header>

        <main>
            <div className='adjustDivs shiftLeft'>
              <p>G.U.A.R.D ID:</p>
              <input type='text' 
               value={guardID}
               onChange={(g_id)=> SetguardID(g_id.target.value)}
              className='adjustInputs'></input>
            </div>

            <div className='adjustDivs shiftLeft'>
              <p>Password:</p>
              <input type='password' 
               value={password}
               onChange={(pwd)=> Setpassword(pwd.target.value)}
              className='adjustInputs'></input>
            </div>

            <div className='adjustDivs'>
              <button type='button' id='adjustButton' onClick={confirmLogin}>Login</button>
            </div>
        </main>
      </div>
    </>
  )
}

export default LoginPage;