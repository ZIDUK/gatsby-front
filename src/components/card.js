import React from "react"
import { Link } from "gatsby"


const Card = ({ article }) => {

  return (

    <Link to={`/article/${article.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
           // src={"http://localhost:1337" + article.node.image[0].url}
            src={article.node.image[0].url}
            alt={"http://localhost:1337" + article.node.image[0].url}

            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card