"use client"

import Image from "next/image"
import bankImg from "../../../../../public/bank.jpeg"
import style from "./page.module.css"
import Img1 from "../../../../../public/imgbin_0cf1b2af37cf52589c5c6040b822d1c5.png"
import Img2 from "../../../../../public/Daco_5866978.png"
import { useState } from "react"

export default function Container_1() {
  const [className1 ,setClassName1] = useState <string>("DownloadImg")
  const [className2 ,setClassName2] = useState <string>("DownloadImg")
  function changeClassName(e:number){
    switch (e){
      case 1 :
        setClassName1("DownloadImgAfter");
      break;
      case 2 :
        setClassName2("DownloadImgAfter");
      break;
      case 3 :
        setClassName1("DownloadImg");
      break;
      case 4 :
        setClassName2("DownloadImg");
      break
    }
  }
  return (
    <>
      <Image src={bankImg} alt="" className={style.Image} ></Image>
      <h1 className={style.h1}>Simple and safe bank</h1>
      <br />
      <br />
      <h1 className={style.h1_1}>Approved by million of users worldwide</h1>
      <div className={style.DownloadImgContainer}>
        <Image src={Img1} alt="" className={style[`${className1}1`]} onMouseEnter={()=>changeClassName(1)} onMouseLeave={()=>changeClassName(3)}></Image>
        <Image src={Img2} alt="" className={style[`${className2}2`]} onMouseEnter={()=>changeClassName(2)} onMouseLeave={()=>changeClassName(4)}></Image>
      </div>
    </>
  )
}