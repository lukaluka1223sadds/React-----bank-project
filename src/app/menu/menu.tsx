import Link from 'next/link'
import styles from "./menu.module.css"

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href="/container-components/component-1">
                Component-1
            </Link>
            <Link href="/">
                component-2
            </Link>
        </div>
    );
}