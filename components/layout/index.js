import React from 'react'

let { div, html, body, head, style, header, nav, a, main } = React.DOM

class Layout extends React.Component {
  render () {
    return (
      html({},
        head(),
        body({},
          header({},
            nav({},
              a({ href: '/' }, 'Home'),
              a({ href: '/notifications' }, 'Notifications')
          )),
          main({}, this.props.content)
    )))
  }
}

export default (props) => { return React.createElement(Layout, props) }
