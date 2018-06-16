import { Context, Route } from '@yeebase/react';
import React from 'react';

import Index from './routes/Index';
import Detail from './routes/Detail';

export default () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Hello</title>
    </head>

    <body>
      <div>
        <h1>Im the layout</h1>
      </div>

      <Context>
        {({ test }) => <h1>View assigned variable: {test}</h1>}
      </Context>
      <br />

      <Route action="index" component={Index} />
      <Route action="detail" component={Detail} />
    </body>
  </html>
);
