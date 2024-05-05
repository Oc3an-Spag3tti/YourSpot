import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      <div className="toggle" onClick={handleToggleClick}>
        <a>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
      <div className={`menu ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/list/places">Spots</Link>
          </li>
          <li>
            <Link href="/place/insert">New Spot?</Link>
          </li>
          <li>
            <Link href="/about/me">About</Link>
          </li>
          <li>
            <Link href="/contact/about">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
