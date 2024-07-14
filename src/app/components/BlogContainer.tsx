import React, { useState } from 'react';
import { Post } from '@/types';
import BlogsList from './BlogsList';
import BlogPost from './BlogPost';

type Props = {
  posts: Post[];
}

const BlogContainer: React.FC<Props> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {selectedPost ? (
        <BlogPost post={selectedPost} onBackClick={handleBackClick} />
      ) : (
        <div className="p-6">
          <BlogsList posts={posts} onPostClick={handlePostClick} />
        </div>
      )}
    </div>
  );
}

export default BlogContainer;