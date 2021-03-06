/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import Image from "gatsby-image"
 import { Styled, css, Flex } from "theme-ui"
 import BioContent from "./bio-content"
 
 const Bio = () => {
   const data = useStaticQuery(bioQuery)
   const {
     site: {
       siteMetadata: { author },
     },
     avatar,
   } = data
 
   return (
     <Flex css={css({ mb: 4, alignItems: `center` })}>
       {avatar ? (
         <Image
           fixed={avatar.childImageSharp.fixed}
           alt={author}
           css={css({
             mr: 16,
             mb: 0,
             width: 60,
             minWidth: 60,
             borderRadius: 99999,
           })}
         />
       ) : (
         <div
           css={css({
             mr: 2,
             mb: 0,
             width: 60,
             minWidth: 60,
             borderRadius: 99999,
           })}
           role="presentation"
         />
       )}
       <Styled.div> {/* eslint-disable-line */}
         <BioContent />
       </Styled.div>
     </Flex>
   )
 }
 
 const bioQuery = graphql`
   query BioQuery {
     site {
       siteMetadata {
         author
       }
     }
     avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
       childImageSharp {
         fixed(width: 60, height: 60) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `
 
 export default Bio