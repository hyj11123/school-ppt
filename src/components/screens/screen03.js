import React from "react";
import { Link } from "react-router-dom"

class screen03 extends React.Component {
    render() {
        return (
            <div>
                <div className="subHeader">
                    <ul>
                        <li >
                            <Link to="/screen03/subScreen01">1</Link>
                        </li>
                        <li >
                            <Link to="/screen03/subScreen02">2</Link>
                        </li>
                        <li>
                            <Link to="/screen03/subScreen03">3</Link>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        )
    }
}

export default screen03;