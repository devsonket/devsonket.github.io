import React from 'react';
import Container from './Container';

export default({searchAItem}) => (
  <footer className="footer-area">
    <Container>
      <ul>
        <li><a class="github-button" href="https://github.com/ntkme/github-buttons" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">Star</a></li>
        <li><a class="github-button" href="https://github.com/ntkme/github-buttons/subscription" data-icon="octicon-eye" aria-label="Watch ntkme/github-buttons on GitHub">Watch</a></li>
        <li><a class="github-button" href="https://github.com/ntkme/github-buttons/issues" data-icon="octicon-issue-opened" aria-label="Issue ntkme/github-buttons on GitHub">Issue</a></li>
      </ul>
      <p>এটি সম্পূর্ণ ওপেন সোর্স একটি প্রোজেক্ট</p>
    </Container>
  </footer>
)
