import React from 'react'

// Import typefaces
import 'typeface-lato'
import 'typeface-noticia-text'

import profilePic from './EmilyKaporMaterPhoto.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Rabbi Emily Aviva Kapor-Mater`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
            borderRadius: "5%",
          }}
        />
        <strong>Rabbi Emily Aviva Kapor-Mater</strong>'s rabbinic work focuses on smashing systems of institutional oppression and improving access to Judaism and Jewish resources for marginalized people. When not rabbi-ing, she programs computers and plays chamber music. She lives in Seattle. <a href="http://emilyaviva.com">Homepage</a>
      </p>
    )
  }
}

export default Bio
