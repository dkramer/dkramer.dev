/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { EmblaCarousel } from '../components/emblacarousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'

export function Projects() {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDES = ['meSmall.jpg', 'meSmall.jpg', 'meSmall.jpg', 'meSmall.jpg', 'meSmall.jpg', 'meSmall.jpg', 'meSmall.jpg']

  return (
    <div>
      PROJECTS
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  )
}
