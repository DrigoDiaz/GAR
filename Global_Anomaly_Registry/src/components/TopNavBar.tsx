import '../pageStyling/sharedEffects.css';
import '../pageStyling/TopNavBar.css';
import { PERSONAL, DOCUMENTS, HELP, NULL_MSG, setCurPath} from '../pages/HomePage';
import { useState } from 'react';

interface TopNavBarProps{
  setSelectedTab: (current_Tab: string) => void;
  resetMsg: (cur_msg: string) => void;
}

function TopNavBar({setSelectedTab, resetMsg}: TopNavBarProps){
    const [activeState, setActiveState] = useState("");

    return (
        <>
            <div id='NavButtons'>
                <nav id='navLayout'>
                    <div className='divButtonLayout'>
                        <button type="button" className={`sharedTabs buttonLayout ${activeState === PERSONAL ? "active" : ""}`}
                        onClick={()=>{setSelectedTab(PERSONAL); 
                                      setCurPath(PERSONAL); resetMsg(NULL_MSG);
                                      setActiveState(PERSONAL);
                        }}>Personal</button>
                    </div>

                    <div className='divButtonLayout' id='midDivLayout'>
                        <button type="button" className={`sharedTabs buttonLayout ${activeState === DOCUMENTS ? "active" : ""}`}
                        onClick={()=>{setSelectedTab(DOCUMENTS);
                                      setCurPath(DOCUMENTS); resetMsg(NULL_MSG);
                                      setActiveState(DOCUMENTS);
                        }}>Documents</button>
                    </div>

                    <div className='divButtonLayout'>
                        <button type="button" className={`sharedTabs buttonLayout ${activeState === HELP ? "active" : ""}`}
                        onClick={()=>{setSelectedTab(HELP);
                                      setCurPath(HELP); resetMsg(NULL_MSG);
                                      setActiveState(HELP);
                        }}>Help</button>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default TopNavBar;