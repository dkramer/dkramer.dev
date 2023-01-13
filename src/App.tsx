/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import {Header} from "./chrome/Header";
import {Footer} from "./chrome/Footer";
import {css} from "@emotion/react";
import {Route, Routes} from "react-router-dom";
import {About} from "./routes/About";
import {Projects} from "./routes/Projects";
import {Uses} from "./routes/Uses";
import {Resume} from "./routes/Resume";

const background = css`    
  display: flex;
  justify-content: center;
  background-color: #F9F9F9;
`

const content = css`
  background-color: #FEFEFE;
  width: 80%;
`

const contentBody = css`
  padding: 10px 30px;
`

function App() {
  return (
    <div className="App" css={background}>
        <div css={content}>
          <Header />
            <div css={contentBody}>
                <Routes>
                    <Route path="/" element={ <About/> } />
                    <Route path="about" element={ <About/> } />
                    <Route path="resume" element={ <Resume/> } />
                    <Route path="projects" element={ <Projects/> } />
                    <Route path="uses" element={ <Uses/> } />
                </Routes>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default App;
