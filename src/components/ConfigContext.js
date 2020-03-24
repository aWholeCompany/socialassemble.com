import React from 'react'
import PropTypes from 'prop-types'
import Config from '../../Config'

const DEFAULT_CONFIG = {
  title: 'Gatsby Starter Event Calendar',
  subTitle: '',
  formLink: 'https://goo.gl/forms/u00WBxeK1kQco0uQ2',
}

const { Provider, Consumer } = React.createContext(DEFAULT_CONFIG)

const ConfigProvider = ({ children }) => (
  <Provider value={Config}>{children}</Provider>
)

ConfigProvider.propTypes = {
  children: PropTypes.node,
}

const ConfigContext = {
  Provider: ConfigProvider,
  Consumer,
}

export default ConfigContext
