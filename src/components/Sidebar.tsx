import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  GraduationCap,
  Home,
  TrendingUp
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/year/1', label: 'First Year', icon: BookOpen },
    { path: '/year/2', label: 'Second Year', icon: BookOpen },
    { path: '/year/3', label: 'Third Year', icon: BookOpen },
    { path: '/year/4', label: 'Fourth Year', icon: BookOpen },
    { path: '/internships', label: 'Internships', icon: Briefcase },
    { path: '/placements', label: 'Placements', icon: GraduationCap },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-white border-r border-secondary-200 p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-8 pt-6 border-t border-secondary-200">
        <h3 className="text-sm font-semibold text-secondary-500 uppercase tracking-wider mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <button className="sidebar-item w-full justify-start">
            <TrendingUp className="w-5 h-5" />
            <span>Trending Topics</span>
          </button>
          <button className="sidebar-item w-full justify-start">
            <Users className="w-5 h-5" />
            <span>Study Groups</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 