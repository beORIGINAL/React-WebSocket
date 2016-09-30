import {default as React, Component} from 'react';
import {render} from 'react-dom';
import './app.scss';

import config from './configs/connection.config.json';
import WebSocketProvider from './shared/websocket.provider';
import Vacancies from './components/vacancies';

class App extends React.Component {
    constructor (){
        super();
        const socket = new WebSocketProvider(config.host).socket;
        this.state = {
            socket
        };
    }
    
    authorize () {
        
    }
    
    render () {
        return (<Vacancies data={this.state}/>);
    }
}

render(<App/>, document.getElementById('app-view'));
