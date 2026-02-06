import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, TrendingUp, Brain, Zap, CheckCircle, Sparkles, Rocket, Shield } from 'lucide-react';

export function AboutPage() {
  const timeline = [
    { year: '2003', event: 'Founded Rehax with vision for rehabilitation excellence' },
    { year: '2008', event: 'Expanded to 50+ partner hospitals across South India' },
    { year: '2012', event: 'Launched comprehensive training academy' },
    { year: '2016', event: 'Reached 100+ hospital partnerships milestone' },
    { year: '2020', event: 'Introduced 3D space planning technology' },
    { year: '2024', event: '150+ hospitals, 500+ installations, 10+ global partners' }
  ];

  const coreValues = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      desc: 'Delivering outstanding quality in everything we do'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      desc: 'Operating with transparency and honesty'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Innovation',
      desc: 'Continuously improving and adapting'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Patient-Centric',
      desc: 'Putting patient outcomes first'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Partnership',
      desc: 'Building collaborative relationships'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Accountability',
      desc: 'Taking ownership of our commitments'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #006B7D 0%, #004A58 100%)' }}>
        {/* Animated Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">21+ Years of Excellence</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Rehax
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Pioneering rehabilitation excellence through innovation, expertise, and unwavering commitment to healthcare
          </motion.p>
        </div>
      </section>

      {/* Our Mission Section - Full Width with Image */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}>
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Mission</span>
              </div>
              
              <h2 className="text-6xl font-bold mb-8 leading-tight" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
                Empowering Healthcare Excellence
              </h2>
              
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#5E60CE' }}>
                Transforming Rehabilitation Through Innovation
              </h3>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                To empower healthcare providers with cutting-edge rehabilitation technology and comprehensive support, 
                enabling them to deliver exceptional patient care and outcomes.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are dedicated to transforming the rehabilitation landscape by providing innovative solutions that 
                bridge the gap between advanced technology and compassionate care. Our mission drives us to continuously 
                elevate standards and create meaningful impact in every facility we serve.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Cutting-edge Technology' },
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Comprehensive Support' },
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Exceptional Outcomes' },
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Patient-First Approach' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                    style={{ color: '#006B7D' }}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1758654860100-32cd2e83e74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHklMjBwYXRpZW50JTIwY2FyZSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcwMzI2MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare Mission"
                  className="w-full h-[500px] object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(94, 96, 206, 0.1) 0%, rgba(0, 107, 125, 0.1) 100%)' }}
                />
              </div>
              
              {/* Floating Stats Badge */}
              <div 
                className="absolute -bottom-6 -left-6 p-6 rounded-2xl backdrop-blur-xl"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#5E60CE' }}
                  >
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#1E3A4C' }}>500+</div>
                    <div className="text-sm text-gray-600">Successful Projects</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section - Reversed Layout */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5ub3ZhdGlvbiUyMGZ1dHVyZSUyMHRlY2hub2xvZ3klMjBtZWRpY2FsfGVufDF8fHx8MTc3MDMyNjE2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Vision for the Future"
                  className="w-full h-[500px] object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(0, 107, 125, 0.1) 0%, rgba(94, 96, 206, 0.1) 100%)' }}
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
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#006B7D' }}
                  >
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#1E3A4C' }}>150+</div>
                    <div className="text-sm text-gray-600">Partner Hospitals</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#ECFDF5', color: '#047857' }}>
                <Eye className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Vision</span>
              </div>
              
              <h2 className="text-6xl font-bold mb-8 leading-tight" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
                Leading Rehabilitation Innovation
              </h2>
              
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#006B7D' }}>
                Shaping the Future of Patient Care
              </h3>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                To be the most trusted partner in rehabilitation excellence across South Asia, recognized for innovation, 
                quality, and transformative impact on patient lives.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We envision a future where every rehabilitation center has access to world-class technology and expertise, 
                where patient outcomes are maximized through innovation, and where healthcare professionals are empowered 
                with the best tools and training to make a difference.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Regional Leadership', value: 'South Asia' },
                  { label: 'Focus Areas', value: 'Innovation & Quality' },
                  { label: 'Impact', value: 'Transformative Patient Care' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-4 rounded-2xl"
                    style={{ backgroundColor: 'white', border: '1px solid #E5E7EB' }}
                  >
                    <span className="font-medium" style={{ color: '#1E3A4C' }}>{item.label}</span>
                    <span className="font-semibold" style={{ color: '#006B7D' }}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Premium Grid Layout */}
      <section className="py-24 px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #1E3A4C 100%)' }}>
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(126, 214, 223, 0.1)', border: '1px solid rgba(126, 214, 223, 0.2)' }}
            >
              <Heart className="w-4 h-4" style={{ color: '#7ED6DF' }} />
              <span className="text-sm font-semibold" style={{ color: '#7ED6DF' }}>Our Core Values</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our values define who we are and shape everything we do, from how we serve our partners to how we innovate for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coreValues.map((value, index) => (
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
                  e.currentTarget.style.backgroundColor = 'rgba(126, 214, 223, 0.1)';
                  e.currentTarget.style.borderColor = '#7ED6DF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(126, 214, 223, 0.2)', color: '#7ED6DF' }}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Values Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-80">
              <img 
                src="https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwZmFjaWxpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMzI1NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Healthcare Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-12 text-white max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">Values in Action</h3>
                  <p className="text-lg opacity-90">
                    These values aren't just words on a page—they're the foundation of every project we undertake, 
                    every relationship we build, and every innovation we pursue.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Journey</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              21 Years of Growth & Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our founding to becoming South India's leading rehabilitation solutions partner
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block"
              style={{ background: 'linear-gradient(180deg, #5E60CE 0%, #006B7D 50%, #7ED6DF 100%)' }}
            />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:flex-row`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div 
                      className="inline-block px-8 py-6 rounded-2xl hover:scale-105 transition-all"
                      style={{ 
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                        border: '2px solid #E5E7EB'
                      }}
                    >
                      <div className="text-4xl font-bold mb-3" style={{ color: '#5E60CE', fontFamily: 'var(--font-heading)' }}>
                        {item.year}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  
                  <div 
                    className="w-8 h-8 rounded-full border-4 z-10 flex-shrink-0"
                    style={{ 
                      backgroundColor: index % 3 === 0 ? '#5E60CE' : index % 3 === 1 ? '#006B7D' : '#7ED6DF', 
                      borderColor: 'white',
                      boxShadow: '0 0 0 4px rgba(94, 96, 206, 0.1)'
                    }}
                  />
                  
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team with Images */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#ECFDF5', color: '#047857' }}
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Leadership Team</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Meet Our Visionary Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Decades of combined experience in healthcare, technology, and operational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Palani Duraisamy',
                role: 'Co-founder & CEO',
                bio: 'A visionary healthcare leader with over 21 years of experience. His deep specialization in rehabilitation technology has driven the company\'s growth, forging international partnerships and spearheading numerous turnkey installations across South India.',
                color: '#5E60CE',
                image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdCUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc3MDMyNjE2MXww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Saravanan Duraisamy',
                role: 'Managing Director & Proprietor',
                bio: '17 years of experience in manufacturing industry followed by 8 years in physiotherapy and rehabilitation industry. Mechanical engineer with deep medical equipment expertise and strong hospital partnerships driving strategic growth.',
                color: '#006B7D',
                image: 'https://images.unsplash.com/photo-1719835491911-99dd30f3f2dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMENFTyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDMyNjE2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Shanmugam Duraisamy',
                role: 'Business Administrator',
                bio: 'Electrical engineer with 23 years of manufacturing industry experience. Expert in operational excellence and process optimization, bringing technical precision to healthcare equipment management.',
                color: '#7ED6DF',
                image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBkaXJlY3RvciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDMyNjE2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 h-full"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = member.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                  }}
                >
                  {/* Professional Portrait Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, ${member.color}40 0%, transparent 50%)` }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E3A4C' }}>{member.name}</h3>
                    <p className="mb-6 font-semibold text-lg" style={{ color: member.color }}>{member.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team Section with Image */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              The Rehax Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strength lies in our dedicated and passionate team of experts. With diverse backgrounds in rehabilitation, 
              technology, and patient care, we are united by a common mission to deliver exceptional solutions and support.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-12"
          >
            <img 
              src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZSUyMG9mZmljZXxlbnwxfHx8fDE3NzAzMjU3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Rehax Team" 
              className="w-full h-[500px] object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(94, 96, 206, 0.1) 0%, rgba(0, 107, 125, 0.1) 100%)' }}
            />
          </motion.div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Each member brings invaluable experience and commitment, driving innovation and ensuring the highest 
              standards of service for our partners and clients. Together, we're building the future of rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities spanning the entire rehabilitation technology spectrum
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Technology Integration',
                desc: 'Expert selection and integration of advanced rehabilitation equipment',
                color: '#5E60CE'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Clinical Training',
                desc: 'Comprehensive education programs for healthcare professionals',
                color: '#006B7D'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Space Planning',
                desc: '3D visualization and optimization of rehabilitation facilities',
                color: '#7ED6DF'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Project Management',
                desc: 'End-to-end turnkey project delivery and implementation',
                color: '#5E60CE'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Ongoing Support',
                desc: 'Dedicated maintenance and clinical support services',
                color: '#006B7D'
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: 'Strategic Consulting',
                desc: 'Business planning and ROI optimization guidance',
                color: '#7ED6DF'
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Research & Development',
                desc: 'Innovative solutions and cutting-edge technology development',
                color: '#5E60CE'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Energy Efficiency',
                desc: 'Sustainable and energy-efficient rehabilitation solutions',
                color: '#006B7D'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl hover:scale-105 transition-all"
                style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#1E3A4C' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #5E60CE 0%, #4248A3 100%)' }}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Join Us in Transforming Rehabilitation
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's work together to create exceptional rehabilitation facilities that change lives
          </p>
          <button
            className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: '#7ED6DF', color: '#1E3A4C' }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}