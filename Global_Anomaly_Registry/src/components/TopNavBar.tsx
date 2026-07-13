import '../pageStyling/sharedEffects.css';
import '../pageStyling/TopNavBar.css';

function TopNavBar(){
    return (
        <>
            <div id='NavButtons'>
                <nav id='navLayout'>
                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout">Personal</button>
                    </div>

                    <div className='divButtonLayout' id='midDivLayout'>
                        <button type="button" className="sharedTabs buttonLayout">Documents</button>
                    </div>

                    <div className='divButtonLayout'>
                        <button type="button" className="sharedTabs buttonLayout">Help</button>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default TopNavBar;