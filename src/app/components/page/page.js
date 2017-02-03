import React, {PropTypes, Component} from 'react';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import Body from '../body/body';

export default class Page extends Component {
  render() {
    return (
      <div className="page-ctn">
        <Header/>
        <main >
          <Body content={this.props.content}/>
        </main>
        <Footer/>
      </div>
    );
  }
}

Page.propTypes = {
  content: PropTypes.element
};
