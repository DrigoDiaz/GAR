import '../pageStyling/sharedEffects.css';
import '../pageStyling/CommandPrompt.css';
import { useEffect, useState, useRef } from 'react';

const COMMANDPROMPT: string = "cmdprompt";

interface CommandPromptProps{
  currentDate: (curDate: string) => void;
}

function CommandPrompt({currentDate}: CommandPromptProps){
    const [isActive, setActivated] = useState(false);
    const modalRef = useRef<HTMLDialogElement>(null);

    function closePrompt(){
        modalRef.current?.close();
        setActivated(false);
    }

    useEffect(() => {
        if (isActive){
            return ;
        }

        let typedPhrase: string = "";

        const handlePressedKey = (event: KeyboardEvent) => {
            if (event.key.length !== 1){
                return;
            }

            typedPhrase += event.key.toLowerCase();
            typedPhrase = typedPhrase.slice(-9);

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
    }, [isActive]);

    useEffect(() => {
        if (isActive){
            modalRef.current?.showModal();
        }
    }, [isActive]);

    return (
        <>
            {isActive && (
                <dialog ref={modalRef} id='adjustDialog' className='promptAnimation'>
                    <div id='setMainDiv'>
                        <div id='txtPromptDiv'>
                            <p>Enter a command:</p>
                            <input type='text' id='inputPrompt'></input>
                        </div>

                        <div id='buttonPromptDiv'>
                            <button id='closeButtonPrompt' onClick={closePrompt}>X</button>
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