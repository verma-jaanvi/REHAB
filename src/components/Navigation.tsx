import { Page } from '../App';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  const solutionPages: Page[] = ['solutions', 'neuro-rehab', 'orthopedic-sports', 'spinal', 'pain', 'cardiac', 'wellness', 'geriatric', 'speech'];
  const isSolutionPage = solutionPages.includes(currentPage);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="text-3xl font-bold tracking-tight relative group"
            style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}
          >
            <span className="relative">
              Rehax
              <div 
                className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: '#7ED6DF' }}
              />
            </span>
          </button>
          
          <div className="flex items-center gap-10">
            <button
              onClick={() => onNavigate('home')}
              className={`relative py-2 transition-all duration-200 ${
                currentPage === 'home' ? 'font-semibold' : 'font-medium'
              }`}
              style={{ color: currentPage === 'home' ? '#006B7D' : '#6B7280' }}
            >
              Home
              {currentPage === 'home' && (
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: '#7ED6DF' }}
                />
              )}
            </button>
            
            <button
              onClick={() => onNavigate('about')}
              className={`relative py-2 transition-all duration-200 ${
                currentPage === 'about' ? 'font-semibold' : 'font-medium'
              }`}
              style={{ color: currentPage === 'about' ? '#006B7D' : '#6B7280' }}
            >
              About Us
              {currentPage === 'about' && (
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: '#7ED6DF' }}
                />
              )}
            </button>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowSolutionsDropdown(true)}
              onMouseLeave={() => setShowSolutionsDropdown(false)}
            >
              <button
                onClick={() => onNavigate('solutions')}
                className={`relative flex items-center gap-1 py-2 transition-all duration-200 ${
                  isSolutionPage ? 'font-semibold' : 'font-medium'
                }`}
                style={{ 
                  color: isSolutionPage ? '#006B7D' : '#6B7280' 
                }}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSolutionsDropdown ? 'rotate-180' : ''}`} />
                {isSolutionPage && (
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: '#7ED6DF' }}
                  />
                )}
              </button>
              
              {showSolutionsDropdown && (
                <div 
                  className="absolute top-full left-0 mt-3 w-72 rounded-2xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-xl max-h-[80vh] overflow-y-auto"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                >
                  <button
                    onClick={() => {
                      onNavigate('neuro-rehab');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7ED6DF20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Neuro Rehabilitation</div>
                    <div className="text-xs opacity-60">Adult & Pediatric neurological care</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('orthopedic-sports');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7ED6DF20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Orthopedic & Sports Rehab</div>
                    <div className="text-xs opacity-60">Musculoskeletal recovery solutions</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('spinal');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7ED6DF20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Spinal Rehabilitation</div>
                    <div className="text-xs opacity-60">Spine care & recovery programs</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('pain');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7ED6DF20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Pain Management</div>
                    <div className="text-xs opacity-60">Chronic & acute pain solutions</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('cardiac');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7ED6DF20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Cardiac & Pulmonary Rehab</div>
                    <div className="text-xs opacity-60">Heart & lung recovery programs</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('wellness');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7ED6DF20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Wellness & Fitness</div>
                    <div className="text-xs opacity-60">Preventive health & wellness</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('geriatric');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7ED6DF20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Geriatric & Chronic Care</div>
                    <div className="text-xs opacity-60">Elderly care & support</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('speech');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-100/50"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#006B7D20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">Speech Rehabilitation</div>
                    <div className="text-xs opacity-60">Communication & swallowing therapy</div>
                  </button>
                  
                  <button
                    onClick={() => {
                      onNavigate('solutions');
                      setShowSolutionsDropdown(false);
                    }}
                    className="w-full text-left px-5 py-4 transition-all duration-200"
                    style={{ color: '#1E3A4C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#006B7D20';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="font-semibold mb-1">View All Solutions</div>
                    <div className="text-xs opacity-60">Complete portfolio overview</div>
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => onNavigate('space-planner')}
              className={`relative py-2 transition-all duration-200 ${
                currentPage === 'space-planner' ? 'font-semibold' : 'font-medium'
              }`}
              style={{ color: currentPage === 'space-planner' ? '#006B7D' : '#6B7280' }}
            >
              3D Space Planner
              {currentPage === 'space-planner' && (
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: '#7ED6DF' }}
                />
              )}
            </button>
            
            <button
              className="px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              style={{ 
                background: 'linear-gradient(135deg, #006B7D 0%, #7ED6DF 100%)',
                color: 'white'
              }}
            >
              <span className="relative z-10">Contact Us</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #7ED6DF 0%, #006B7D 100%)' }}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}