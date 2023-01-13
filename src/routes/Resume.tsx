/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

const footer = css`
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 15px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const menu = css`
    display: flex;
    justify-content: space-between; 
   

    @media (max-width: 400px) {
      color: red;
      flex-direction: column;
      align-items: center;
      margin: 4px 0px;
    }
      
`

const menuItem = css`
    margin: 0 8px;
    color: #404040;
    transition:color .2s ease-in;
    font-weight: bold;
    text-decoration: none;

  @media (max-width: 400px) {
    margin: 4px 0px;
  }
`

export function Resume() {
  return (
      <div css={css`
      display: flex;
      
`}>
          <div>
          <h1>Hi, I’m Dakota 👋</h1>
          <div>I’m a full stack senior software engineer working at Widen (an Acquia company). My passion is in creating. I explore that passion through different avenues including painting, woodworking, baking, and of course creating software.

              Outside of work, I enjoy things.

              While I am a software engineer and a total nerd, I’m a huge extrovert and love spending time with people. If you ever want to debate the usefulness of college education for professions like computer science, I will gladly oblige as I am a self-taught developer who found very little practical value in college behind getting that slip of paper they call a diploma.</div>
          </div>
          <div>
              <image />
              <div>
                  <ul>
                      <li><Link to='https://github.com/dkramer'>Follow on Github</Link></li>
                      <li><Link to='https://www.linkedin.com/in/dakota-kramer-32070046/'>Follow on linkedIn</Link></li>
                      <li><Link to='mailto=info@dkramer.dev'>info@dkramer.dev</Link></li>
                      <li></li>
                  </ul>
              </div>
          </div>
      </div>
  );
}
