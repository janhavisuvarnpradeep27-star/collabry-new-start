import React, { useState } from 'react';
import { TrendingUp, Users, MessageCircle, Heart, Share2, Clock, Briefcase, Search, Filter, Plus } from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const trendingNews = [
    {
      id: 1,
      title: "OpenAI Releases GPT-5 with Enhanced Reasoning Capabilities",
      excerpt: "The latest iteration of GPT shows significant improvements in logical reasoning and problem-solving abilities...",
      category: "AI/ML",
      engagement: 1247,
      comments: 89,
      likes: 234,
      shares: 45,
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "New Quantum Computing Breakthrough at MIT",
      excerpt: "Researchers achieve quantum supremacy with a 1000-qubit processor, opening new possibilities...",
      category: "Quantum Computing",
      engagement: 892,
      comments: 67,
      likes: 189,
      shares: 32,
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Web3 Development Trends for 2024",
      excerpt: "From DeFi to NFTs, discover the most promising Web3 technologies that will shape the future...",
      category: "Web3",
      engagement: 567,
      comments: 43,
      likes: 156,
      shares: 28,
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Cybersecurity: Zero-Day Vulnerabilities on the Rise",
      excerpt: "Recent reports show a 40% increase in zero-day attacks, prompting new security protocols...",
      category: "Cybersecurity",
      engagement: 445,
      comments: 34,
      likes: 123,
      shares: 19,
      timeAgo: "8 hours ago",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop"
    }
  ];

  const stats = [
    { label: "Active Students", value: "2,847", icon: Users, color: "text-primary-600" },
    { label: "Study Groups", value: "156", icon: Users, color: "text-accent-600" },
    { label: "Discussions", value: "1,234", icon: MessageCircle, color: "text-green-600" },
  ];

  const projectCollaborations = [
    {
      id: 1,
      title: "AI-Powered Study Assistant",
      description: "Looking for teammates to build an AI chatbot that helps students with homework and exam preparation.",
      category: "AI/ML",
      skills: ["Python", "React", "Machine Learning", "NLP"],
      teamSize: "3-4 members",
      duration: "3 months",
      author: "Alex Chen",
      avatar: "AC",
      posted: "2 hours ago",
      applicants: 8,
      status: "open"
    },
    {
      id: 2,
      title: "Campus Event Management App",
      description: "Need developers to create a mobile app for managing college events, registrations, and notifications.",
      category: "Mobile Development",
      skills: ["React Native", "Node.js", "MongoDB", "Firebase"],
      teamSize: "4-5 members",
      duration: "4 months",
      author: "Sarah Kim",
      avatar: "SK",
      posted: "1 day ago",
      applicants: 12,
      status: "open"
    },
    {
      id: 3,
      title: "Blockchain-based Certificate System",
      description: "Building a decentralized system for issuing and verifying academic certificates using blockchain technology.",
      category: "Blockchain",
      skills: ["Solidity", "Web3.js", "React", "Node.js"],
      teamSize: "3-4 members",
      duration: "6 months",
      author: "Mike Johnson",
      avatar: "MJ",
      posted: "3 days ago",
      applicants: 5,
      status: "open"
    },
    {
      id: 4,
      title: "Cybersecurity Awareness Platform",
      description: "Creating an educational platform to teach students about cybersecurity best practices and threats.",
      category: "Cybersecurity",
      skills: ["JavaScript", "Python", "Security", "UI/UX"],
      teamSize: "2-3 members",
      duration: "2 months",
      author: "Emily Rodriguez",
      avatar: "ER",
      posted: "1 week ago",
      applicants: 15,
      status: "open"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: projectCollaborations.length },
    { id: 'ai-ml', name: 'AI/ML', count: 1 },
    { id: 'mobile', name: 'Mobile Development', count: 1 },
    { id: 'blockchain', name: 'Blockchain', count: 1 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 1 },
    { id: 'web-dev', name: 'Web Development', count: 0 },
    { id: 'data-science', name: 'Data Science', count: 0 }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectCollaborations 
    : projectCollaborations.filter(project => 
        project.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  return (
    <div className="space-y-6">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-secondary-200 px-6 py-4 -mx-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'home'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-secondary-600 hover:text-primary-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('collaboration')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'collaboration'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-secondary-600 hover:text-primary-600'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Project Collaboration
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'categories'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-secondary-600 hover:text-primary-600'
              }`}
            >
              <Filter className="w-4 h-4" />
              Categories
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects, skills, or students..."
                className="pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
              />
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Post Project
            </button>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'home' && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">Welcome to COLLABRY</h1>
              <p className="text-secondary-600 mt-1">Stay updated with the latest in technology and connect with fellow students</p>
            </div>
            <div className="flex items-center gap-2 text-accent-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Trending</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-secondary-50 ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                      <p className="text-secondary-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trending News */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Trending Technology News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {trendingNews.map((news) => (
                <div key={news.id} className="card hover:shadow-md transition-shadow duration-200">
                  <div className="flex gap-4">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                          {news.category}
                        </span>
                        <div className="flex items-center gap-1 text-secondary-400 text-sm">
                          <Clock className="w-3 h-3" />
                          {news.timeAgo}
                        </div>
                      </div>
                      <h3 className="font-semibold text-secondary-900 mb-2 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-secondary-600 text-sm mb-3 line-clamp-2">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-secondary-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {news.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {news.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          {news.shares}
                        </div>
                        <div className="ml-auto font-medium text-primary-600">
                          {news.engagement} views
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">Join Study Group</p>
                    <p className="text-sm text-secondary-600">Find or create study groups</p>
                  </div>
                </div>
              </button>
              <button className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">Start Discussion</p>
                    <p className="text-sm text-secondary-600">Ask questions or share insights</p>
                  </div>
                </div>
              </button>
              <button className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">View Trends</p>
                    <p className="text-sm text-secondary-600">Explore popular topics</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Project Collaboration Tab */}
      {activeTab === 'collaboration' && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">Project Collaboration</h1>
              <p className="text-secondary-600 mt-1">Find teammates or offer your skills to exciting projects</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-medium">{project.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">{project.title}</h3>
                      <p className="text-sm text-secondary-600">by {project.author}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'open' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-secondary-100 text-secondary-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-secondary-700 mb-4">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-4 text-sm text-secondary-600">
                    <span>Category: {project.category}</span>
                    <span>Team: {project.teamSize}</span>
                    <span>Duration: {project.duration}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-secondary-700 mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                  <div className="flex items-center gap-4 text-sm text-secondary-500">
                    <span>Posted {project.posted}</span>
                    <span>{project.applicants} applicants</span>
                  </div>
                  <button className="btn-primary">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">Project Categories</h1>
              <p className="text-secondary-600 mt-1">Browse projects by category and find your perfect match</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="card hover:shadow-md transition-shadow duration-200 cursor-pointer"
                onClick={() => {
                  setSelectedCategory(category.id);
                  setActiveTab('collaboration');
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{category.name}</h3>
                  <p className="text-secondary-600">{category.count} projects available</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home; 