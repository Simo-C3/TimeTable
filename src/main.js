import React from 'react';
import Header from './Components/header';
import Menu from './Components/menu';

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
                <Header/>
                <Menu/>
            </div>
        )
    }
}

export default Main;