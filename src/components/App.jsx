import React, { useState } from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';
import PostModal from './PostModal';
import CategoryFilter from './CategoryFilter';

const initialPosts = [
  { id: 1, title: "첫 번째 게시물", content: "첫 번째 게시물 내용", category: "공지사항" },
  { id: 2, title: "두 번째 게시물", content: "두 번째 게시물 내용", category: "자유게시판" },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [category, setCategory] = useState('전체');

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = category === '전체' ? posts : posts.filter(post => post.category === category);

  return (
    <div>
    
      <CategoryFilter category={category} setCategory={setCategory} />
      <CreatePost addPost={addPost} />
      <PostList posts={filteredPosts} selectPost={setSelectedPost} deletePost={deletePost} />
      <PostModal post={selectedPost} closeModal={() => setSelectedPost(null)} />
    </div>
  );
}

export default App;
