/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { borderBottom, contactLinks, screenSize } from '../chrome/util'

const main = css`
  display: flex;
  flex-direction: column;
`

const head = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
  ${borderBottom};
  @media (max-width: ${screenSize.XS}) {
    flex-direction: column;
`

const contact = css`
  ${contactLinks};
  svg {
    font-size: 1.25em;
    margin-right: 4px;
  }
`

const section = css`
  display: flex;
  ${borderBottom};

  @media (max-width: ${screenSize.S}) {
    flex-direction: column;
  }

  h2 {
    font-style: italic;
  }

  li {
    text-align: left;
  }
`

const skills = css`
  ${section};

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      text-align: left;
      width: 10.5em;
    }
  }
`

const jobTitle = css`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding-top: 20px;
`
const jobRole = css`
  display: flex;
  justify-content: space-between;
  font-style: italic;
`

const educationDetail = css`
  width: 100%;
  margin-left: 20px;
`
export function Resume() {
  return (
    <div css={main}>
      <div css={head}>
        <div css={{ textAlign: 'left' }}>
          <h1 css={{ margin: 0 }}>Dakota Kramer</h1>
          <div>Senior Software Engineer</div>
        </div>
        <div css={{ textAlign: 'left' }}>
          <div>
            <a css={contact} href='mailto=dakota@dkramer.dev'>
              <EmailIcon /> dakota@dkramer.dev
            </a>
          </div>
          <div>
            <Link css={contact} to='/Dakota_Kramer_2023_resume.pdf' target='_blank' download>
              <FileDownloadIcon /> Download Resume
            </Link>
          </div>
        </div>
      </div>

      <div css={skills}>
        <div>
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
            <li>Full Stack</li>
            <li>Spring</li>
            <li>Maven</li>
            <li>Gradle</li>
            <li>NoSql</li>
            <li>Elasticsearch</li>
            <li>DynamoDB</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>HTML5</li>
            <li>Emotion js</li>
            <li>CSS/LESS</li>
            <li>Agile</li>
            <li>AWS</li>
            <li>Restful API</li>
            <li>SOAP Web Services</li>
            <li>Security Development Lifecycle</li>
          </ul>
        </div>
      </div>

      <div css={section}>
        <div>
          <h2>Experience</h2>
        </div>
        <div>
          <ul>
            <li>Developing fast, reliable, and performant web applications</li>
            <li>
              Facilitating clarity in stakeholder requirements by leading the team around best practices throughout the entire software
              development lifecycle
            </li>
            <li>Increasing speed to market with zero downtime releases, kubernetes, docker, and code toggles</li>
            <li>Increasing customer confidence with automated tests and reliable monitoring</li>
            <li>
              Optimize data retrieval for the unique and varied needs of stakeholders and customers by utilizing a diversified set of
              databases such as SQL, DynamoDB, and Elasticsearch
            </li>
            <li>
              Letting customers take control of their data by implementing a public facing restful API abstracting out multiple complex
              microservices
            </li>
            <li>Increasing customer base by implementing accessible web UIs meeting section 508 compliance</li>
          </ul>
        </div>
      </div>

      <div css={section}>
        <div>
          <div css={jobTitle}>
            <div>Widen / Acquia</div>
            <div>Remote / Madison, Wisconsin</div>
          </div>
          <div css={jobRole}>
            <div>Senior Software Engineer</div>
            <div>January 2019 to Present</div>
          </div>
          <div>
            <ul>
              <li>Lead the use of code toggles for schedulable, revertible feature releases</li>
              <li>
                Lead the elevation of coding standards through code toggles and automated testing, which accelerated the speed and
                reliability of deploys and changes by 300%
              </li>
              <li>
                Develop new microservices unlocking a total addressable market of $9 billion in the Product Information Management industry
              </li>
              <li>Enhanced developer experience by leveraging TypeScript and Emotion Js to pursue type safe, quality code</li>
              <li>Provide users with quick search results with DynamoDb, mySql, and Elasticsearch</li>
              <li>
                Increase customer trust in data integrity by maintaining, enhancing, and working in an Event Sourced system utilizing
                Command and Query Responsibility Segregation (CQRS)
              </li>
              <li>Abstract away multiple complex microservices for ease of customer use of Public API</li>
              <li>Ensure system performance by utilizing Pub/Sub pattern and queues for Java batch applications</li>
              <li>Create searchable and digestible documentation for stakeholders and developers in Confluence and Jira</li>
            </ul>
          </div>
        </div>
      </div>

      <div css={section}>
        <div>
          <div css={jobTitle}>
            <div>Great Lakes Higher Education / Nelnet</div>
            <div>Madison, Wisconsin</div>
          </div>
          <div css={jobRole}>
            <div>Senior Software Engineer</div>
            <div>April 2015 to January 2019</div>
          </div>
          <div>
            <ul>
              <li>Maintained and enhanced a call center Java Spring web application</li>
              <li>Provided users with quick search results with DB2 Native Stored Procedures and myBatis</li>
              <li>Created searchable and digestible documentation for stakeholders and developers in Confluence and Jira</li>
              <li>
                Reviewed code security audits, prioritized issues with stakeholders, and remediated security issues and concerns as team
                Security Advisor
              </li>
              <li>
                Audited, prioritized issues with stakeholders, and remedied accessibility issues to maintain section 508 accessibility
                requirements to maintain contractual obligations as team Web Accessibility Advisor
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div css={section}>
        <div>
          <div css={jobTitle}>
            <div>Hewlett Packard</div>
            <div>Madison, Wisconsin</div>
          </div>
          <div css={jobRole}>
            <div>Developer II</div>
            <div>February 2012 to March 2015</div>
          </div>
          <div>
            <ul>
              <li>Maintained and enhanced a vaccine registry system</li>
              <li>
                Optimized data retrieval for the unique and varied needs of stakeholders and customers by designing and implementing
                normalized transactional SQL database and SQL data mart
              </li>
              <li>Designed and implemented a customizable and predictive vaccine ordering system optimizing customer's workflow</li>
              <li>
                Allowed real-time vaccine registry updates through implementing SOAP web service minimizing reporting delay and
                deduplication issues
              </li>
              <li>Let customers query vaccination statistics by implementing pdf reports with JasperReports and iReports</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        css={css`
          ${section};
          border: none;
        `}
      >
        <div>
          <h2>Education</h2>
        </div>
        <div css={educationDetail}>
          <div css={jobTitle}>
            <div>Madison Area Technical College</div>
            <div>Madison, Wisconsin</div>
          </div>
          <ul>
            <li>Associate of Applied Science Degree, Web Analyst/Programmer</li>
            <li>Honors—Dean’s List – High Honors: Fall 2009 to Spring 2012</li>
            <li>Graduation Date: May 2012</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
