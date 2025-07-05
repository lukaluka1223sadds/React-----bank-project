"use client"
import styles from "./page.module.css"
import ImgQrcode from "../../../../../../public/istockphoto-828088276-612x612.jpg"
import Image from "next/image"
import ImgPhone from "../../../../../../public/pngwing.com.png"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store"

export default function EnterMyCard(){
    const selectStoreSlice = useSelector((state:RootState)=>state.container2_Setusers)
    return(
        <div className={styles.EnterMyCard}>
            <Image src={ImgQrcode} alt="" className={styles.ImgqrCode}></Image>
            <div>
           <br></br>
            { typeof selectStoreSlice.userName=="number"? `User Name : ${selectStoreSlice.userName}`: `User Name : Luka` }<br></br>
            Password : {selectStoreSlice.password}<br></br>
            {!isNaN( Number(selectStoreSlice.userName))? `Card Number : ${selectStoreSlice.userName}` : `Card Number : 213214215251524`}
            
            </div>
            <Image src={ImgPhone} alt="" className={styles.ImgPhone}></Image>
        </div>
    )
}