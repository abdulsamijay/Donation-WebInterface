import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person' ;

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handle(event){
        this.setState({
          value:event.target.value  
        })
        console.log(this.state.value);
    }

    render() {
        return (
            <div className="App" >
                <h1>Donate !</h1>
                <input onChange={this.handle.bind(this)}  type="number" />
            <Person abc={this.state.value} />
                
            </div>
        );
    }
}

export default App