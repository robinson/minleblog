import React from 'react';
import Layout from '../components/Instagram/layout';
import { graphql } from 'gatsby';
import theme from "../theme/theme.yaml";
import Gallery from '../components/Instagram/galery';
import Headline from "../components/Article/Headline";
import Article from "../components/Article";
import Seo from "../components/Seo";


const InstagramPage = ({ data }) => {
  return (
    // <Layout>
    //   <Gallery posts={data.allInstagramContent} />
    // </Layout>
    <React.Fragment>
      <Article theme={theme}>
        <header>
          <Headline title="Photo" theme={theme} />
        </header>

          <Gallery posts={data.allInstagramContent} />
       
      </Article>
      <Seo pageTitle="Photo" />
    </React.Fragment>
  )
}

export default InstagramPage

export const query = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          id
          caption
          localImage {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500, height: 500)
            }
          }
        }
      }
    }
  }
`