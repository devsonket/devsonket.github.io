import React from "react"
import Masonry from "react-masonry-css"
import styled from "@emotion/styled"

import { Sheet } from "./common"

const MasonryContiner = styled(Masonry)`
  .my-masonry-grid_column {
    :first-of-type {
      margin-right: 15px;
    }
    :last-of-type {
      margin-left: 15px;
    }
  }
`

const Item = ({ data }) => {
  return (
    <MasonryContiner
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.contents.map(({ title, items, code: onlyCode }) => (
        <Sheet
          key={title}
          slug={data.slug}
          title={title}
          onlyCode={onlyCode}
          items={items}
        />
      ))}
    </MasonryContiner>
  )
}

export default Item
