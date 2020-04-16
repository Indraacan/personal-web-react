import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="container">
            <h2>Skills</h2>
            <div>
              <ul>
                <li>Bio Informatics</li>
                <li>DevOps</li>
                <li>Programming & Web Development</li>
                <ul>
                  <li>Java Script</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>C</li>
                  <li>c++</li>
                  <li>Phyton</li>
                </ul>
              </ul></div>
            <h2>Languague Ability</h2>
            <div>
              <ul>
                <li>Indonesian</li>
                <li>English</li>
                <li>Chinese</li>
              </ul>
            </div>
            {/* Tools */}
            <h2>Tools</h2>
            <div>
              <ul>
                <li>DevC++</li>
                <li>CodeBlock</li>
                <li>Visual Studio Code</li>
                <li>LINUX</li>
                <li>Windows</li>
              </ul>
            </div>
          </div>
        )
    }
}
