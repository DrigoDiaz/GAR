import '../pageStyling/sharedEffects.css';
import '../pageStyling/RS_ThreadViewer.css';
import { NULL_MSG } from '../pages/HomePage';

const BREAK_PARAGRAPH: string = "";
const GIS: string = "<GIS>";
const TITLE: string = "<TITLE>";
const FROM: string = "<FROM>";
const DATE: string = "<DATE>";
const SINCERELY: string = "<SINCERELY>";
const CLASSIFCATION: string = "<CLASSIFICATION>";
const PROTOCAL: string = "<PROTOCAL>";
const END: string = "<END>";

interface ThreadViewerProps{
    displayMessage: string;
}

function RS_ThreadViewer({displayMessage}: ThreadViewerProps){
    const parsedMsg = displayMessage.split('\n').map(line => line.trim());
    let currentParagraph: string = "";

    return (
        <>
            <div className='leftSidedText scrollBar'>
                {(parsedMsg.length === 1 && parsedMsg[0] === NULL_MSG) ? 
                    (<h2 className='centerUnopenedThread'>Select a thread to open</h2>) : 
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
                        } else if (trimmed_line.startsWith(END)){                            
                            return (
                                <>
                                    <p className='adjustEND'>{"-".repeat(41)}</p>
                                </>
                            )
                        }else if (trimmed_line === BREAK_PARAGRAPH){                            
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