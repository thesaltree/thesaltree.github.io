import React from 'react'
import { Post } from '@/types';
import BlogsList from './BlogsList';
import BlogPost from './BlogPost';

type Props = {
  posts: Post[];
  type?: 'devBlogs' | 'thoughtsDump';
  selectedPost?: Post;
  setSelectedPost: (post: Post | undefined) => void;
  onPostClick: (post: Post) => void;
}

const BlogContainer: React.FC<Props> = ({ posts, type, selectedPost, setSelectedPost, onPostClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" key={type}>
      {selectedPost ? (
        <BlogPost post={selectedPost} onBackClick={() => setSelectedPost(undefined)} />
      ) : (
        <div className="p-6">
          <BlogsList posts={posts} onPostClick={onPostClick} />
        </div>
      )}
    </div>
  );
}

export default BlogContainer;