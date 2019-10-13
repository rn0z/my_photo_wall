import React, {Component} from 'react';
import Title from './Title'
import '../styles/App.css';
import {Route} from 'react-router-dom'
import Photowall from './Photowall'
import AddPhoto from './addPhoto'
import Single from './Single'

class Main extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.props.startLoadingComments()
    this.props.startLoadingPost().then(() => {
      this.setState({
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Title>
          Photo Wall
        </Title>
        <Route exact path="/" render={() => (
          <div>
            <Photowall {...this.props}/>
          </div>
        )} />
        <Route path="/addphoto" render={(params) => (
          <AddPhoto {...this.props} onHistory={params.history}/>
        )} />
        <Route path="/single/:id" render={(params) => (
          <Single loading={this.state.loading} {...this.props} {...params} />
        )} />
      </div>
    )
  }
}

export default Main;
