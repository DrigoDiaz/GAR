import '../pageStyling/sharedEffects.css';
import '../pageStyling/LS_ThreadList.css';
import personalThreads from '../threadData/personalThreads.json';

function LS_ThreadList(){
    return (
        <>
            <div id='showBorder'>
                {personalThreads.map((thread) => (
                    <div className="generatedDivs" key={thread.id}>
                        <button type="button" className='alignItems'>{thread.title}</button>
                    </div>
                ))}
            </div>
        </>
    )
};

export default LS_ThreadList;