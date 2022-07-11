import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={[props.className, classes.myBtn].join(' ')}>
            {children}
        </button>
    )
}

export default MyButton