import React, { Component } from 'react';
import '../../../../css/backOfficeCSS/tablesCSS/timeLineTables.css';
import { postData, getData } from '../../../../sendAPIRequest';

class TimeLineTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      year: '',
      image: '',
      description: '',
      story: '',
      timeLine: [],
      id: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.exitEditPage = this.exitEditPage.bind(this);

    if (this.props.data != null) {
      this.props.data.then(res => {
        this.setState({
          title: res.title,
        });
        this.setState({
          year: res.year,
        });
        this.setState({
          image: res.image,
        });
        this.setState({
          description: res.description,
        });
        this.setState({
          story: res.story,
        });
        this.setState({
          id: res.storyId,
        });

        document.getElementById('title').value = res.title;
        document.getElementById('year').value = res.year;
        document.getElementById('image').value = res.image;
        document.getElementById('description').value = res.description;
        document.getElementById('storyBox').value = res.story;
      });
    }
  }

  exitEditPage() {
    var editTimeLines = document.getElementById('editTimeLines');
    editTimeLines.style.display = 'none';
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(data) {
    if (
      this.state.title == '' ||
      this.state.year == '' ||
      this.state.description == '' ||
      this.state.story == ''
    ) {
      alert('Please fill all fields');
      return;
    }

    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.getElementById('image').value = '';
    document.getElementById('description').value = '';
    document.getElementById('storyBox').value = 'Legg til historie her...';

    if (this.props.formType == 'add') {
      postData(
        {
          title: this.state.title,
          year: this.state.year,
          image: this.state.image,
          description: this.state.description,
          story: this.state.story,
        },
        'addTimeLine'
      ).then(result => {
        if (typeof result !== 'undefined' && result.statusCode == 200) {
          alert(
            'Database has been successfully updated, please refresh the page to view newly inserted entry.'
          );
        } else {
          alert('something went wrong');
        }
      });
    } else if (this.props.formType == 'update') {
      postData(
        {
          title: this.state.title,
          year: this.state.year,
          image: this.state.image,
          description: this.state.description,
          story: this.state.story,
          storyId: this.state.id,
        },
        'updateTimeLineId'
      ).then(result => {
        if (typeof result !== 'undefined' && result.statusCode == 200) {
          alert(
            'Database has been successfully updated, please refresh the page to view updated entry.'
          );
          this.props.history.push('/backOffice');
          window.location.reload();
        } else {
          alert('Something went wrong during update.');
        }
      });
    }
  }

  componentDidMount() {
    var DBTable = getData('showTimeLineDB');
    var data = [];

    DBTable.then(res => {
      console.log(res);
      if (res.statusCode == 200) {
        for (let i = 0; i < res.data.length; i++) {
          data.push(
            <div className="DBtimeLines" id={i}>
              <div className="TimeLineData-1"> {res.data[i].storyId} </div>
              <div className="TimeLineData-2"> {res.data[i].title} </div>
              <div className="TimeLineData-3"> {res.data[i].year} </div>
              <div className="TimeLineData-4"> {res.data[i].image} </div>
              <div className="TimeLineData-5"> {res.data[i].description} </div>
              <div className="TimeLineData-6"> {res.data[i].story} </div>
              <div className="deleteBtn">
                <a href={'backOffice?deleteTimeLineId=' + res.data[i].storyId}>
                  <button type="button" className="btn">
                    <i className="fa fa-trash" />
                  </button>
                </a>
                <a href={'backOffice?updateTimeLineId=' + res.data[i].storyId}>
                  <button type="button" className="btn">
                    <i className="fa fa-gear" />
                  </button>
                </a>
              </div>
            </div>
          );
        }
      }
      this.setState({
        timeLine: data,
      });
    });
  }

  render() {
    return (
      <div className="editTimeLines" id="editTimeLines">
        <div className="timeLineTables" id="timeLineTables">
          <a
            href="javascript:void(0);"
            id="icon"
            className="closingIcon"
            onClick={this.exitEditPage}
          >
            <i className="fa fa-times" />
          </a>
          <h2 id="timeLineHeading"> Legg til historie om kulturhus </h2>
          <div className="timeLineForm">
            <label htmlFor="title"> Title </label>
            <input
              className="input_fields"
              type="text"
              id="title"
              name="title"
              onChange={e => this.handleChange(e)}
            />
            <label htmlFor="year"> År </label>
            <input
              className="input_fields"
              type="text"
              id="year"
              name="year"
              onChange={e => this.handleChange(e)}
            />
            <label htmlFor="url"> Legg URL til bilde </label>
            <input
              className="input_fields"
              type="text"
              name="image"
              id="image"
              accept="URL"
              onChange={e => this.handleChange(e)}
            />
            <label htmlFor="description"> Bilde beskrivelse </label>
            <input
              className="input_fields"
              type="text"
              id="description"
              name="description"
              placeholder="skriv kort om bilde "
              onChange={e => this.handleChange(e)}
            />
            <textarea
              name="story"
              className="storyBox"
              id="storyBox"
              onChange={e => this.handleChange(e)}
              minLength="30"
              maxLength="700"
              rows="10"
            >
              Legg til historie her...
            </textarea>
            <label htmlFor="submit" name="submit" />
            <input
              className="input_button"
              type="submit"
              onClick={e => this.handleSubmit(this.state)}
            />
          </div>
        </div>
        <div className="dbTablesHeader">
          <div className="label">
            <h3> storyId </h3>
          </div>
          <div className="label">
            <h3> title </h3>
          </div>
          <div className="label">
            <h3> year </h3>
          </div>
          <div className="label">
            <h3> image </h3>
          </div>
          <div className="label">
            <h3> description </h3>
          </div>
          <div className="label">
            <h3> story </h3>
          </div>
          <div className="label">
            <h3> delete </h3>
          </div>
          {this.state.timeLine}
        </div>
      </div>
    );
  }
}

export default TimeLineTables;
