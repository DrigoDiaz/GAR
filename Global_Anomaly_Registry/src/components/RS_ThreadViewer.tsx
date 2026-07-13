import '../pageStyling/sharedEffects.css';
import '../pageStyling/RS_ThreadViewer.css';
import { useState } from 'react';
import personalThreads from '../threadData/personalThreads.json';

function RS_ThreadViewer(){
    return (
        <>
            <div id='adjustText'>
                <p>Select a thread to open</p>
            </div>
        </>
    )
};

export default RS_ThreadViewer;