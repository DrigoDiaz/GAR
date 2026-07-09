import '../pageStyling/HomePage.css';
import '../pageStyling/sharedEffects.css';
import TopNavBar from '../components/TopNavBar';


function HomePage() {
  return (
    <>
      <div className='oldschoolEffect'>
        <header>
          <TopNavBar></TopNavBar>
        </header>
      </div>
    </>
  )
}

export default HomePage;