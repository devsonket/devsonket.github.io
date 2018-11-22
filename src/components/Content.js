import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import Container from './Container';
import HeaderContent from './HeaderContent';
import Page404 from './404';
import Footer from './Footer';

class Content extends Component {
  state = {
    data: '',
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
    try {
      const { data } = await axios(`https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/${id}.json`);
      this.setState({data});
      this.setTitle();
    } catch(e) {
      this.setState({redirect: true})
    }
  }

  render() {
    const { data, redirect } = this.state;
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
        <HeaderContent title={data.title} description={data.description} />
        <Container>
          <div className="single-content">
            {data.contents.map(({title, items, code: onlyCode}, index) => (
              <div key={index} className="single-items">
                <h3>{title}</h3>
                  <ul className="single-item">
                  {items ? items.map(({definition, code}, index) => (
                    <li key={index} className="item">
                      {definition && <p className="def">{definition}</p>}
                      <pre className="code">
                        <code>{code}</code>
                      </pre>
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
