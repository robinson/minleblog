import React from "react";
import styled from "styled-components";

import { Types, Disqus } from "gatsby-theme-advanced";

import Intro from "./Intro";
import Render from "./Render";
import Share from "./Share";

const Wrapper = styled.main`
  width: 100%;

  display: grid;
  grid-gap: 24px;
  justify-items: center;
  #disqus_thread {
    width: 100%;
    max-width: 760px;
  }
  
  #disqus_recommendations {
    width: 100%;
    max-width: 760px;
  }
  
`;

type ArticleProps = {
  post: Types.Post;
};

const Article = ({ post }: ArticleProps): JSX.Element => (
  <Wrapper>
    <Intro post={post} />
    <Render post={post} />
    <Share post={post} />
    <Disqus post={post} />
  </Wrapper>
);

export default Article;
