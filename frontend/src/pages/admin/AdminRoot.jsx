import React, { useContext } from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/admin/Footer/Footer'
// import MainContext from '../../context/context'

const AdminRoot = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AdminRoot
