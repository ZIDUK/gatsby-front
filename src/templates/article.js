import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: String) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      createdAt
      image {
        url
      }
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
         // data-src={"http://localhost:1337" + article.image[0].url}
         // data-src={`${process.env.IMAGE_BASE_URL}${article.image[0].url}`? `https://strapi-mongod.herokuapp.com${article.image[0].url}`: "http://localhost:1337" + article.image[0].url}
         // data-src={"https://strapi-mongod.herokuapp.com" + article.image[0].url}
          data-src={article.image[0].url}
          data-srcset={"http://localhost:1337" + article.image[0].url}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.createdAt}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article