import React from 'react'
import './base.scss'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'
import { GeistProvider, CssBaseline, Page } from '@geist-ui/react'
import { FormspreeProvider } from '@formspree/react'
import { divide } from 'lodash'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <FormspreeProvider project="{process.env.FORMSPREE_ID}">
        <GeistProvider>
          <CssBaseline />
          <Navigation />
          <Container>{children}</Container>
          <Footer />
        </GeistProvider>
      </FormspreeProvider>
    )
  }
}

export default Template
