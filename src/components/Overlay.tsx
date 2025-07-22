import styles from "../styles/overlay.module.css"

export const Overlay: React.FC<{close: () => void}> = ({close}) => {
    return (
        <div className={styles.overlay} onClick={close}></div>
    )
}