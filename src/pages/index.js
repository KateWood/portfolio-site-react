import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const pinkStyles = css`
  color: hotpink;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "construction.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <h1 css={pinkStyles}>Kate Wood</h1>
      <p>I'm rebuilding my new portfolio site here.</p>
      <p>It will be here when it's ready.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={data.img.childImageSharp.fluid} />
      </div>
      <p>You can view my old portfolio site <a href="https://katekode.herokuapp.com/" css={pinkStyles}>here</a>.</p>
    </Layout>
  );
};

export default IndexPage;
