/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { screenSize } from '../chrome/util'

const intro = css`
  max-width: 60%;
  justify-content: left;
  text-align: left;
  padding-bottom: 40px;
`

const section = css`
  display: flex;
  border-left: 0.15em solid #eee;
  padding: 0 20px;
  margin-bottom: 30px;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      text-align: left;
      padding-bottom: 20px;
    }
  }

  h3 {
    margin: 0;
    font-size: 1em;
  }
  @media (max-width: ${screenSize.S}) {
    flex-direction: column;
  }
`

export function Uses() {
  return (
    <div>
      <h1
        css={css`
          text-align: left;
        `}
      >
        Software, doodads, and other things I recommend.
      </h1>
      <div css={intro}>
        I create software 40+ hours per week so having the right tools is important to me. Poor tools can result in lower productivity and
        increased health risk. Here’s a big list of all of my favorite stuff.
      </div>

      <div css={section}>
        <div>Workstation</div>
        <div>
          <ul>
            <li>
              <h3>Desktop i7 32GB RAM</h3>
              <div>
                Built a couple summers ago. Watercooled and <i>mostly</i> silent.
              </div>
            </li>
            <li>
              <h3>LG UltraGear QHD 27-Inch Monitor 27GL850-B</h3>
              <div>Large enough with minimal input lag and color accuracy for my needs.</div>
            </li>
            <li>
              <h3>Standing Desk</h3>
              <div>A project of mine was building the desk I use. It is a river "table" sit stand desk. They say sitting is the new smoking.</div>
            </li>
            <li>
              <h3>HyperX Pulsefire Haste</h3>
              <div>
                This is a very light mouse which makes it ergonomic. It's also wired which I prefer as batteries tend to die at the worst
                possible moment.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div css={section}>
        <div>Development tools</div>
        <div>
          <ul>
            <li>
              <h3>Intellij</h3>
              <div>Makes me wonder how I ever got by with eclipse.</div>
            </li>
            <li>
              <h3>Cygwin</h3>
              <div>A tool that provides linux like functionality to windows.</div>
            </li>
            <li>
              <h3>Sourcetree/git</h3>
              <div>Even for personal projects git is indispensable.</div>
            </li>
            <li>
              <h3>Vercel.com</h3>
              <div>Vercel receives an honorable mention because this website is hosted by it!</div>
            </li>
          </ul>
        </div>
      </div>

      <div css={section}>
        <div>Photography</div>
        <div>
          <ul>
            <li>
              <h3>Canon R5</h3>
              <div>Full frame mirrorless camera.</div>
            </li>
            <li>
              <h3>Laowa 90mm f/2.8 2x Ultra Macro Lens</h3>
              <div>The macro lens I use. Manual focus is a bit tricky but Canon doesn't make anything that focuses closer.</div>
            </li>
            <li>
              <h3>Canon RF 100-500 IS Lens</h3>
              <div>My go-to lens for wildlife photography.</div>
            </li>
            <li>
              <h3>Canon RF 50mm F1.8 STM Lens</h3>
              <div>Not the fastest autofucus, but its size and cost can't be beat.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
