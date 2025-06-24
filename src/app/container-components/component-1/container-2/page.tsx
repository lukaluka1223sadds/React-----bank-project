import styles from "./page.module.css"
import Image from "next/image"
import ImgRegistration from "../../../../../public/imgregistration.jpeg"

export default function Container_2(){
    return(
        <>
            <div className={styles.component1}>
               <h6 className={styles.header}>Easy pyments with one tap</h6>
               <h2 className={styles.h2_1}>send and request money easily with eanione. no extra fees.</h2>
               <div className={styles.ContainerRegistration}>
                <Image className={styles.ImageRegister} src={ImgRegistration} alt="" height={300} width={300}></Image>
                
               </div>
            </div>
        </>
    )
}