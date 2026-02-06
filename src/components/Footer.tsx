import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          background: 'radial-gradient(circle at top right, #006B7D 0%, transparent 50%), radial-gradient(circle at bottom left, #7ED6DF 0%, transparent 50%)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Rehax
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in rehabilitation excellence
            </p>
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: 'rgba(126, 214, 223, 0.1)',
                    border: '1px solid rgba(126, 214, 223, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#7ED6DF';
                    e.currentTarget.style.borderColor = '#7ED6DF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(126, 214, 223, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(126, 214, 223, 0.2)';
                  }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Solutions</h4>
            <ul className="space-y-3">
              {['Neuro Rehabilitation', 'Orthopedic Rehab', 'Sports Rehabilitation', 'Pain Management', 'Cardiac & Pulmonary'].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', '3D Space Planner', 'Partners'].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#7ED6DF' }} />
                <a href="mailto:info@rehax.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  info@rehax.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#7ED6DF' }} />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#7ED6DF' }} />
                <span className="text-gray-400">
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Rehax. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <button key={item} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}