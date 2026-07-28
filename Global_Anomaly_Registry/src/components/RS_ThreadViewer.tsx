import '../pageStyling/sharedEffects.css';
import '../pageStyling/RS_ThreadViewer.css';
import { NULL_MSG } from '../pages/HomePage';

const GIS: string = "<GIS>";
const TITLE: string = "<TITLE>";
const FROM: string = "<FROM>";
const DATE: string = "<DATE>";
const CLASSIFCATION: string = "<CLASSIFICATION>";
const PROTOCAL: string = "<PROTOCAL>";

interface ThreadViewerProps{
    displayMessage: string;
}

function RS_ThreadViewer({displayMessage}: ThreadViewerProps){
    const parsedMsg = displayMessage.split('\n').map(line => line.trim());

    return (
        <>
            <div className='adjustText scrollBar'>
                {(parsedMsg.length === 1 && parsedMsg[0] === NULL_MSG) ? 
                    (<p>Select a thread to open</p>) : 
                    (parsedMsg.map((cur_line) => {
                        let trimmed_line: string = cur_line.trim();

                        if (trimmed_line.startsWith(GIS)){
                            return (
                                <>
                                    <div>
                                        <p>{"-".repeat(40)}</p>
                                        <p>G.U.A.R.D Internal Systems</p>
                                        <p>{"-".repeat(40)}</p>
                                    </div>
                                </>
                            )
                        }

                        return (
                            <p>{trimmed_line}</p>
                        )
                    }))
                }
            </div>
        </>
    )
};

export default RS_ThreadViewer;