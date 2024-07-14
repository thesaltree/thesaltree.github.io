import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const serializers = {
  types: {
    block: (props) => {
      const { style = 'normal' } = props.node;

      switch (style) {
        case 'h1':
          return <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{props.children}</h1>;
        case 'h2':
          return <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-5">{props.children}</h2>;
        case 'h3':
          return <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">{props.children}</h3>;
        case 'h4':
          return <h4 className="text-l md:text-xl font-semibold text-gray-700 mb-3">{props.children}</h4>;
        case 'blockquote':
          return <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-600 mb-6">{props.children}</blockquote>;
        case 'normal':
          return <p className="text-lg text-gray-700 leading-relaxed mb-6">{props.children}</p>;
        default:
          return <p className="text-lg text-gray-700 leading-relaxed mb-6">{props.children}</p>;
      }
    },
    list: (props) => {
      const { type } = props;
      const bullet = type === 'bullet';
      if (bullet) {
        return <ul className="list-disc list-inside mb-6">{props.children}</ul>;
      }
      return <ol className="list-decimal list-inside mb-6">{props.children}</ol>;
    },
    listItem: (props) => <li className="mb-2">{props.children}</li>,
    image: (props) => (
      <figure className="mb-6">
        <img
          src={props.node.asset.url}
          alt={props.node.alt || ''}
          className="w-full rounded-lg shadow-lg"
        />
        {props.node.caption && (
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            {props.node.caption}
          </figcaption>
        )}
      </figure>
    ),
    codeBlock: (props) => (
      <div className="mb-6">
        <SyntaxHighlighter language={props.node.language || 'text'} style={docco}>
          {props.node.code}
        </SyntaxHighlighter>
        {props.node.filename && (
          <p className="text-sm text-gray-500 mt-1">{props.node.filename}</p>
        )}
      </div>
    ),
  },
  marks: {
    strong: (props) => <strong className="font-semibold">{props.children}</strong>,
    em: (props) => <em className="italic">{props.children}</em>,
    code: (props) => <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">{props.children}</code>,
    underline: (props) => <span className="underline">{props.children}</span>,
    "strike-through": (props) => <span className="line-through">{props.children}</span>,
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ?
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{children}</a> :
        <a href={href} className="text-blue-600 hover:underline">{children}</a>;
    },
    color: ({ mark, children }) => {
      return <span style={{ color: mark.hex }}>{children}</span>;
    },
  },
};