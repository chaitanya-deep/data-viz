import * as React from "react";
import * as ReactDOM from "react-dom/client";
import GithubBanner from "../components/github-banner";
import Page from "../components/page";
import {CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip, Label} from "recharts";

const DATA = [
  { year: 2006, c_k: 154, c_i: 451, t_k: 2169, t_i: 8280, },
  { year: 2007, c_k: 128, c_i: 390, t_k: 2140, t_i: 7710, },
  { year: 2008, c_k: 107, c_i: 353, t_k: 2093, t_i: 7342, },
  { year: 2009, c_k: 121, c_i: 261, t_k: 2325, t_i: 6936, },
  { year: 2010, c_k: 137, c_i: 309, t_k: 2153, t_i: 7108, },
  { year: 2011, c_k: 107, c_i: 295, t_k: 2110, t_i: 6975, },
  { year: 2012, c_k: 114, c_i: 249, t_k: 1866, t_i: 6633, },
  { year: 2013, c_k: 92, c_i: 305, t_k: 1820, t_i: 7098, },
  { year: 2014, c_k: 64, c_i: 313, t_k: 1671, t_i: 8283, },
  { year: 2015, c_k: 71, c_i: 297, t_k: 1622, t_i: 8258, },
  { year: 2016, c_k: 53, c_i: 218, t_k: 1591, t_i: 7154, },
  { year: 2017, c_k: 67, c_i: 154, t_k: 1584, t_i: 6604, },
  { year: 2018, c_k: 53, c_i: 155, t_k: 1690, t_i: 6086, },
  { year: 2019, c_k: 36, c_i: 108, t_k: 1463, t_i: 5152, },
  { year: 2020, c_k: 48, c_i: 155, t_k: 1196, t_i: 3662, },
];

const DelhiAccidents = () => (
  <>
    <GithubBanner />
    <Page>
      <h1>Cyclist accidents in Delhi from 2006 - 2020</h1>
      <p>
        Source: <a href="https://traffic.delhipolice.gov.in/sites/default/files/uploads/2020/Road-Accidents-in-Delhi-2020.pdf" target="_blank">Delhi accident statistics 2020</a>
      </p>
      <div className="graph-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={DATA}
                     margin={{ top: 26, right: 30, left: 10, bottom: 26 }}
          >
            <XAxis
              dataKey="year"
              stroke="#ffffff"
              axisLine={{ stroke: '#222222' }}
              tickLine={{ stroke: '#222222' }}
              style={{
                fontSize: '0.7rem',
              }}
            >
              <Label value="Year" position="insideBottom" dy={15} fill="#ffffff" />
            </XAxis>
            <YAxis
              stroke="#ffffff"
              axisLine={{ stroke: '#222222' }}
              tickLine={{ stroke: '#222222' }}
              style={{
                fontSize: '0.7rem',
              }}
            >
              <Label value="No. of incidents" angle={-90} position="inside"
                     dx={-15} fill="#ffffff" />
            </YAxis>
            <CartesianGrid stroke="#222222" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="c_k" stroke="#8884d8" name="Cyclist deaths" />
            <Line type="monotone" dataKey="c_i" stroke="#82ca9d" name="Cyclist injuries" />
            <Tooltip contentStyle={{ backgroundColor: "#222222" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Page>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DelhiAccidents />);
