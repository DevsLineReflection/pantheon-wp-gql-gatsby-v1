import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWpPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div className="my-2" className="w-100">
          <img src={post.featuredImage.node.sourceUrl} className="w-100" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
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
