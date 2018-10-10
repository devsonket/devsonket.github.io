import React, { Component } from 'react';
import axios from 'axios';

import Container from './Container';
import HeaderContent from './HeaderContent';

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
      return 'Loading';
    }

    return (
      <React.Fragment>
        <HeaderContent title={data.title} description={data.description} />
        <Container>
          <div className="single-content">
            {data.contents.map(({title, items}, index) => (
              <div key={index} className="single-items">
                <h3>{title}</h3>
                  <ul className="single-item">
                  {items.map(({defination, code}, index) => (
                    <li key={index} className="item">
                      <p className="def">{defination}</p>
                      <pre className="code">
                        <code>{code}</code>
                      </pre>
                    </li>
                  ))}
                  </ul>
              </div>
            ))}
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default Content;
