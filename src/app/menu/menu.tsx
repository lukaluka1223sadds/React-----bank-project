import Link from 'next/link'
import styles from "./menu.module.css"

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href="/">
                Component-1
            </Link>
            <Link href="/container-components">
                component-2
            </Link>
        </div>
    );
}