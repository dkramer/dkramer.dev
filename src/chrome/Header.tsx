/** @jsxImportSource @emotion/react */
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { css } from '@emotion/react'
import { menuItems, screenSize } from './util'
import { Link, useLocation } from 'react-router-dom'

const menu = css`
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    border-bottom: 1px solid #eee;

    @media (max-width: ${screenSize.XS}) {
      flex-direction: column;
      align-items: center;
`

const onLeaveBox = css`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  max-width: 800px;
  margin: 0px auto;

  @media (max-width: ${screenSize.XS}) {
    flex-direction: column;
    align-items: center;
`

const link = css`
  padding: 18px 28px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  text-decoration: none;
  color: #111;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 16px;
  margin: 4px 8px;

  @media (max-width: ${screenSize.XS}) {
    padding: 14px 48px;
    margin: 4px 0;
  }
`

const activeLink = css`
  ${link};
  color: #fff;
`

const indicator = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 60px;
`

export function Header() {
  const $root = useRef<HTMLDivElement>(null)
  const $indicator1 = useRef<HTMLDivElement>(null)
  const $indicator2 = useRef<HTMLDivElement>(null)
  const $items = useRef(menuItems.map(() => createRef<HTMLAnchorElement>()))
  const location = useLocation()
  const [active, setActive] = useState(() => {
    const itemIndex = menuItems.findIndex((item) => item.href === location.pathname.split('/')[1])
    return itemIndex === -1 ? 0 : itemIndex
  })
  const [activeHover, setActiveHover] = useState(active)

  const animate = useCallback(() => {
    if ($root.current) {
      const menuOffset = $root.current.getBoundingClientRect()
      const activeItem = $items.current[activeHover].current
      if (activeItem) {
        const { width, height, top, left } = activeItem.getBoundingClientRect()
        const settings = {
          x: left - menuOffset.x,
          y: top - menuOffset.y,
          width: width,
          height: height,
          backgroundColor: menuItems[activeHover].color,
          ease: 'elastic.out(.7, .7)',
          duration: 0.8
        }

        gsap.to($indicator1.current!, {
          ...settings
        })

        gsap.to($indicator2.current!, {
          ...settings,
          duration: 1
        })
      }
    }
  }, [activeHover])

  useEffect(() => {
    window.addEventListener('resize', animate)
    animate()

    return () => {
      window.removeEventListener('resize', animate)
    }
  }, [activeHover, animate])

  return (
    <nav ref={$root} css={menu}>
      <span
        css={onLeaveBox}
        onMouseLeave={() => {
          setActiveHover(active)
        }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={item.name}
            ref={$items.current[index]}
            css={activeHover === index ? activeLink : link}
            onClick={() => {
              setActive(index)
            }}
            onMouseEnter={() => {
              setActiveHover(index)
            }}
            to={item.href}
          >
            {item.name}
          </Link>
        ))}
        <div ref={$indicator1} css={indicator} />
        <div ref={$indicator2} css={indicator} />
      </span>
    </nav>
  )
}
