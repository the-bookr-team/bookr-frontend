import React from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rater = props => {
  const { value, handleRatingChange } = props;
  return (
    <span>
      <Rate tooltips={desc} onChange={handleRatingChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};

export default Rater;
