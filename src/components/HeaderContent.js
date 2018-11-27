import React, { PureComponent } from 'react';

import NavBar from './NavBar';
import SocialShare from './SocialShare';

export default class HeaderContent extends PureComponent {
  render() {
    const {title, description, contributor} = this.props;

    return (
      <header className="header-area">
        <div className="header">
          <NavBar />
          <div className="intro">
            <h1>{title}</h1>
            <p>{description}</p>
            <ul className="contributor">
              <p>কন্ট্রিবিউটর</p>
              {Object.keys(contributor).map(oneContributor => (
                <li key={oneContributor}>
                  <div className="contributor-profile">
                    <a rel="noopener noreferrer" target="_blank" href={contributor[oneContributor].html_url}><img alt={contributor[oneContributor].login} src={contributor[oneContributor].avatar_url} /></a>
                    <span>{contributor[oneContributor].count}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="print no-print">
              <button className="btn btn-print" onClick={() => window.print()}>প্রিন্ট করুন</button>
            </div>
            <SocialShare title={title} description={description} />
          </div>
        </div>
      </header>
    )
  }
}
