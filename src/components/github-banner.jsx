import * as React from "react";
import GithubCorner from "react-github-corner";
import {GITHUB_REPO} from "../constants";

const GithubBanner = () => (
  <GithubCorner href={GITHUB_REPO} />
);

export default GithubBanner;
