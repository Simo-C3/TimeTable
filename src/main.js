import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/header';
import Menu from './Components/menu';
import Calendar from './Components/Calendar/calendar';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: "",
            user_name: "",
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header/>
                        <Menu/>
                        <Route exact path='/' component={Calendar}/> 
                    </div>
                </Router>
            </div>
        )
    }
}

export default Main;