import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    // Usamos o math.round pra evitar que a width fique muito quebrada
    // Simples regra de 3: Se XPTONEXT <=> 100, então CURRENT <=> PERCENT
    const percentToNextLevel = (Math.round(currentExperience * 100) / experienceToNextLevel);

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`/*Estilos variáveis como o preenchimento da barra de xp não fica no css pois não dá pra modificar lá*/}}/>
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )    
}