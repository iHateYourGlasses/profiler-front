import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import s from './header.module.css'

const Header = ({ siteTitle }) => (
  <header
    className={s.root}
  >
    <div
    >
      <h1 className={s.title}>
        <Link
          to="/"
          className={s.link}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 className={s.subtitle}>ULTIMATE EDITION</h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
