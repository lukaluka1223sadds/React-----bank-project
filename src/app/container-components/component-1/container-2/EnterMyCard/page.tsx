import styles from "./page.module.css"
import ImgQrcode from "../../../../../../public/istockphoto-828088276-612x612.jpg"
import Image from "next/image"
import ImgPhone from "../../../../../../public/pngwing.com.png"
export default function EnterMyCard(){
    return(
        <div className={styles.EnterMyCard}>
            <Image src={ImgQrcode} alt="" className={styles.ImgqrCode}></Image>
            <Image src={ImgPhone} alt="" className={styles.ImgPhone}></Image>
        </div>
    )
}