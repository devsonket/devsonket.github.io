import React from 'react';

import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton, EmailShareButton, TumblrShareButton,
  FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon, RedditIcon, EmailIcon, TumblrIcon } from 'react-share';

export default({title, description}) => {
  const url = window.location.href;
  const quote =  `${description}। ডেভ সংকেত থেকে একপলকে '${title}' এর উপর চিটশিট দেখে নিন`
  const size = 24;

  return (
    <ul className="social no-print">
      <h3>সবার সাথে শেয়ার করুন</h3>
      <li>
        <FacebookShareButton
          url={url}
          quote={quote}
          className="btn-share">
          <FacebookIcon
            size={size} round />
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton
          url={url}
          title={title}
          className="btn-share">
          <LinkedinIcon
            size={size} round />
        </LinkedinShareButton>
      </li>
      <li>
        <TwitterShareButton
          url={url}
          title={title}
          className="btn-share">
          <TwitterIcon
            size={size} round />
        </TwitterShareButton>
      </li>
      <li>
        <WhatsappShareButton
          url={url}
          title={title}
          className="btn-share">
          <WhatsappIcon
            size={size} round />
        </WhatsappShareButton>
      </li>
      <li>
        <RedditShareButton
          url={url}
          title={title}
          className="btn-share">
          <RedditIcon
            size={size} round />
        </RedditShareButton>
      </li>
      <li>
        <EmailShareButton
          url={url}
          title={title}
          className="btn-share">
          <EmailIcon
            size={size} round />
        </EmailShareButton>
      </li>
      <li>
        <TumblrShareButton
          url={url}
          title={title}
          className="btn-share">
          <TumblrIcon
            size={size} round />
        </TumblrShareButton>
      </li>
    </ul>
)}
