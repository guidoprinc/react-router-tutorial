import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink.js'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
})