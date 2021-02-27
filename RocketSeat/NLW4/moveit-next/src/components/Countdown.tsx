// O useEffect dispara um efeito colateral quando algo acontece
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout; // Tipagem global

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time,setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    // O padstart verifica se nosso string de minutos possuit dois
    // dígitos, adicionando 0 à esquerda se não tiver, antes do split
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout); // Evitando a execução de um timeout a mais ao cancelar
        setIsActive(false);
        setTime(0.05*60);
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

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                disabled 
                className={styles.countdownButton}
                >
                  Ciclo Encerrado  
                </button> 
            ) : (
                <>
                    { // Esse <> é um fragment, usado para que possamos colocar esses dois botões dentro dessa condicional sem precisar envoltar eles com uma div desnecessária
                        isActive ? ( // No if ternário, caso o retorno tenha mais de uma linha, colocamos entre PARÊNTESES
                        <button 
                        type="button"
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}>
                            Abandonar Ciclo
                        </button>    
                    ) : (
                        <button 
                        type="button"
                        className={styles.countdownButton}
                        onClick={startCountdown}>
                            Iniciar um Ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}