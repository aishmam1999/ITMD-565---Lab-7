import React from 'react';
import DogImage from './DogImage';
import List from './List';


class App extends React.Component {

	constructor(props){
    super(props);
    this.state = {
      name: 'Labrador',
      image: ''
    };
    this.button=this.button.bind(this);
    this.options=this.options.bind(this);
  }

	componentDidMount(){
		fetch('https://dog.ceo/api/breed/'+this.state.name+'/images/random').then(res=>res.json()).then(json=>
			{this.setState({
			 	image: json.message
			 });
		})
	}

	button(){
		this.componentDidMount();
	}

	options(event){
		this.state.name = event.target.value;
		this.componentDidMount();
	}

  render() {

    return (
    	<div style={{textAlign: 'center'}}>
    		<h1>{this.state.name} Dog Image Generator</h1>
    		<h2>David Garcia Martin - dgarciamartin@hawk.iit.edu - ITMD-565</h2>
    		<p>Please press the button to generate a new random image</p>
    		<List options={this.options}></List>
    		<button onClick = {this.button}>Load Image</button>
    		<hr></hr>  
    		<DogImage src={this.state.image} alt={this.state.name}></DogImage>
    	</div>
    );
  }
}

export default App;