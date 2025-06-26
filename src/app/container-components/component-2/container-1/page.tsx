"use client";

import Reusable_1 from "@/app/Reusable components/Component-1/page";
import styles from "./page.module.css";
import Image from "next/image";
import img1 from "../../../../../public/getCard.avif";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Container_1() {
  const [boll , setBoll] = useState<null | string>("Button1");
  function changeButton(e: string) {
    switch (e) {
      case "1":
        setBoll("aaa");
        console.log(e);
        break;
      case "2":
        setBoll("ButtonChange");
        console.log(e);
        break;
    }
  }
  return (
    <div className={styles.Div_1}>
      <Reusable_1 transform="translate(20px , 70px)">
        <Row style={{ height: "100%" }}>
          <Col style={{ height: "500px", width: "550px" }}>
            <Image src={img1} height={500} width={550} alt=""></Image>
          </Col>
          <Col style={{ padding: "60px" }}>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col>
                <h1 className={styles.h1_Header}>Get Bank Card</h1>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col>
                <h1 style={{ color: "#051d25" }}>
                  Discover unique advantages and make your life easier.
                </h1>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <button
              onMouseEnter={() => {
                changeButton("1")
              }}
              onMouseLeave={() => {changeButton("2")}}
              className={
                styles[`${boll !== "aaa" ? "Button1" : "ButtonChange"}`]
              }
            >
              <ArrowRightOutlined /> Subscribe
            </button>
          </Col>
        </Row>
      </Reusable_1>
    </div>
  );
}
