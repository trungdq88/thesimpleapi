import React, { useEffect } from 'react';
import apis from 'src/data/metadata.js';
import uaParser from 'ua-parser-js';
import { serviceAccountEmail } from 'src/data/googleApi.js';
import writePermission from './write-permission.png';
import ImgBox from 'src/components/ImgBox.js';
import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import sheetIdLocation from 'src/images/sheetId.png';
import SampleRequest from 'src/components/SampleRequest';

export default function Log() {
  useEffect(() => {
    fetch(
      'https://log.thesimpleapi.com/1P7EbpizWJShKsDZn64m2772UNi3bNzYCOUGsqSfkQYk',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uaParser(navigator.userAgent).browser),
      },
    );
  }, []);
  return (
    <Layout>
      <SEO
        title={`${apis.log.name} - The Simple API`}
        description={apis.log.description}
      />
      <h1>{apis.log.name}</h1>
      <p>{apis.log.description}</p>
      <div>
        <h2>1. You need a database</h2>
        <p>
          Go{' '}
          <a
            target="_blank"
            href="https://spreadsheet.new"
            rel="noopener noreferrer"
          >
            create your new spreadsheet
          </a>
          , it will be your database. Get the <code>sheetId</code>.
        </p>
        <ImgBox src={sheetIdLocation} alt="sheetId" />
        <p>
          And then invite this email with <b>Write</b> permission. This is the
          bot that will write the log for you.
        </p>
        <pre>{serviceAccountEmail}</pre>
        <ImgBox src={writePermission} alt="write permission" />
      </div>
      <div>
        <h2>2. Send log</h2>
        <SampleRequest
          actions={{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            urlPattern: 'https://log.thesimpleapi.com/:sheetId',
          }}
          defaultParams={{
            sheetId: '1AqR2hceLxpr7zMMQtoWaZmZcHEOIS_Uu2jBSrT3ZS6o',
          }}
          defaultBody={JSON.stringify({
            id: 1,
            action: 'register',
            email: 'trungdq88@gmail.com',
          })}
        />
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/1AqR2hceLxpr7zMMQtoWaZmZcHEOIS_Uu2jBSrT3ZS6o"
          >
            View example shpreadsheet
          </a>
        </p>
        <h3>Requirements</h3>
        <ul>
          <li>
            Request body must be a <b>JSON object</b> or an{' '}
            <b>array of JSON object</b> (bulk insert).
          </li>
          <li>
            Supported data types are <b>string</b>, <b>number</b> and{' '}
            <b>boolean</b>. Any other unregonized data types will be converted
            to JSON string representation of the value.
          </li>
          <li>
            Column <code>[[createdAt]]</code> is automatically added with ISO
            string date time of the record.
          </li>
        </ul>
      </div>
      <div>
        <h2>3. Multi pages</h2>
        <p>
          You can select the page (or "sheet", or "table"... you may call it) by
          append the page name in endpoint: <code>/:sheetId/:page</code>
        </p>
        <SampleRequest
          actions={{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            urlPattern: 'https://log.thesimpleapi.com/:sheetId/:page',
          }}
          defaultParams={{
            sheetId: '1AqR2hceLxpr7zMMQtoWaZmZcHEOIS_Uu2jBSrT3ZS6o',
            page: 'Users',
          }}
          defaultBody={JSON.stringify({
            id: 1,
            action: 'register',
            email: 'trungdq88@gmail.com',
          })}
        />
      </div>
      <div>
        <h2>4. View/manage logs</h2>
        <p>
          You can view, filter, create visualizations... on your Google
          Spreadsheet. This is the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/1AqR2hceLxpr7zMMQtoWaZmZcHEOIS_Uu2jBSrT3ZS6o"
          >
            example shpreadsheet
          </a>{' '}
          used in the previous step.
        </p>
        <iframe
          width="100%"
          height="300px"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQA4oToKk3PA4OQKRMBafKBMByR96xap6sPicp3T6NMUy-A4IzciYspqiGVjAGSJfa0fVCfsFmg0G29/pubhtml?widget=true&amp;headers=false"
          title="example"
        />
      </div>
      <div>
        <h2>5. What can you do with this?</h2>
        <ul>
          <li>Quickly collect and aggregate data.</li>
          <li>
            For example, I logged browser information of all request to this
            page to{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/spreadsheets/d/1P7EbpizWJShKsDZn64m2772UNi3bNzYCOUGsqSfkQYk"
            >
              this shpreadsheet
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>6. Licences</h2>
        Free for all of your hobby projects. Contact me if you need more.
      </div>
    </Layout>
  );
}
