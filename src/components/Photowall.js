import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photowall(props) {
    return (
        <div>
            {/* <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto">Click Me</a> */}
            {/* <button onClick={props.onNavigate} className="addIcon"> </button> */}
            <Link className="addIcon" to="/addphoto"></Link>
            <div className="photoGrid">
                {props.posts
                .sort(function(x, y) {
                    return y._id - x._id
                })
                .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
            </div>
        </div>
    )
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Photowall