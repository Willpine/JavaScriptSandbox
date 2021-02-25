// O useEffect dispara um efeito colateral quando algo acontece
import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [time,setTime] = useState(25 * 60);
    const [active, setActive] = useState(false)
    
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    // O padstart verifica se nosso string de minutos possuit dois
    // dígitos, adicionando 0 à esquerda se não tiver, antes do split
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown(){
        setActive(true);
    }

    // O useEffect sempre leva dois parâmetros:
    // O primeiro é o que eu quero executar, sempre é uma função.
    // O segundo é quando eu quero executar
    useEffect(() => {
        if(active && time > 0){
            setTimeout(() => {
                setTime(time-1)
            },1000)
        }        
    }, [active,time])

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
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>Iniciar um ciclo</button>
        </div>
    );
}