
// import React, { useContext } from "react"

// import styled from "styled-components"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import { Box, Grid, Anchor, ResponsiveContext, Text } from "grommet"
// import { Favorite, Chat } from "grommet-icons"
// import Item from "../Menu/Item"


// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.6);
//   z-index: 2;
//   opacity: 0;
//   transition: all 0.3s ease 0s;
// `
// const Content = styled(Box)`
//   z-index: 10;
//   position: absolute;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;
// `

// const Info = styled(Box)`
//   opacity: 0;
//   transition: all 0.4s ease 0s;
// `

// const Wrapper = styled(Anchor)`
//   position: relative;
//   overflow: hidden;
//   > div img {
//     transition: all 0.3s ease 0s !important;
//   }
//   &:hover {
//     ${Overlay} {
//       opacity: 1;
//     }
//     ${Info} {
//       opacity: 1;
//     }
//   }
// `
// const Node = ({ node }) => (
//     <Wrapper plain href={node.permalink}>
//       <Overlay />
//       <GatsbyImage image={node.localImage.childImageSharp.gatsbyImageData} />
//       <Content justify="center">
//         <Info gap="medium" alignSelf="center" direction="row">
//           <Favorite color="white" />
//           <Text color="white">{node.likes}</Text>
//           <Chat color="white" />
//           <Text color="white">{node.comments}</Text>
//         </Info>
//       </Content>
//     </Wrapper>
//   )
  
//   export const Gallery = ({ posts }) => {
//     const size = useContext(ResponsiveContext)
//     return (
//       <Grid
//         justifyContent="start"
//         gap="none"
//         columns={
//           size === `small`
//             ? [`1fr`]
//             : size === `medium`
//             ? [`1fr`, `1fr`]
//             : `350px`
//         }
//       >
//         {posts.edges.map(item => (
//           <Node key={item.node.id} node={item.node} />
//         ))}
//       </Grid>
//     )
//   }
// // const Gallery = ({ posts }) => {
// //   return (
// //     <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(3, 1fr)'
// //     }}>
// //       {posts.edges.map(
// //         item =>
// //           item.node.localImage && (
// //             <GatsbyImage
// //               image={item.node.localImage.childImageSharp.gatsbyImageData}
// //               key={item.node.id}
// //               alt={
// //                 item.node.caption || 'Instagram Post'
// //               }
// //             />
// //           )
// //       )}
// //     </div>
// //   )
// // }

// export default Gallery