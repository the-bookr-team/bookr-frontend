import React from 'react';
import { Rate } from 'antd';

const StaticRating = props => {
  return <Rate {...props} disabled="true" defaultValue={2} />;
};

export default StaticRating;
