import React from 'react'
import { Post } from '@/types';
import BlogsList from './BlogsList';
import BlogPost from './BlogPost';

type Props = {
  posts: Post[];
  type?: 'devBlogs' | 'thoughtsDump' | 'paperNotes';
  selectedPost?: Post;
  setSelectedPost: (post: Post | undefined) => void;
  onPostClick: (post: Post) => void;
}

const BlogContainer: React.FC<Props> = ({ posts, type, selectedPost, setSelectedPost, onPostClick }) => {
  return (
    <div className="w-full" key={type}>
      {selectedPost ? (
        <BlogPost post={selectedPost} onBackClick={() => setSelectedPost(undefined)} />
      ) : (
        <div className="py-2">
          <BlogsList posts={posts} onPostClick={onPostClick} />
        </div>
      )}
    </div>
  );
}


export default BlogContainer;