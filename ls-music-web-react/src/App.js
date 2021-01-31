import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'


import store from './store'
import routes from "./router";

import LSAppHeader from '@components/app-header'
import LSAppFooter from '@components/app-footer'


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <LSAppHeader />
        {
          renderRoutes(routes)
        }
        <LSAppFooter />
      </HashRouter>
    </Provider>
  )
})

