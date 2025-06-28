"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';



const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A fully responsive online store built with Next.js and Tailwind CSS, featuring secure payments and user authentication.',
    image: 'https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMENPTU1FUkNFJTIwUExBVEZPUk18ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app with drag-and-drop functionality, built using React and integrated with a Firebase backend.',
    image: 'https://plus.unsplash.com/premium_photo-1681487867978-1b83ce2625c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFzayUyME1hbmFnZW1lbnQlMjBBcHB8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek portfolio showcasing modern web technologies, animated with Framer Motion and styled with Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Weather Dashboard',
    description: 'A real-time weather app with dynamic UI updates, leveraging APIs and React for a seamless user experience.',
    image: 'https://media.istockphoto.com/id/2193247029/photo/business-team-analyzing-interactive-digital-dashboards-with-data-visualizations.webp?a=1&b=1&s=612x612&w=0&k=20&c=isQ028AFUBPSHzElNgBRsSGPMksNTAyKUVgQ_K5NxT0=',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [text, setText] = useState('');
  const [mount,setMount]=useState (false)
  const fullText = 'Hello, my name is Fahad, I am a Frontend Engineer';
  const characters = fullText.split('');
  const [displayedText, setDisplayedText] = useState([]);

useEffect(() => {
    setDisplayedText([]); // Reset text on page refresh
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < characters.length) {
        setDisplayedText((prev) => [...prev, characters[index]]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);


  useEffect(()=>{
    setMount(true)
  },[])

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
if(!mount) return null
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-indigo-900 fixed top-0 w-full z-50 shadow-lg">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
               <img src='../../public/logo/logo.png' alt="My Logo" style={{ width: '150px' }} />
            </div>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-indigo-300' : 'text-gray-300 hover:text-indigo-300',
                    'px-3 text-sm font-medium transition-colors duration-300'
                  )}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-indigo-300"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gradient-to-b from-gray-800 to-indigo-900 p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-indigo-300">Fahad</Link>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-indigo-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-indigo-300' : 'text-gray-300 hover:text-indigo-300',
                    'block py-2 text-base font-medium transition-colors duration-300'
                  )}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Sections */}
      <main>
        {/* Home Section */}
         <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-500 rounded-full opacity-10"
            style={{
              width: Math.random() * 50 + 10,
              height: Math.random() * 50 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mx-auto max-w-7xl px-6 lg:px-8 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-indigo-200">
          {/* <AnimatePresence> */}
            <div className="inline-flex">
              
                <motion.span
                  // key={`${char}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  // animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  // transition={{ duration: 0.2, delay: index * 0.1 }}
                >
              
                </motion.span>
              
            
                <motion.span
                  className="animate-pulse text-indigo-400"
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                >
                  Hello, my name is Fahad, I am a Frontend Engineer
                </motion.span>
           
            </div>
          {/* </AnimatePresence> */}
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Building modern, responsive, and interactive web experiences with cutting-edge technologies.
        </p>
        <div className="mt-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#projects"
              className="inline-block rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white hover:bg-indigo-500 shadow-lg transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#projects');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-indigo-900 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center text-indigo-200"
            >
              My Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-300 text-center max-w-3xl mx-auto"
            >
              Explore some of my recent work as a Frontend Engineer, showcasing creativity and technical expertise.
            </motion.p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
                  className="bg-gray-700 rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-200">{project.title}</h3>
                    <p className="mt-2 text-gray-300">{project.description}</p>
                    <a
                      href="#"
                      className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl px-6 lg:px-8 bg-gray-800 rounded-xl shadow-xl p-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center text-indigo-200"
            >
              About Me
            </motion.h2>
            <div className="mt-6 flex flex-col items-center">
              <motion.img
                src="https://media.istockphoto.com/id/1406645290/photo/big-financial-data-theft-concept-an-anonymous-hacker-is-hacking-highly-protected-financial.webp?a=1&b=1&s=612x612&w=0&k=20&c=dipapN1lSOcfiCYAAmB4T2NflpBP-zVtULtLaR4UTTg="
                alt="Fahad Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 text-lg text-gray-300 text-center"
              >
                I'm Fahad, a passionate Frontend Engineer specializing in React, Next.js, Tailwind CSS, and Framer Motion. I love creating user-friendly, visually stunning web applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <h3 className="text-xl font-semibold text-indigo-200">Skills</h3>
                <ul className="mt-2 flex flex-wrap justify-center gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'JavaScript'].map((skill) => (
                    <li key={skill} className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-indigo-900 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl px-6 lg:px-8 bg-gray-800 rounded-xl shadow-xl p-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center text-indigo-200"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-300 text-center"
            >
              Feel free to reach out for collaborations, inquiries, or just to say hi!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white hover:bg-indigo-500 shadow-lg transition-all duration-300"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                Contact Me
              </motion.a>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-indigo-300"
                >
                  <CodeBracketIcon className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-indigo-300"
                >
                  <GlobeAltIcon className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
         {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-indigo-900 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-indigo-200">Fahad</h3>
              <p className="mt-2 text-gray-300 text-sm text-center md:text-left">
                Frontend Engineer crafting modern web experiences.
              </p>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold text-indigo-200">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-center">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-indigo-300 transition-colors duration-200"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Media */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-lg font-semibold text-indigo-200">Connect</h4>
              <div className="mt-4 flex gap-4">
                <motion.a
                  href="https://github.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-indigo-300"
                >
                  <CodeBracketIcon className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-indigo-300"
                >
                  <GlobeAltIcon className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-indigo-300"
                >
                  <GlobeAltIcon className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Fahad. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}