import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';
import footerStyles from './styles/footer.module.css';
import headerStyles from './styles/header.module.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import GraphVis from 'react-graph-vis';

function SubmitButton(props) {
  var toValue = `${props.url}/${props.maxNodes}`
  return (
    <Router>
      <button className="input" type="button" to={toValue}>Crawl</button>
    </Router>
  );
}
const Header = () => {
  return (
    <header>
      <h1 className={headerStyles.title}>
        <a href="https://ixukw.github.io">ixukw</a>
      </h1>
      WebCrawler
    </header>
  );
}

const Footer = () => {
  return <footer className={footerStyles.footer}>ixukw</footer>;
}
const Input = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="input">
      <p>{this.props.name}: {this.state.value}</p>
      <input type={this.props.type} className={this.props.type} min="0" max={this.props.max} value={this.state.value} onChange={this.handleChange}/>
    </div>
  );
  
}
const Graph = () => {
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]
  };
  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <GraphVis
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}
const App = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col>
          Input
        </Col>
        <Col>
          Graph
          <Graph/>
        </Col>
      </Row>
      <Row className="fixed-bottom">
        <Footer />
      </Row>
    </Container>
    /*<div className="container">
      <Header />
      <main className="main">
        <div className="left">
          <div className="form">
            <Input name="URL" type="text" />
            <Input name="Maximum Nodes" max="10" type="number" />
            
          </div>
        </div>
        <div className="right">
          <div className="graph">
            Graph
          </div>
        </div>
      </main>
      <Footer />
          </div>*/
  );
}

export default App;