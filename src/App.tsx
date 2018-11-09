import * as React from "react";
import './App.css';
import './components/FormOverlay'
import FormOverlay from './components/FormOverlay';

export default class App extends React.Component<{}> {
  public render(){
    return (
      <div className="container-fluid">
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <FormOverlay/>
      </div>
    </div>
    );
  }
}