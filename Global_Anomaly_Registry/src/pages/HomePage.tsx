import '../pageStyling/HomePage.css';
import '../pageStyling/sharedEffects.css';
import TopNavBar from '../components/TopNavBar';
import LS_ThreadList from '../components/LS_ThreadList';


function HomePage() {
  return (
    <>
      <div className='oldschoolEffect'>
        <header>
          <TopNavBar></TopNavBar>
        </header>

        <main id='setMain'>
          <section id='sectionBorder'>
            <LS_ThreadList></LS_ThreadList>
          </section>

          <aside id='asideBorder'>
            <div id='highlight'>
              <p>Test B</p>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default HomePage;