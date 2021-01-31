import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import request from '../../service/axios'

import { dicoverMenu } from '@common/local-data.js'
import { DiscoverWrapper, TopMenu } from './style'

export default memo(function LSDiscover(props) {
  useEffect(() => {

    request({
      method: 'get',
      url: '/banner'
    }).then(res => console.log(res)).catch(err => console.log(err))

    return () => {

    }
  })
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>
                    {item.title}
                  </NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>

      {renderRoutes(props.route.children)}

    </DiscoverWrapper>
  )
})
