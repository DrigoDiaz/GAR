import '../pageStyling/HomePage.css';
import '../pageStyling/sharedEffects.css';
import TopNavBar from '../components/TopNavBar';
import LS_ThreadList from '../components/LS_ThreadList';
import RS_ThreadViewer from '../components/RS_ThreadViewer';
import { useState } from 'react';


function HomePage() {
  const PERSONAL: string = "PERSONAL";
  const [tabId, setTab] = useState(PERSONAL);

  return (
    <>
      <div className='oldschoolEffect'>
        <header>
          <TopNavBar setSelectedTab={setTab}></TopNavBar>
        </header>

        <main id='setMain'>
          <section id='sectionBorder'>
            <LS_ThreadList></LS_ThreadList>
          </section>

          <aside id='asideBorder'>
            <div id='highlight'>
              <RS_ThreadViewer></RS_ThreadViewer>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default HomePage;