/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { EmblaCarousel } from '../components/emblacarousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { picture, pictureLinks, pictures, PictureTypes } from './projectPictureUtil'
import { Link, useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import {contactLinks, menuItems} from '../chrome/util'
import GitHubIcon from "@mui/icons-material/GitHub";

const pictureSelectLink = css`
  margin: 0 8px;
  color: #404040;
  transition: color 0.2s ease-in;
  font-weight: bold;
  text-decoration: underline;
  font-size: 20px;
`

const pictureSelectContainer = css`
  padding: 10px;
`

function getRandom(arr: picture[], amount: number) {
  const result = new Array(amount)
  let len = arr.length
  const taken = new Array(len)
  if (amount > len) throw new RangeError('getRandom: more elements taken than available')
  while (amount--) {
    const x = Math.floor(Math.random() * len)
    result[amount] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

const countRandomPictures = 7
export function Projects() {
  const [images, setImages] = useState<null | string[]>(null)

  const pictureType = location.pathname.split('/')[2]

  const navigate = useNavigate()

  useEffect(() => {
    if (pictureType === 'random') {
      setImages(getRandom(pictures, countRandomPictures).map((picture) => picture.type + '/' + picture.url))
    } else if (!(Object.values(PictureTypes) as string[]).includes(pictureType)) {
      navigate('/projects/random', { replace: true })
      setImages(getRandom(pictures, countRandomPictures).map((picture) => picture.type + '/' + picture.url))
    } else {
      setImages(pictures.filter((picture) => picture.type === pictureType).map((picture) => picture.type + '/' + picture.url))
    }
  }, [location.pathname])

  const OPTIONS: EmblaOptionsType = {}

  return (
    <div>
      <div css={css`padding-bottom: 20px`}>
        <a css={contactLinks} href='https://github.com/dkramer'>
          <GitHubIcon /> Check out my Github or look at my other hobbies below!
        </a>
      </div>
      <div css={pictureSelectContainer}>
        {pictureLinks.map((link) => (
          <Link
              key={link.href}
              css={pictureType === link.href ? css`${pictureSelectLink}; color: ${ link.color};` : css`${pictureSelectLink}; :hover { color: ${link.color}`}
              to={`/projects/${link.href}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>{images ? <EmblaCarousel slides={images} options={OPTIONS} /> : <div>loading</div>}</div>
    </div>
  )
}
