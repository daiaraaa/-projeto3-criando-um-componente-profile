import styles from './styles.module.css'

export default function Profile(props){
    return(
        <div className={styles.bloco}>
            <img src={props.img} />
            <h1 className={styles.name}>{props.name}</h1>
            <hr />
            <p className={styles.bio} >{props.bio}</p>
            <hr />
            <p className={styles.contact}>{props.contact}</p>
            <hr />
            <p className={styles.email}>{props.email}</p>
            < >
            <button><a href={props.githubUrl}>Github</a></button>
            <button><a href={props.instagramUrl}>Instagram</a></button>
            <button><a href={props.letterboxdUrl}>Letterboxd</a></button>
            </>
        </div>
    )
}