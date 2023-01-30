import { css } from '@emotion/react'

export const menuItems = [
  {
    name: 'About',
    color: '#9aed6f',
    href: 'about'
  },
  {
    name: 'Resume',
    color: '#c879ed',
    href: 'resume'
  },
  {
    name: 'Projects',
    color: '#6fd4ed',
    href: 'projects'
  },
  {
    name: 'Uses',
    color: '#c879ed',
    href: 'uses'
  }
]

export const contactLinks = css`
  color: #404040;
  transition: color 0.2s ease-in;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: #6fd4ed;
  }
`
export const screenSize = {
  XL: '2000px',
  L: '1600px',
  M: '1200px',
  S: '800px',
  XS: '650px'
}

export const borderBottom = css`
  border-bottom: 1px solid #eee;
`
