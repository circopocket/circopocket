import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        <div className='content-container'>
          <div className='title'>
            Smart idea of your monthly spending.
          </div>
          <div className='subtitle'>
            Find peers to split spotify/mobile/insurance bills.
          </div>
          <div  className='button-container'>
            {this.renderButton()}
          </div>
        </div>
      </div>)
  }
  renderButton(){
    return (!this.props.isLoggedin)?(
      <div>
        <Link className='btn btn-success btn-block btn-lg try-it-out' to='signup'>Try It Now</Link>
      </div>)
    :(<div>
        <Link className='btn btn-success btn-block btn-lg' to='connect'>Connect Now</Link>
      </div>)
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedin: auth.authenticated
});

export default connect(mapStateToProps, null)(Welcome);

