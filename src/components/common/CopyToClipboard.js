import React, { useState } from "react"
import { BsCopy } from "react-icons/bs"
import { BsCheckLg } from "react-icons/bs"
function CopyToClipboard({ textToCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      })
      .catch(error => {
        console.error("Error copying text to clipboard:", error)
      })
  }

  return (
    <>
      <div onClick={handleCopy} style={{ cursor: "pointer" }}>
        {copied ? <BsCheckLg /> : <BsCopy />}
      </div>
    </>
  )
}

export default CopyToClipboard
