import React from 'react';
import './App.css';

import footerStyles from './styles/footer.module.css';
import headerStyles from './styles/header.module.css';

function Header(props) {
  return (
    <header>
      <h1 className={headerStyles.title}>
        <a href="https://ixukw.github.io">ixukw</a>
      </h1>
      WebCrawler Version 2
    </header>
  );
}
function Footer(props) {
  return <footer className={footerStyles.footer}>ixukw</footer>;
}
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="input">
        <p>{this.props.name}: {this.state.value}</p>
        <input type={this.props.type} className={this.props.type} min="0" max={this.props.max} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}
function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="form">
          <Input name="URL" type="text" />
          <Input name="Maximum Nodes" max="10" type="number" />
        </div>

        <div className="graph">
          Graph
          <div id="test"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;