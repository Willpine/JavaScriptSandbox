import {createContext, ReactNode, useEffect, useState} from 'react'; // Context API que permite os components comunicarem-se entre si
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

// Tipagem para o objeto challenge
interface Challenge{
    type: 'body' | 'eye'; // type é um string, porém ele possui ou um ou outro valor.
    description: String;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    closeLevelUpModal: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

// Tipagem para o children que estamos recebendo da _app, que no caso é um component, por isso seu tipo é ReactNode
interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

// Esse contexto será importado lá em _app, porém faremos isso usando a ChallengesProvider
// Declaramos que esse é o tipo dele e que ele segue esse formato da interface para auxiliar a tipagem do TypeScript
// Tiramos ele da _app e usamos na index, pois precisamos passar informações da index pra cá
export const ChallengesContext = createContext({} as ChallengesContextData);

// Como o ChallengesProvider(esse contexto) está em volta de toda a aplicação lá em app, podemos acessar toda aplicação através do objeto "children", que nesse caso pega toda aplicação
// Também declaramos o tipo dele, para sabermos o que o children é
// Essa função retorna TODO ESSE CONTEXTO
// O operador ...XXX serve pra dizermos que lá está o resto dos parâmetros, no caso {level, currentExperience, challengesCompleted}
export function ChallengesProvider({children, ...rest}:ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1); // Se rest.level não existir, ele define 1
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const experienceToNextLevel = Math.pow((level+1) * 4,2) // Quanta experiência falta pro próximo level? O 4 é o fator de xp, que diz o quão fácil ou difícil é de se passar de nível

    useEffect(() => {
        Notification.requestPermission();
    }, []); // Quando um useEffect recebe o array vazio como arg2, ele será
            // EXECUTADO UMA ÚNICA VEZ assim que o componente em que ele está
            // for exibido em tela
    
    // Vamos adicionar e usar a js-cookie para manipulá-los
    useEffect(() => {
        Cookies.set('level',String(level));
        Cookies.set('currentExperience',String(currentExperience));
        Cookies.set('challengesCompleted',String(challengesCompleted));
    }, [level,currentExperience,challengesCompleted])

    function levelUp(){
      setLevel(level+1);
      setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio!', {body: `Valendo ${challenge.amount} xp`})
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge){ // Não pode ser chamada se um usuário não tiver um challenge ativo
            return; // Isso é um return void
        }

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount; // Let it change
    
        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
    
    
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted+1);
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                activeChallenge,
                challengesCompleted,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal,
            }}
        >
            {children /*Tudo o que tá na _app "<Component {...pageProps} />"*/}
            { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )
}