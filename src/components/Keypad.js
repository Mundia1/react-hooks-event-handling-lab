import React from 'react';

class Keypad extends React.Component {
  handleChange = (event) => {
    console.log('Entering password...');
    // You can access the input value using event.target.value if needed
  };

  render() {
    return (
      <input type="password" onChange={this.handleChange} />
    );
  }
}

export default Keypad;