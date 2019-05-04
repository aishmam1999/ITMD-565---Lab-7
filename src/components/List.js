import React from 'react';

class List extends React.Component {
  render() {
    return (
    	<select onChange={this.props.options}>
    		<option value="Labrador">Labrador</option>
	    	<option value="Pembroke">Pembroke</option>
	    	<option value="Dachshund">Dachshund</option>
	    	<option value="Beagle">Beagle</option>
    	</select>
    );
  }
}

export default List;