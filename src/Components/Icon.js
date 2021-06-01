import React from "react"
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa"
const Icon = ({name,sizeOfIcon="50"}) => {
    switch(name)
    {
        case 'circle':
            return <FaRegCircle size={sizeOfIcon} className="icons"/>
        case 'cross':
            return <FaTimes size={sizeOfIcon} className="icons"/>
        default :
            return <FaPen size={sizeOfIcon} className="icons"/>    
    }
}
export default Icon