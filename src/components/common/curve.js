import React from "react"
import styled from "@emotion/styled"

const CurveContainer = styled.div`
  background: ${props => props.color};
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const Curve = ({ children, color }) => {
  return <CurveContainer color={color}>{children}</CurveContainer>
}

Curve.defaultProps = {
  color: "#fff",
}

export { Curve }
