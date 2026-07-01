'use client'
import React, { useEffect, useState } from 'react'
import BlogContainer from '@/app/components/BlogContainer'
import AboutMePage from "@/app/pages/AboutMePage"
import MyWork from "@/app/components/MyWork"
import client from '../../client'
import { Post } from '@/types'

async function getPosts() {
    try {
        if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === '') {
            console.warn("NEXT_PUBLIC_SANITY_PROJECT_ID is not defined. Returning empty posts.");
            return [];
        }
        const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        body,
        publishedAt,
        "slug": slug.current,
        "categories": categories[]->title,
        "imageUrl": mainImage.asset->url
      }`;
        return await client.fetch(query);
    } catch (error) {
        console.error("Error fetching posts from Sanity:", error);
        return [];
    }
}


export default function Home() {
    const [aboutMe, setAboutMe] = useState<Post | undefined>(undefined);
    const [devBlogs, setDevBlogs] = useState<Post[]>([]);
    const [thoughtsDump, setThoughtsDump] = useState<Post[]>([]);
    const [activePage, setActivePage] = useState('home');
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setAboutMe(data.find((post: Post) => post.categories.some((category) => category === 'about-me')));
            setDevBlogs(data.filter((post: Post) => post.categories.some((category) => category === 'dev')));
            setThoughtsDump(data.filter((post: Post) => post.categories.some((category) => category === 'thoughts')));
            setLoading(false);
        };
        fetchPosts();

        // Initialize theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

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
                return (
                    <AboutMePage 
                        post={aboutMe} 
                        featuredPosts={devBlogs.slice(0, 3)} 
                        onPostClick={(post) => {
                            setSelectedPost(post);
                            setActivePage('devBlogs');
                        }} 
                    />
                );
        }
    };



    const navItems = ['home', 'devBlogs', 'thoughtsDump', 'myCV'];

    return (
      <div className="min-h-screen flex flex-col bg-academic-bg-light dark:bg-academic-bg-dark text-academic-fg-light dark:text-academic-fg-dark selection:bg-academic-accent-light/10 dark:selection:bg-academic-accent-dark/20 transition-colors duration-300">
          <header className="w-full max-w-5xl mx-auto px-6 pt-16 pb-6">
              <div className="flex flex-col gap-6">
                  {/* Top Row: Name, Subtitle, and Theme Toggle */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                       <div>
                          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 font-serif flex items-center gap-3">
                              Saloni Agarwal
                          </h1>
                          <p className="text-sm font-sans tracking-wide text-gray-500 dark:text-gray-400 mt-2">
                              Software Engineer • Tractable AI • IIT Roorkee • Systems & Critical Thinking
                          </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-xs font-mono text-gray-500 dark:text-gray-400">
                              <a href="https://github.com/thesaltree" target="_blank" rel="noopener noreferrer" className="hover:text-academic-accent-light dark:hover:text-academic-accent-dark transition-colors underline decoration-dotted">
                                  GitHub
                              </a>
                              <span className="text-gray-300 dark:text-gray-700 select-none">•</span>
                              <a href="https://www.linkedin.com/in/saloni-ag/" target="_blank" rel="noopener noreferrer" className="hover:text-academic-accent-light dark:hover:text-academic-accent-dark transition-colors underline decoration-dotted">
                                  LinkedIn
                              </a>
                              <span className="text-gray-300 dark:text-gray-700 select-none">•</span>
                              <a href="https://dev.to/thesaltree" target="_blank" rel="noopener noreferrer" className="hover:text-academic-accent-light dark:hover:text-academic-accent-dark transition-colors underline decoration-dotted">
                                  Dev.to
                              </a>
                              <span className="text-gray-300 dark:text-gray-700 select-none">•</span>
                              <span>
                                  Shoot a message <a href="mailto:saloni.ag14@gmail.com" className="underline hover:text-academic-accent-light dark:hover:text-academic-accent-dark transition-colors font-medium">here</a> for tech discussions & updated CV
                              </span>
                          </div>
                      </div>
                      
                      <button 
                        onClick={toggleTheme} 
                        aria-label="Toggle Theme" 
                        className="p-2 rounded-full border border-academic-border-light dark:border-academic-border-dark hover:bg-academic-border-light/10 dark:hover:bg-academic-border-dark/30 transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 self-start md:self-auto shrink-0"
                      >
                        {theme === 'light' ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                          </svg>
                        )}
                      </button>
                  </div>
                  
                  {/* Bottom Row: Navigation Links (Mahjong Tiles) */}
                  <nav className="flex flex-wrap items-center gap-4 font-sans text-sm border-t border-academic-border-light dark:border-academic-border-dark pt-6 w-full">
                      {navItems.map((page) => {
                        const tileSymbols: Record<string, string> = {
                          home: '🀐',        // 1 Bamboo for About
                          devBlogs: '🀅',    // Green Dragon for Dev Blogs
                          thoughtsDump: '🀄',// Red Dragon for Thoughts Dump
                          myCV: '🀆',        // White Dragon for CV
                        };
                        const isActive = activePage === page;
                        return (
                          <button
                            key={page}
                            onClick={() => {
                                setActivePage(page);
                                setSelectedPost(undefined);
                            }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 font-medium ${
                              isActive
                                ? 'bg-academic-border-light/30 dark:bg-academic-border-dark/30 border-academic-accent-light dark:border-academic-accent-dark text-academic-accent-light dark:text-academic-accent-dark'
                                : 'bg-transparent border-academic-border-light dark:border-academic-border-dark text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-[#faf8f5]/40 hover:dark:bg-[#0c2a1d]/10'
                            }`}
                          >
                              <span className={`text-lg leading-none ${isActive ? 'filter drop-shadow-[0.5px_0.5px_0px_currentColor]' : ''}`}>
                                  {tileSymbols[page]}
                              </span>
                              <span>
                                  {page === 'home' ? 'About' : page === 'myCV' ? 'Curriculum Vitae' : page === 'devBlogs' ? 'Dev Blogs' : 'Thoughts Dump'}
                              </span>
                          </button>
                        );
                      })}
                  </nav>
              </div>
          </header>

          <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-12">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-academic-accent-light dark:border-academic-accent-dark"></div>
                </div>
              ) : (
                renderPage()
              )}
          </main>

          <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-academic-border-light dark:border-academic-border-dark text-center font-sans text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} Saloni Agarwal • 🀐 🀅 🀄 🀆</p>
          </footer>

      </div>
    );
}