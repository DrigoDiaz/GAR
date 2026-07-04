import './pageStyling/LoginPage.css';

function LoginPage() {
  return (
    <>
        <header>
            <h1 id='titleIncrease'><u>G.A.R</u></h1>
            <p id='garIncrease'><i>Global.Anomaly.Registry</i></p>
        </header>

        <main>
            <div className='adjustDivs shiftLeft'>
              <p>G.U.A.R.D ID:</p>
              <input type='text' className='adjustInputs'></input>
            </div>

            <div className='adjustDivs shiftLeft'>
              <p>Password:</p>
              <input type='password' className='adjustInputs'></input>
            </div>

            <div className='adjustDivs'>
              <button type='button' id='adjustButton'>Login</button>
            </div>
        </main>
    </>
  )
}

export default LoginPage;