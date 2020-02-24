import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Container extends Component {
    constructor(){
        super();
    }
    render(){
      return(<div>{this.props.children}</div>)
    }
}

Container.contextTypes = {
  router: PropTypes.object
}


function mapStateToProps(props) {
    return {}
}

export default connect(mapStateToProps, null)(Container);
