import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import rootReducer from "./redux/reducer";
axios.defaults.withCredentials = true;

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
  
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #373E59;
  color: whitesmoke;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
 
}
a {
  text-decoration:none;
  color:inherit;
}
.ql-editor {
  box-shadow: 0 0 0 1px black !important;
}
.ql-toolbar{
  border: 1px solid black !important;
}
.ql-editor, .ql-toolbar{
  background-color: #373e59;
}

/* .quill > .ql-toolbar:first-child {
  display: none !important;
} */
.ql-toolbar .ql-stroke {
    fill: none;
    stroke: whitesmoke;
}
.ql-toolbar .ql-fill {
    fill: whitesmoke;
    stroke: none;
}

.ql-toolbar .ql-picker {
    color: whitesmoke;
}
.ql-toolbar{
}

`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new QueryClient();
const store = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

{
  /* <React.StrictMode> */
}
root.render(
  <Provider store={store(rootReducer, devTools && devTools())}>
    <QueryClientProvider client={client}>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </Provider>
);
