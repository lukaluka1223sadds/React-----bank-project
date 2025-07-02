import Reusable_1 from "@/app/Reusable components/Component-1/page";
import styles from "./page.module.css";
import Image from "next/image";
import Img1 from "../../../../../../public/creditCard.jpg";
import { Col, Row } from "antd";
import {Button} from "./button/page"

export default function Container_2() {
  return (
    <Reusable_1 BGcolor="white">
      <Row style={{ flexWrap: "nowrap" }}>
        <Col className={styles.Cols0}></Col>
        <Col className={styles.Cols1}></Col>
        <Col className={styles.Cols2}></Col>
        <Col className={styles.Cols3}>
          <Image
            src={Img1}
            alt=""
            height={300}
            width={550}
            className={styles.Image1}
          ></Image>
        </Col>
        <Col>
          <h1 className={styles.CreditCard}>Get Credit Card</h1> <br />
          <br />
          <h3 className={styles.h3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            iure, ratione fuga, impedit ipsa sed omnis, beatae officiis alias
            consectetur repellat culpa? Sed rem ipsam numquam. Adipisci,
            perferendis enim. Sint.
          </h3>
          <br />
          <br />
          <Button></Button>
        </Col>
      </Row>
    </Reusable_1>
  );
}
