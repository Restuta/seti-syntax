import config from '../config';
import React from 'react';
import {Link} from 'react-router';

@withStyles(styles)
class SoundCloud extends SoundCloudAudio {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    state: PropTypes.object,
    onClick: PropTypes.func
  };

  constructor(clientid) {
    var someVar = clientId;
    super(clientId);
    this._events = {};
  }

  on(e, fn) {
    this.audio.addEventListener(e, fn, false);
  }
}

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

let TodoApp = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      text: ''
    };
  },
  onChange: function(e) {
    this.setState({
      text: e.target.value
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({
      items: nextItems,
      text: nextText
    });
  },
  render() {
    const TEST = 'bla';
    var trak = this.props.track;

    return (
      <div style={styles}>
        <h3>TODO</h3>
        <TodoList items={this.state.items} style="bla"/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text}/>
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <Link className="link">Link #1</Link>
      </div>
    );
  }
});

React.render(<TodoApp/>, mountNode);

export default new Test();
