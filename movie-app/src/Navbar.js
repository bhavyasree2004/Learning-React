import React from "react";
import styles from "./Navbar.module.css";

class Navbar extends React.Component{
    render(){
        const {cartCount}=this.props;
        return (
           <div className={styles.Nav}>
            <div className={styles.Title}>Movies-App</div>
            <div className={styles.CartContainer}>
                <img alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" className={styles.CartIcon}/>
                <span className={styles.CartCount}>{cartCount}</span>
            </div>
           </div>
        );
    }
}

export default Navbar;