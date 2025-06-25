import React from 'react'
import {MdMessage} from 'react-icons/md'
import styles from './Button.module.css'

const Button = () => {
  return (
    <button className={styles.primary_btn}>
      <MdMessage fontSize='24px'/>
      VIA SUPPORT CHAT
    </button>
  )
}

export default Button
