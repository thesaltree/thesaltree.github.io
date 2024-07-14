import React from 'react';
const BlockContent = require('@sanity/block-content-to-react');
import { Post } from '@/types';
import { serializers } from '@/app/utils/bodyParser';

type Props = {
  post: Post;
  onBackClick: () => void;
}

const BlogPost: React.FC<Props> = ({ post, onBackClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <button
          onClick={onBackClick}
          className="mb-6 text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to blogs
        </button>

        <article>
          {post.imageUrl && (
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          )}
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
          </p>
          <div className="prose max-w-none text-gray-600 mb-6">
            <BlockContent
              blocks={post.body}
              serializers={serializers}
            />
          </div>
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap">
              {post.categories.map((category, index) => (
                <span key={index} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2">
                  {category}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

export default BlogPost;