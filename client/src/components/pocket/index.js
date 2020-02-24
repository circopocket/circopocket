import React from 'react';
import { CenterCard121 } from '../utils';
import PlaidLink from 'react-plaid-link'

const Component =() => {
  const handleOnSuccess = (token, metadata) => {
    // send token to client server
    console.log(token, metadata)
  }
  const handleOnExit = () => {
    // handle the case when your user exits Link
  }
  return <CenterCard121>
    <div className='card'>
      <h4 className='card-header'>
        Step 1: Connect with your bank.
      </h4>
      <div className='card-body'>
        <PlaidLink
          clientName="Circo Pocket"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="e4de42224b6f00fd362747ea130226"
          onExit={handleOnExit}
          onSuccess={handleOnSuccess}>
          Open Link and connect your bank!
        </PlaidLink>
      </div>
    </div>
  </CenterCard121>
}

export default Component;
