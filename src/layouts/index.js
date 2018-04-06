import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../../meta/config'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>"Home | Ooqia Gatsby + Netlify CMS"</title>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper