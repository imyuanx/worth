import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'

function Layout() {

  return (
    <div className="layout">
        <Outlet></Outlet>
    </div>
  )
}

export default Layout
