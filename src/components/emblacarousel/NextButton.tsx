/** @jsxImportSource @emotion/react */
import React from 'react'
import { emblaButton, emblaButtonSvg } from './EmblaCarousel'
import { css } from '@emotion/react'

type NextButtonPropType = {
  enabled: boolean
  onClick: () => void
}

export function NextButton(props: NextButtonPropType) {
  const { enabled, onClick } = props

  return (
    <button
      css={css`
        ${emblaButton};
        right: 1.6rem;
      `}
      className='embla__button embla__button--next'
      onClick={onClick}
      disabled={!enabled}
    >
      <svg css={emblaButtonSvg} className='embla__button__svg' viewBox='0 0 238.003 238.003'>
        <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
      </svg>
    </button>
  )
}
