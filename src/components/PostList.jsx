import React from 'react';
import PostItem from './PostItem';

function PostList({ posts, selectPost, deletePost }) {
  return (
    <div>
      {posts.map(post => (
        <PostItem 
          key={post.id} 
          post={post} 
          selectPost={selectPost} 
          deletePost={deletePost} 
        />
      ))}
    </div>
  );
}

export default PostList;
