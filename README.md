# flow-react-view-test
Demonstrates an experimental react view implementation for neos/flow

As an alternative to Fluid or Fusion, this templating method utilizes react for rendering.
You can still implement ViewHelper in PHP which will be called during rendering via inter process communication (unix domain socket).

So your react rendering can seamlessly interact with your flow php backend during render time.
This will (for example) enable your `console.log(...)` calls to invoke `\Neos\Flow\var_dump(...)`.
