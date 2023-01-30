/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type DotButtonPropType = {
  selected: boolean
  onClick: () => void
}

const buttonStyle = css`
  -webkit-appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  margin-left: 0.75rem;

  :after {
    background: #f9f9f9;
    border-radius: 0.2rem;
    width: 100%;
    height: 0.3rem;
    content: '';
    border: 1px solid #545454;
  }

  .embla__dot--selected:after {
    background: linear-gradient(45deg, var(--brand-primary), var(--brand-secondary));
  }
`
export function DotButton(props: DotButtonPropType) {
  const { selected, onClick } = props

  const selectedStyle = () => {
    if (!selected) {
      return
    } else {
      return css`
        :after {
          background: linear-gradient(120deg, white, #545454);
        }
      `
    }
  }

  return (
    <button
      css={css`
        ${buttonStyle};
        ${selectedStyle()}
      `}
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type='button'
      onClick={onClick}
    />
  )
}
