import React from 'react';
import Container from './Container';

export default({searchAItem}) => (
  <footer className="footer-area">
    <Container>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" className="github-button" href="https://github.com/devsonket/devsonket.github.io">Star</a></li>
        <li><a target="_blank" rel="noopener noreferrer" className="github-button" href="https://github.com/devsonket/devsonket.github.io/subscription">Watch</a></li>
        <li><a target="_blank" rel="noopener noreferrer" className="github-button" href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE&body=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4&labels=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE">Issue</a></li>
      </ul>
      <p>এটি সম্পূর্ণ ওপেন সোর্স একটি প্রোজেক্ট</p>
    </Container>
  </footer>
)
