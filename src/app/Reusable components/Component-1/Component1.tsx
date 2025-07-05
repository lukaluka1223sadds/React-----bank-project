import styles from "./page.module.css"
interface Translate {
    children?:React.ReactNode;
    transform?:string;
    BGcolor?:string;
}

export function Reusable_1(e:Translate){
    return(
        <div className={styles.Reusable_1} style={{backgroundColor:e.BGcolor , transform: typeof e.transform === 'string' ? e.transform : undefined}}>
        {e.children}
        </div>
    )
}