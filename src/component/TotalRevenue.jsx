import styles from './TotalRevenue.module.css'
const TotalRevenue = ({totalRevenue}) => {
    return(
   <div className={styles.container}>
    <h1 style={{color:"blueviolet"}}>{totalRevenue}</h1>
   <h4>Total Revenue</h4></div>
    )
}

export default TotalRevenue;