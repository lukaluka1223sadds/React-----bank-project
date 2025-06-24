import Component_1 from "./container-1/page"
import Component_2 from "./container-2/page"
import {Col , Row} from "antd"
export default function container_1_component_1(){
    return(
        <div style={{overflow:"hidden"}}>
            <Component_1></Component_1>
            <Component_2></Component_2>
        </div>
    )
}