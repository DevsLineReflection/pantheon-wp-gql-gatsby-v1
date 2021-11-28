import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardList from "../components/cardlist"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>All Posts</h1>
    <div className="row">
      {data.allWpPost.edges.map(({ node }) => (
        <div className="col-md-6 mb-3">
          <CardList key={node.id} posts={node} />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query MyQuery {
    allWpPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          status
          author {
            node {
              avatar {
                url
              }
              name
              lastName
              nickname
              firstName
            }
          }
          featuredImage {
            node {
              slug
              uri
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default IndexPage
