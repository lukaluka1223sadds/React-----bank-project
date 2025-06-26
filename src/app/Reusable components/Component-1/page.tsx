import styles from "./page.module.css"
interface Translate {
    children?:React.ReactNode;
    transform:string;
}

export default function Reusable_1(e:Translate){
    console.log(e.children)
    return(
        <div className={styles.Reusable_1} style={{transform: typeof e.transform === 'string' ? e.transform : undefined}}>
        {e.children}
        </div>
    )
}