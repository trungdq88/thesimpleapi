import React, { useState, useEffect } from 'react';
import apis from 'src/data/metadata.js';
import styled from 'styled-components';
import sheetLogo from './sheet.png';
import sheetIdLocation from './sheetId.png';
import invite from './invite.png';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import SampleRequest from 'src/components/SampleRequest';

const trim = _ => `${_}`.trim();

const ImgBox = styled.img`
  border-radius: 20px;
  box-shadow: 0 11px 15px 1px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
`;

const SampleLink = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://docs.google.com/spreadsheets/d/1B5PURw-3ObedNm7LLFwt7ft-3_-iqVpBJec6GptQPZk/edit"
  >
    This is a public example sheet (click to open, feel free to edit)
  </a>
);

export default function Sheet() {
  const [whatToDoItems, setItems] = useState([]);
  let timer;

  async function call() {
    const response = await fetch(
      'https://sheet.thesimpleapi.com/1yho0w3_AbHO8SzBE9Mr_Y2AjldTD7EJk9-ZVb7gdlC0',
    ).then(r => r.json());
    setItems(response);
  }

  useEffect(() => {
    call();
    timer = setInterval(call, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <SEO
        title={`${apis.sheet.name} - The Simple API`}
        description={apis.sheet.description}
      />
      <h1>
        <img
          width="40"
          style={{ display: 'inline', margin: 0, verticalAlign: 'middle' }}
          src={sheetLogo}
          alt="sheet"
        />
        <span
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        >
          Sheet
        </span>
      </h1>
      <p>{apis.sheet.description}</p>
      You can find your{' '}
      <b>
        {' '}
        <code>sheetId</code>{' '}
      </b>{' '}
      here:
      <ImgBox src={sheetIdLocation} alt="sheetId" />
      <br />
      <br />
      <div>
        <h2>1. Get the whole sheet as JSON</h2>
        <p>
          Use <code>/:sheetId</code> to fetch the whole sheet as JSON
        </p>
        <SampleLink />
        <SampleRequest
          actions="https://sheet.thesimpleapi.com/:sheetId"
          defaultParams={{
            sheetId: '1B5PURw-3ObedNm7LLFwt7ft-3_-iqVpBJec6GptQPZk',
          }}
        />
      </div>
      <div>
        <h2>2. Get a range in a sheet</h2>
        <p>
          Use the second param <code>/:sheetId/:range</code> to get a specific
          range
        </p>
        <SampleRequest
          actions="https://sheet.thesimpleapi.com/:sheetId/:range"
          defaultParams={{
            sheetId: '1B5PURw-3ObedNm7LLFwt7ft-3_-iqVpBJec6GptQPZk',
            range: 'A1:B2',
          }}
        />
      </div>
      <div>
        <h2>3. Multi sheets</h2>
        <p>
          <code>:range</code> can be used as reference to a sheet (just like in
          Excel or Spreadsheet).
        </p>
        <SampleRequest
          actions="https://sheet.thesimpleapi.com/:sheetId/:range"
          defaultParams={{
            sheetId: '1B5PURw-3ObedNm7LLFwt7ft-3_-iqVpBJec6GptQPZk',
            range: 'Sheet2!A1:E9',
          }}
        />
      </div>
      <div>
        <h2>4. Private spreadsheets</h2>
        In order to fetch from private spreadsheets, you have to grant{' '}
        <b>View</b> permission to this email address:
        <pre>sheet-bot@thesimpleapi.iam.gserviceaccount.com</pre>
        <ImgBox src={invite} alt="Invite" />
        <p>
          Now go{' '}
          <a
            target="_blank"
            href="https://spreadsheet.new"
            rel="noopener noreferrer"
          >
            create your new spreadsheet
          </a>{' '}
          (or use an existing one) and try the API bellow!
        </p>
        <SampleRequest
          actions="https://sheet.thesimpleapi.com/:sheetId/:range"
          defaultParams={{
            sheetId: '',
            range: '',
          }}
        />
      </div>
      <div>
        <h2>5. Behind the scenes</h2>
        <ul>
          <li>Google Cloud</li>
          <li>Google Spreadsheet API</li>
          <li>AWS Lambda</li>
          <li>Cloudfront</li>
          <li>Route 53</li>
          <li>NodeJS</li>
        </ul>
      </div>
      <div>
        <h2>6. What can you do with this?</h2>
        <ul>
          <li>
            An effortless CMS to manage content of your website without any
            backend?
          </li>
          <li>Use it as a serverless database?</li>
          <li>
            In fact, the few last items in this section is loaded from a sheet.
            Go add your own by editing{' '}
            <a
              href="https://docs.google.com/spreadsheets/d/1yho0w3_AbHO8SzBE9Mr_Y2AjldTD7EJk9-ZVb7gdlC0"
              rel="noopener noreferrer"
              target="_blank"
            >
              this spreadsheet.
            </a>
          </li>
          {whatToDoItems
            .map(trim)
            .filter(Boolean)
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <small>
          <i>
            Please contact me if you found any inappropriate text displayed, or
            you can help remove it from the sheet as well, thanks!
          </i>
        </small>
      </div>
      <div>
        <h2>7. Licences</h2>
        Free for all of your hobby projects. Contact me if you need more.
      </div>
    </Layout>
  );
}
