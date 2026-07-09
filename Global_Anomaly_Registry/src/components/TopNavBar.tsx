import '../pageStyling/sharedEffects.css';
import '../pageStyling/TopNavBar.css';

function TopNavBar(){
    return (
        <>
            <div id='NavButtons'>
                <nav>
                    <button className="sharedTabs" id="personalButton">Personal</button>
                    <button className="sharedTabs">Documents</button>
                    <button className="sharedTabs" >Help</button>
                </nav>
            </div>
        </>
    )
};

export default TopNavBar;