import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Terminal, 
  Cpu, 
  Shield, 
  Sprout, 
  BookOpen, 
  Code, 
  Globe, 
  Award, 
  Mail, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Github,
  Folder,
  MessageCircle
} from 'lucide-react';

// --- 3D Background Component ---
const NeuralNetworkBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    
    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.002); // Cyber fog

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Particles (Nodes)
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      // Spread particles in a wide tunnel shape
      posArray[i] = (Math.random() - 0.5) * 80;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material for Dots
    const material = new THREE.PointsMaterial({
      size: 0.15,
      color: 0x00ffff, // Cyan for Cyber/AI
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Interaction State
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };
    
    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate entire system slowly
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Mouse interaction parallax
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 10 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount) mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-gray-900 via-black to-gray-900" />;
};

// --- UI Components ---

const NavLink = ({ href, children, mobile, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`${mobile ? 'block w-full py-4 text-center hover:bg-cyan-900/30' : 'hover:text-cyan-400'} transition-colors duration-300 font-mono text-sm uppercase tracking-widest`}
  >
    {children}
  </a>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-12 text-center" data-aos="fade-up">
    <div className="flex justify-center mb-4">
      <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
        <Icon size={32} />
      </div>
    </div>
    <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">{title}</h2>
    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-gray-400 max-w-2xl mx-auto font-light">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 shadow-xl ${className}`}>
    {children}
  </div>
);

const SkillBadge = ({ skill }) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between text-xs font-mono text-cyan-300 uppercase">
      <span>{skill}</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-full animate-pulse"></div>
    </div>
  </div>
);

