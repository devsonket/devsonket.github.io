// import React from "react"
// import styled from "@emotion/styled"

// import Header from "./header"
// import TextCloud from "./TextCloud"

// const HeaderIntro = styled.div`
//   padding: 0 50px;
//   text-align: center;
//   padding-bottom: 100px;
//   h1 {
//     color: var(--headline);
//   }
//   p {
//     color: var(--paragraph);
//   }
//   @media only screen and (max-width: 460px) {
//     padding: 0 15px;
//     padding-bottom: 15px;
//   }
//   @media print {
//     padding-bottom: 0px;
//   }
//   input {
//     width: 100%;
//     border: none;
//     background-color: #fff;
//     border: none;
//     color: #272343;
//     padding: 15px;
//     border-radius: 8px;
//     box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
//     transition: 0.2s all ease;
//   }
//   input:focus {
//     outline: none;
//   }
//   p {
//     margin-top: 0px;
//     color: #485663;
//     font-size: 15px;
//   }
// `

// const Intro = ({ input, handleInputChange }) => (
//   <Header>
//     <HeaderIntro>
//       <h1>ডেভেলপার চিটশিট</h1>
//       <p>
//         বাংলা চিটশিটের ভান্ডার। নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে
//         আপনিও যোগ দিন
//       </p>
//       <input
//         placeholder="কিসের উপর চিটশিট চাচ্ছেন?"
//         value={input}
//         onChange={handleInputChange}
//       />
//     </HeaderIntro>
//   </Header>
// )

// export default Intro

import React from "react"
import styled from "@emotion/styled"

import Header from "./header"
import IntroHome from "./introhome"
import IntroItem from "./introitem"

import { Container, Logo, ThinContainer } from "./common"
import { isItDark } from "../utils"

const IntroContainer = styled.div`
  background: ${props => props.colorpref};
`

const Intro = ({ data, islightcolor, colorpref }) => {
  return (
    <IntroContainer colorpref={colorpref}>
      <Container>
        <Header colorpref={colorpref} islightcolor={islightcolor} />
        <ThinContainer>
          {!data ? (
            <IntroHome />
          ) : (
            <IntroItem islightcolor={islightcolor} data={data} />
          )}
        </ThinContainer>
      </Container>
    </IntroContainer>
  )
}

Intro.defaultProps = {
  colorpref: "var(--accentwhite)",
  isLightText: true,
}

export default Intro
