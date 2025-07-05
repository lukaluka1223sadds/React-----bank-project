import styles from "./page.module.css"
import { InstagramOutlined , LinkedinOutlined , FacebookOutlined , MessageOutlined } from '@ant-design/icons';

export default function Component_1(){
    return(
        <div className={styles.principal}>
        <p className={styles.p}>© 2017 TBC Bank. All right reserved</p>
       
        <div className={styles.div2}>
        <p>contact us</p>
        <InstagramOutlined />
        <LinkedinOutlined />
        <FacebookOutlined />
        <MessageOutlined />
        </div>
        </div>
    )
}