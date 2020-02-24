import React from 'react';
import { CenterCard121 } from '../utils';
import PlaidLink from 'react-plaid-link'
import request from '../../redux/request';

const Component =() => {
  const handleOnSuccess = (token, metadata) => {
    // send token to client server
    console.log(token, metadata)
    request.post('/api/bank/create_access_token', {
      public_token: token,
      accounts: metadata.accounts,
      institution: metadata.institution
    })
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
