export function ExperienceBar() {
    return(
        <header className="experienceBar">
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'/*Estilos variáveis como o preenchimento da barra de xp não fica no css pois não dá pra modificar lá*/}}/>
                <span className="current-experience" style={{left: '50%'}}>300xp</span>
            </div>
            <span>600 xp</span>
        </header>
    )    
}