import React, { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Banner from "./Banner";
import Header from "./Header";
import Menu from "./Menu";
import Navbar from "./NavBar";
import Reservations from './Reservations';


export default function MainContainer(){
    const [currentPage, setCurrentPage] = useState("Home")
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage,
    // we return the corresponding component to render.
const renderPage = () => {
    if (currentPage === "NavBar"){
        return <Navbar/>;    }
        if (currentPage === "Home"){
            return <Home/>;
        }
        if (currentPage === "Home"){
            return <Header/>;
        }
            if (currentPage === "Menu"){
                return <Menu/>;
            } 
        
        if (currentPage === "Contact"){
            return<Contact/>;        }
        };
           
            // if (currentPage === "Banner"){
            //     return <Banner/>;
            // }
            if  (currentPage === "Reservations"){
                return <Reservations/>;
            }



    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
};