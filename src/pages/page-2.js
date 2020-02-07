import React from "react"
import loadable from '@loadable/component'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConditionallyLoadedComponent1 = loadable(() => import('../components/ConditionallyLoadedComponent1'))
const ConditionallyLoadedComponent2 = loadable(() => import('../components/ConditionallyLoadedComponent2'))


const SecondPage = () => {
  // this variable would normally come as a prop from the parent component,
  // for this reduced test case i'm just hardcoding it
  const hero = 'component1'

  // this switch is where I'd conditionally load a component based on the above prop
  const renderHero = function () {
    switch (hero) {
      case 'component1':
        return <ConditionallyLoadedComponent1 />
      
      case 'component2':
        return <ConditionallyLoadedComponent2 /> // this is just as an example, its never used in this demo

      default:
        return null
    }
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      {renderHero()}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
