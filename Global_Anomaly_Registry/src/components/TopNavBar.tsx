import '../pageStyling/sharedEffects.css';
import '../pageStyling/TopNavBar.css';
import { PERSONAL, DOCUMENTS, HELP, NULL_ID, setCurPath} from '../pages/HomePage';

interface TopNavBarProps{
  setSelectedTab: (current_Tab: string) => void;
  resetThread: (reset: number) => void;
}

function TopNavBar({setSelectedTab, resetThread}: TopNavBarProps){
    return (
        <>
            <div id='NavButtons'>
                <nav id='navLayout'>
                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>{setSelectedTab(PERSONAL); resetThread(NULL_ID); 
                                      setCurPath(PERSONAL);
                        }}>Personal</button>
                    </div>

                    <div className='divButtonLayout' id='midDivLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>{setSelectedTab(DOCUMENTS); resetThread(NULL_ID);
                                      setCurPath(DOCUMENTS);
                        }}>Documents</button>
                    </div>

                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>{setSelectedTab(HELP); resetThread(NULL_ID);
                                      setCurPath(HELP)
                        }}>Help</button>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default TopNavBar;