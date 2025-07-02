import Component_1 from "./component-1/container-1/page"
import Component_2 from "./component-1/container-2/page"
import Container_1 from "./component-2/container-1/page"
import Container_2 from "./component-2/container-2/container-1/page";
import Container_4  from "./component-4/container-1/page";
import Cards from "./component-3/container-1/page";

export default async function container_1_component_1(){
    // await new Promise(resolve => setTimeout(resolve, 5000)); 
    return(
        <div style={{overflow:"hidden"}}>
            <Component_1></Component_1>
            <Component_2></Component_2>
            <Container_1></Container_1>
            <Container_2></Container_2>
            <Cards></Cards>
            <Container_4></Container_4>
        </div>
    )
}