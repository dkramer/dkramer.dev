/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import {menuItems} from "./util";

const footer = css`
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 15px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const menu = css`
    display: flex;
    justify-content: space-between; 
   

    @media (max-width: 400px) {
      color: red;
      flex-direction: column;
      align-items: center;
      margin: 4px 0px;
    }
      
`

const menuItem = css`
    margin: 0 8px;
    color: #404040;
    transition:color .2s ease-in;
    font-weight: bold;
    text-decoration: none;

  @media (max-width: 400px) {
    margin: 4px 0px;
  }
`

export function Footer() {
  return (
      <div css={footer}>
          <div css={menu}>
              {menuItems.map((item, index) => (
                  <a
                      css={css`${menuItem}; :hover { color: ${item.color}`}
                      key={item.name}
                      onClick={() => {
                          //todo change page
                      }}
                      href={item.href}
                  >
                      {item.name}
                  </a>
              ))}
          </div>
        <div css={css`color: #DFDFDF`}>© {new Date().getFullYear()} Dakota Kramer. All rights reserved.</div>
      </div>
  );
}
