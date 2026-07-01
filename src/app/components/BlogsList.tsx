import React from 'react';
import { Post } from '@/types';

type Props = {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export function getReadingTime(body: any): string {
  if (!body) return '1 min read';
  
  let text = '';
  if (Array.isArray(body)) {
    body.forEach((block: any) => {
      if (block._type === 'block' && block.children) {
        block.children.forEach((child: any) => {
          if (child.text) {
            text += child.text + ' ';
          }
        });
      }
    });
  }
  
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

const BlogsList: React.FC<Props> = ({ posts, onPostClick }) => {
  if (posts.length === 0) {
    return <div className="text-gray-500 dark:text-gray-400 font-sans text-sm py-8">No articles published yet.</div>;
  }

  // Group posts by year
  const grouped: { [year: string]: Post[] } = {};
  posts.forEach((post) => {
    const year = new Date(post.publishedAt).getFullYear().toString();
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(post);
  });

  const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className="space-y-12">
      {years.map((year) => (
        <div key={year} className="space-y-4">
          <h2 className="text-xs font-bold font-sans tracking-widest text-gray-400 dark:text-gray-500 border-b border-academic-border-light dark:border-academic-border-dark pb-2 uppercase">
            {year}
          </h2>
          <ul className="space-y-4">
            {grouped[year].map((post, index) => {
              const dateStr = new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
              });
              const readingTime = getReadingTime(post.body);
              return (
                <li key={index} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 border-b border-dashed border-academic-border-light/40 dark:border-academic-border-dark/40 pb-3 last:border-b-0">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-sm text-academic-accent-light dark:text-academic-accent-dark select-none">🀅</span>
                    <span className="text-sm font-mono text-gray-400 dark:text-gray-500 shrink-0 w-12">
                      {dateStr}
                    </span>
                    <h3
                      onClick={() => onPostClick(post)}
                      className="text-lg font-bold font-serif text-gray-900 dark:text-gray-100 hover:text-academic-accent-light dark:hover:text-academic-accent-dark cursor-pointer transition-colors duration-150"
                    >
                      {post.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-500 self-start sm:self-baseline">
                    {readingTime}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BlogsList;