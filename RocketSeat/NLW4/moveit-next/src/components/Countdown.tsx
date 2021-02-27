// O useEffect dispara um efeito colateral quando algo acontece
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    // O padstart verifica se nosso string de minutos possuit dois
    // dígitos, adicionando 0 à esquerda se não tiver, antes do split
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');    

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