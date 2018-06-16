import React, { Fragment } from 'react';
import { Uri } from '@yeebase/react';

const Detail = () => (
  <Fragment>
    <h1>I'm detail!</h1>
    <Uri action="index">
      {uri => (
        <a href={uri}>Go to index!</a>
      )}
    </Uri>
  </Fragment>
);

export default Detail;
