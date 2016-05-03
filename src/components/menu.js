import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
        <div className="menuContainer">
            <input type="checkbox" id="tm"/>

            <ul className="sidenav">
                <li><Link to='/'><i className="fa fa-home"></i><b>Home</b></Link></li>
            </ul>

            <section>
                <label htmlFor="tm">
                	<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
                </label>
            </section>
        </div>
    );
}