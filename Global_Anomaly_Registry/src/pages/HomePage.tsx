import '../pageStyling/HomePage.css';
import '../pageStyling/sharedEffects.css';
import TopNavBar from '../components/TopNavBar';
import LS_ThreadList from '../components/LS_ThreadList';
import RS_ThreadViewer from '../components/RS_ThreadViewer';
import { useState } from 'react';

export const PERSONAL: string = "PERSONAL";
export const DOCUMENTS: string = "DOCUMENTS";
export const HELP: string = "HELP";
export const NULL_MSG: string = "".trim();
export const NULL_ID: number = 0;
export let currentTxtFile: string = "";
const INT_FOLDER_PATH: string = "../threadMessages/";
const P_MESSAGES: string = "personalMessages/";
const E_MESSAGES: string = "entryMessages/";
const S_MESSAGES: string = "settingMessages/";

const txtFiles = import.meta.glob("../threadMessages/**/*.txt", {
    query: "?raw", import: "default"
});

let currentFolder: string = INT_FOLDER_PATH + P_MESSAGES;

export function setCurPath(folderType: string){
    if (folderType === PERSONAL){
        currentFolder = INT_FOLDER_PATH + P_MESSAGES;
    } else if (folderType === DOCUMENTS){
        currentFolder  = INT_FOLDER_PATH + E_MESSAGES;
    } else if (folderType === HELP){
        currentFolder  = INT_FOLDER_PATH + S_MESSAGES;
    }
}

export function appendFileName(file_name: string){
  currentTxtFile = currentFolder  +  file_name + ".txt";
}

export async function loadTxt(filePath: string){
  const fileLoader = txtFiles[filePath];

  if (!fileLoader){
    throw new Error("Message / Document wasn't found.")
  }

  const fileObject = await fileLoader();

  return fileObject;
}

function HomePage() {
  const [tabId, setTab] = useState(PERSONAL);
  const [msg, setMsg] = useState(NULL_MSG);

  return (
    <>
      <div className='oldschoolEffect'>
        <header>
          <TopNavBar setSelectedTab={setTab} resetMsg={setMsg}></TopNavBar>
        </header>

        <main id='setMain'>
          <section id='sectionBorder'>
            <LS_ThreadList selectedTab={tabId} updateMsg={setMsg}></LS_ThreadList>
          </section>

          <aside id='asideBorder'>
            <div id='highlight'>
              <RS_ThreadViewer displayMessage={msg} tabTyping={tabId}></RS_ThreadViewer>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default HomePage;