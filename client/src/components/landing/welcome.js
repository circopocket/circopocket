import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        <div className='content-container'>
          <div className='title'>
            Review, Explore, Earn
          </div>
          <div className='subtitle'>
            Review New Products and Get 100% Cashback + Bonus
            {/* We find you business owners that are willing to pay you up to 100% cashback + rewards if you review new products. */}
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
        <Link className='btn btn-success btn-block btn-lg' to='explore'>Explore Now</Link>
      </div>)
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedin: auth.authenticated
});

export default connect(mapStateToProps, null)(Welcome);

