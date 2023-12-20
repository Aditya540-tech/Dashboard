import styles from './HomePage.module.css'
import DeadStocks from '../component/DeadStocks'
import Navbar from '../component/Navbar'
import NewStocks from '../component/NewStocks'
import Product from '../component/Product'
import TotalLeads from '../component/TotalLeads'
import TotalOrder from '../component/TotalOrder'
import TotalRevenue from '../component/TotalRevenue'



const  HomePage = ()=>{
 
  const customerDetail = [
    {
      name: "Rakesh Kumar",
      productName: "Water Level Controller with 3 Level Sensor I Model: 4421AD1 GIC",
      price:1400,
      quantity:2,
      description: "A single pole electrode used for level control in wells or storage tanks. It comprises of stainless steel Sensor with plastic holder",
    }, // Add semicolon here
    {
      name: "Aditya Kumar",
      productName: "Digital Counter Totalizer with Proximity Sensor Input I Make: Multispan CT-3000",
      price:850,
      quantity:2,
      description: "Connects with Proximity swtich which can be PNP/NPN and displays count value. Also called as Count Totalizer.",
    },
  ];
  
  let totalRevenue = 0; 

for (const customerDetails of customerDetail) {
  totalRevenue += (customerDetails.price*customerDetails.quantity); 
}
   console.log(totalRevenue)

   const totalOrder = customerDetail.reduce((currentTotal,customerDetail) => currentTotal+ customerDetail.quantity,0)

          console.log(totalOrder)
  return (
    <>
    <Navbar/>
      <center className={styles.container}>
        <TotalOrder totalOrder={totalOrder}/>
        <NewStocks/>
        <DeadStocks/>
        <TotalLeads/>
        <TotalRevenue totalRevenue={totalRevenue}/>
      </center>
      <div className={styles.product}>
      <Product customerDetail={customerDetail}/>
      </div>
    
    </>
  )
}

export default HomePage