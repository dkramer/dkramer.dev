/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";


const menu = css`
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    border-top: 1px solid #eee;

    @media (max-width: 650px) {
      flex-direction: column;
      align-items: center;
`

export function Footer() {
  return (
      <div>
          <div css={menu}>
              FOOTER
          </div>
        <div css={css`color: #DFDFDF`}>© {new Date().getFullYear()} Dakota Kramer. All rights reserved.</div>
      </div>
  );
}
