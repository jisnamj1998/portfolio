import React from 'react'
import style from './Header.module.css'

function Header() {
    const username="Jhon Doe"
  return (
    <div className={style.profileContainer}>
      <h1 className={style.profileTitle}>I am {username}</h1>
    </div>
  )
}

export default Header
