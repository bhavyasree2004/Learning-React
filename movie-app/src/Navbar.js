import React from "react";

class Navbar extends React.Component{
    render(){
        return (
           <div>
            <div>Name</div>
            <div>
                <img alt="cart icon" />
                <span>0</span>
            </div>
           </div>
        );
    }
}

export default Navbar;