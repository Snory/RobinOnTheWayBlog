import React from 'react'
import {Link} from 'gatsby'


const Header  = ({location, title}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    const isHeaderPath = location.pathname === "/GameJams/" || location.pathname === "/Learning/" || location.pathname === "/Reports/"

    let header

    if (isRootPath || isHeaderPath) {
        header = (
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
        )
      } else {
        header = (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )
      }


      return (
        <header className="global-header">{header}
            <div>
            <Link to="/GameJams">GameJams</Link> | <Link to="/Reports">Reports</Link>
            </div>
        
        </header>
      ) 
}


export default Header