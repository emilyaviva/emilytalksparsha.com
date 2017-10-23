import React from 'react'

// Import typefaces
import 'typeface-lato'
import 'typeface-noticia-text'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5)
        }}
      >
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by/4.0/"
          style={{
            textDecoration: "none",
            boxShadow: "none"
          }}
        >
          <img
            alt="Creative Commons License"
            style={{ borderWidth: 0 }}
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"
          />
        </a>
        <br />
        This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
      </p>
    )
  }
}

export default Footer
