import CustomerDetail from "../component/CustomerDetail";
import Navbar from "../component/Navbar";

import styles from "./Orders.module.css";

const Orders = () =>{
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
      
    return(
        <>
        
        <Navbar/>
        <div className={styles.container}>
        <h1>All Orders</h1>
        <div className={styles.orderContainer}>
        <CustomerDetail customerDetail={customerDetail}/>
        </div>
        </div>
        
        </>
    )
}

export default Orders;