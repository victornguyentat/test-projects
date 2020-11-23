import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#46c7f0',
  }
};
// const myTheme = {
//   ...AmplifyTheme,
//   container:{
//     ...AmplifyTheme.container
//   },
//   sectionHeader: {
//     ...AmplifyTheme.sectionHeader
//   },
//   input:{
//     ...AmplifyTheme.input
//   },
//   formSection:{
//     ...AmplifyTheme.formSection,
//     width: '100%'

//   },
//   sectionBody: {
//     ...AmplifyTheme.sectionBody
//   }
// };

class App extends Component {

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
      <div className="App">
        <ChatBot
          title="PEICA"
          theme={myTheme}
          botName="BookTrip_dev"
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
          conversationModeOn={false}
        />
      </div>
    );
  }
}

// import React, { useEffect } from "react";
// import Amplify from "aws-amplify";
// import {AmplifyChatbot} from "@aws-amplify/ui-react";
// import awsconfig from "./aws-exports";

// Amplify.configure(awsconfig);

// function App() {
//   const handleChatComplete = (event) => {
//     const {data, err} = event.detail;
//     if (data) console.log("Chat fulfilled!", JSON.stringify(data));
//     if (err) console.error("Chat failed:", err);
//   };

//   useEffect(() => {
//     const chatbotElement = document.querySelector("amplify-chatbot");
//     chatbotElement.addEventListener("chatCompleted", handleChatComplete);
//     return function cleanup() {
//       chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
//     };
//   }, []);

  
//   return (
//     <div className="App">
//       <AmplifyChatbot
//         botName="BookTrip_dev"
//         botTitle="My ChatBot"
//         welcomeMessage="Hello, how can I help you?"
//       />
//     </div>
//   );

// }

export default App;