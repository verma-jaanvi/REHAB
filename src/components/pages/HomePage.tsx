import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle, Users, Award, Globe, TrendingUp, Sparkles, Target, Zap, Shield, ArrowRight, Brain, Rocket } from 'lucide-react';
import { Page } from '../../App';
import { HomePageSections } from '../home/HomePageSections';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const heroSlides = [
  {
    title: '3D Space Visualization',
    subtitle: 'Transform Your Rehabilitation Center',
    description: 'Interactive 3D planning tools to design your perfect rehab space',
    bgColor: 'linear-gradient(135deg, #006B7D 0%, #0A4D5C 100%)',
    image: 'https://images.unsplash.com/photo-1764314359427-6e685ce5b719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBlcXVpcG1lbnQlMjBleGVyY2lzZXxlbnwxfHx8fDE3NzAzMjQ0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Comprehensive Solutions',
    subtitle: 'End-to-End Rehabilitation Services',
    description: 'From planning to installation, we deliver complete turnkey solutions',
    bgColor: 'linear-gradient(135deg, #5E60CE 0%, #4248A3 100%)',
    image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzcwMzAxNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Global Partnerships',
    subtitle: 'Industry-Leading Technology',
    description: 'Access cutting-edge equipment from world-renowned manufacturers',
    bgColor: 'linear-gradient(135deg, #1E3A4C 0%, #0F1F2E 100%)',
    image: 'https://images.unsplash.com/photo-1765222385062-11262da1ff2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHJlaGFiaWxpdGF0aW9uJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzcwMzI0NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Carousel */}
      <section className="relative h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image with Parallax Effect */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 10, ease: "linear" }}
            />
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{ background: heroSlides[currentSlide].bgColor, opacity: 0.92 }}
            />
            
            {/* Animated Background Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{ 
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-8 text-center text-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Revolutionizing Rehabilitation</span>
                </motion.div>
                
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-7xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-3xl mb-6 font-medium opacity-90"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.h2>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl opacity-80 max-w-2xl mx-auto mb-10"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex gap-4 justify-center"
                >
                  <button
                    onClick={() => onNavigate('space-planner')}
                    className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: '#7ED6DF', color: '#1E3A4C' }}
                  >
                    Try 3D Planner
                  </button>
                  <button
                    onClick={() => onNavigate('solutions')}
                    className="px-8 py-4 rounded-full font-semibold border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    View Solutions
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full backdrop-blur-md hover:scale-110 transition-all duration-300 z-10 group"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full backdrop-blur-md hover:scale-110 transition-all duration-300 z-10 group"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-white' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '21+', label: 'Years Experience' },
              { value: '150+', label: 'Partner Hospitals' },
              { value: '500+', label: 'Projects Completed' },
              { value: '10+', label: 'Global Partners' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-1" style={{ color: '#5E60CE', fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: '#FEF3F2', color: '#B42318' }}
              >
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">Common Challenges</span>
              </motion.div>
              
              <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
                The Rehabilitation Founder's Challenge
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Are you struggling with these common setup frustrations?
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Equipment Planning Complexity',
                    desc: 'Choosing the right mix of equipment'
                  },
                  {
                    title: 'Finance & ROI Uncertainty',
                    desc: 'Unclear return on investment models'
                  },
                  {
                    title: 'Layout & Space Optimization',
                    desc: 'Maximizing limited space efficiently'
                  },
                  {
                    title: 'Vendor Coordination Chaos',
                    desc: 'Managing multiple suppliers and timelines'
                  },
                  {
                    title: 'Training & Support Gaps',
                    desc: 'Ensuring staff can operate new equipment'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group p-5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ 
                      backgroundColor: 'white',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = '#7ED6DF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: '#1E3A4C' }}>{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 text-lg font-medium"
                style={{ color: '#006B7D' }}
              >
                ✨ Rehax eliminates these frustrations with our comprehensive turnkey solution
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '600px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzAyMTQ2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Rehabilitation challenges" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(94, 96, 206, 0.1) 0%, rgba(126, 214, 223, 0.1) 100%)' }}
                />
              </div>
              
              {/* Floating Badge */}
              <div 
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl backdrop-blur-xl"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#5E60CE' }}
                  >
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: '#1E3A4C' }}>Trusted Solution</div>
                    <div className="text-sm text-gray-600">500+ Projects</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Rehax Section */}
      <section className="py-24 px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #1E3A4C 100%)' }}>
        {/* Animated Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(126, 214, 223, 0.1)', border: '1px solid rgba(126, 214, 223, 0.2)' }}
            >
              <Award className="w-4 h-4" style={{ color: '#7ED6DF' }} />
              <span className="text-sm font-semibold" style={{ color: '#7ED6DF' }}>Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Why Choose Rehax
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your trusted partner in rehabilitation excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Comprehensive Solutions',
                desc: 'Tailored, end-to-end solutions for all rehabilitation and physiotherapy needs.',
                color: '#5E60CE'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Proven Expertise',
                desc: 'Over 21 years of proven expertise and deep industry knowledge in healthcare.',
                color: '#006B7D'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Turnkey Project Delivery',
                desc: 'Hassle-free, end-to-end project delivery, from planning to execution.',
                color: '#7ED6DF'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Hospital Partnerships',
                desc: 'Strong partnerships with leading hospitals and medical institutions across South India.',
                color: '#5E60CE'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Training and Support',
                desc: 'Complete training programs and ongoing dedicated support for seamless integration.',
                color: '#006B7D'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'International Brands',
                desc: 'Access cutting-edge technology and high-quality equipment through global brand partnerships.',
                color: '#7ED6DF'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}
      {/* Due to length, I'll split this into another part */}
      
      {/* All remaining sections from HomePageSections */}
      <HomePageSections onNavigate={onNavigate} />
    </div>
  );
}