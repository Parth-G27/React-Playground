// import React from 'react'
import PropTypes from 'prop-types';

export default function Students (props) {
  return (
    <div className='student'>
        <p>name : {props.name}</p>
        <p>age : {props.age}</p>
        <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Students.propTypes = {
    name: PropTypes.string,
    age : PropTypes.number,  
    isStudent : PropTypes.bool,
};


