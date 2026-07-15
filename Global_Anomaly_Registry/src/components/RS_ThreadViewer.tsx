import '../pageStyling/sharedEffects.css';
import '../pageStyling/RS_ThreadViewer.css';
import type {Thread } from '../customTypes/ThreadType';
import { PERSONAL, DOCUMENTS, HELP } from '../pages/HomePage';

let currentThreadID = 0;

interface ThreadViewerProps{
    loadedThread: Thread[];
    selectedThreadID: number;
    tabType: string;
}

function RS_ThreadViewer({loadedThread, selectedThreadID, tabType}: ThreadViewerProps){
    currentThreadID = selectedThreadID;

    const foundThread = loadedThread.find(thread => thread.id === currentThreadID);

    if (foundThread){
        if (tabType === PERSONAL){
            return (
                <>
                    <div className='adjustText'>
                        <p>PERSONAL THREAD:</p>
                        <p>{foundThread.title}</p>
                        <p>{foundThread.message}</p>
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