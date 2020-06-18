import React, { Component } from 'react';
import './tabs.css';

class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = { openTabName: 'home' }
    }


    // Intentionally made 2 ways of handling tab changes
    handleTabChange = (e) => this.setState({ openTabName: e.target.getAttribute('name') });    
    betterTabChange = (newValue) => this.setState({ openTabName: newValue })

    render() {
        return (
            <div>
                <div className="tab-container">
                    <ul id="nav-tab" className="nav">
                        <li name='home' className="active" onClick={ () => this.betterTabChange('home') }>Home</li>
                        <li name='profile' onClick={ () => this.betterTabChange('profile') }>Profile</li>
                        <li name='messages' onClick={ this.handleTabChange }>Messages</li>
                        <li name='settings' onClick={ this.handleTabChange }>Settings</li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-panel ${this.state.openTabName === 'home' ? "active" : "" }`} id="home">
                            <h4>Home</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta.</p>
                        </div>
                        <div className={`tab-panel ${this.state.openTabName === 'profile' ? "active" : "" }`} id="profile">
                            <h4>Profile</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta.</p>
                        </div>
                        <div className={`tab-panel ${this.state.openTabName === 'messages' ? "active" : "" }`} id="messages">
                            <h4>Messages</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quos, at qui aspernatur minus animi hic sunt necessitatibus incidunt molestiae reprehenderit ratione neque odit ipsa.</p>
                        </div>
                        <div className={`tab-panel ${this.state.openTabName === 'settings' ? "active" : "" }`} id="settings">
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
