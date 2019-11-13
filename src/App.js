import React, {Component} from 'react';
import SideBarr from './components/SideBarr/SideBarr';
import Toolbar from './components/Toolbar/Toolbar';
import Fondo from './components/fondo/Fondo';
import VideoBackground from './components/VideBackground/VideoBackground';
import Resume from './components/Resume/Resume';

class App extends Component {
  state= {
    sideBarrOpen: false
  };
  clickHandler = () => {
    this.setState((prevState)=>{
      return {sideBarrOpen:!prevState.sideBarrOpen}
    });
  };

  fondoClickHandler = () => {
    this.setState({sideBarrOpen:false})
  };

  render(){ 
    let fondo;

    if(this.state.sideBarrOpen){
      fondo= < Fondo click={this.fondoClickHandler}/>;
    }
    return(
      <div style={{height:'100%'}}>
        < Toolbar clickHandler={this.clickHandler}/>
        < SideBarr show={this.state.sideBarrOpen}/>
        {fondo}
        <main style={{marginTop:'56px'}}>
          <VideoBackground/>
          <Resume/>

        </main>
      </div>
    );
    }
  }

export default App;
