import '../pageStyling/sharedEffects.css';
import '../pageStyling/RS_ThreadViewer.css';
import type { Thread } from '../customTypes/ThreadType';
import { PERSONAL, DOCUMENTS, HELP } from '../pages/HomePage';

let currentThreadID: number = 0;

interface ThreadViewerProps{
    loadedThread: Thread[];
    selectedThreadID: number;
    tabType: string;
    displayMessage: string;
}

function RS_ThreadViewer({loadedThread, selectedThreadID, tabType, displayMessage}: ThreadViewerProps){
    currentThreadID = selectedThreadID;

    const foundThread = loadedThread.find(thread => thread.id === currentThreadID);

    if (foundThread){
        if (tabType === PERSONAL){
            return (
                <>
                    <div className='adjustText'>
                        <h3>{foundThread.title}</h3>
                        <p>{foundThread.date}</p>
                        <p>{displayMessage}</p>
                    </div>
                </>
            )
        } else if (tabType === DOCUMENTS){
            return (
                <>
                    <div className='adjustText'>
                        <p>DOCUMENT THREAD:</p>
                        <p>{foundThread.title}</p>
                        <p>{foundThread.message}</p>
                    </div>
                </>
            )
        } else if (tabType === HELP){
            return (
                <>
                    <div className='adjustText'>
                        <p>HELP THREAD:</p>
                        <p>{foundThread.title}</p>
                        <p>{foundThread.message}</p>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className='adjustText'>
                <p>Select a thread to open</p>
            </div>
        </>
    )
};

export default RS_ThreadViewer;