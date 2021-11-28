import { Link } from "gatsby"
import * as React from "react"

const PostCard = ({ post }) => (
  <div className="card">
    <img
      className="card-img-top"
      src={post.featuredImage.node.sourceUrl}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <div
        className="card-text"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
      <Link className="btn btn-primary btn-sm" to={post.slug}>
        <a>Read More</a>
      </Link>
    </div>
  </div>
)

export default PostCard
