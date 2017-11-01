import React from 'react'
import FontAwesome from 'react-fontawesome'

// Import typefaces
import 'typeface-lato'
import 'typeface-noticia-text'

import profilePic from './EmilyKaporMaterPhoto.jpg'
import { rhythm } from '../utils/typography'

const Bio = () =>
  <p style={{ marginBottom: rhythm(1.5) }}>
    <img
      src={profilePic}
      alt="Emily Aviva Kapor-Mater"
      style={{
        float: 'left',
        marginRight: rhythm(1 / 4),
        marginBottom: 0,
        width: rhythm(4),
        height: rhythm(4),
        borderRadius: "8%",
      }}
    />
    <span><strong>Emily Aviva Kapor-Mater</strong>'s rabbinic work focuses on creating Jewish law, ritual, and learning for marginalized people, particularly transgender and queer Jews, who have been underserved by traditional Jewish establishments. When not rabbi-ing, she programs computers and plays chamber music. She lives in Seattle. <a href="http://emilyaviva.com">Homepage</a> <FontAwesome name="hand-spock-o" /></span>
  </p>

export default Bio
