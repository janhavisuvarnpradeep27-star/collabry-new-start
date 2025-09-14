import React, { useState } from 'react';
import { User, Mail, GraduationCap, Calendar, Edit, Save, X } from 'lucide-react';

interface ProfileProps {
  user: any;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@college.edu',
    year: user?.year || '3rd Year',
    department: user?.department || 'Computer Science',
    bio: 'Passionate about technology and learning. Always eager to collaborate on interesting projects and help fellow students.',
    skills: ['JavaScript', 'React', 'Python', 'Machine Learning', 'Web Development'],
    interests: ['AI/ML', 'Web3', 'Cybersecurity', 'Mobile Development']
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-secondary-900">Profile</h1>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="btn-primary flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="btn-secondary flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="card text-center">
            <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-16 h-16 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">
              {profileData.name}
            </h2>
            <p className="text-secondary-600 mb-4">{profileData.department}</p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary-400" />
                <span className="text-secondary-700">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-secondary-400" />
                <span className="text-secondary-700">{profileData.year}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-secondary-400" />
                <span className="text-secondary-700">Joined 2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">About</h3>
            {isEditing ? (
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={4}
              />
            ) : (
              <p className="text-secondary-700 leading-relaxed">{profileData.bio}</p>
            )}
          </div>

          {/* Skills */}
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Activity Stats */}
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Activity</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">24</p>
                <p className="text-secondary-600">Discussions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-600">156</p>
                <p className="text-secondary-600">Replies</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">8</p>
                <p className="text-secondary-600">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 