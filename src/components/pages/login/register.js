import React from "react";
import { Link } from 'react-router-dom';
import online_everywhere from "../../../online_everywhere.svg";

export class Register extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header"> </div>
                    <div className="content">
                        <div className="image">
                           <img src={online_everywhere} />
                        </div>
                        <div className="form">
                        <div className="form-group">
                              <label htmlFor="firstname">Firstname</label>
                              <input type="text" name="firstname"/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="text" name="email"/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="">
                      <Link to='/track' className='btn-link'>
                         <button type="button" className="btn">Register</button>
                     </Link>
                     </div>
            </div>
        );
    }
}