import '../pageStyling/sharedEffects.css';
import '../pageStyling/CommandPrompt.css';
import { useEffect, useState, useRef } from 'react';
import type { Prompt } from '../customTypes/PromptType.tsx';

const COMMANDPROMPT: string = "cmdprompt";
const MISC_FILE = "../threadData/misc.json";
const userInputs = import.meta.glob("../threadData/misc.json");

interface CommandPromptProps{
  currentDate: (curDate: string) => void;
}

async function checkInputs(){
    const promptLoader = userInputs[MISC_FILE];

    if (!promptLoader){
        throw new Error("File wasn't found");
    }

    const loadedFile = await promptLoader() as { default: Prompt[]};
    return loadedFile.default;
}

function CommandPrompt({currentDate}: CommandPromptProps){
    const [isActive, setActivated] = useState(false);
    const [givenCommand, setCommand] = useState("");
    const modalRef = useRef<HTMLDialogElement>(null);

    function closePrompt(){
        modalRef.current?.close();
        setActivated(false);
    }

    async function handlePrompt(){
        const promptData = await checkInputs();

        for (const item of promptData){
            if (item.userPrompt === givenCommand){
                let dateOnly = givenCommand.split(" ")[1];
                currentDate(dateOnly);
                setCommand("");
                closePrompt();
                break;
            }
    }
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
                            <input type='text'
                            value={givenCommand}
                            onChange={(userCommand)=> setCommand(userCommand.target.value)}
                            id='inputPrompt'></input>
                        </div>

                        <div id='buttonPromptDiv'>
                            <button id='closeButtonPrompt' onClick={closePrompt}>X</button>
                        </div>

                        <div id='enterButtonDiv'>
                            <button id='enterButtonPrompt'
                            onClick={handlePrompt}>Enter</button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}

export default CommandPrompt;