// Setp 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

//Step 2: Defino your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I´m making this following the Gatsby Tutorial.</p>
      <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/clifford.jpg"
      />

    </Layout>
  )
}

//Step 3: Export your component
export default IndexPage