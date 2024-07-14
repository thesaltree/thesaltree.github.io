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
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

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

    useEffect(() => {
        setSelectedPost(undefined);
    }, [activePage]);

    const handlePostClick = (post: Post) => {
        setSelectedPost(post);
    };

    const renderPage = () => {
        switch (activePage) {
            case 'myCV':
                return <MyWork />;
            case 'devBlogs':
                return <BlogContainer posts={devBlogs} type={'devBlogs'} selectedPost={selectedPost} setSelectedPost={setSelectedPost} onPostClick={handlePostClick} />;
            case 'thoughtsDump':
                return <BlogContainer posts={thoughtsDump} type={'thoughtsDump'} selectedPost={selectedPost} setSelectedPost={setSelectedPost} onPostClick={handlePostClick} />;
            default:
                return <AboutMePage post={aboutMe} />;
        }
    };

    const navItems = ['home', 'devBlogs', 'thoughtsDump', 'myCV'];

    return (
      <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
          <header className="bg-white shadow-sm">
              <div className="container mx-auto px-4 py-4">
                  <nav className="flex justify-between items-center">
                      <h1 className="text-xl md:text-2xl font-semibold text-gray-800">Saloni Agarwal</h1>
                      <div className="md:hidden">
                          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-gray-900">
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                          </button>
                      </div>
                      <div className={`md:flex md:space-x-4 ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 md:right-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
                          {navItems.map((page) => (
                            <button
                              key={page}
                              onClick={() => {
                                  setActivePage(page);
                                  setMenuOpen(false);
                              }}
                              className={`block w-full md:w-auto px-3 py-2 rounded-md text-md font-medium ${
                                activePage === page
                                  ? 'bg-gray-200 text-gray-900'
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                              } mb-2 md:mb-0`}
                            >
                                {page === 'home' ? 'About' : page.charAt(0).toUpperCase() + page.slice(1)}
                            </button>
                          ))}
                      </div>
                  </nav>
              </div>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">
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