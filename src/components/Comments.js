import React from 'react'

class Comments extends React.Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const comment = event.target.elements.comment.value
        console.log(this.props);
        
        this.props.startAddingComment(comment, this.props._id)
        event.target.elements.comment.value = ''
    }

    render() {
        
        return (
            <div className="comment">
                {
                    this.props.comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment" />
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}

export default Comments