import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import { trackingID } from 'config/app';
import Helmet from 'react-helmet';

const createTrackingScript = trackingID => 
`<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', ${trackingID}, 'auto');
  ga('send', 'pageview');
  </script>`;

const buildPage = ( headAssets ) => {
  return `
    <!doctype html>
    <html>
      <head>
        ${headAssets.title.toString()}
        ${headAssets.meta.toString()}
        ${headAssets.link.toString()}
      </head>
      <body>
        <div id="app"></div>
        ${createTrackingScript(trackingID)}
        <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
      </body>
    </html>`;
};

export default () => {
  const headAssets = Helmet.rewind();
  return buildPage( headAssets );
};

