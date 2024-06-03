import { useState } from "react"
import "./header.style.css"

export const Header = () => {
    const [isTrue,setIsTrue] = useState(false)

    const handleShow = () => {
        setIsTrue(!isTrue)
    }
    return (
        <>
        <div className="header-container">
         <h1>Logo</h1>
         <input placeholder="Search here" className="header-input"/>
         <div className="header-right">
            <p className="list-item" onClick={handleShow}>about</p>
             {
                isTrue && 
                <div className="dropdown-container">
                  <p>Task 1</p>
                  <p>Task 2</p>
                </div>
             }
            <p className="list-item">Contact</p>
         </div>
        </div>
        </>
    )
} 