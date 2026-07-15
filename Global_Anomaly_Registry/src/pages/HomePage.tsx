import '../pageStyling/HomePage.css';
import '../pageStyling/sharedEffects.css';
import TopNavBar from '../components/TopNavBar';
import LS_ThreadList from '../components/LS_ThreadList';
import RS_ThreadViewer from '../components/RS_ThreadViewer';
import type { Thread } from '../customTypes/ThreadType';
import { useState } from 'react';

export const PERSONAL: string = "PERSONAL";
export const DOCUMENTS: string = "DOCUMENTS";
export const HELP: string = "HELP";
export const NULL_ID: number = 0;

function HomePage() {
  const [tabId, setTab] = useState(PERSONAL);
  const [cur_thread, setThread] = useState<Thread[]>([]);
  const [threadId, setThreadID] = useState(NULL_ID);

  return (
    <>
      <div className='oldschoolEffect'>
        <header>
          <TopNavBar setSelectedTab={setTab} resetThread={(setThreadID)}></TopNavBar>
        </header>

        <main id='setMain'>
          <section id='sectionBorder'>
            <LS_ThreadList selectedTab={tabId} setSelectedThreadID={setThreadID} 
            cur_threadList={setThread}></LS_ThreadList>
          </section>

          <aside id='asideBorder'>
            <div id='highlight'>
              <RS_ThreadViewer loadedThread={cur_thread} selectedThreadID={threadId} 
              tabType={tabId}></RS_ThreadViewer>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default HomePage;