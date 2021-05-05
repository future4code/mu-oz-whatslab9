import React, {Component} from 'react';

class NewMessage extends Component {
  state = {
    newMessage: ''
  }
  
  handleChange = event => {
    this.setState({
      newMessage: event.target.value
    })
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.newMessage)
    this.setState({
      newMessage: ''
    })
  }

  render() {
    return(
      <div>
        <textarea value={this.state.newMessage} onChange={this.handleChange}></textarea>
        <button onClick={this.sendMessage}>ENVIAR</button>
        {this.state.newMessage}
      </div>
        )
      }
    }

    export default NewMessage;