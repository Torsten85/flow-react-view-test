import React, { Fragment } from 'react';
import { Uri } from '@yeebase/react';

const Index = () => (
  <Fragment>
    <h1>I'm the index!</h1>
    <Uri action="detail">
      {uri => (
        <a href={uri}>Go to detail!</a>
      )}
    </Uri>
  </Fragment>
);

export default Index;
