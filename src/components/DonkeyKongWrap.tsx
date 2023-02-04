/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { useDonkeyKongWrap } from '../hooks/useDonkeyKongWrap'
import { Box, Modal } from '@mui/material'
import { css } from '@emotion/react'

const modalSxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24
}

const abStyle = css`
  margin: 40px;
  font-size: 6em;
  padding: 0 1em;
`

const iframeStyle = css`
  height: calc(80vw * 0.5625);
  width: 80vw;
`

const DonkeyKongWrap = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAbOpen, setIsAbOpen] = useState(false)
  const [isBClicked, setIsBClicked] = useState(false)

  const dkSuccess = useDonkeyKongWrap()

  useEffect(() => {
    if (dkSuccess.success) {
      setIsOpen(dkSuccess.success)
    }
    if (dkSuccess.showKeyboard) {
      setIsAbOpen(dkSuccess.showKeyboard)
    }
  }, [dkSuccess])

  return (
    <span>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={modalSxStyle}>
          <iframe
            css={iframeStyle}
            src='https://www.youtube.com/embed/RcP91tQ4ZSM'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>

      <Modal
        open={isAbOpen}
        onClose={() => setIsAbOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalSxStyle}>
          <button
            css={abStyle}
            onClick={() => {
              if (isBClicked) {
                setIsAbOpen(false)
                setIsBClicked(false)
              }
              setIsBClicked(true)
            }}
          >
            B
          </button>
          <button
            css={abStyle}
            onClick={() => {
              if (isBClicked) {
                setIsOpen(true)
              }
              setIsAbOpen(false)
              setIsBClicked(false)
            }}
          >
            A
          </button>
        </Box>
      </Modal>
    </span>
  )
}

export default DonkeyKongWrap
