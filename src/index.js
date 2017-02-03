import React from 'react';
import ReactDOM from 'react-dom';

import {Provider, connect} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {combineForms} from 'react-redux-form';
import thunk from 'redux-thunk';

const initialState = {
  id: 123,
  name: "Introduction to Advertising",
  description: "Learn about advertising",
  textbooks: [
    {
      author: "Joe Smith",
      title: "Mobile Advertising Fundamentals"
    },
    {
      author: "Eli Hinnegan",
      title: "Introduction to Location-Based Advertising"
    },
    {
      author: "Edward Bernays",
      title: "Public Relations"
    }
  ]
};

const store = createStore(combineForms({
  course: initialState
}), applyMiddleware(thunk));

import Main from './app/routes/main/main';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const CourseApp = connect(null)(Main);

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CourseApp/>
      </Provider>
    );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
