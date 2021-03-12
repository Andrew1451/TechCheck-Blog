/** @jsx jsx */
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { jsx, css, Styled } from "theme-ui"
import Bio from "./bio"
import { SkipNavLink } from "@reach/skip-nav"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1 // eslint-disable-line
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3 // eslint-disable-line
        as="p"
        css={css({
            textAlign: 'center',
            fontSize: '26px',
            fontWeight: '600',
            marginTop: '25px',
            mb: `0`
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `#657796`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

const Header = ({ children, title, ...props }) => {
    const imageQuery = graphql`
        query MyQuery {
            file(relativePath: {eq: "laptop-pic.jpg"}) {
            id
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    `
    const data = useStaticQuery(imageQuery);
    if (props.location.pathname === rootPath) {
        return (
            <div sx={{height: ['200px', '523px']}}>            
                <Image sx={{height: ['200px', '500px']}} fluid={data.file.childImageSharp.fluid} />
                <div sx={{
                    backgroundColor: '#cacdd2',
                    height: '205px',
                    position: 'relative',
                    top: ['-200px', '-366px'],
                    width: ['100%', '70%'],
                    maxWidth: '1007px',
                    margin: 'auto',
                    boxShadow: ['none', '0 0 13px #ababab']
                    }}> 
                    <header>
                        <SkipNavLink sx={{ variant: `styles.a` }} />
                        <div
                        css={css({
                            maxWidth: `container`,
                            mx: `auto`,
                            px: 3,
                            pt: 4,
                        })}
                        >
                        <div
                            css={css({
                            display: `flex`,
                            justifyContent: `space-between`,
                            alignItems: `center`,
                            mb: 4,
                            })}
                        >
                            <Title {...props}>{title}</Title>
                            {children}
                        </div>
                        {props.location.pathname === rootPath && <Bio />}
                        </div>
                    </header>
                </div>
            </div>
        )
    } else {
        return <Title {...props}>{title}</Title>
    }
}

export default Header