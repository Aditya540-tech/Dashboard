import CustomerDetail from './CustomerDetail';
import styles from './Product.module.css'
const Product = ({customerDetail}) => {
  return (
    <div className={styles.container}> 
    <h3>All Orders</h3>
    <p>A summary of your orders</p>
    <div className={styles.productContainer}>
      <CustomerDetail customerDetail={customerDetail}/>
    </div>
    </div>
  )
}
export default Product;