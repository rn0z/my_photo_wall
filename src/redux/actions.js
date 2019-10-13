import {database} from '../database/config'

function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post._id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        }) 
    }
}

function startLoadingPost() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error);
        })
    }
}

function startLoadingComments() {
    return (dispatch) => {
        return database.ref(`comments`).once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
                dispatch(loadComments(comments))
            })
        })
    }
}

function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

function startRemovingPost(index, _id) {
    const updates = {
        [`posts/${_id}`]: null,
        [`comments/${_id}`]: null
    }

    return (dispatch) => {
        return database.ref().update(updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error);
        })
    }
}

function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

function loadPosts(posts) {
    return {
        type: 'LOAD_PHOTOS',
        posts
    }
}

function addComment(comment, postID) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postID
    }
}

export {startLoadingComments, startAddingComment, removePost, startRemovingPost, addPost, addComment, startAddingPost, startLoadingPost}