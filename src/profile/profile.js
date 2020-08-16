import React from 'react';
import PropTypes from 'prop-types';

export default function profile(props) {
    return (
        <div className="container">
            <div className="cover-photo">
            <div >
            {props.children}
            </div>
            </div>
            <h1 className="profile-full">{props.fullname}</h1>
            <h1>{props.profision}</h1>
            <h1 >{props.bio}</h1>
            <button className="mg" onClick={() => alert(`My name is Selmi Marwen `)}>
                ClickMe
            </button>
        </div>
    )
}
 profile.defaultProps = {
    fullname:"Selmi Marwen",
    profision:"web developer",
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en"
}
profile.propTypes = {
    fullname: PropTypes.string,
    profision:PropTypes.string,
    bio:PropTypes.string
  };
