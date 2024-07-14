'use client'
import React, { useEffect, useState } from 'react'
import BlogContainer from '@/app/components/BlogContainer'
import AboutMePage from "@/app/pages/AboutMePage"
import MyWork from "@/app/components/MyWork"
import client from '../../client'
import { Post } from '@/types'

async function getPosts() {
    const query = `*[_type == "post"] {
    title,
    body,
    publishedAt,
    "slug": slug.current,
    "categories": categories[]->title,
    "imageUrl": mainImage.asset->url
  }`;
    return await client.fetch(query);
}

export default function Home() {
    const [aboutMe, setAboutMe] = useState<Post | undefined>(undefined);
    const [devBlogs, setDevBlogs] = useState<Post[]>([]);
    const [thoughtsDump, setThoughtsDump] = useState<Post[]>([]);
    const [activePage, setActivePage] = useState('home');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setAboutMe(data.find((post: Post) => post.categories.some((category) => category === 'about-me')));
            setDevBlogs(data.filter((post: Post) => post.categories.some((category) => category === 'dev')));
            setThoughtsDump(data.filter((post: Post) => post.categories.some((category) => category === 'thoughts')));
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const renderPage = () => {
        switch (activePage) {
            case 'myCV':
                return <MyWork />;
            case 'devBlogs':
                return <BlogContainer posts={devBlogs} />;
            case 'thoughtsDump':
                return <BlogContainer posts={thoughtsDump}/>;
            default:
                return <AboutMePage post={aboutMe} />;
        }
    };

    return (
      <div className="bg-gray-50 min-h-screen font-sans">
          <header className="bg-white shadow-sm">
              <div className="container mx-auto px-4 py-6">
                  <nav className="flex justify-between items-center">
                      <h1 className="text-2xl font-semibold text-gray-800">Saloni Agarwal</h1>
                      <div className="space-x-4">
                          {['home', 'devBlogs', 'thoughtsDump', 'myCV'].map((page) => (
                            <button
                              key={page}
                              onClick={() => setActivePage(page)}
                              className={`px-3 py-2 rounded-md text-sm font-medium ${
                                activePage === page
                                  ? 'bg-gray-200 text-gray-900'
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                            >
                                {page === 'home' ? 'About' : page.charAt(0).toUpperCase() + page.slice(1)}
                            </button>
                          ))}
                      </div>
                  </nav>
              </div>
          </header>

          <main className="container mx-auto px-4 py-8">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                renderPage()
              )}
          </main>
      </div>
    );
}