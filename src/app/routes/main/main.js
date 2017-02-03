import React, {PropTypes, Component} from 'react';
import {Form, Control, actions} from 'react-redux-form';
import Model from '../../data/model';
import Page from '../../components/page/page';

export default class Main extends Component {
  constructor() {
    super();
    this.formModel = {};
    this.handleCourseSubmit = values => {
      this._handleSaveAllEvent.bind(this, values)(values);
    };
    this.handleCourseDiscard = () => {
      this._handleDiscardAllEvent.bind(this)();
    };
    this.handleUpdateFormValues = form => {
      this._handleUpdateFormValues.bind(this, form)(form);
    };
    this.handleTextbookDiscard = this._handleTextbookDiscardEvent.bind(this);
    this.handleTextbookSave = this._handleTextbookSaveEvent.bind(this);
  }
  _handleDiscardAllEvent() {
    const sourceModel = this.formModel.$form.value;
    if (sourceModel.hasOwnProperty('textbooks')) {
      this.props.dispatch(actions.change('course', sourceModel));
      console.log('All course values have been changed!');
    }
  }
  _handleTextbookDiscardEvent(ev) {
    const fieldId = ev.target.id.slice(-1);
    const sourceModel = this.formModel.$form.value;
    if (sourceModel.textbooks.length) {
      this.props.dispatch(actions.change(`course.textbooks[${fieldId}].author`, sourceModel.textbooks[fieldId].author));
      this.props.dispatch(actions.change(`course.textbooks[${fieldId}].title`, sourceModel.textbooks[fieldId].title));
      console.log('A textbook values have been changed!');
    }
  }
  _handleSaveAllEvent(values) {
    if (values.hasOwnProperty('textbooks')) {
      this.props.dispatch(actions.change('course', values));
      console.log('All course values have been changed!');
    }
  }
  _handleTextbookSaveEvent(ev) {
    const fieldId = ev.target.id.slice(-1);
    if (this.formModel.hasOwnProperty('textbooks')) {
      // this.props.dispatch(actions.change(`course.textbooks[${fieldId}].author`, this.formModel.textbooks[fieldId].author.value));
      // this.props.dispatch(actions.change(`course.textbooks[${fieldId}].title`, this.formModel.textbooks[fieldId].title.value));
      // Research/implement a better way to update nested models
      const name = this.formModel.$form.value.name;
      const description = this.formModel.$form.value.description;
      const textbooks = JSON.parse(JSON.stringify(this.formModel.$form.value.textbooks));
      textbooks[fieldId].author = this.formModel.textbooks[fieldId].author.value;
      textbooks[fieldId].title = this.formModel.textbooks[fieldId].title.value;
      const newObj = {name, description, textbooks};
      this.props.dispatch(actions.change(`course`, newObj));
      console.log('A textbook values have been changed!');
    }
  }
  _handleUpdateFormValues(form) {
    this.formModel = form;
  }
  render() {
    return (<Page content={this._setMainPage()}/>);
  }
  _setMainPage() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="course-desc">
              <Form model="course" onSubmit={this.handleCourseSubmit} onUpdate={this.handleUpdateFormValues}>
                <div className="form-group">
                  <label>Course name</label>
                  <Control.text model=".name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Course description</label>
                  <Control.textarea model=".description" className="form-control"/>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center">
                      <div className="col-md-3">
                        <button className="btn btn-primary" onClick={this.handleSaveAllEvent}>Save All</button>
                      </div>
                      <div className="col-md-3">
                        <button className="btn btn-danger" onClick={this.handleCourseDiscard}>Discard All</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <div className="course-textb">
                      <h2>Textbooks:</h2>
                      <div className="row">
                        {this._getTextBooks()}
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  _getTextBooks() {
    return Model.data.textbooks.map((value, key) => {
      return (
        <div key={value.id} className="col-md-12">
          <div className="form-inline custom-form">
            <div className="form-group custom-field">
              <label>Author</label>
              <Control.text model={`.textbooks[${key}].author`} className="form-control"/>
            </div>
            <div className="form-group custom-field">
              <label>Title</label>
              <Control.text model={`.textbooks[${key}].title`}className="form-control"/>
            </div>
            <div className="form-group custom-field">
              <button type="button" id={`updateBtn${key}`} className="btn btn-primary" onClick={this.handleTextbookSave}>Save</button>
            </div>
            <div className="form-group custom-field">
              <button type="button" id={`discardBtn${key}`} className="btn btn-danger" onClick={this.handleTextbookDiscard}>Discard</button>
            </div>
          </div>
        </div>);
    });
  }
}

Main.propTypes = {
  dispatch: PropTypes.func
};
