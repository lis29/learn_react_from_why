import { React } from "react";
import { Redirect } from "react-router-dom";

import LSDiscover from '@pages/discover'
import LSRecommend from '../pages/discover/c-pages/recommend'
import LSRanking from '@pages/discover/c-pages/ranking'
import LSAlbum from '@pages/discover/c-pages/album'
import LSArtist from '@pages/discover/c-pages/artist'
import LSDjaideo from '@pages/discover/c-pages/djaideo'
import LSSongs from '@pages/discover/c-pages/songs'

import LSFriend from '@pages/friend'
import LSMine from '@pages/mine'
import LSPlayer from '@pages/player'


const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/discover" />
    }
  },
  {
    path: '/discover',
    component: LSDiscover,
    children: [
      {
        path: '/discover',
        exact: true,
        render: () => {
          return <Redirect to="/discover/recommend" />
        }
      },
      {
        path: '/discover/recommend',
        component: LSRecommend
      },
      {
        path: '/discover/ranking',
        component: LSRanking
      },
      {
        path: '/discover/songs',
        component: LSSongs
      },
      {
        path: '/discover/djradio',
        component: LSDjaideo
      },
      {
        path: '/discover/artist',
        component: LSArtist
      },
      {
        path: '/discover/album',
        component: LSAlbum
      },
      {
        path: '/discover/player',
        component: LSPlayer
      }
    ]
  },
  {
    path: '/mine',
    component: LSMine
  },
  {
    path: '/friend',
    component: LSFriend
  }
]

export default routes;