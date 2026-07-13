import '../pageStyling/sharedEffects.css';
import '../pageStyling/LS_ThreadList.css';
import personalThreads from '../threadData/personalThreads.json';

function LS_ThreadList(){
    const UNREAD: string = "UNREAD";

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