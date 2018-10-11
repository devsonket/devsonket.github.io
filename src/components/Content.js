import React, { Component } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

import Container from './Container';
import HeaderContent from './HeaderContent';
import Footer from './Footer';

class Content extends Component {
  state = {
    data: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getData(id);
  }

  getData = async(id) => {
    const { data } = await axios(`https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/${id}.json`);
    this.setState({data});
  }

  render() {
    const { data } = this.state;

    if(!data) {
      return <div className="loader">
        <BeatLoader color={'#eee'} />
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
                  {items ? items.map(({defination, code}, index) => (
                    <li key={index} className="item">
                      {defination && <p className="def">{defination}</p>}
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
