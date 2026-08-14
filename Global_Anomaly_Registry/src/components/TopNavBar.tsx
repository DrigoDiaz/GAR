import '../pageStyling/sharedEffects.css';
import '../pageStyling/TopNavBar.css';
import { PERSONAL, DOCUMENTS, HELP, NULL_MSG, setCurPath} from '../pages/HomePage';

interface TopNavBarProps{
  setSelectedTab: (current_Tab: string) => void;
  resetMsg: (cur_msg: string) => void;
}

function TopNavBar({setSelectedTab, resetMsg}: TopNavBarProps){
    return (
        <>
            <div id='NavButtons'>
                <nav id='navLayout'>
                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>{setSelectedTab(PERSONAL); 
                                      setCurPath(PERSONAL); resetMsg(NULL_MSG);
                        }}>Personal</button>
                    </div>

                    <div className='divButtonLayout' id='midDivLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>{setSelectedTab(DOCUMENTS);
                                      setCurPath(DOCUMENTS); resetMsg(NULL_MSG);
                        }}>Documents</button>
                    </div>

                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>{setSelectedTab(HELP);
                                      setCurPath(HELP); resetMsg(NULL_MSG);
                        }}>Help</button>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default TopNavBar;