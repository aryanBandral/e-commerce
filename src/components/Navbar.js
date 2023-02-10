import { Component } from "react";
import "./NavbarStyles.css";
import {MenuData} from "./MenuData";
class Navbar extends Component {
    
    state={clicked: false};
    handleClick = () => {
        this.setState ({clicked: !this.state.clicked})
    }
    
    render() {
        return(
            <>
                <nav className="NavbarItems">

                    <h1 className="logo">
                        <a href="index.html">
                        <i class="fa-solid fa-desktop"></i> MyPc 
                        </a>
                    </h1>

                    <div>
                        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                            {MenuData.map((item, index)=> {
                                return(
                                    <li key={index}>
                                    <a href={item.url} 
                                    className={item.cName}>
                                        <i className={item.icon}></i>{item.title}
                                    </a>
                                </li>
                                )
                            })}  
                        </ul>
                    </div>

                    
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
            </>
        )

    }
}

export default Navbar;