import '../pageStyling/sharedEffects.css';
import '../pageStyling/TopNavBar.css';

interface TopNavBarProps{
  setSelectedTab: (current_Tab: string) => void;
}

function TopNavBar({setSelectedTab}: TopNavBarProps){
    const PERSONAL: string = "PERSONAL";
    const DOCUMENTS: string = "DOCUMENTS";
    const HELP: string = "HELP";

    return (
        <>
            <div id='NavButtons'>
                <nav id='navLayout'>
                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>setSelectedTab(PERSONAL)}>Personal</button>
                    </div>

                    <div className='divButtonLayout' id='midDivLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>setSelectedTab(DOCUMENTS)}>Documents</button>
                    </div>

                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout"
                        onClick={()=>setSelectedTab(HELP)}>Help</button>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default TopNavBar;