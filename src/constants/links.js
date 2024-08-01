import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Nyumbani
        </Link>
      </li>

       <li>
        <Link to="" className="page-link">
          Tafsiri ya Qur-aan
        </Link>
      </li>

       <li>
        <Link to="" className="page-link">
          Hutuba za ijumaa
        </Link>
      </li>
      
      <li>
        <Link to="/kuhusu-sisi" className="page-link">
          Kuhusu Sisi
        </Link>
      </li>
    </ul>
  )
}

export default Links
