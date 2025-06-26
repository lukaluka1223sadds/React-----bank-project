"use client"
import styles from "./page.module.css";
import { Col, Row } from "antd";
import { useFormStatus } from "react-dom";
import UseServer from "./useServer"
import { FormEvent, useState } from "react";

const ButtonSubmit = ()=>{
const {pending} = useFormStatus()
return(
  <button
  disabled={pending}
  className={styles.ButtonSubmit}
  >
  {pending? "invio in corso ... " : "invia messaggio"}
  </button>
)

}

export default function () {
  const [message , setMessage] = useState<string>("")
      async function callServer(props:FormData){
        const server = await UseServer(props)
        const a=server
        setMessage(a.message as unknown as string)
      }
  return (
    <>
      <Row className={styles.Form}>
        <Col>
          </Col>
        <form action={callServer}>
          <Col>
            {" "}
            <label htmlFor="input1" className={styles.Header1}>
              Username or access Card
            </label>
          </Col>
          <br />
          <Col>
            {" "}
            <input type="text" id="input1" className={styles.Input1} required/>
          </Col>
          <br />
          <br />
          <Col>
            {" "}
            <label htmlFor="input2" className={styles.Header1}>
              password
            </label>
          </Col>
          <br />
          <Col>
            {" "}
            <input type="text" id="input2" className={styles.Input1} required/>
          </Col>
          <Col>
            <br />
            <label htmlFor="input3" className={styles.header2}>Remember me</label>
            <input type="checkbox" id="input3" className={styles.Checkbox} required/>
          </Col>
          <br />
          <Col>
            <ButtonSubmit></ButtonSubmit>
          </Col> 
        </form>
      </Row>
    </>
  );
}
