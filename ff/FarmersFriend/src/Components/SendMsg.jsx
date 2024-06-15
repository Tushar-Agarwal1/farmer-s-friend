import React from 'react';
import PropTypes from 'prop-types';

const SendMsg = ({ msg, received }) => {
  return (
    <div className={received ? "chat chat-start mx-10 mt-5" : "chat chat-end mx-10 mt-10"}>
      <div className={received ? "chat-bubble chat-bubble-warning mx-6 " : "chat-bubble chat-bubble-success mx-6"} style={{ display: 'inline-block', minWidth: 'auto', minHeight: 'auto',wordWrap: 'break-word' }}>{msg}</div>
    </div>
  );
}

SendMsg.propTypes = {

};

export default SendMsg;
