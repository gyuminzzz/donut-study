import React from 'react';

function PostModal({ post, closeModal }) {
  if (!post) return null;

  return (
    <div className="modal">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={closeModal}>닫기</button>
    </div>
  );
}

export default PostModal;
