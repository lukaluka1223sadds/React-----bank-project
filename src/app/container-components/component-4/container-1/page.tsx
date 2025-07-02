import Image from "next/image";
import Img_1 from "../../../../../public/traidingImg.jpg";
import styles from "./page.module.css";
import {Info} from "./info"
import { Info_1 } from "./Grid Infos/info-1";
import { Info_2 } from "./Grid Infos/info-2";
import { Info_3 } from "./Grid Infos/info-3";
import { Info_4 } from "./Grid Infos/info-4";
import { Info_5 } from "./Grid Infos/info-5";

export default function Container_1() {
  return (
    <div className={styles.PrincipalContainer}>
      <Image src={Img_1} alt="" className={styles.Img_traiding}/>
      <p className={styles.P}><Info/> </p><h5 className={styles.H5}>Affidabilità, Crescita, Fiducia</h5>
      <div className={styles.InfoDiv}>
      <Info_1/>
      <Info_2/>
      <Info_3/>
      <Info_4/>
      <Info_5/>
      </div>
    </div>
  );
}
