import React from 'react';

function PostItem({ post, selectPost, deletePost }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    const confirmed = window.confirm('삭제하시겠습니까?');
    if (confirmed) {
      deletePost(post.id);
    }
  };

  return (
    <div className="post-item" onClick={() => selectPost(post)}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <span className="post-category">{post.category}</span>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default PostItem;
