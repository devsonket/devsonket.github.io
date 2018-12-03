import React from "react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
  TumblrIcon
} from "react-share";

import styled from "@emotion/styled";

const SocialButtons = styled.ul`
  list-style: none;
  text-align: center;
  padding: 15px 0;

  h3 {
    margin-bottom: 15px;
    font-size: 16px;
  }

  li {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
  }
`;

export default ({ title, description }) => {
  const url = window.location.href;
  const quote = `${description}। ডেভ সংকেত থেকে একপলকে '${title}' এর উপর চিটশিট দেখে নিন`;
  const size = 24;

  return (
    <SocialButtons className="no-print">
      <h3>সবার সাথে শেয়ার করুন</h3>
      <li>
        <FacebookShareButton url={url} quote={quote} className="btn-share">
          <FacebookIcon size={size} round />
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton url={url} title={title} className="btn-share">
          <LinkedinIcon size={size} round />
        </LinkedinShareButton>
      </li>
      <li>
        <TwitterShareButton url={url} title={title} className="btn-share">
          <TwitterIcon size={size} round />
        </TwitterShareButton>
      </li>
      <li>
        <WhatsappShareButton url={url} title={title} className="btn-share">
          <WhatsappIcon size={size} round />
        </WhatsappShareButton>
      </li>
      <li>
        <RedditShareButton url={url} title={title} className="btn-share">
          <RedditIcon size={size} round />
        </RedditShareButton>
      </li>
      <li>
        <EmailShareButton url={url} title={title} className="btn-share">
          <EmailIcon size={size} round />
        </EmailShareButton>
      </li>
      <li>
        <TumblrShareButton url={url} title={title} className="btn-share">
          <TumblrIcon size={size} round />
        </TumblrShareButton>
      </li>
    </SocialButtons>
  );
};
