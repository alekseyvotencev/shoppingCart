import React from 'react'
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input {...props} className={[props.className, classes.myInput].join(' ')} />
    )
}

export default MyInput