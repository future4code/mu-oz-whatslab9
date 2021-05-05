import React, {Component} from 'react';
import Messages from './components/messages/Messages';
import NewMessage from './components/newMessage/NewMessage'

class App extends Component {
  state = {
    newMessages: '',
    messages: []
  }
  sendMessage = message => {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }
  render() {
    return(
      <div>
        <Messages messages={this.state.messages}/>
        <NewMessage sendMessage={this.sendMessage}/>
      </div>
    )
  }
}

export default App;
