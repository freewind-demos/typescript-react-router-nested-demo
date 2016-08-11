import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Editor extends Component {
  render() {
    return <div>
      <div>Editor</div>
      <div>
        <div>This is the editor</div>
        <div><Link to='/previewer'>to previewer</Link></div>
      </div>
    </div>;
  }
}