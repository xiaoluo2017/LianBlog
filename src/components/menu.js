import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';

// http://stackoverflow.com/questions/18452332/get-real-position-of-an-html-element-in-pure-javascript
function isWindow( obj ) {
    return obj != null && obj === obj.window;
}

function getWindow( elem ) {
    return isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

function offset( elem ) {
    let docElem, win, box = { top: 0, left: 0 };
    const doc = elem && elem.ownerDocument;

    docElem = doc.documentElement;

    if ( typeof elem.getBoundingClientRect !== typeof undefined ) {
        box = elem.getBoundingClientRect();
    }
    win = getWindow( doc );

    return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
    };
};

export default class Menu extends Component {
    handleOnClick(e) {
        const link = findDOMNode(this.refs.link);
        const parent = link.parentNode;
        let ink = parent.querySelector(".ink");

        if(!ink) {
            const node = document.createElement("SPAN");
            node.className += " ink";
            parent.insertBefore(node, ink);

            ink = parent.querySelector(".ink");
        }

        ink.className = "";
        ink.className = "ink";

        if (!ink.style.height && !ink.style.width) {
            const d = Math.max(parent.offsetHeight, parent.offsetWidth);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }

        var x = e.pageX - offset(parent).left - parseInt(ink.style.width) / 2;

        var y = e.pageY - offset(parent).top - parseInt(ink.style.height) / 2;

        ink.className += " animation";
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
    }

	render() {
        return (
            <div className="menuContainer">
                <input type="checkbox" id="tm"/>

                <ul className="sidenav">
                    <li><Link to='/' onClick={this.handleOnClick.bind(this)} ref="link"><i className="fa fa-home"></i><b>Home</b></Link></li>
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
}

