import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicCharInfo from '../components/basicCharInfo'
import AgeSelector from '../components/ageSelector'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BasicCharInfo />
    <AgeSelector />
  </Layout>
)

export default IndexPage
