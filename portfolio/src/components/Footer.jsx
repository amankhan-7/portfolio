import { Link } from "react-router-dom"; // ✅ CORRECT

import {Mail, Github, Linkedin} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4 hover:text-white">Aman Khan</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              MERN Stack Developer passionate about building performant and user-centric web applications. Let’s build something amazing!
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="text-gray-300 hover:text-blue-400 transition">
                <Linkedin  size={20} />
              </a>
              <a href="https://github.com/your-github" target="_blank" className="text-gray-300 hover:text-primary transition">
                <Github  size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-primary transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-left">Quick Links</h3>
            <ul className="space-y-2 text-left">
              <li><a href="#about" className="text-gray-300    hover:text-primary transition">About Me</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary transition">Projects</a></li>
              <li><a href="#skills" className="text-gray-300   hover:text-primary transition">Skills</a></li>
              <li><a href="#contact" className="text-gray-300  hover:text-primary transition">Contact</a></li>
              <li><a href="#blog" className="text-gray-300     hover:text-primary transition">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-left">Resources</h3>
            <ul className="space-y-2 text-left">
              <li><a href="https://drive.google.com/uc?export=download&id=1QCc-eUh89VsTt7K692ZzJlqRTSkW8QAl" className="text-gray-300 hover:text-primary transition">Download Resume</a></li>
              <li><a href="https://github.com/your-github" className="text-gray-300 hover:text-primary transition">GitHub Repository</a></li>
              <li><a href="https://yourportfolio.com/docs" className="text-gray-300 hover:text-primary transition">Documentation</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter or CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-left">Let’s Connect</h3>
            <p className="text-gray-300 text-sm mb-4 text-left">Open to collaboration, freelance gigs, or full-time roles. Drop a message anytime!</p>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block w-27 bg-primary hover:bg-white hover:text-black text-white py-2 px-4 rounded-md text-sm transition text-left"
            >
              Contact Me
            </button>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AMANInn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

