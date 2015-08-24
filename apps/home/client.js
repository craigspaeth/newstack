import React from 'react'
import Tweetbox from './tweetbox'
import $ from 'jquery'

export default () => {
  React.render(Tweetbox(), $('.home-tweetbox')[0])
}
