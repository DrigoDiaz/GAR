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
            console.log(typedPhrase)

            if (typedPhrase === COMMANDPROMPT){
                setActivated(true);
                typedPhrase = "";
                console.log("ACTIVATED");
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
                <dialog open id='adjustDialog'>
                    <div>
                        <p>testing</p>
                    </div>
                </dialog>
            )}
        </>
    );
}

export default CommandPrompt;