import './pageStyling/LoginPage.css';

function LoginPage() {
  return (
    <>
        <header>
            <h1 id='titleIncrease'>G.A.R</h1>
            <p id='garIncrease'>Global.Anomaly.Registry</p>
        </header>

        <main>
            <div className='adjustDivs'>
              <p>Employee ID:</p>
              <input type='text' className='adjustInputs'></input>
            </div>

            <div className='adjustDivs'>
              <p>Password:</p>
              <input type='text' className='adjustInputs'></input>
            </div>

            <div className='adjustDivs'>
              <button type='button' id='adjustButton'>Login</button>
            </div>
        </main>
    </>
  )
}

export default LoginPage;