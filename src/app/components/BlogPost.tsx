import React from 'react';
const BlockContent = require('@sanity/block-content-to-react');
import { Post } from '@/types';
import { serializers } from '@/app/utils/bodyParser';
import { getReadingTime } from './BlogsList';

type Props = {
  post: Post;
  onBackClick: () => void;
}

const BlogPost: React.FC<Props> = ({ post, onBackClick }) => {
  const readingTime = getReadingTime(post.body);

  return (
    <div className="w-full max-w-4xl mx-auto py-2">

      <button
        onClick={onBackClick}
        className="group mb-8 font-sans text-sm text-gray-500 dark:text-gray-400 hover:text-academic-accent-light dark:hover:text-academic-accent-dark transition-colors duration-150 ease-in-out flex items-center gap-1.5"
      >
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to articles
      </button>

      <article className="space-y-8 bg-transparent border border-academic-border-light dark:border-academic-border-dark rounded-xl p-6 sm:p-10">
        {post.imageUrl && (
          <div className="w-full h-80 relative rounded-xl overflow-hidden border border-academic-border-light dark:border-academic-border-dark mb-8">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 ease-in-out" />
          </div>
        )}
        
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 dark:text-gray-50 font-serif leading-tight mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-gray-400 dark:text-gray-500 border-y border-academic-border-light dark:border-academic-border-dark py-3 mt-6">
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <span>{readingTime}</span>
            {post.categories && post.categories.length > 0 && (
              <>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span className="flex gap-2">
                  {post.categories.map((c) => `#${c}`).join(', ')}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="font-serif text-lg leading-relaxed text-gray-800 dark:text-gray-200 mt-8 space-y-6">
          <BlockContent
            blocks={post.body}
            serializers={serializers}
          />
        </div>

        {post.categories && post.categories.length > 0 && (
          <div className="pt-8 border-t border-academic-border-light dark:border-academic-border-dark flex flex-wrap gap-2">
            {post.categories.map((category, index) => (
              <span key={index} className="text-xs font-sans bg-academic-border-light/40 dark:bg-academic-border-dark/40 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded">
                {category}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}

export default BlogPost;