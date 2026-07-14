import '../pageStyling/sharedEffects.css';
import '../pageStyling/LS_ThreadList.css';
import { useEffect, useState } from 'react';

const jsonThreads = import.meta.glob("../threadData/*.json");
const UNREAD: string = "UNREAD";
const PERSONAL: string = "PERSONAL";
const DOCUMENTS: string = "DOCUMENTS";
const HELP: string = "HELP";
let currentThread = "";

// Define Props for ThreadList Component Function
interface ThreadListProps{
    selectedTab: string;
    setSelectedThread: (current_Tab: number) => void;
}

// Define ThreadList Type with required & optional fields
interface ThreadList{
    id: number;
    title: string;
    message: string;
    status: string;
    classification?: string;
    protocol?: string;
}

// Async function to load one of the local json files. Used to show current thread list.
async function thread_load(json_path: string){
    const json_loader = jsonThreads[json_path];

    if (!jsonThreads){
        throw new Error("Thread wasn't found.")
    }

    const load_object = await json_loader() as {default: ThreadList[]};
    return load_object.default;
}


function LS_ThreadList({selectedTab, setSelectedThread}: ThreadListProps){
    const [threadList, setThreadList] = useState<ThreadList[]>([]);

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
                            setSelectedThread(thread.id);
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