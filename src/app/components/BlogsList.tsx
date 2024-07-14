import React from 'react';
import { Post } from '@/types';

type Props = {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const BlogsList: React.FC<Props> = ({ posts, onPostClick }) => {
  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post._id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <h2
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out"
              onClick={() => onPostClick(post)}
            >
              {post.title}
            </h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BlogsList;