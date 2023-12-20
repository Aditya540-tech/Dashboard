import styles from './Navbar.module.css'
import { FaHome } from "react-icons/fa";
import { CiBarcode } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
        <span className={styles.name}>Made 2 Automate</span>
        
        <Link ><CiBarcode /></Link>
        <Link to="/"><FaHome /></Link>
        <Link to="/orders"><MdOutlineProductionQuantityLimits /></Link>
        
        </div>
        
        </>
    )
}
export default Navbar;