# COLLABRY

A modern web application designed for college students to collaborate on projects, discuss subjects, and stay updated with the latest technology trends.

## Features

### 🎓 Academic Organization
- **Year-wise Navigation**: Browse subjects by year (1st, 2nd, 3rd, 4th year)
- **Subject Pages**: Google Classroom-like interface for each subject
- **Discussion Forums**: Interactive discussions with classmates and instructors
- **Resource Management**: Access lectures, assignments, and study materials

### 🤝 Project Collaboration
- **Team Formation**: Find teammates or offer your skills to exciting projects
- **Category-based Browsing**: Filter projects by technology categories
- **Skill Matching**: Connect with students based on required skills
- **Project Management**: Track team size, duration, and application status

### 📱 Modern Interface
- **Light Aesthetic Theme**: Clean, modern design with soft colors
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Intuitive Navigation**: Easy-to-use sidebar and header navigation
- **Top Navigation Bar**: Quick access to Home, Project Collaboration, and Categories

### 🔔 Social Features
- **Trending Technology News**: Stay updated with latest tech developments
- **Engagement Metrics**: View likes, comments, and shares on discussions
- **User Profiles**: Personalize your profile with skills and interests
- **Study Groups**: Connect with fellow students for collaborative learning

### 🎯 Key Sections
- **Home**: Trending news and quick actions
- **Project Collaboration**: Find teammates and join exciting projects
- **Categories**: Browse projects by technology categories
- **Year Pages**: Subject listings for each academic year
- **Subject Pages**: Detailed subject information with discussions
- **Profile**: User profile management
- **Internships & Placements**: Career-focused sections

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom light theme
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## Color Scheme

The application uses a carefully designed light aesthetic color palette:

- **Primary**: Soft blue tones (#0ea5e9)
- **Secondary**: Neutral grays (#64748b)
- **Accent**: Warm yellow (#eab308)
- **Background**: Light gray (#fafafa)
- **Cards**: Pure white with subtle shadows

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd college-forum
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Main navigation header
│   └── Sidebar.tsx     # Year navigation sidebar
├── pages/              # Page components
│   ├── Home.tsx        # Home page with trending news
│   ├── Login.tsx       # Authentication page
│   ├── Profile.tsx     # User profile page
│   ├── YearPage.tsx    # Year-specific subject listings
│   └── SubjectPage.tsx # Individual subject pages
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Features in Detail

### Home Page
- Trending technology news with engagement metrics
- Quick action buttons for common tasks
- Statistics dashboard showing active users and discussions

### Year Navigation
- Sidebar with year buttons (1st, 2nd, 3rd, 4th year)
- Additional sections for internships and placements
- Active state indicators for current page

### Subject Pages
- Google Classroom-inspired layout
- Subject information with instructor details
- Discussion forums with real-time messaging
- Resource library with various file types
- Student enrollment and class schedules

### User Profile
- Editable profile information
- Skills and interests tags
- Activity statistics
- Professional information

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Real-time messaging with WebSocket
- [ ] File upload and sharing capabilities
- [ ] Video conferencing integration
- [ ] Mobile app development
- [ ] Advanced search and filtering
- [ ] Notification system
- [ ] Dark mode support
- [ ] Multi-language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository or contact the development team. 