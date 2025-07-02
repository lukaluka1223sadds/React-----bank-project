"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Img_1 from "../../../../../public/bank_1.jpg";
import Img_2 from "../../../../../public/bank_2.jpg";
import Img_3 from "../../../../../public/bank_3.jpg";
import Img_4 from "../../../../../public/bank_4.jpg";
import Img_5 from "../../../../../public/bank_5.avif";
import Image from "next/image";
import Bank_1 from "./Info Bank/Bank 1/page"
import Bank_2 from "./Info Bank/Bank 2/page"
import Bank_3 from "./Info Bank/Bank 3/page"
import Bank_4 from "./Info Bank/Bank 4/page"
import Bank_5 from "./Info Bank/Bank 5/page"

export default function Cards() {
  const [boll, setBoll] = useState<number | null | string>(null);
  const [cont , setCont] = useState(0)
  const Images = ["", Img_1, Img_2, Img_3, Img_4, Img_5];
  const Cards = [1, 2, 3, 4, 5];
  const Names = [Bank_1,Bank_2,Bank_3,Bank_4,Bank_5];
  function Name(e:number){
    let Banks = Names[e - 1];
    return <Banks/>
  }
  return (
    <div className={styles.Cards}>
      {Cards.map((e: number) => (
        <div
          key={e}
          onMouseLeave={() => setBoll(`${e}`)}
          onMouseOver={() => setBoll(e)}
          className={
            styles[boll === e ? "Card_after_" + "" + e : "Card_" + "" + e]
          }>
          <div className={styles.DivsInfos}>
            {Name(e)}
          </div>
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRight: "5px solid black",
            }}
            src={Images[e as number]}
            alt=""
          ></Image>
        </div>
      ))}
    </div>
  );
}