/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MobxProvider from '../stores/provider'
import 'mobx-react-lite/batchingForReactDom'
import Header from "./header"
import { Link } from "gatsby"
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MobxProvider>
      <div
        style={{
          margin: `0 auto`,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minHeight: '100vh'
        }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            flex: '1 0 auto',
            margin: `0 auto`,
            maxWidth: '960px',
            padding: `0 1.0875rem 1.45rem`,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <main>{children}</main>
          <footer style={{ marginTop: 'auto' }}>
            <Link to="/page-2/">Credits</Link>
            © {new Date().getFullYear()}, Built by
          {` `}
            <a href="https://github.com/iHateYourGlasses">me</a>
            {` `}
          using
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </MobxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
