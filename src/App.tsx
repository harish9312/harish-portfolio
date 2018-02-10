import * as React from 'react';
import { Img } from './Img';
import { Details } from './Details';
import { WorkExp } from './WorkExp';
import { Projects } from './Projects';
import { Footer } from './Footer';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="main-cont" style={{ backgroundColor: 'white', margin: 'auto' }}>
          <Img />
          <Details />
          <WorkExp />
          <Projects />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
