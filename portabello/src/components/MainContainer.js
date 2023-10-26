import React, {useState} from "react";
import About from "./About";
import Contact from "./Contact";
// import French from "./French";
import Header from "./Header";
import Menu from "./Menu";
import Navbar from "./NavBar";
// import Reservations from './Reservations';


export default function MainContainer(){
    const [currentPage, setCurrentPage] = useState("Home")
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage,
    // we return the corresponding component to render.
const renderPage = () => {
    if (currentPage === "Home"){
        return <Navbar/>;    }
        if (currentPage === "Header"){
            return <Header/>;
        }
            if (currentPage === "Menu"){
                return <Menu/>;
            } 
        if (currentPage === "About"){
            return <About/>;
        }
        if (currentPage === "Contact"){
            return<Contact/>;        }
        };
           
            // if (currentPage === "French"){
            //     return <French/>;
            // }
            // if  (currentPage === "Reservations"){
            //     return <Reservations/>;
            // }



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