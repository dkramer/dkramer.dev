/** @jsxImportSource @emotion/react */
import React from 'react'
import './App.css'
import { Header } from './chrome/Header'
import { Footer } from './chrome/Footer'
import { css } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'
import { About } from './routes/About'
import { Projects } from './routes/Projects'
import { Uses } from './routes/Uses'
import { Resume } from './routes/Resume'
import { screenSize } from './chrome/util'

const background = css`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
`

const content = css`
  background-color: #FEFEFE;
  width: 40%;

  @media (max-width: ${screenSize.XL}) {
    width: 50%;
    
  @media (max-width: ${screenSize.L}) {
    width: 60%;
    
  @media (max-width: ${screenSize.M}) {
    width: 80%;
    
  @media (max-width: ${screenSize.S}) {
      width: 90%;
`

const contentBody = css`
  padding: 10px 80px;

  @media (max-width: ${screenSize.S}) {
    padding: 10px 30px;
`

function App() {
  return (
    <div className='App' css={background}>
      <div css={content}>
        <Header />
        <div css={contentBody}>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='about' element={<About />} />
            <Route path='resume' element={<Resume />} />
            <Route path='projects' element={<Projects />} />
            <Route path='uses' element={<Uses />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
