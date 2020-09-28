import React from 'react';
import classNames from 'classnames';

const constants = {

  EMPTY : 0,

  FILLED: 1,

  BLOCKED: -1
}


export const Cell = ({ type }) => {
  const className = classNames(
    'cell',
    { 
      'empty': type === constants.EMPTY 
    },
    { 
      'filled': type === constants.FILLED
    },
    { 
      'blocked': type === constants.BLOCKED
    }
  );

  return <div className={className} />;
};
