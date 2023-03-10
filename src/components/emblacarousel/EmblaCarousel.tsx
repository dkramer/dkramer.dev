/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { PrevButton } from './PrevButton'
import { NextButton } from './NextButton'
import { DotButton } from './DotButton'
import { css } from '@emotion/react'
import { screenSize } from '../../chrome/util'

const container = css`
  overflow: hidden;
`

const slideContainer = css`
  display: flex;
`

const slideStyle = css`
  flex: 0 0 auto; /* Adapt slide size to its content */
  min-width: 0;
  max-width: 100%;
`

const emblaStyle = css`
  position: relative;
  padding: 12px 20px;

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  @media (max-width: ${screenSize.XS}) {
    padding: 12px 0;
  }
`

export const emblaButton = css`
  z-index: 1;
  color: var(--background-site);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  -webkit-appearance: none;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  background-color: lightgray;
  opacity: 0.5;
  border-radius: 12px;

  :disabled {
    opacity: 0.3;
  }

  @media (max-width: ${screenSize.XS}) {
    width: 3rem;
    height: 3rem;
  }
`

export const emblaButtonSvg = css`
  width: 65%;
  height: 65%;
`

const dots = css`
  z-index: 1;
  bottom: 1.2rem;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}
export function EmblaCarousel(props: PropType) {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit()
    setScrollSnaps(emblaApi.scrollSnapList())
    scrollTo(0)
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, props.slides])

  return (
    <div css={emblaStyle}>
      <div css={container}>
        <div className='embla__viewport' ref={emblaRef}>
          <div css={slideContainer}>
            {slides.map((slide, index) => (
              <div key={index} className='embla__slide' css={slideStyle}>
                <img css={slideStyle} src={slide} />
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div css={dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
        ))}
      </div>
    </div>
  )
}
