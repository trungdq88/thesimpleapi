import React from 'react';
import { Link } from 'gatsby';
import { all } from 'src/data/metadata.js';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello</h1>
    <p>
      I build a bunch of small APIs so you can use in your quick projects
      without suffering all the difficulties setting up stuff.
    </p>
    <p>All free for hobby projects. Contact me if you need more.</p>
    <hr />
    {all.map(app => (
      <>
        <Link to={`/${app.key}`}>
          <h2>{app.name}</h2>
        </Link>
        <p>{app.description}</p>
        <hr />
      </>
    ))}
  </Layout>
);

export default IndexPage;
