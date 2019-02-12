import React from 'react';
import apis from 'src/data/metadata.js';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import SampleRequest from 'src/components/SampleRequest';

export default function KeyValue() {
  return (
    <Layout>
      <SEO
        title={`${apis.keyvalue.name} - The Simple API`}
        description={apis.keyvalue.description}
      />
      <h1>{apis.keyvalue.name}</h1>
      <p>{apis.keyvalue.description}</p>
      <div>
        <h2>1. Set a value</h2>
        Send a POST request to this endpoint with <code>text</code> body:
        <pre>https://keyvalue.thesimpleapi.com/:secret/:key</pre>
        <ul>
          <li>
            <code>:secret</code> You are free to use any string match this
            regex: <code>{'/[A-Za-z0-9]{32,128}/'}</code>. This is also your
            "password", choose wisely and don't expose it to public or others
            can use it to read/write your data.
          </li>
          <li>
            <code>:key</code> Any string less than 512 chars.
          </li>
          <li>
            Body of the request must be a <b>string</b> less than 200,000 chars.
            If you need to store objects, use JSON string or any kind of
            serialization with string output.
          </li>
        </ul>
        <p>
          <b>Demo:</b> here I use "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as key,
          but you probably need to generate a universal-unique-hard-to-guess
          key. Remember, if I know your key I can read/write your data. Check
          the API bellow.
        </p>
        <SampleRequest
          actions={{
            method: 'POST',
            urlPattern: 'https://keyvalue.thesimpleapi.com/:secret/:key',
          }}
          defaultParams={{
            secret: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            key: 'user_1',
          }}
          defaultBody={JSON.stringify({ id: 1, name: 'Trung' })}
        />
      </div>
      <div>
        <h2>2. Get a value</h2>
        <p>
          Just send a GET request to the same endpoint. Response status 404
          means key not found, status 200 mean success with the value in body.
        </p>
        <SampleRequest
          actions="https://keyvalue.thesimpleapi.com/:secret/:key"
          defaultParams={{
            secret: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            key: 'user_1',
          }}
        />
      </div>
      <div>
        <h2>3. Delete a value</h2>
        <p>Similarly, send a DELETE request to the same endpoint.</p>
        <SampleRequest
          actions={{
            method: 'DELETE',
            urlPattern: 'https://keyvalue.thesimpleapi.com/:secret/:key',
          }}
          defaultParams={{
            secret: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            key: 'user_1',
          }}
        />
      </div>
      <div>
        <h2>4. Behind the scenes</h2>
        <ul>
          <li>AWS DynamoDB</li>
          <li>AWS Lambda</li>
          <li>Cloudfront</li>
          <li>Route 53</li>
          <li>NodeJS</li>
        </ul>
      </div>
      <div>
        <h2>5. Limitations</h2>
        <ul>
          <li>
            Speed is not a feature, each request will likely to take about 300ms
            up to 3 seconds for the response to be returned.
          </li>
          <li>
            Eventually Consistent Reads: when you "get", the response might not
            reflect the results of a recently completed "set" operation.
          </li>
          <li>
            You have free 1000 requests for each <code>:secret</code>. Check{' '}
            <code>X-KeyValue-Limit</code> in response headers to see your
            remaining requests. Contact me if you need more.
          </li>
        </ul>
      </div>
      <div>
        <h2>6. What can you do with this?</h2>
        <ul>
          <li>Probably to speedup your hackathon projects.</li>
          <li>Portable free database for pet projects</li>
        </ul>
      </div>
      <div>
        <h2>7. Licences</h2>
        Free for all of your hobby projects. Contact me if you need more.
      </div>
    </Layout>
  );
}
