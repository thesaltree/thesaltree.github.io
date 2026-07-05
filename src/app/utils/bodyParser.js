import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const serializers = {
  types: {
    block: (props) => {
      const { style = 'normal' } = props.node;

      switch (style) {
        case 'h1':
          return <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-serif mt-10 tracking-tight">{props.children}</h1>;
        case 'h2':
          return <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 font-serif mt-8 tracking-tight">{props.children}</h2>;
        case 'h3':
          return <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 font-serif mt-6">{props.children}</h3>;
        case 'h4':
          return <h4 className="text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 font-serif mt-4">{props.children}</h4>;
        case 'blockquote':
          return (
            <blockquote className="border-l-4 border-academic-accent-light dark:border-academic-accent-dark pl-4 italic text-gray-600 dark:text-gray-400 bg-academic-border-light/10 dark:bg-academic-border-dark/20 py-3 pr-3 rounded-r mb-6 my-4 font-serif">
              {props.children}
            </blockquote>
          );
        case 'normal':
          return <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6 font-serif">{props.children}</p>;
        default:
          return <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6 font-serif">{props.children}</p>;
      }
    },
    image: (props) => (
      <figure className="mb-8 mt-6">
        <img
          src={props.node.asset.url}
          alt={props.node.alt || ''}
          className="w-full rounded border border-academic-border-light dark:border-academic-border-dark shadow-sm max-h-[500px] object-cover"
        />
        {props.node.caption && (
          <figcaption className="text-center text-xs font-sans text-gray-500 dark:text-gray-400 mt-2.5">
            {props.node.caption}
          </figcaption>
        )}
      </figure>
    ),
    codeBlock: (props) => (
      <div className="mb-6 rounded overflow-hidden border border-academic-border-light dark:border-academic-border-dark font-mono text-sm">
        <SyntaxHighlighter language={props.node.language || 'text'} style={docco} customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}>
          {props.node.code}
        </SyntaxHighlighter>
        {props.node.filename && (
          <p className="text-xs font-sans text-gray-500 dark:text-gray-400 px-4 py-2 border-t border-academic-border-light dark:border-academic-border-dark bg-academic-border-light/10 dark:bg-academic-border-dark/10">{props.node.filename}</p>
        )}
      </div>
    ),
  },
  list: (props) => {
    const { type } = props;
    const bullet = type === 'bullet';
    if (bullet) {
      return <ul className="list-disc list-outside mb-6 space-y-2 text-lg text-gray-800 dark:text-gray-200 font-serif pl-6">{props.children}</ul>;
    }
    return <ol className="list-decimal list-outside mb-6 space-y-2 text-lg text-gray-800 dark:text-gray-200 font-serif pl-6">{props.children}</ol>;
  },
  listItem: (props) => <li className="mb-1 leading-relaxed">{props.children}</li>,
  marks: {
    strong: (props) => <strong className="font-bold text-gray-950 dark:text-gray-50">{props.children}</strong>,
    em: (props) => <em className="italic">{props.children}</em>,
    code: (props) => <code className="bg-academic-border-light/35 dark:bg-academic-border-dark/50 text-academic-accent-light dark:text-academic-accent-dark rounded px-1.5 py-0.5 font-mono text-sm break-words">{props.children}</code>,
    underline: (props) => <span className="underline">{props.children}</span>,
    "strike-through": (props) => <span className="line-through">{props.children}</span>,
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ?
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-academic-accent-light dark:text-academic-accent-dark hover:underline font-medium border-b border-dashed border-academic-accent-light dark:border-academic-accent-dark">{children}</a> :
        <a href={href} className="text-academic-accent-light dark:text-academic-accent-dark hover:underline font-medium border-b border-dashed border-academic-accent-light dark:border-academic-accent-dark">{children}</a>;
    },
    color: ({ mark, children }) => {
      return <span style={{ color: mark.hex }}>{children}</span>;
    },
  },
};