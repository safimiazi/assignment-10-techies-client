import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import { useState } from "react";


const Root = () => {
    const [darkMode, setDarkMode] = useState(false)
    console.log(darkMode);
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={`${darkMode && "bg-black"}`}>
            <div>
               <Nav darkMode={darkMode} handleDarkMode={handleDarkMode}></Nav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;