const ExperienceNode = ({ role, company, period, loc, details }) => (
  <div className="relative pl-8 pb-12 border-l border-cyan-500/30 last:border-0 last:pb-0 group">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300"></div>
    <Card className="ml-4 -mt-2 group-hover:translate-x-2 transition-transform duration-300">
      <h3 className="text-xl font-bold text-white">{role}</h3>
      <div className="flex flex-wrap gap-4 text-sm text-cyan-400 font-mono my-2">
        <span>{company}</span>
        <span>•</span>
        <span>{period}</span>
      </div>
      <p className="text-gray-400 text-sm italic mb-3">{loc}</p>
      <ul className="space-y-2">
        {details.map((item, idx) => (
          <li key={idx} className="flex items-start text-gray-300 text-sm">
            <span className="mr-2 text-cyan-500">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  </div>
);

const ProjectCard = ({ title, description, tags, link, privateRepo }) => (
  <Card className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-cyan-900/20 rounded-lg text-cyan-400">
        <Folder size={24} />
      </div>
      <div className="flex gap-3">
        {link && !privateRepo && (
          <a href={link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        )}
        {privateRepo && (
           <span className="text-xs text-yellow-500 font-mono border border-yellow-500/30 px-2 py-1 rounded">PRIVATE</span>
        )}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
      {tags.map((tag, idx) => (
        <span key={idx} className="text-xs font-mono text-cyan-500">
          #{tag}
        </span>
      ))}
    </div>
  </Card>
);

const Stat = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
    <div className="text-cyan-400"><Icon size={24} /></div>
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square rounded-full flex items-center justify-center transition-transform duration-100 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
       {/* Decorative Rings */}
       <div className="absolute inset-0 rounded-full border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]"></div>
       <div className="absolute inset-4 rounded-full border border-purple-500/20"></div>
       
       {children}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    purpose: 'Mentorship',
    message: ''
  });

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, purpose, message } = formData;
    
    // Construct WhatsApp Message
    const text = `*New Connection Request*%0A%0A*Name:* ${name}%0A*Purpose:* ${purpose}%0A*Message:* ${message}`;
    const phoneNumber = '919664301637'; // Added Country Code 91 for India
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const projects = [
    {
      title: "TB Detection AI",
      description: "AI-powered detection tool using Vision Transformers (PyTorch) & Gradio. Classifies chest X-rays as Normal or Tuberculosis.",
      tags: ["Python", "PyTorch", "Gradio", "Healthcare"],
      link: "https://github.com/JITSA007/Tuberculosis-Detection-Using-AI-ML",
      private: false
    },
    {
      title: "DevSpark AI (Mentorjitsa)",
      description: "Intelligent web app to help self-learners break 'Tutorial Hell'. Provides structured mentorship paths.",
      tags: ["HTML", "Education", "AI", "Mentorship"],
      link: "https://github.com/JITSA007/Mentorjitsa",
      private: false
    },
    {
      title: "Mock Interview App",
      description: "Voice-activated AI mock interview app. Uses Groq & Llama 3 for real-time voice interviews based on job descriptions.",
      tags: ["React", "Next.js", "Groq API", "Voice AI"],
      link: "https://github.com/JITSA007/mock-interview-app",
      private: false
    },
    {
      title: "Ashis Remedies",
      description: "Immersive Ayurvedic wellness platform bridging Silicon & Soil. Features cosmic theme engines and AI diagnostics.",
      tags: ["React", "Wellness", "Ayurveda", "Tailwind"],
      link: "https://github.com/JITSA007/ashis-remedies",
      private: false
    },
    {
      title: "Smart Attendance (BLE)",
      description: "Secure, proximity-based attendance system using Flutter (BLE), Next.js, and Geofencing.",
      tags: ["Flutter", "Bluetooth", "Next.js", "IoT"],
      link: "https://github.com/JITSA007/smart-attendance-system",
      private: false
    },
    {
      title: "Nosokoma Care",
      description: "Home healthcare marketplace integrating real-time tracking, secure payments, and medical records.",
      tags: ["HTML", "Healthcare", "Management"],
      link: "https://github.com/JITSA007/Nosokoma-Care-Website",
      private: true
    },
    {
      title: "University Scheduler",
      description: "Zero-install timetabling tool with Glassmorphism UI. Features smart auto-scheduling and conflict detection.",
      tags: ["HTML", "Algorithms", "Education"],
      link: "https://github.com/JITSA007/UniversityClassScheduler",
      private: false
    },
    {
      title: "Blue Attend",
      description: "Smart Academic Attendance & Management System using Bluetooth technology for seamless tracking.",
      tags: ["JavaScript", "Bluetooth", "Academic"],
      link: "https://github.com/JITSA007/blue-attend2",
      private: false
    },
    {
      title: "Secure PDF Editor",
      description: "Client-side PDF editor allowing text editing, signing, and organizing pages directly in browser without uploads.",
      tags: ["JavaScript", "PDF-Lib", "Privacy"],
      link: "https://github.com/JITSA007/pdfeditor",
      private: false
    },
    {
      title: "MindVerse Portal",
      description: "Official Digital Portal for CD MINDVERSE Magazine. Where Code Meets Creativity.",
      tags: ["JavaScript", "Digital Media", "Creative"],
      link: "https://github.com/JITSA007/MindVerse2",
      private: false
    }
  ];

  return (
    <div className="min-h-screen text-gray-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      <NeuralNetworkBackground />

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-gray-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            <Terminal className="text-cyan-500" />
            <span>JITSA<span className="text-cyan-500">.DEV</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#expertise">Expertise</NavLink>
            <NavLink href="#experience">Timeline</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-white/10 absolute w-full">
            <NavLink mobile href="#home" onClick={toggleMenu}>Home</NavLink>
            <NavLink mobile href="#about" onClick={toggleMenu}>About</NavLink>
             <NavLink mobile href="#projects" onClick={toggleMenu}>Projects</NavLink>
            <NavLink mobile href="#expertise" onClick={toggleMenu}>Expertise</NavLink>
            <NavLink mobile href="#experience" onClick={toggleMenu}>Timeline</NavLink>
            <NavLink mobile href="#contact" onClick={toggleMenu}>Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-4 animate-fade-in-up">
              Hello, World. I am Jitendra Prajapat.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Professor who <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Refuses to be Boring
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-4 border-cyan-500 pl-4">
              AI/ML Researcher • Cybersecurity Expert • Social Innovator.
              <br />
              Turning students into innovators by day, saving lives with code by night.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                Connect With Me
              </a>
              <a href="https://www.linkedin.com/in/jitsa00" target="_blank" rel="noreferrer" className="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-full transition-all flex items-center gap-2">
                <ExternalLink size={18} /> View Linkedin Profile
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-8">
              <Stat icon={Code} value="25+" label="Repositories" />
              <Stat icon={BookOpen} value="PhD" label="Scholar" />
              <Stat icon={Sprout} value="Farmer" label="At Heart" />
            </div>
          </div>

          {/* Hero Visual - Moveable 3D Tilt Element */}
          <div className="relative z-10 hidden md:flex items-center justify-center">
             <TiltCard>
                <div className="text-center p-8 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl relative z-20">
                  <p className="text-cyan-400 font-mono text-sm mb-2">&lt;CurrentFocus&gt;</p>
                  <p className="text-white font-bold text-xl">AI for TB Diagnosis</p>
                  <p className="text-gray-400 text-sm mt-2">Saving lives, not just crunching numbers.</p>
                  <p className="text-cyan-400 font-mono text-sm mt-2">&lt;/CurrentFocus&gt;</p>
                </div>
             </TiltCard>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle icon={Terminal} title="The Man Behind The Code" subtitle="Bridging the gap between Academia, Industry, and the Soil." />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">My Multiverse</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I operate at the intersection of conflicting worlds. By day, I am an <strong>Assistant Professor</strong> guiding BCA & BTech students to break and rebuild technology. By night, I research <strong>AI/ML for Tuberculosis Diagnosis</strong>. 
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                But my roots are deep—literally. I am a <strong>farmer</strong> and poet who believes tech should serve people first. Whether I'm securing cyberspace as a <strong>Certified Ethical Hacker</strong> or tending to the fields in Rajasthan, my mission remains the same: <strong>Growth.</strong>
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'Machine Learning', 'Cybersecurity', 'Tuberculosis Research', 'Poetry', 'Farming'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-purple-900/20 to-black">
                <Shield className="text-purple-400 mb-4" size={32} />
                <h4 className="text-xl font-bold text-white">Cyber Guardian</h4>
                <p className="text-sm text-gray-400 mt-2">Building a generation of security-first engineers.</p>
              </Card>
              <Card className="bg-gradient-to-br from-green-900/20 to-black">
                <Sprout className="text-green-400 mb-4" size={32} />
                <h4 className="text-xl font-bold text-white">Rooted Innovator</h4>
                <p className="text-sm text-gray-400 mt-2">"Tech Meets Soil" - Applying innovation to rural challenges.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (NEW) */}
      <section id="projects" className="py-24 relative bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle icon={Code} title="Code Repository" subtitle="A selection of my open-source contributions and private innovations." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map((project, index) => (
               <ProjectCard key={index} {...project} />
             ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/JITSA007?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-colors">
              <Github size={20} /> View All 25+ Repositories
            </a>
          </div>
        </div>
      </section>

      {/* Expertise & Skills */}
      <section id="expertise" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle icon={Cpu} title="Technical Arsenal" subtitle="Tools I use to build the future." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-400" />
                <h4 className="font-bold text-white">Web & Cloud</h4>
              </div>
              <div className="space-y-3">
                <SkillBadge skill="Databricks" />
                <SkillBadge skill="IT Infrastructure" />
                <SkillBadge skill="Automation" />
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-purple-400" />
                <h4 className="font-bold text-white">AI & Data</h4>
              </div>
              <div className="space-y-3">
                <SkillBadge skill="Machine Learning" />
                <SkillBadge skill="Python" />
                <SkillBadge skill="Healthcare AI" />
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-red-400" />
                <h4 className="font-bold text-white">Security</h4>
              </div>
              <div className="space-y-3">
                <SkillBadge skill="Ethical Hacking" />
                <SkillBadge skill="Network Security" />
                <SkillBadge skill="Cyber Protocols" />
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-yellow-400" />
                <h4 className="font-bold text-white">Leadership</h4>
              </div>
              <div className="space-y-3">
                <SkillBadge skill="Curriculum Dev" />
                <SkillBadge skill="Public Speaking" />
                <SkillBadge skill="Mentorship" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle icon={Award} title="The Journey" subtitle="From managing hospital IT to shaping the minds of tomorrow." />
          
          <div className="mt-12">
            <ExperienceNode 
              role="Program Coordinator & Assistant Professor"
              company="ImaginXP"
              period="Aug 2023 - Present"
              loc="Jaipur, Rajasthan"
              details={[
                "Bridging academia & industry: Integrating AI, UX, and product innovation modules.",
                "Streamlining academic administration for concurrent programs.",
                "Mentoring multidisciplinary student teams for industry-relevant projects."
              ]}
            />
             <ExperienceNode 
              role="Assistant Professor"
              company="Jaipur National University"
              period="Aug 2023 - Present"
              loc="Jaipur, Rajasthan"
              details={[
                "Delivering BCA & BTech modules in AI/ML and Python.",
                "Guided 15+ final year projects with industry recognition.",
                "Acting as liaison with industry partners to improve placements."
              ]}
            />
            <ExperienceNode 
              role="Managing Director"
              company="Aquantrix Private Limited"
              period="June 2021 - Present"
              loc="Jaipur, Rajasthan"
              details={[
                "Designed AI & IoT-enabled water monitoring solutions for rural communities.",
                "Scaled solutions to 200+ households via NGO collaborations.",
                "Social-impact driven enterprise management."
              ]}
            />
            <ExperienceNode 
              role="Assistant Professor"
              company="JECRC University"
              period="Sep 2022 - Oct 2023"
              loc="Jaipur, Rajasthan"
              details={[
                "Embedded technology literacy into MBA/BBA curricula.",
                "Increased internship-to-job conversion rates by 15%."
              ]}
            />
             <ExperienceNode 
              role="IT Operations Manager"
              company="Activant Solutions Pvt Ltd"
              period="Apr 2021 - Oct 2022"
              loc="Jaipur, Rajasthan"
              details={[
                "Improved operational efficiency by 25% through infrastructure upgrades.",
                "Reduced deployment bugs by 40% with new testing frameworks."
              ]}
            />
             <ExperienceNode 
              role="Senior Manager Information System"
              company="Shri Hariram Hospital & Research Center"
              period="Jun 2014 - Mar 2021"
              loc="Nagaur, Rajasthan"
              details={[
                "Managed complete IT ecosystem for healthcare organization.",
                "Maintained 24/7 uptime for mission-critical medical records."
              ]}
            />
          </div>
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="py-24 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionTitle icon={Mail} title="Initialize Handshake" subtitle="Let's collaborate on Research, Speaking, or the next Big Idea." />
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
               <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
               <p className="text-gray-400">
                 DM me on LinkedIn or drop an email. The next big innovation might start with a simple message.
               </p>
               
               <div className="space-y-4">
                 <a href="mailto:jitsahere@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors p-4 bg-white/5 rounded-lg border border-white/10">
                   <Mail className="text-cyan-500" />
                   <div>
                     <div className="text-xs text-gray-500 uppercase">Email</div>
                     <div className="font-mono">jitsahere@gmail.com</div>
                   </div>
                 </a>
                 
                 <a href="https://www.linkedin.com/in/jitsa00" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors p-4 bg-white/5 rounded-lg border border-white/10">
                   <Linkedin className="text-cyan-500" />
                   <div>
                     <div className="text-xs text-gray-500 uppercase">LinkedIn</div>
                     <div className="font-mono">linkedin.com/in/jitsa00</div>
                   </div>
                 </a>
                 
                 <div className="flex items-center gap-4 text-gray-300 p-4 bg-white/5 rounded-lg border border-white/10">
                   <Globe className="text-cyan-500" />
                   <div>
                     <div className="text-xs text-gray-500 uppercase">Location</div>
                     <div className="font-mono">Jaipur, Rajasthan, India</div>
                   </div>
                 </div>
               </div>
            </div>

            {/* WhatsApp Integration Form */}
            <Card className="bg-gray-900 border-t-4 border-t-green-500">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <MessageCircle size={24} />
                  <span className="font-mono text-sm tracking-widest">WHATSAPP DIRECT LINK</span>
                </div>
                <h3 className="text-xl font-bold text-white">Collaboration Hub</h3>
                <p className="text-sm text-gray-400">Select your purpose and connect directly.</p>
              </div>

              <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
                <div>
                  <label className="block text-xs font-mono text-cyan-500 mb-2">IDENTIFIER (NAME)</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-green-500 focus:outline-none transition-colors" 
                    placeholder="Enter your name" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-mono text-cyan-500 mb-2">PURPOSE_OF_CONTACT</label>
                  <select 
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-green-500 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="Mentorship">Mentorship Request</option>
                    <option value="Collaboration">Project Collaboration</option>
                    <option value="Speaking">Speaking Opportunity</option>
                    <option value="General">General Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-500 mb-2">PAYLOAD (MESSAGE)</label>
                  <textarea 
                    name="message"
                    required
                    rows="4" 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-green-500 focus:outline-none transition-colors" 
                    placeholder="Briefly describe your request..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-4 rounded-md uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                >
                  <MessageCircle size={20} />
                  Initialize WhatsApp Chat
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-600 text-sm font-mono">
        <p>© 2026 Jitendra Prajapat. Built with React & Three.js.</p>
      </footer>
    </div>
  );
}