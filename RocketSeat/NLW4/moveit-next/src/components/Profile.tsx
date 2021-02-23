import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://www.github.com/willpine.png" alt="willpine"/>
            <div>
                <strong>Willian Yuiti</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1</p>
            </div>
        </div>
    );
}