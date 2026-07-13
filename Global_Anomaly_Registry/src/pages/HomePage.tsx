import '../pageStyling/HomePage.css';
import '../pageStyling/sharedEffects.css';
import TopNavBar from '../components/TopNavBar';
import LS_ThreadList from '../components/LS_ThreadList';
import RS_ThreadViewer from '../components/RS_ThreadViewer';
import { useState } from 'react';


function HomePage() {
  const PERSONAL: string = "PERSONAL";
  const MOST_RECENT: number = 0;
  const [tabId, setTab] = useState(PERSONAL);
  const [threadId, setThread] = useState(MOST_RECENT);

  return (
    <>
      <div className='oldschoolEffect'>
        <header>
          <TopNavBar setSelectedTab={setTab}></TopNavBar>
        </header>

        <main id='setMain'>
          <section id='sectionBorder'>
            <LS_ThreadList selectedTab={tabId} setSelectedThread={setThread}></LS_ThreadList>
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