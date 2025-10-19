/** @jsxImportSource @emotion/react */
import React from 'react'

import {Link, useLocation} from "react-router-dom";
import {Trident} from "../blogs/Trident";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {css} from "@emotion/react";
import {TestingInProd} from "../blogs/TestingInProd";
import {LongLivedBranches} from "../blogs/LongLivedBranches";

const header = css`
    text-align: left;
    padding-left: 2em;
    width: 80%;
`

const blogContainer = css`
  display: flex;
`

const backLink = css`
    margin-left: -1em;
    margin-right: 1em;
    :visited {
        color: #f58742;
    }
    
    .arrow {
        border-radius: 2em;
        border: 2px solid #f58742;
        padding: .2em;
    }
`

const blogList = css`
    width: 80%;
    margin: 0 auto;
    list-style-type: none;
    
    article {
        
    }
    
    li {
        margin-bottom: 1em;
        text-align: left;

        article {
            transition: background-color .4s ease;
            padding: .5em;
            border-radius: .5em;
        
            :hover {
                background-color: #faefe3;
            }
            
            a {
                text-decoration: none;
                color: black;
                
                :visited {
                    color: black;
                }
                
            }
        }

        .readPostContainer {
            display: flex;
            margin-top: 1em;
        }
    }
    
`

const blogItems = new Map<string, {
    name: string
    description: string
    href: string
    component: React.ComponentType
}>();
blogItems.set("featureFlags", {
    name: 'Feature Flags: The Secret Weapon for Faster, Safer Deployments',
    description: 'Feature flags let teams separate deployment from release, enabling code to be safely pushed to production at any time while controlling visibility with a simple toggle. When combined with automated testing and CI/CD, feature flags empower teams to move faster, reduce risk, and release with confidence.',
    href: 'featureFlags',
    component: Trident
});
blogItems.set("testingInProduction", {
    name: 'Why You Should be Testing in Production',
    description: 'Sounds like a punchline, but in modern software engineering it has gone from questionable to essential. Let’s talk about why that’s true, what it really means, and how to do it responsibly.',
    href: 'testingInProduction',
    component: TestingInProd
});
blogItems.set("longLivedBranches", {
    name: 'The Hidden Cost of Long-Lived Branches',
    description: 'Long-lived branches feel safe. They give developers a cozy sense of isolation. But that comfort is expensive — it slows delivery, increases risk, and quietly erodes team velocity.',
    href: 'longLivedBranches',
    component: LongLivedBranches
});


export function Blog() {
    const blogName = useLocation().pathname.split('/')[2] as string
    let blogItem

    if (blogName) {
        blogItem = blogItems.get(blogName)
    }

    if (blogItem) {
        return (
            <div css={blogContainer}>
                <Link css={backLink} to={`/blog`}><ArrowBackIcon className='arrow'></ArrowBackIcon></Link>
                <blogItem.component />
            </div>
        )
    }

    return (
        <div>
            <h1 css={header}>Thoughts on Software Engineering and Developer Experience</h1>
            <ul css={blogList}>
              {Array.from(blogItems.values()).map(link => (
                  <li>
                      <article>
                          <Link
                              key={link.href}
                              to={`/blog/${link.href}`}
                          >
                              <div>
                                  <h2>{link.name}</h2>

                                  <div>{link.description}</div>
                                  <div className='readPostContainer'>Read post<ArrowForwardIcon></ArrowForwardIcon></div>
                              </div>
                          </Link>
                      </article>
                  </li>
              ))}
            </ul>
        </div>
    )
}
