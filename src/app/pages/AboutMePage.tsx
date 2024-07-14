import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Post } from '@/types';
import { serializers } from '@/app/utils/bodyParser';

type Props = {
  post?: Post;
}

const AboutMePage: React.FC<Props> = ({ post }) => {
  if (!post) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex items-center h-screen">
        <div className="md:flex-1 p-6 md:p-8 flex flex-col items-center">
          <div className="prose max-w-none text-gray-600 text-center">
            <BlockContent blocks={post.body} serializers={serializers} />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap justify-center gap-4">
              <img src="https://img.shields.io/badge/-Golang-00ADD8?style=flat&logo=go&logoColor=white" alt="Golang" />
              <img src="https://img.shields.io/badge/-PHP-777BB4?style=flat&logo=php&logoColor=white" alt="PHP" />
              <img src="https://img.shields.io/badge/-C++-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="C++" />
              <img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
              <img src="https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
              <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
              <img src="https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql&logoColor=white" alt="GraphQL" />
              <img src="https://img.shields.io/badge/-Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js" />
              <img src="https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/-R-276DC3?style=flat&logo=r&logoColor=white" alt="R" />
              <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker" />
              <img src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
              <img src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat&logo=webpack&logoColor=black" alt="Webpack" />
              <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
              <img src="https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=eslint&logoColor=white" alt="ESLint" />
              <img src="https://img.shields.io/badge/-NestJS-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJS" />
            </div>
          </div>
        </div>
        {post.imageUrl && (
          <div className="md:flex-1">
            <img className="w-full h-full object-cover" src={post.imageUrl} alt="Saloni Agarwal" />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMePage;
