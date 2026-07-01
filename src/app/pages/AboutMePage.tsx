import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Post } from '@/types';
import { serializers } from '@/app/utils/bodyParser';
import { getReadingTime } from '@/app/components/BlogsList';

type Props = {
  post?: Post;
  featuredPosts?: Post[];
  onPostClick?: (post: Post) => void;
}

const AboutMePage: React.FC<Props> = ({ post, featuredPosts = [], onPostClick }) => {
  if (!post) {
    return <div className="text-center text-gray-500 font-sans">Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-start">
        <div className="flex-1 w-full">
          <div className="font-serif text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <BlockContent blocks={post.body} serializers={serializers} />
          </div>
          
          {/* Selected Writings */}
          {featuredPosts.length > 0 && (
            <div className="mt-12 bg-transparent border border-academic-border-light dark:border-academic-border-dark rounded-xl p-6 w-full">
              <div className="flex justify-between items-center mb-6 border-b border-academic-border-light/60 dark:border-academic-border-dark/60 pb-3">
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Selected Writings
                </h3>
                <span className="text-xl text-academic-accent-light dark:text-academic-accent-dark filter drop-shadow-[0.5px_0.5px_0px_currentColor] opacity-80 select-none">🀅</span>
              </div>
              <ul className="space-y-4">
                {featuredPosts.map((blog, index) => {
                  const dateStr = new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                  });
                  const readingTime = getReadingTime(blog.body);
                  return (
                    <li 
                      key={index} 
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-dashed border-academic-border-light/40 dark:border-academic-border-dark/40 pb-3 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-sm text-academic-accent-light dark:text-academic-accent-dark select-none">🀐</span>
                        <span className="text-xs font-mono text-gray-400 dark:text-gray-500 shrink-0 w-24">
                          {dateStr}
                        </span>
                        <h4
                          onClick={() => onPostClick && onPostClick(blog)}
                          className="text-md font-bold font-serif text-gray-900 dark:text-gray-100 hover:text-academic-accent-light dark:hover:text-academic-accent-dark cursor-pointer transition-colors duration-150"
                        >
                          {blog.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-gray-400 dark:text-gray-500 self-start sm:self-baseline">
                        {readingTime}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {post.imageUrl && (
          <div className="w-full md:w-72 shrink-0">
            <div className="overflow-hidden rounded-xl border border-academic-border-light dark:border-academic-border-dark bg-transparent p-2">
              <img 
                className="w-full h-auto object-cover rounded-xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out" 
                src={post.imageUrl} 
                alt="Saloni Agarwal" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMePage;
