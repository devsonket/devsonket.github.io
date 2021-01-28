import React from "react"
import styled from "@emotion/styled"

const PrintSheetContainer = styled.table`
  border: solid 3px #333;
  @media print {
    break-inside: avoid;
  }
`

export const PrintSheet = ({ children, id }) => (
  <PrintSheetContainer id={id && id}>
    <tbody>{children}</tbody>
  </PrintSheetContainer>
)
