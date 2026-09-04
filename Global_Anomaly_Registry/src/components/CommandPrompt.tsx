import '../pageStyling/sharedEffects.css';
import '../pageStyling/CommandPrompt.css';
import { useEffect, useState } from 'react';

const COMMANDPROMPT: string = "cmdprompt";

function CommandPrompt(){
    const [isActive, setActivated] = useState(false);

    useEffect(() => {
        let typedPhrase: string = "";

        const handlePressedKey = (event: KeyboardEvent) => {
            if (event.key.length !== 1){
                return;
            }

            typedPhrase += event.key.toLowerCase();
            typedPhrase = typedPhrase.slice(-9);

            if (typedPhrase === COMMANDPROMPT){
                setActivated(true);
                typedPhrase = "";
            }
        };

        window.addEventListener("keydown", handlePressedKey);

        return () => {
            window.removeEventListener("keydown", handlePressedKey);
        };
    }, []);

    return (
        <>
            {isActive && (
                <dialog open id='adjustDialog' className='oldschoolEffect'>
                    <div id='setMainDiv'>
                        <div id='txtPrompt'>
                            <p>Enter a code:</p>
                            <input type='text'></input>
                        </div>

                        <div id='buttonPrompt'>
                            <button id='closePrompt'>X</button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}

export default CommandPrompt;