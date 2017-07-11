import React, { Component } from 'react';
import './Basicdemo.css';


class Basicdemo extends Component {
  render() {
    return (
      <div>
        <h1>To do list</h1>
        <input type="text" className="listname"/>
        <ul className="items">
          <li>
            <input type="checkbox" className="chexb"/>
            <input type="text" className="listcxt"/>
            <span className="delicon">x</span>
          </li>
          <li>
            <input type="checkbox" className="chexb"/>
            <input type="text" className="listcxt"/>
            <span className="delicon">x</span>
          </li>
          <li>
            <input type="checkbox" className="chexb"/>
            <input type="text" className="listcxt"/>
            <span className="delicon">x</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Basicdemo;