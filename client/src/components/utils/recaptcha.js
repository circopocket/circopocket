import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
let recaptchaInstance;
const resetRecaptcha = () => {
    recaptchaInstance.reset();
};
export class RecaptchaComponent extends Component {
  componentDidMount(){
    // console.log('Recaptcha componentDidMount')
    resetRecaptcha();
    window.onloadCallback = () => console.log('Recaptcha loaded')
  }
  componentWillUnmount(){
    // console.log('Recaptcha componentWillUnmount')
    resetRecaptcha();
  }
  render() {
    return (
      <div>
        <Recaptcha
            ref={e => recaptchaInstance = e}
            sitekey="6LcDa9sUAAAAAHiOoVeytebnrJnfWW7ffI50aClN"
            render="explicit"
            verifyCallback={this.props.verify}
            onloadCallback={() => console.log('Recaptcha loaded')}
        />
      </div>
    );
  }
}
