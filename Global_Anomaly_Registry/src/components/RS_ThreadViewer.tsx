import '../pageStyling/sharedEffects.css';
import '../pageStyling/RS_ThreadViewer.css';
import { NULL_MSG, PERSONAL, DOCUMENTS, HELP } from '../pages/HomePage';

const FINISH_PARAGRAPH: string = "";
const GIS: string = "<GIS>";
const TITLE: string = "<TITLE>";
const FROM: string = "<FROM>";
const DATE: string = "<DATE>";
const REVISION: string = "<REVISION>";
const SINCERELY: string = "<SINCERELY>";
const WRITTEN: string = "<WRITTEN>";
const STATUS: string = "<STATUS>";
const CLASSIFCATION: string = "<CLASSIFICATION>";
const DESCRIPTION: string = "<DESCRIPTION>";
const PROTOCAL: string = "<PROTOCAL>";
const LIST_TITLE: string = "<LIST_TITLE>";
const LIST_ITEM: string = "<L_I>";
const BREAK: string = "<BREAK>";
const END: string = "<END>";

interface ThreadViewerProps{
    displayMessage: string;
    tabTyping: string;
}

function RS_ThreadViewer({displayMessage, tabTyping}: ThreadViewerProps){
    const parsedMsg = displayMessage.split('\n').map(line => line.trim());
    let currentParagraph: string = "";

    return (
        <>
            <div className='leftSidedText scrollBar'>
                {(parsedMsg.length === 1 && parsedMsg[0] === NULL_MSG) && tabTyping === PERSONAL ? 
                    (<h2 className='centerUnopenedThread'>Select a thread to open</h2>) : 
                    (parsedMsg.length === 1 && parsedMsg[0] === NULL_MSG) && tabTyping === DOCUMENTS ?
                    (<h2 className='centerUnopenedThread'>Select an entry to open</h2>) :
                    (parsedMsg.length === 1 && parsedMsg[0] === NULL_MSG) && tabTyping === HELP ?
                    (<h2 className='centerUnopenedThread'>Select a guide to open</h2>) :
                    (parsedMsg.map((trimmed_line) => {
                        if (trimmed_line.startsWith(GIS)){
                            return (
                                <>
                                    <div className='adjustGIS'>
                                        <p>{"-".repeat(41)}</p>
                                        <p>G.U.A.R.D Internal Systems</p>
                                        <p>{"-".repeat(41)}</p>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(TITLE)){
                            trimmed_line = trimmed_line.substring(TITLE.length);
                            return (
                                <>
                                    <div>
                                        <h3>{trimmed_line}</h3>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(FROM)){
                            trimmed_line = trimmed_line.substring(FROM.length);
                            return (
                                <>
                                    <div>
                                        <h4>{trimmed_line}</h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(DATE)){
                            trimmed_line = trimmed_line.substring(DATE.length);
                            return (
                                <>
                                    <div>
                                        <h4>{trimmed_line}</h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(REVISION)){
                            trimmed_line = trimmed_line.substring(REVISION.length);
                            return (
                                <>
                                    <div>
                                        <h4>{"Revision #: " + trimmed_line}</h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(SINCERELY)){
                            const fromMsg: string = currentParagraph;
                            currentParagraph = "";
                            return (
                                <>
                                    <div>
                                        <p>Sincerely,</p>
                                        <p className='adjustSINCERELY'>{fromMsg}</p>
                                        <br></br>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(WRITTEN)){
                            trimmed_line = trimmed_line.substring(WRITTEN.length);
                            return (
                                <>
                                    <div>
                                        <h4>{"Written by: " + trimmed_line}</h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(STATUS)){
                            trimmed_line = trimmed_line.substring(STATUS.length);
                            return (
                                <>
                                    <div>
                                        <h4><b>Status: </b></h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(CLASSIFCATION)){
                            trimmed_line = trimmed_line.substring(CLASSIFCATION.length);
                            return (
                                <>
                                    <div>
                                        <h4><b>Anomaly Classification: </b></h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(DESCRIPTION)){
                            trimmed_line = trimmed_line.substring(DESCRIPTION.length);
                            return (
                                <>
                                    <div>
                                        <h4><u>{"Description of Anomaly: " + trimmed_line}</u></h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(PROTOCAL)){
                            trimmed_line = trimmed_line.substring(PROTOCAL.length);
                            return (
                                <>
                                    <div>
                                        <h4><u>{"Response / Containment Protocals: " + trimmed_line}</u></h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(LIST_TITLE)){
                            trimmed_line = trimmed_line.substring(LIST_TITLE.length);
                            return (
                                <>
                                    <div>
                                        <h4><u>{trimmed_line}</u>:</h4>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(LIST_ITEM)){
                            trimmed_line = trimmed_line.substring(LIST_ITEM.length);
                            return (
                                <>
                                    <div>
                                        <p>* {trimmed_line}</p>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(BREAK)){
                            const showTxt: string = currentParagraph;
                            currentParagraph = "";
                            return (
                                <>
                                    <div>
                                        <p className='fontAndLineStyling'>{showTxt}</p>
                                        <br></br>
                                    </div>
                                </>
                            )
                        } else if (trimmed_line.startsWith(END)){                            
                            return (
                                <>
                                    <p className='adjustEND'>{"-".repeat(41)}</p>
                                </>
                            )
                        }else if (trimmed_line === FINISH_PARAGRAPH){                            
                            const toDisplay: string = currentParagraph;
                            currentParagraph = "";
                            return (
                                <>
                                    <div>
                                        <p className='fontAndLineStyling'>{toDisplay}</p>
                                    </div>
                                </>
                            )
                        } else {
                            currentParagraph += " " + trimmed_line;
                        }
                    }))
                }
            </div>
        </>
    )
};

export default RS_ThreadViewer;