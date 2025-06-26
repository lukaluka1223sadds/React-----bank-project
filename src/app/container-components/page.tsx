import Component_1 from "./component-1/container-1/page"
import Component_2 from "./component-1/container-2/page"
import Container_1 from "./component-2/container-1/page"
export default function container_1_component_1(){
    return(
        <div style={{overflow:"hidden"}}>
            <Component_1></Component_1>
            <Component_2></Component_2>
            <Container_1></Container_1>
        </div>
    )
}