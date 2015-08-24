import React from 'react'
import Radium from 'radium'
import reset from './reset'
import twitter from './twitter'
import fs from 'fs'
import path from 'path'

let { div, html, body, head, style, header, nav, a, main, script } = React.DOM

class Layout extends React.Component {
  render () {
    return (
      html({ style: styles.body },
        head({},
          style({}, reset)),
        body({},
          header({ style: styles.header },
            nav({},
              div({
                dangerouslySetInnerHTML: { __html: twitter },
                style: styles.twitter }),
              a({ href: '/', style: styles.a }, 'Home'),
              a({ href: '/notifications', style: styles.a }, 'Notifications'))),
          main({}, this.props.content),
          script({ src: this.props.assetPkg })
    )))
  }
}

let styles = {
  body: {
    fontFamily: 'Helvetica, sans',
    fontColor: 'black',
    fontSize: '16px'
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'white',
    padding: '20px',
    zIndex: 10,
    borderBottom: '1px solid #eee'
  },
  a: {
    color: 'black',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textDecoration: 'none',
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: '12px'
  },
  twitter: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
    top: '12px'
  }
}

export default (props) => React.createElement(Radium(Layout), props)
