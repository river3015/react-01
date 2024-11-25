import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
      <h2 className="card-post">{post}</h2>
  );
};

export default PostCard;