import React, { useState } from 'react';
import AutosizeInput from 'react-input-autosize';
import styled from 'styled-components';

const ReplaceableBox = styled(AutosizeInput)`
  > input {
    border: 0;
    padding: 2px 10px;
    display: inline-block;
    background-color: #d4d4d4;
  }
`;

const JsonText = styled.pre`
  max-height: 400px;
`;

const Section = styled.section`
  margin: 10px 0;
`;

export default function SampleRequest({ actions, defaultParams }) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const [params, setParams] = useState(defaultParams);

  const item = parseActions(actions);

  async function send() {
    setLoading(true);
    try {
      const response = await fetch(buildUrl(item.urlPattern, params)).then(r =>
        r.json(),
      );
      setResponse(response);
    } catch (e) {
      console.error(e);
      setResponse('Failed! Please check console log.');
    } finally {
      setLoading(false);
    }
  }

  function parseActions(actions) {
    if (typeof actions === 'string') {
      return { method: 'get', urlPattern: actions };
    }
    throw new Error('actions not supported');
  }

  function parseUrlPattern(patternString) {
    const parts = [];
    const re = /:\w+/g;
    let match;
    let lastPosition = 0;
    while ((match = re.exec(patternString)) != null) {
      parts.push({
        type: 'string',
        value: patternString.substr(lastPosition, match.index - lastPosition),
      });
      parts.push({
        type: 'param',
        value: match[0],
        key: match[0].replace(/^:/, ''),
      });
      lastPosition = match.index + match[0].length;
    }
    const lastMatchString = parts[parts.length - 1];
    const parsedLength = lastPosition + lastMatchString.length;
    if (parsedLength < patternString.length) {
      parts.push({
        type: 'string',
        value: patternString.substr(
          parsedLength,
          patternString.length - parsedLength + 1,
        ),
      });
    }
    return parts;
  }

  function buildUrl(patternString, params) {
    return parseUrlPattern(patternString)
      .map(part => {
        if (part.type === 'param') {
          return params[part.key];
        } else if (part.type === 'string') {
          return part.value;
        } else {
          throw new Error('part type not supported');
        }
      })
      .join('');
  }

  return (
    <>
      <Section>
        <b>Request</b>: (you can replace with your own spreadsheetId)
        <br />
        <code>
          {item.method.toUpperCase()}{' '}
          {parseUrlPattern(item.urlPattern).map((part, index) =>
            part.type === 'string' ? (
              <span key={index}>{part.value}</span>
            ) : part.type === 'param' ? (
              <ReplaceableBox
                key={index}
                value={params[part.key] || ''}
                onChange={e =>
                  setParams({ ...params, [part.key]: e.target.value })
                }
                placeholder={part.value}
              />
            ) : (
              '?'
            ),
          )}
        </code>
        <button onClick={send}>Send</button>
        <br />
      </Section>
      <Section>
        <b>Response</b>:
        <JsonText>
          {loading
            ? 'Loading...'
            : response !== undefined
            ? JSON.stringify(response, null, 2)
            : '(Press "Send" to see response)'}
        </JsonText>
      </Section>
    </>
  );
}
