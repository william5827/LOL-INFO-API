import React from "react"
import Menu from "../../components/menu"
import Footer from "../../components/footer"
import './styles.css'

const Layout = ({children}) => {
    return(
            <div className="layout">
                <Menu />
                <div className="content">
                    {children}
                </div>
                <Footer />   
            </div>
    )
} 

export default Layout