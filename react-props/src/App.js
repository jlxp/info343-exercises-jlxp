import React, { Component } from 'react';

import './App.css';
import Button from "./Button";
import Card from "./Card";
import Alerts from "./Alerts";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Button caption="Click Me!" kind="primary"/>
        <Button caption="No Click Me!" kind="secondary"/>

        <Card title="Sample Card">
          This is some <strong>sample text </strong>
          <div>
            <Button caption="Button in Card" />
          </div>
        </Card>
        <Alerts caption="This is alert!" kind="secondary"/>
      </div>
    );
  }
}

export default App;