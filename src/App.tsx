import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Music, Palette, Zap, ChevronRight, Star, Trophy, Clock, User } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Rythmic Beats",
      category: "Dance",
      date: "March 15, 2025",
      time: "6:00 PM",
      venue: "Main Auditorium",
      description: "Move your body and express freely through the universal language of dance.",
      subEvents: ["Classical Dance", "Western Dance", "Solo Dance", "Group Dance"],
      registrationFee: "Free",
      prizes: "Exciting Prizes"
    },
    {
      id: 2,
      title: "Canvas Chronicles",
      category: "Arts",
      date: "March 22, 2025",
      time: "10:00 AM",
      venue: "Main Auditorium",
      description: "A Celebration of Music,Dance & Art.Join the Celebration",
      subEvents: ["Oil Painting", "Digital Art", "Sketching", "Sculpture"],
      registrationFee: "Free",
      prizes: "Exciting Prizes"
    },
    {
      id: 3,
      title: "Melodic Harmony",
      category: "Music",
      date: "April 5, 2025",
      time: "7:00 PM",
      venue: "Main Auditorium",
      description: "Play an instrument,sing your heart out or simply get lost into the rhythm",
      subEvents: ["Singing", "Band Performance", "Guess the song", "Musical Quiz"],
      registrationFee: "Free",
      prizes: "Exciting prizes"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Cultural Fest 2024",
      date: "December 2024",
      participants: 500,
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      winner: "Team Phoenix - Dance Competition"
    },
    {
      id: 2,
      title: "Art Exhibition 2024",
      date: "November 2024",
      participants: 200,
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800",
      winner: "Priya Sharma - Oil Painting"
    },
    {
      id: 3,
      title: "Music Night 2024",
      date: "October 2024",
      participants: 300,
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
      winner: "The Harmonics - Band Performance"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Dance Performance",
      category: "Dance",
      image: "mj.jpg",
      description: "Students performing classical dance"
    },
    {
      id: 2,
      title: "Art",
      category: "Arts",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Creative art session in progress"
    },
    {
      id: 3,
      title: "Music Concert",
      category: "Music",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Live music performance"
    },
    {
      id: 4,
      title: "Cultural Festival",
      category: "Festival",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Annual cultural celebration"
    },
    {
      id: 6,
      title: "Photography Exhibition",
      category: "Photography",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Student photography showcase"
    },
    {
      id: 9,
      title: "Band Performance",
      category: "Music",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "College band in action"
    }
  ];

  const additionalGalleryImages = [
    // You can uncomment these to add more images
    // {
    //   id: 10,
    //   title: "Poetry Recitation",
    //   category: "Literature",
    //   image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Students expressing through poetry"
    // },
    // {
    //   id: 11,
    //   title: "Fashion Show",
    //   category: "Fashion",
    //   image: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Annual fashion showcase event"
    // },
  ];

  const displayedGalleryImages = showAllGallery
    ? [...galleryImages, ...additionalGalleryImages]
    : galleryImages;

  const eventCategories = [
    {
      title: "Dance Events",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "Express yourself through movement and rhythm",
      subEvents: ["Classical", "Contemporary", "Hip-Hop", "Folk", "Bollywood"]
    },
    {
      title: "Art Events",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-teal-500",
      description: "Unleash your creativity on canvas and beyond",
      subEvents: ["Painting", "Sketching", "Digital Art", "Sculpture", "Photography"]
    },
    {
      title: "Music Events",
      icon: <Music className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Create harmony with vocals and instruments",
      subEvents: ["Vocal", "Instrumental", "Band", "DJ", "Beatboxing"]
    }
  ];

  const coordinators = {
    faculty: [
      {
        id: 1,
        name: "Ms. P.Sujatha",
        role: "Faculty Coordinator",
        department: "Computer Science Engineering(CSM)",
        image: "Faculty.jpg",
        contact: "psujatha@pvpsiddhartha.ac.in",
      },
    ],
    student: [
      {
        id: 1,
        name: "R Vennela Sai",
        role: "CSM Student Coordinator",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
        contact: "22501a4252@pvpsit.ac.in",
      },
      {
        id: 2,
        name: "N Maheswari",
        role: "CSM Student Coordinator",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
        contact: "22501a4238@pvpsit.ac.in",
      },
      {
        id: 3,
        name: "M Dhakshesh",
        role: "CSM Student Coordinator",
        image: "Dhakshu.jpg",
        contact: "22501a4237@pvpsit.ac.in",
      },
      {
        id: 4,
        name: "N Durgesh Chowdary",
        role: "CSM Student Coordinator",
        image: "Durgesh.jpg",
        contact: "22501a4240@pvpsit.ac.in",
      },
      {
        id: 5,
        name: "B Pujitha",
        role: "CSD Student Coordinator",
        image: "Pujitha.jpg",
        contact: "22501a4408@pvpsit.ac.in",
      },
      {
        id: 6,
        name: "M Reshmi",
        role: "CSD Student Coordinator",
        image: "Reshmi.jpg",
        contact: "22501a4440@pvpsit.ac.in",
      },
      {
        id: 7,
        name: "G Harsha Vardhan",
        role: "CSD Student Coordinator",
        image: "Harsha.jpg",
        contact: "22501a4415@pvpsit.ac.in",
      },
      {
        id: 8,
        name: "D Sushanth Teja",
        role: "CSD Student Coordinator",
        image: "Sushanth.jpg",
        contact: "22501a4412@pvpsit.ac.in",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      

      {/* NEW BANNER SECTION START */}
      <section
        className="bg-center bg-cover text-white py-16 px-4 sm:px-6 lg:px-8 shadow-inner shadow-purple-900/50 pt-16 md:pt-20"
        style={{ backgroundImage: `url('banner.jpg')` }}
      >
        
      </section>
      {/* NEW BANNER SECTION END */}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(1000216405.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-lime-200 bg-clip-text text-transparent">
              Cultural Club
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-white-200">
              CSD & CSM Branch
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white-300">
              Prasad V Potluri Siddhartha Institute of Technology
            </p>
            <p className="text-lg mb-12 text-white-400 max-w-2xl mx-auto leading-relaxed">
              Where creativity meets passion. Join us in celebrating art, music, and dance through spectacular events and competitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('events')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Explore Events
              </button>
              <a href="https://forms.gle/niKmfExo62gCPSR8A" target="_blank" rel="noopener noreferrer" className="border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                Join Community
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-blue-500/20 rounded-full animate-float-slow"></div>
      </section>

      {/* Event Categories */}
      <section id="events" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Categories</h2>
            <p className="text-gray-400 text-lg">Discover your passion in our diverse range of cultural events</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-400">Sub Events:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.subEvents.map((subEvent, subIndex) => (
                      <span 
                        key={subIndex}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                      >
                        {subEvent}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-400 text-lg">Don't miss these exciting upcoming cultural competitions</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                      {event.category}
                    </span>
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                      {event.venue}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <User className="w-5 h-5 mr-3 text-purple-400" />
                      Registration Fee: {event.registrationFee}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Trophy className="w-5 h-5 mr-3 text-yellow-500" />
                      Prize Pool: {event.prizes}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-purple-400 mb-3">Competition Categories:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {event.subEvents.map((subEvent, index) => (
                        <span 
                          key={index}
                          className="px-3 py-2 bg-slate-700 rounded-lg text-sm text-center hover:bg-purple-500/20 transition-colors duration-200"
                        >
                          {subEvent}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a href="https://forms.gle/niKmfExo62gCPSR8A" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Register Now
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
            <p className="text-gray-400 text-lg">Capturing moments of creativity, talent, and celebration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedGalleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div 
                  className="aspect-square bg-cover bg-center relative"
                  style={{backgroundImage: `url(${image.image})`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-purple-500/80 rounded-full text-sm text-white mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {image.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              {showAllGallery ? 'Show Less Photos' : 'View More Photos'}
            </button>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section id="coordinators" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h2>
            <p className="text-gray-400 text-lg">Our dedicated faculty and student coordinators</p>
          </div>

          {/* Faculty Coordinators */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">Faculty Coordinator</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 justify-center max-w-2xl mx-auto">
              {coordinators.faculty.map((member) => (
                <div
                  key={member.id}
                  className="group flex flex-col md:flex-row items-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div
                    className="w-32 h-32 md:w-28 md:h-28 rounded-full bg-cover bg-center ring-4 ring-purple-500 ring-offset-4 ring-offset-slate-900 transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-purple-300 font-medium mb-1">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-2">{member.department}</p>
                    <a href={`mailto:${member.contact}`} className="text-gray-500 text-sm hover:text-purple-400 transition-colors duration-200">
                      {member.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Coordinators */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">Student Coordinators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coordinators.student.map((member) => (
                <div
                  key={member.id}
                  className="group flex flex-col items-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20"
                >
                  <div
                    className="w-28 h-28 rounded-full bg-cover bg-center ring-4 ring-pink-500 ring-offset-4 ring-offset-slate-900 transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="mt-6">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-pink-300 font-medium mb-1">{member.role}</p>
                    <a href={`mailto:${member.contact}`} className="text-gray-500 text-sm hover:text-pink-400 transition-colors duration-200">
                      {member.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join the Culture?</h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Be part of something amazing. Register for upcoming events and showcase your talent to the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/niKmfExo62gCPSR8A" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-flex items-center justify-center">
              Register for Events
            </a>
            <button className="border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">Cultural Club</span>
              </div>
              <p className="text-gray-400">
                CSD & CSM Branch<br />
                Prasad V Potluri Siddhartha Institute of Technology
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Events</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Registration</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Gallery</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">About Us</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: culturalclubpvpsit@gmail.com</p>
                <p>Campus: Kanuru, Vijayawada</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cultural Club, PVP Siddhartha Institute of Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;