import '../pageStyling/LoginPage.css';
import '../pageStyling/sharedEffects.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface LoginPageProps{
  approveUser: (is_user: boolean) => void;
}

function LoginPage({approveUser}: LoginPageProps) {
  const approvedUsers: Record<string, string> = {
    "LF_GUARD892" : "D_Luna$cat12"
  };

  const go_to_home = useNavigate();
  const [guardID, SetguardID] = useState("");
  const [password, Setpassword] = useState("");

  function confirmLogin(){
    if (guardID in approvedUsers){
      if (password === approvedUsers[guardID]){
        approveUser(true);
        go_to_home("/home");
      }
    }
  };

  return (
    <>
      <div className='oldschoolEffect' id='setBody'>
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