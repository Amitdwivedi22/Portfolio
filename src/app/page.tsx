'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Squares from '../components/Squares';

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="text-green-600 text-sm">✅ {submitMessage}</div>
          </div>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <div className="text-red-600 text-sm">❌ {submitError}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="modern-input"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="modern-input"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="modern-input"
            placeholder="Project inquiry"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="modern-textarea"
            placeholder="Tell me about your project..."
            rows={5}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`modern-btn w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? '🚀 Sending...' : '🚀 Send Message'}
        </button>
      </form>
    </>
  );
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const handleSectionChange = (section: string) => {
    if (section !== currentSection) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSection(section);
        setIsTransitioning(false);
      }, 500); // Match animation duration
    }
  };

  const skills = [
    { name: 'Next.js', level: 90, category: 'Frontend' },
    { name: 'React.js', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'TypeScript', level: 85, category: 'Language' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Framer Motion', level: 80, category: 'Animation' },
    { name: 'GSAP', level: 75, category: 'Animation' },
    { name: 'Three.js', level: 70, category: 'Graphics' },
    { name: 'AWS S3', level: 70, category: 'Cloud' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Linux', level: 80, category: 'OS' }
  ];

  const projects = [
    {
      title: 'Web3 Dropbox',
      image: '☁️',
      tech: ['Next.js', 'TypeScript', 'Lucid React', 'Tailwind CSS', 'Nodejs/Express','MongoDb', 'Redis', 'Ipfs', 'FileCoin', 'RainbowKit', 'Smart Contracts'],
      description: 'A decentralized storage platform using IPFS, blockchain, and smart contracts to offer a secure, censorship-free alternative to Google Drive and Dropbox..',
      status: 'COMPLETED',
      github_link: 'https://github.com/Amitdwivedi22/web3-dropbox',
      live_link: 'https://web3-dropbox.vercel.app/',

    },
    {
      title: 'SustainDev',
      image: '♻️',
      tech: ['React', 'TailwindCss', 'TypeScript', 'Node.js', 'Express', 'Mongodb'],
      description: 'Web app enabling users to recycle trash, book pickups, and earn cash rewards credited to their wallet post-recycling.',
      status: 'COMPLETED',
      github_link: 'https://github.com/Amitdwivedi22/SustainDev',
      live_link: 'https://sustain-dev.vercel.app/',
    },

  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Amitdwivedi22?tab=overview&from=2025-09-01&to=2025-09-30', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amit-kumar-dwivedi-9b1789233', icon: '💼' },
    { name: 'Twitter', url: 'https://x.com/AmitDwived12556?t=321hrYOpS3MdOjEhkYPRvw&s=09', icon: '🐦' },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md  border-gray-600 pb-1">
        <div className="w-full h-20 relative ">
          <Squares
            direction="right"
            speed={0.1}
            borderColor="#4b5563"
            squareSize={20}
            hoverFillColor="#374151"
          />
          <div className="absolute inset-0 z-10 bg-gray-900/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="flex justify-between items-center h-20 pt-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-2xl">👨‍💻</span>
                  <span className="text-2xl font-extrabold gradient-text">Amit Kumar Dwivedi</span>
                </motion.div>
                <div className="hidden md:flex space-x-1">
                  {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => handleSectionChange(section)}
                      className={`nav-link ${currentSection === section ? 'active' : ''} font-bold text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 rounded-lg`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-white font-bold"
                  >
                    <span className="sr-only">Menu</span>
                    {isMobileMenuOpen ? '✕' : '☰'}
                  </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-600"
                  >
                    <div className="px-4 py-4 space-y-2">
                      {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                        <button
                          key={section}
                          onClick={() => {
                            handleSectionChange(section);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 rounded-lg font-bold text-white hover:bg-gray-700 transition-colors duration-200 ${
                            currentSection === section ? 'bg-gray-700' : ''
                          }`}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {isTransitioning && (
          <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading...</p>
            </div>
          </div>
        )}
        <div className="relative" style={{ backgroundColor: '#111827' }}>
          <AnimatePresence mode="wait">
          {currentSection === 'home' && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex items-center justify-center section-padding bg-gray-900 text-white relative overflow-hidden"
            >
              {/* Animated Background Squares */}
              <div className="absolute inset-0 overflow-hidden">
                <Squares
                  direction="diagonal"
                  speed={0.3}
                  borderColor="#666"
                  squareSize={40}
                  hoverFillColor="#333"
                />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full gradient-bg flex items-center justify-center">
                      <span className="dev-icon-3d">👨‍💻</span>
                    </div>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                  >
                    Hi, I&#39;m <span className="gradient-text">Amit</span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-200 mb-8 typing-text"
                  >
                    Full Stack Developer & MERN Specialist
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-base text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed text-center px-4"
                  >
                    As a Full-Stack Developer, I enjoy turning complex problems into simple, user-friendly solutions. I build fast, scalable web applications that blend performance with great design to create lasting impact.
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <a href="mailto:adwivedi08340@gmail.com" className="modern-btn btn-3d">
                      📧 Get In Touch
                    </a>
                    <a target= "_blank" href="tel:+919695690501" className="modern-btn-outline btn-3d">
                      📞 Call Me
                    </a>
                    <a target="_blank" href="https://drive.google.com/file/d/1NvfPkrJjv8ligVX3vlcCb_DTcmlwOYcb/view?usp=sharing" className="modern-btn-outline btn-3d">
                      📄 Resume
                    </a>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center space-x-6 mt-12"
                  >
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xl hover:bg-gray-600 transition-colors"
                        title={link.name}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {currentSection === 'about' && (
            <motion.section
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen section-padding relative overflow-hidden bg-gray-900 text-white"
            >
              <div className="absolute inset-0">
                <Squares
                  direction="up"
                  speed={0.2}
                  borderColor="#666"
                  squareSize={30}
                  hoverFillColor="#333"
                />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-20 md:pt-20 md:pb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                  About Me
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 card-3d"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-white">🎓 Education</h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">Bachelor of Technology (CSE CTIS)</h4>
                        <p className="text-gray-300">Jain University, Bangalore</p>
                        <p className="text-sm text-gray-400">Aug 2024 - Aug 2027</p>
                        <ul className="text-sm text-gray-300 mt-2 space-y-1">
                          <li>• Participated in 3 hackathons with innovative solutions</li>
                          <li>• Hands-on experience in web and app development</li>
                          <li>• Active in coding competitions and tech events</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-purple-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">Diploma in Computer Science Engineering</h4>
                        <p className="text-gray-300">3 Years Program</p>
                        <p className="text-sm text-gray-400">CGPA: 8.91/10</p>
                      </div>

                      <div className="border-l-4 border-cyan-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">Class 10th</h4>
                        <p className="text-gray-300">ICSE Board</p>
                        <p className="text-sm text-gray-400">Score: 74.4%</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 card-3d">
                      <h3 className="text-2xl font-bold mb-6 text-white">💼 Work Experience</h3>
                      <div className="border-l-4 border-pink-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">R&D Developer</h4>
                        <p className="text-gray-300">Nexathread</p>
                        <p className="text-sm text-gray-400">Feb 2025 - April 2025</p>
                        <ul className="text-sm text-gray-300 mt-2 space-y-1">
                          <li>• Research and Development in emerging technologies</li>
                          <li>• Full-stack development projects using MERN stack</li>
                          <li>• Collaborative team environment with agile methodologies</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 card-3d">
                      <h3 className="text-2xl font-bold mb-6 text-white">🏆 Achievements</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-blue-400">3</div>
                          <div className="text-sm text-gray-200">Hackathons</div>
                        </div>
                        <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-purple-400">4</div>
                          <div className="text-sm text-gray-200">Projects</div>
                        </div>
                        <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-cyan-400">2</div>
                          <div className="text-sm text-gray-200">Years Coding</div>
                        </div>
                        <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-pink-400">8.91</div>
                          <div className="text-sm text-gray-200">CGPA</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {currentSection === 'skills' && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen section-padding bg-gray-900 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <Squares
                  direction="left"
                  speed={0.15}
                  borderColor="#666"
                  squareSize={35}
                  hoverFillColor="#333"
                />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                  Skills & Technologies
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 card-3d"
                  >
                    <h3 className="text-2xl font-bold mb-8 text-white">Technical Skills</h3>
                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-white">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="progress-container">
                            <motion.div
                              className="progress-fill"
                              initial={{ inlineSize: 0 }}
                              animate={{ inlineSize: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 card-3d">
                      <h3 className="text-2xl font-bold mb-6 text-white text-3d">Tech Stack</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-6 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-3xl mb-2">⚛️</div>
                          <h4 className="font-bold text-white">Frontend</h4>
                          <p className="text-sm text-gray-200 font-medium">React, Next.js, Tailwind CSS</p>
                        </div>
                        <div className="text-center p-6 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-3xl mb-2">🚀</div>
                          <h4 className="font-bold text-white">Backend</h4>
                          <p className="text-sm text-gray-200 font-medium">Node.js, Express.js</p>
                        </div>
                        <div className="text-center p-6 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-3xl mb-2">🗄️</div>
                          <h4 className="font-bold text-white">Database</h4>
                          <p className="text-sm text-gray-200 font-medium">MongoDB, PostgreSQL</p>
                        </div>
                        <div className="text-center p-6 bg-gray-700/50 rounded-lg border border-gray-600">
                          <div className="text-3xl mb-2">🛠️</div>
                          <h4 className="font-bold text-white">Tools</h4>
                          <p className="text-sm text-gray-200 font-medium">Git, AWS, Linux</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 card-3d">
                      <h3 className="text-2xl font-bold mb-6 text-white text-3d">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-tag skill-tag-3d">English (Fluent)</span>
                        <span className="skill-tag skill-tag-3d">Hindi (Native)</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {currentSection === 'projects' && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen section-padding bg-gray-900 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <Squares
                  direction="down"
                  speed={0.25}
                  borderColor="#666"
                  squareSize={38}
                  hoverFillColor="#333"
                />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                  Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 group project-card-3d"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{project.image}</div>
                        <span className={`status-badge ${
                          project.status === 'COMPLETED' ? 'status-completed' : 'status-progress'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-200 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="skill-tag font-bold">{tech}</span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <a target='_blank' href={project.github_link} className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1 text-center font-medium btn-3d">
                          🔗 View Code
                        </a>
                        <a target='_blank' href={project.live_link} className="bg-blue-600/80 hover:bg-blue-500/80 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1 text-center font-medium btn-3d">
                          🚀 Live Demo
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center mt-12"
                >
                  <p className="text-gray-200 mb-6 font-medium">Want to see more of my work?</p>
                  <button className="bg-blue-600/80 hover:bg-blue-500/80 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-200 btn-3d">
                    🔗 View All Projects on GitHub
                  </button>
                </motion.div>
              </div>
            </motion.section>
          )}

          {currentSection === 'contact' && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen section-padding bg-gray-900 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <Squares
                  direction="diagonal"
                  speed={0.18}
                  borderColor="#666"
                  squareSize={32}
                  hoverFillColor="#333"
                />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                  Let&#39;s Work Together
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700"
                  >
                    <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-xl border border-gray-600">
                          📧
                        </div>
                        <div>
                          <p className="font-bold text-white text-lg">Email</p>
                          <a href="mailto:adwivedi08340@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium text-base">
                            adwivedi08340@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-xl border border-gray-600">
                          📞
                        </div>
                        <div>
                          <p className="font-bold text-white text-lg">Phone</p>
                          <a href="tel:+919695690501" className="text-green-400 hover:text-green-300 font-medium text-base">
                            +91 9695690501
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-xl border border-gray-600">
                          📍
                        </div>
                        <div>
                          <p className="font-bold text-white text-lg">Location</p>
                          <p className="text-gray-200 text-base">Bengaluru, India</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-lg font-bold mb-4 text-white">Social Links</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {socialLinks.map((link) => (
                          <a key={link.name} href={link.url} className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-center font-medium">
                            {link.icon} {link.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <a target="_blank" href="https://drive.google.com/file/d/1NvfPkrJjv8ligVX3vlcCb_DTcmlwOYcb/view?usp=sharing">
                        <button className="bg-blue-600/80 hover:bg-blue-500/80 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-200 w-full btn-3d">
                          📄 Download Resume
                        </button>
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 card-3d"
                  >
                    <h3 className="text-2xl font-bold mb-8 text-white">Send Message</h3>
                    <FormComponent />
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-lg font-bold gradient-text mb-2">
              Amit Kumar Dwivedi
            </div>
            <p className="text-gray-300 mb-3 text-xs">
              Full Stack Developer specializing in MERN stack
            </p>
            <div className="flex justify-center space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-xs"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
