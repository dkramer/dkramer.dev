/** @jsxImportSource @emotion/react */
import React, { lazy, Suspense } from 'react'
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
import { RemoveTrailingSlash } from './components/RemoveTrailingSlash'

const DonkeyKongWrap = lazy(() => import('./components/DonkeyKongWrap'))

const background = css`
  min-height: 100vh;
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

    @media (max-width: ${screenSize.XS}) {
      width: 95%;
`

const contentBody = css`
  padding: 10px 80px;

  @media (max-width: ${screenSize.S}) {
    padding: 10px 30px;
  }

  @media (max-width: ${screenSize.XS}) {
    padding: 10px 10px;
  }
`

function App() {
  return (
    <div className='App' css={background}>
      <div css={content}>
        <Header />
        <div css={contentBody}>
          <RemoveTrailingSlash />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='about' element={<About />} />
            <Route path='resume' element={<Resume />} />
            <Route path='projects/:paintingType' element={<Projects />} />
            <Route path='projects/*' element={<Projects />} />
            <Route path='uses' element={<Uses />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <Suspense>
        <DonkeyKongWrap />
      </Suspense>
    </div>
  )
}

export default App
