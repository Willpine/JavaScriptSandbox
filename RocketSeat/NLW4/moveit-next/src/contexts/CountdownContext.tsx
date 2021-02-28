import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownProviderProps {
    children: ReactNode;
}

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout; // Tipagem global

// Esse não é importado na _app pois ele não será usado na aplicação toda
// apenas na home, por isso o importamos na index. Sua tag pode essencialmente
// ser colocada em qualquer lugar, decidimos colocar em volta da section
export function CountdownProvider({children}: CountdownProviderProps){
    
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time,setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout); // Evitando a execução de um timeout a mais ao cancelar
        setIsActive(false);
        setTime(25*60);
        setHasFinished(false);
    }

    // O useEffect sempre leva dois parâmetros:
    // O primeiro é o que eu quero executar, sempre é uma função.
    // O segundo é quando eu quero executar
    useEffect(() => {
        if(isActive && time > 0){
             countdownTimeout = setTimeout(() => { // Espera o param2 pra executar o param1
                setTime(time-1);
            },1000)
        } else if (isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }        
    }, [isActive,time])

    return (
        <CountdownContext.Provider 
            value = {{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown,
            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}