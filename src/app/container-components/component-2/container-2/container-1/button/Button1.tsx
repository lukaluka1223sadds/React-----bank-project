"use client"
import { useState } from "react";
import styles from "../page.module.css";

export function Button(){
    const [boll , setBoll] = useState("ButtonBefore")
    function BollChange(e:number){
        e==1?setBoll("ButtonBefore"):setBoll("ButtonAfter")
    }
    return <button onMouseEnter = {()=>BollChange(2)} onMouseLeave={()=>BollChange(1)} className={styles[boll]}>Get Card</button>
}