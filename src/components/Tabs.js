import React, { Component } from 'react';
import './tabs.css';

class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = { openTabName: 'home' }
    }


    // Intentionally made 2 ways of handling tab changes
    betterTabChange = (newValue) => this.setState({ openTabName: newValue });
    handleTabChange = (e) => this.setState({ openTabName: e.target.getAttribute('name') });    


    render() {
        const openTabName = this.state.openTabName;
        const firstMethod = this.betterTabChange;
        const secondMethod = this.handleTabChange;
        return (
            <div>
                <div className="tab-container">
                    <ul id="nav-tab" className="nav">
                        <li name='home' className="active" onClick={ () => firstMethod('home') }>Home</li>
                        <li name='profile' onClick={ () => firstMethod('profile') }>Profile</li>
                        <li name='messages' onClick={ secondMethod }>Messages</li>
                        <li name='settings' onClick={ secondMethod }>Settings</li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-panel ${openTabName === 'home' ? "active" : "" }`} id="home">
                            <h4>Home</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta.</p>
                        </div>
                        <div className={`tab-panel ${openTabName === 'profile' ? "active" : "" }`} id="profile">
                            <h4>Profile</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta.</p>
                        </div>
                        <div className={`tab-panel ${openTabName === 'messages' ? "active" : "" }`} id="messages">
                            <h4>Messages</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quos, at qui aspernatur minus animi hic sunt necessitatibus incidunt molestiae reprehenderit ratione neque odit ipsa.</p>
                        </div>
                        <div className={`tab-panel ${openTabName === 'settings' ? "active" : "" }`} id="settings">
                            <h4>Settings</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus sed odit iste vitae, magnam amet illum laudantium ea!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabs;
