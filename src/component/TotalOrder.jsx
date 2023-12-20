import styles from './TotalOrder.module.css'
const TotalOrder = ({totalOrder}) => {
    return(
        <div className={styles.container}>
            <h1 style={{color:"blue"}}>{totalOrder}</h1>
        <h4>Total Orders</h4>
        </div>
    )
}

export default TotalOrder