import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Plus } from 'lucide-react';

const YearPage: React.FC = () => {
  const { year } = useParams();

  const subjects = {
    '1': [
      {
        id: 'math101',
        name: 'Mathematics I',
        code: 'MATH101',
        instructor: 'Dr. Sarah Johnson',
        students: 45,
        nextClass: 'Tomorrow, 9:00 AM',
        color: 'bg-blue-100 text-blue-700',
        topics: ['Calculus', 'Linear Algebra', 'Differential Equations']
      },
      {
        id: 'physics101',
        name: 'Physics I',
        code: 'PHY101',
        instructor: 'Prof. Michael Chen',
        students: 38,
        nextClass: 'Today, 2:00 PM',
        color: 'bg-green-100 text-green-700',
        topics: ['Mechanics', 'Thermodynamics', 'Waves']
      },
      {
        id: 'cs101',
        name: 'Introduction to Computer Science',
        code: 'CS101',
        instructor: 'Dr. Emily Rodriguez',
        students: 52,
        nextClass: 'Wednesday, 11:00 AM',
        color: 'bg-purple-100 text-purple-700',
        topics: ['Programming Basics', 'Data Structures', 'Algorithms']
      },
      {
        id: 'eng101',
        name: 'English Composition',
        code: 'ENG101',
        instructor: 'Prof. David Wilson',
        students: 40,
        nextClass: 'Friday, 1:00 PM',
        color: 'bg-orange-100 text-orange-700',
        topics: ['Essay Writing', 'Critical Analysis', 'Research Methods']
      }
    ],
    '2': [
      {
        id: 'data-structures',
        name: 'Data Structures & Algorithms',
        code: 'CS201',
        instructor: 'Dr. Alex Thompson',
        students: 48,
        nextClass: 'Tomorrow, 10:00 AM',
        color: 'bg-indigo-100 text-indigo-700',
        topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs']
      },
      {
        id: 'database',
        name: 'Database Management Systems',
        code: 'CS202',
        instructor: 'Prof. Lisa Park',
        students: 42,
        nextClass: 'Today, 3:00 PM',
        color: 'bg-teal-100 text-teal-700',
        topics: ['SQL', 'Normalization', 'Indexing', 'Transactions']
      },
      {
        id: 'networks',
        name: 'Computer Networks',
        code: 'CS203',
        instructor: 'Dr. Robert Kim',
        students: 35,
        nextClass: 'Thursday, 2:00 PM',
        color: 'bg-pink-100 text-pink-700',
        topics: ['OSI Model', 'TCP/IP', 'Routing', 'Security']
      }
    ],
    '3': [
      {
        id: 'machine-learning',
        name: 'Machine Learning',
        code: 'CS301',
        instructor: 'Dr. Jennifer Lee',
        students: 55,
        nextClass: 'Tomorrow, 11:00 AM',
        color: 'bg-red-100 text-red-700',
        topics: ['Supervised Learning', 'Neural Networks', 'Deep Learning']
      },
      {
        id: 'software-engineering',
        name: 'Software Engineering',
        code: 'CS302',
        instructor: 'Prof. Mark Davis',
        students: 38,
        nextClass: 'Today, 4:00 PM',
        color: 'bg-yellow-100 text-yellow-700',
        topics: ['Agile Development', 'Testing', 'Deployment']
      },
      {
        id: 'web-development',
        name: 'Web Development',
        code: 'CS303',
        instructor: 'Dr. Amanda White',
        students: 45,
        nextClass: 'Wednesday, 1:00 PM',
        color: 'bg-emerald-100 text-emerald-700',
        topics: ['Frontend', 'Backend', 'Full Stack']
      }
    ],
    '4': [
      {
        id: 'ai',
        name: 'Artificial Intelligence',
        code: 'CS401',
        instructor: 'Dr. Kevin Zhang',
        students: 32,
        nextClass: 'Tomorrow, 2:00 PM',
        color: 'bg-violet-100 text-violet-700',
        topics: ['AI Ethics', 'Natural Language Processing', 'Computer Vision']
      },
      {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        code: 'CS402',
        instructor: 'Prof. Rachel Brown',
        students: 28,
        nextClass: 'Today, 5:00 PM',
        color: 'bg-rose-100 text-rose-700',
        topics: ['Cryptography', 'Penetration Testing', 'Security Protocols']
      },
      {
        id: 'capstone',
        name: 'Capstone Project',
        code: 'CS403',
        instructor: 'Dr. Thomas Anderson',
        students: 25,
        nextClass: 'Friday, 3:00 PM',
        color: 'bg-slate-100 text-slate-700',
        topics: ['Project Planning', 'Implementation', 'Presentation']
      }
    ]
  };

  const yearSubjects = subjects[year as keyof typeof subjects] || [];

  const getYearTitle = (year: string) => {
    const yearNames = {
      '1': 'First Year',
      '2': 'Second Year',
      '3': 'Third Year',
      '4': 'Fourth Year'
    };
    return yearNames[year as keyof typeof yearNames] || 'Year';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">
            {getYearTitle(year || '')} Subjects
          </h1>
          <p className="text-secondary-600 mt-1">
            Explore subjects and connect with your classmates
          </p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Join Subject
        </button>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yearSubjects.map((subject) => (
          <Link
            key={subject.id}
            to={`/year/${year}/subject/${subject.id}`}
            className="card hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${subject.color}`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-secondary-500 bg-secondary-100 px-2 py-1 rounded">
                {subject.code}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              {subject.name}
            </h3>
            
            <p className="text-secondary-600 text-sm mb-4">
              Instructor: {subject.instructor}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-secondary-500">
                <Users className="w-4 h-4" />
                <span>{subject.students} students enrolled</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-secondary-500">
                <Clock className="w-4 h-4" />
                <span>Next: {subject.nextClass}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-secondary-200">
              <p className="text-xs font-medium text-secondary-500 mb-2">Topics:</p>
              <div className="flex flex-wrap gap-1">
                {subject.topics.slice(0, 2).map((topic, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary-100 text-secondary-600 px-2 py-1 rounded"
                  >
                    {topic}
                  </span>
                ))}
                {subject.topics.length > 2 && (
                  <span className="text-xs text-secondary-400">
                    +{subject.topics.length - 2} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {yearSubjects.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">
            No subjects found
          </h3>
          <p className="text-secondary-600">
            There are no subjects available for this year yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default YearPage; 