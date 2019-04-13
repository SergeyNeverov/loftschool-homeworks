import React, { Component } from 'react';
import Message from 'components/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.key !== 'Enter') {
      return;
    }

    this.setState(state => ({
      messageInput: '',
      messages: [...this.state.messages, { text: this.state.messageInput }]
    }));
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message text={message.text} key={index} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
