import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import Container from './Container';
import HeaderContent from './HeaderContent';
import Page404 from './404';
import Footer from './Footer';

import contributorMap from '../utils/contributorMap';

class Content extends Component {
  state = {
    data: '',
    contributor: '',
    redirect: false
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getData(id);
  }

  setTitle = () => {
    const { data: { title } } = this.state;
    document.title = `${title} - ডেভেলপার চিটশীট`;
  }

  getData = async(id) => {
    if(!localStorage.getItem('devCon')) {
      localStorage.setItem('devCon', '{}');
    }
    try {
      const { data } = await axios(`https://raw.githubusercontent.com/devsonket/devsonket.github.io/develop/data/${id}.json`);
      let contributor;
      try {
        const getLocalContributor = JSON.parse(localStorage.getItem('devCon'));
        const getCurrentId = getLocalContributor[id];
        const getCurrentTime = Date.now();
        let compareTime = 1000 * 60 * 60;
        if(getCurrentId && (getCurrentId[1] + compareTime >= getCurrentTime)) {
          contributor = getCurrentId[0];
        } else {
          contributor = await axios(`https://api.github.com/repos/devsonket/devsonket.github.io/commits?path=data/${id}.json`);
          contributor = contributorMap(contributor.data);
          let dataForLocalStorage = [contributor, Date.now()];
          getLocalContributor[id] = dataForLocalStorage;
          localStorage.setItem('devCon', JSON.stringify(getLocalContributor));
        }
      } catch(e) {
        contributor = null;
      }
      this.setState({data, contributor});
      this.setTitle();
    } catch(e) {
      this.setState({redirect: true})
    }
  }

  render() {
    const { data, contributor, redirect } = this.state;
    const { match: { url } } = this.props;

    if(redirect && url !== '/404') {
      return <Redirect push to="/404" />
    }

    if(url === '/404') {
      return <Page404 />
    }

    if(!data) {
      return <div className="loader">
        <BeatLoader color={'#333'} />
      </div>;
    }

    return (
      <React.Fragment>
        <HeaderContent title={data.title} description={data.description} contributor={contributor} />
        <Container>
          <div className="single-content">
            {data.contents.map(({title, items, code: onlyCode}, index) => (
              <div key={index} className="single-items">
                <h3>{title}</h3>
                  <ul className="single-item">
                  {items ? items.map(({definition, code}, index) => (
                    <li key={index} className="item">
                      {definition && <p className="def" dangerouslySetInnerHTML={{__html: definition}} />}
                      {code && <pre className="code">
                        <code>{code}</code>
                      </pre>}
                    </li>
                  )) : <pre className="code">
                          <code>{onlyCode}</code>
                       </pre>}
                  </ul>
              </div>
            ))}
          </div>
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Content;
