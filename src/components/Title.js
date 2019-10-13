import React from 'react'
import {Link} from 'react-router-dom'

class Title extends React.Component {

    render() {
        return (
        <div>
            <h1>
                <Link to='/'>
                    {this.props.children}
                </Link>
            </h1>
        </div>
        )
    }
}

export default Title