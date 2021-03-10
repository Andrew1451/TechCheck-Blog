import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
        backgroundColor: '#cacdd1',
        pb: '16px',
        display: 'flex',
        justifyContent: 'space-around',
        p: ['16px 0', '16px 95px'],
        /* padding-left: 26px; */
        /* text-align: center; */
        /* padding: 16px 95px; */
    })}
  >
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
  </footer>
)
export default Footer