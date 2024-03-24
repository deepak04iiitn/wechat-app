import { ChatEngine } from "react-chat-engine";

import './App.css';

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="2c9ca4f0-eb7f-451b-ac6d-629d54c76895"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    )
}

export default App;