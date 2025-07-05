"use client"
import styles from "./page.module.css";
import { Col, Row } from "antd";
import { useFormStatus } from "react-dom";
import UseServer from "./useServer"
import { useDispatch } from "react-redux";
import { container_2_boolean } from "../../../../Store_slices/slice_1/slice_1"
import { setUser } from "@/app/Store_slices/Slice_2/slice_2";

const ButtonSubmit = ()=>{
const {pending} = useFormStatus()
return(
  <button
  disabled={pending}
  className={styles.ButtonSubmit}
  >
  {pending? "invio in corso ... " : "invia"}
  </button>
)
}

export default function () {
      const dispatch = useDispatch()
      async function callServer(props:FormData){
        const server = await UseServer(props)
        const result = await server.message
        dispatch(container_2_boolean(result as boolean))
        dispatch(setUser({
          userName: server.userName as string,
          password: server.password as string,
        }))
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
            <input type="text" id="input1" name="userName" className={styles.Input1} required/>
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
            <input type="text" id="input2" name="Password" className={styles.Input1} required/>
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