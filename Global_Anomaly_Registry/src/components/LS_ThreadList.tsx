import '../pageStyling/sharedEffects.css';
import '../pageStyling/LS_ThreadList.css';
import { useEffect, useState } from 'react';
import type { Thread } from '../customTypes/ThreadType';
import { PERSONAL, DOCUMENTS, HELP } from '../pages/HomePage';

const jsonThreads = import.meta.glob("../threadData/*.json");
const UNREAD: string = "UNREAD";
let currentThread = "";

// Define Props for ThreadList Component Function
interface ThreadListProps{
    selectedTab: string;
    setSelectedThreadID: (current_Tab: number) => void;
    cur_threadList: (threads: Thread[]) => void;
}

// Async function to load one of the local json files. Used to show current thread list.
async function thread_load(json_path: string){
    const json_loader = jsonThreads[json_path];

    if (!jsonThreads){
        throw new Error("Thread wasn't found.")
    }

    const load_object = await json_loader() as {default: Thread[]};
    return load_object.default;
}

// Function that keeps track of current Thread List that is selected & loads it
function LS_ThreadList({selectedTab, setSelectedThreadID, cur_threadList}: ThreadListProps){
    const [threadList, setThreadList] = useState<Thread[]>([]);

    if (selectedTab === PERSONAL){
        currentThread = '../threadData/personalThreads.json';
    } else if (selectedTab === DOCUMENTS){
        currentThread = "../threadData/entriesThreads.json";
    } else if (selectedTab === HELP){
        currentThread = "../threadData/settingThreads.json";
    }

    useEffect(() => {
        async function updateThreads(){
            const thread_data = await thread_load(currentThread);
            setThreadList(thread_data);
        }

        updateThreads();
    }, [currentThread]);

    return (
        <>
            <div id='scrollBar'>
                {threadList.map((thread) => (
                    <div className="generatedDivs" key={thread.id}>
                        <button type="button" className='alignItems' onClick={() => {
                            setSelectedThreadID(thread.id);
                            cur_threadList(threadList);
                        }}>{thread.title}</button>

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