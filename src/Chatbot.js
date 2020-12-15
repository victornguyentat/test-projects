import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
import {Box, Image} from 'grommet';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#46c7f0',
  }
};

class Chatbot extends Component {

  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Trip booked. Thank you! what would you like to do next?';
  }

  render() {
    return (
      <>
        <Box fill gap="xsmall" background="url(/Background.png)">
          <Box fill gap="xsmall" align="center" justify="center" animation="fadeIn">
            <ChatBot
              title="PEICA"
              theme={myTheme}
              botName="BookTrip_dev"
              welcomeMessage="Welcome, how can I help you today?"
              onComplete={this.handleComplete.bind(this)}
              clearOnComplete={true}
              conversationModeOn={false}
            />
          </Box>
        </Box>
      </>
    );
  }
}

export default Chatbot;