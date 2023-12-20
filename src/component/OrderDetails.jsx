import styles from './OrderDetails.module.css'

const OrderDetails =({customerName,productName,price,quantity,description}) => {
return(
    <div  className={styles.container}>
     <h4>{productName}</h4>
     <h5>{customerName}</h5>
     <p>{description}</p>
     <p>Quantity <span><strong>{quantity} </strong></span> pieces</p>
     <p>{price}</p>
    </div>
)
}
export default OrderDetails;