import * as React from "react";
import * as ReactDOM from "react-dom/client";
import GithubBanner from "./components/github-banner";
import Page from "./components/page";

const LandingPage = () => (
  <>
    <GithubBanner />
    <Page>
      <h1>Data viz</h1>
      <p>Collection of data visualizations by <a href="https://deep.wtf">Deep</a></p>
      <ul>
        <li><a href="/delhi-accidents/">Cyclist accidents in Delhi from 2006 to 2020</a></li>
      </ul>
    </Page>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LandingPage />);
