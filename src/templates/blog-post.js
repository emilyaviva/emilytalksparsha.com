import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Footer from '../components/Footer'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    let citation
    if (post.frontmatter.book) {
      const sefariaUrl = `https://www.sefaria.org/${post.frontmatter.book}.${post.frontmatter.verse_start.replace(':', '.')}-${post.frontmatter.verse_end.replace(':', '.')}?lang=bi`
      citation = <section
        className="citation"
        style={{ display: 'block' }}
      >
        <a href={sefariaUrl}>
          {post.frontmatter.book} {post.frontmatter.verse_start}–{post.frontmatter.verse_end}
        </a>
      </section>
    }

    let postTitle
    if (post.frontmatter.parsha) {
      postTitle = <h1 style={{ marginTop: rhythm(2) }}>{post.frontmatter.parsha}: {post.frontmatter.title}</h1>
    } else {
      postTitle = <h1 style={{ marginTop: rhythm(2) }}>{post.frontmatter.title}</h1>
    }

    return (
      <div>
        <Helmet title={`${siteTitle} | ${post.frontmatter.parsha}: ${post.frontmatter.title}`} />
        {postTitle}
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        {citation}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <Footer />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        book
        parsha
        verse_start
        verse_end
      }
    }
  }
`
