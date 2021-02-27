import {createContext, ReactNode, useState} from 'react' // Context API que permite os components comunicarem-se entre si


interface ChallengesContextData {
    level: number;
    experience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

// Tipagem para o children que estamos recebendo da _app, que no caso é um component, por isso seu tipo é ReactNode
interface ChallengesProviderProps {
    children: ReactNode;
}

// Esse contexto será importado lá em _app, porém faremos isso usando a ChallengesProvider
// Declaramos que esse é o tipo dele e que ele segue esse formato da interface para auxiliar a tipagem do TypeScript
export const ChallengesContext = createContext({} as ChallengesContextData);

// Como o ChallengesProvider(esse contexto) está em volta de toda a aplicação lá em app, podemos acessar toda aplicação através do objeto "children", que nesse caso pega toda aplicação
// Também declaramos o tipo dele, para sabermos o que o children é
export function ChallengesProvider({children}:ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [experience, setExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp(){
      setLevel(level+1)
    }

    function startNewChallenge() {
        console.log('New challenge');
        
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            experience,
            challengesCompleted,
            levelUp,
            startNewChallenge}}>
            {children /*Tudo o que tá na _app "<Component {...pageProps} />"*/}
        </ChallengesContext.Provider>
    )
}