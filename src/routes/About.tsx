/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { contactLinks, screenSize } from '../chrome/util'

const main = css`
  display: flex;
  text-align: left;
  @media (max-width: ${screenSize.M}) {
    flex-direction: column;
`

const image = css` 
  margin: 20px 40px;
  height: 400px;
  border-radius: 16px;
  transform: rotate(-3deg);
  box-shadow: 4px 4px 16px #282c34;

  @media (max-width: ${screenSize.L}) {
    height: 300px;
    
  @media (max-width: ${screenSize.M}) {
    height: 200px;
    
  @media (max-width: ${screenSize.S}) {
    height: 100px;
    margin: 20px;
`

const list = css`
  list-style: none;
  svg {
    font-size: 1.25em;
    margin-right: 4px;
  }
`
export function About() {
  return (
    <div css={main}>
      <div>
        <h1>Hi, I’m Dakota 👋</h1>
        <div>
          <p>
            I’m a full stack senior software engineer working at Widen (an Acquia company). My passion is in creating. I explore that
            passion through different avenues including painting, woodworking, baking, and of course creating software.
          </p>
          <p>
            Outside of creating, I enjoy time indoors as well as out. I'm semi-pro binge watcher. (Want to talk about that terrible GOT
            ending?) Or I can be found just as easily out on a hiking trail with my dogs. Did I mention I'm a big dog lover?
          </p>
          <p>Want to connect? Please feel free to reach out with the following links!</p>
        </div>
      </div>
      <div>
        <img css={image} src='/meSmall.jpg' />
        <div>
          <ul css={list}>
            <li>
              <a css={contactLinks} href='https://github.com/dkramer'>
                <GitHubIcon /> Follow on Github
              </a>
            </li>
            <li>
              <a css={contactLinks} href='https://www.linkedin.com/in/dakota-kramer-32070046/'>
                <LinkedInIcon /> Follow on linkedIn
              </a>
            </li>
            <li>
              <a css={contactLinks} href='mailto=Info@dkramer.dev'>
                <EmailIcon /> Info@dkramer.dev
              </a>
            </li>
            <li>
              <Link css={contactLinks} to='/Dakota_Kramer_2023_resume.pdf' target='_blank' download>
                <FileDownloadIcon /> Download Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
