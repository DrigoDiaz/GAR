import '../pageStyling/sharedEffects.css';
import '../pageStyling/CommandPrompt.css';
import { useEffect, useState, useRef } from 'react';

const COMMANDPROMPT: string = "cmdprompt";

function CommandPrompt(){
    const [isActive, setActivated] = useState(false);
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        let typedPhrase: string = "";

        const handlePressedKey = (event: KeyboardEvent) => {
            if (event.key.length !== 1){
                return;
            }

            typedPhrase += event.key.toLowerCase();
            typedPhrase = typedPhrase.slice(-9);
            console.log(typedPhrase);

            if (typedPhrase === COMMANDPROMPT){
                event.preventDefault();
                setActivated(true);
                typedPhrase = "";
            }
        };

        window.addEventListener("keydown", handlePressedKey);

        return () => {
            window.removeEventListener("keydown", handlePressedKey);
        };
    }, []);

    useEffect(() => {
        if (isActive){
            modalRef.current?.showModal();
        }
    }, [isActive]);

    return (
        <>
            {isActive && (
                <dialog ref={modalRef} id='adjustDialog' className='oldschoolEffect'>
                    <div id='setMainDiv'>
                        <div id='txtPromptDiv'>
                            <p>Enter a command:</p>
                            <input type='text' id='inputPrompt'></input>
                        </div>

                        <div id='buttonPromptDiv'>
                            <button id='closeButtonPrompt'>X</button>
                        </div>

                        <div id='enterButtonDiv'>
                            <button id='enterButtonPrompt'>Enter</button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}

export default CommandPrompt;