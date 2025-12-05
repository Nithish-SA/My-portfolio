import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Hardware Engineer</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Delivering production-ready PCB designs and embedded hardware solutions with a focus on reliability, compliance, and manufacturability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Technical Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Featured Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:engineer@example.com"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Open to consulting opportunities and full-time positions
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-red-500" /> and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
