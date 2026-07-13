import '../pageStyling/sharedEffects.css';
import '../pageStyling/LS_ThreadList.css';
import personalThreads from '../threadData/personalThreads.json';

interface ThreadListProps{
    selectedTab: string;
    setSelectedThread: (current_Tab: number) => void;
}

function LS_ThreadList({selectedTab, setSelectedThread}: ThreadListProps){
    const UNREAD: string = "UNREAD";
    const PERSONAL: string = "PERSONAL";
    const DOCUMENT: string = "DOCUMENT";
    const HELP: string = "HELP";
    let currentThread = "";

    if (selectedTab === PERSONAL){
        currentThread = '../threadData/personalThreads.json';
    } else if (selectedTab === DOCUMENT){
        currentThread = "../threadData/entriesThreads.json";
    } else if (selectedTab === HELP){
        currentThread = "../threadData/settingThreads.json";
    }

    function displayThread(data_name: string){

    };

    return (
        <>
            <div id='scrollBar'>
                {personalThreads.map((thread) => (
                    <div className="generatedDivs" key={thread.id}>
                        <button type="button" className='alignItems'>{thread.title}</button>

                        {thread.status === UNREAD && (
                            <p className='displayUnread'>*UNREAD*</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
};

export default LS_ThreadList;