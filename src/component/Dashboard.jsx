import React from 'react'
import "./components.css"
import Sidebar from './Sidebar'
import Panel from './Panel'


export default function Dashboard() {
  return (
    <div className='dashboard-container'>
        <Sidebar/>
        <Panel/>
    </div>
  )
}
