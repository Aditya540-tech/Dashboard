import OrderDetails from "./OrderDetails";

const CustomerDetail = ({customerDetail}) =>{
return (
    <div>
    {customerDetail.map((c)=>(
         <OrderDetails customerName={c.name} productName={c.productName} 
         price={c.price} quantity={c.quantity} description={c.description}/>
    ))}
    
    </div>
)
}

export default CustomerDetail;