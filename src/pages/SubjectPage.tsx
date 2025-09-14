import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  MessageCircle, 
  FileText, 
  Video, 
  Calendar,
  Heart,
  Share2,
  Plus,
  Send
} from 'lucide-react';

const SubjectPage: React.FC = () => {
  const { year, subject } = useParams();
  const [newMessage, setNewMessage] = useState('');

  // Mock subject data
  const subjectData = {
    id: subject,
    name: 'Machine Learning',
    code: 'CS301',
    instructor: 'Dr. Jennifer Lee',
    students: 55,
    description: 'This course covers fundamental concepts in machine learning including supervised and unsupervised learning, neural networks, and deep learning applications.',
    topics: ['Supervised Learning', 'Neural Networks', 'Deep Learning', 'Natural Language Processing'],
    color: 'bg-red-100 text-red-700'
  };

  const discussions = [
    {
      id: 1,
      author: 'Alex Chen',
      avatar: 'AC',
      content: 'Can someone explain the difference between gradient descent and stochastic gradient descent? I\'m having trouble understanding when to use each one.',
      timestamp: '2 hours ago',
      likes: 12,
      replies: 8,
      isInstructor: false
    },
    {
      id: 2,
      author: 'Dr. Jennifer Lee',
      avatar: 'JL',
      content: 'Great question! Gradient descent uses the entire dataset to compute the gradient, while stochastic gradient descent uses a single sample or mini-batch. SGD is generally faster but can be noisier.',
      timestamp: '1 hour ago',
      likes: 24,
      replies: 3,
      isInstructor: true
    },
    {
      id: 3,
      author: 'Sarah Kim',
      avatar: 'SK',
      content: 'I found this YouTube video really helpful for understanding backpropagation: https://youtu.be/example. Anyone else struggling with this concept?',
      timestamp: '30 minutes ago',
      likes: 7,
      replies: 5,
      isInstructor: false
    }
  ];

  const resources = [
    {
      id: 1,
      name: 'Week 1: Introduction to ML',
      type: 'video',
      duration: '45 min',
      icon: Video
    },
    {
      id: 2,
      name: 'Assignment 1: Linear Regression',
      type: 'assignment',
      dueDate: 'Due in 3 days',
      icon: FileText
    },
    {
      id: 3,
      name: 'Lecture Notes: Neural Networks',
      type: 'document',
      pages: '15 pages',
      icon: FileText
    },
    {
      id: 4,
      name: 'Practice Problems Set 2',
      type: 'quiz',
      questions: '20 questions',
      icon: FileText
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to backend
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Subject Header */}
      <div className="card">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${subjectData.color}`}>
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">{subjectData.name}</h1>
              <p className="text-secondary-600">{subjectData.code} • {subjectData.instructor}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-secondary-500">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {subjectData.students} students
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Next class: Tomorrow, 11:00 AM
                </div>
              </div>
            </div>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Join Discussion
          </button>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">About this subject</h3>
          <p className="text-secondary-700 leading-relaxed">{subjectData.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-3">Topics covered</h3>
          <div className="flex flex-wrap gap-2">
            {subjectData.topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resources */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Resources</h3>
            <div className="space-y-3">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <div
                    key={resource.id}
                    className="flex items-center gap-3 p-3 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-secondary-900">{resource.name}</p>
                      <p className="text-sm text-secondary-500">
                        {resource.duration || resource.dueDate || resource.pages || resource.questions}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Discussions */}
        <div className="lg:col-span-2">
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Recent Discussions</h3>
            
            <div className="space-y-4 mb-6">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="border-b border-secondary-200 pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      discussion.isInstructor 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-secondary-100 text-secondary-700'
                    }`}>
                      {discussion.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-secondary-900">{discussion.author}</span>
                        {discussion.isInstructor && (
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            Instructor
                          </span>
                        )}
                        <span className="text-sm text-secondary-400">{discussion.timestamp}</span>
                      </div>
                      <p className="text-secondary-700 mb-3">{discussion.content}</p>
                      <div className="flex items-center gap-4 text-sm text-secondary-500">
                        <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                          <Heart className="w-4 h-4" />
                          {discussion.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          {discussion.replies} replies
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Message */}
            <div className="border-t border-secondary-200 pt-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center text-sm font-medium text-secondary-700">
                  YO
                </div>
                <div className="flex-1">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Start a discussion..."
                    className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={handleSendMessage}
                      className="btn-primary flex items-center gap-2"
                      disabled={!newMessage.trim()}
                    >
                      <Send className="w-4 h-4" />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage; 