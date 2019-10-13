import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
    render() {
        const {match, posts} = this.props
        const _id = Number(match.params.id)
        const post = posts.find((post) => post._id === _id)
        const comments = this.props.comments[_id] || []
        const index = this.props.posts.findIndex(post => post._id === _id)

        return this.props.loading?
        (
            <div className="loader"> ...Loading </div>
        ): post? (
            <div className="single-photo">
                <Photo key={_id} post={post} {...this.props} index={index}/>
                <Comments startAddingComment={this.props.startAddingComment} comments={comments} _id={_id} />
            </div>
        ) : (
            <h1>...no post found</h1>
        )
    }
}

export default Single