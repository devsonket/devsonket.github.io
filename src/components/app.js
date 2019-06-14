import React from "react"

import Footer from "./footer"

export default ({ children, noFooter }) => (
  <div>
    {children}
    {!noFooter && <Footer />}
  </div>
)
