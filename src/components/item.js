import React from "react"
import Masonry from "react-masonry-css"

import { Sheet } from "./common"

const Item = ({ data }) => {
  return (
    <Masonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.contents.map(({ title, items, code: onlyCode }, index) => (
        <Sheet
          index={index}
          slug={data.slug}
          title={title}
          onlyCode={onlyCode}
          items={items}
        />
      ))}
    </Masonry>
  )
}

export default Item
