import React from 'react';

export default function Counter(props) {
  const { count } = props;
  return <div className="counter">{count}</div>
} 