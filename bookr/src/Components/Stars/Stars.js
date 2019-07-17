import React from 'react';
import { Star } from 'react-feather';

const FilledStar = () => {
  return(
    <Star color="red" fill="red" />
  )
}

const EmptyStar = () => {
  return(
    <Star color="red" />
  )
}

export { FilledStar, EmptyStar };
