import { motion } from 'motion/react';
import { Activity, Heart, Zap, Users, Brain, Trophy, Accessibility, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Page } from '../../App';

interface SolutionsPageProps {
  onNavigate: (page: Page) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Neuro Rehabilitation',
      desc: 'Advanced robotic gait trainers, upper limb robotics, EMG biofeedback, virtual reality therapy, RTMS, and comprehensive neuro assessment systems for adult and pediatric care.',
      color: '#5E60CE',
      image: 'https://images.unsplash.com/photo-1764314399496-aa49b4e4d127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzAzMjYxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'neuro-rehab' as Page,
      features: ['Robotic Gait Training', 'Virtual Reality Therapy', 'EMG Biofeedback', 'RTMS Treatment']
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Orthopedic & Sports Rehab',
      desc: 'High-intensity laser therapy, shockwave treatment, CPM devices, tecar therapy, and advanced spinal decompression systems for optimal recovery.',
      color: '#006B7D',
      image: 'https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljJTIwc3BvcnRzJTIwbWVkaWNpbmUlMjB0aGVyYXB5fGVufDF8fHx8MTc3MDMyNjc5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'orthopedic-sports' as Page,
      features: ['Laser Therapy', 'Shockwave Treatment', 'CPM Devices', 'Tecar Therapy']
    },
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: 'Spinal Rehabilitation',
      desc: 'Lumbar and cervical decompression systems, advanced posture control, and comprehensive spine functional assessment labs.',
      color: '#7ED6DF',
      image: 'https://images.unsplash.com/photo-1669316714681-5fe047de58b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWwlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcwMzI2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'spinal' as Page,
      features: ['Spinal Decompression', 'Posture Control', 'Functional Assessment', 'Pain Relief']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Pain Management',
      desc: 'Comprehensive electrotherapy solutions including TENS, EMS, IFES, advanced cryotherapy, and deep tissue modalities like PPMS.',
      color: '#5E60CE',
      image: 'https://images.unsplash.com/photo-1768508236664-3f294aaf7d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWluJTIwbWFuYWdlbWVudCUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcwMzI2Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'pain' as Page,
      features: ['TENS Therapy', 'Cryotherapy', 'Deep Tissue Treatment', 'Electrotherapy']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Cardiac & Pulmonary Rehab',
      desc: 'CPET devices, advanced spirometry, ECG monitoring with treadmill integration, and comprehensive respiratory care solutions.',
      color: '#006B7D',
      image: 'https://images.unsplash.com/photo-1766325693728-348c38374d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzAzMjY3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'cardiac' as Page,
      features: ['CPET Testing', 'ECG Monitoring', 'Spirometry', 'Respiratory Care']
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Wellness & Fitness',
      desc: 'Therapeutic exercise stations, balance evaluation systems, gait analysis labs, and preventive health solutions.',
      color: '#7ED6DF',
      image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGZpdG5lc3MlMjBneW0lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcwMzI2Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'wellness' as Page,
      features: ['Exercise Therapy', 'Balance Training', 'Gait Analysis', 'Preventive Care']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Geriatric & Chronic Care',
      desc: 'Safe patient transfer devices, sit-to-stand assistance systems, portable unweighting treadmills for enhanced elderly mobility.',
      color: '#5E60CE',
      image: 'https://images.unsplash.com/photo-1765896387403-3e6e0e44d7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGdlcmlhdHJpYyUyMHRoZXJhcHl8ZW58MXx8fHwxNzcwMzI2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'geriatric' as Page,
      features: ['Safe Transfer', 'Mobility Support', 'Fall Prevention', 'Chronic Care']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Speech Rehabilitation',
      desc: 'Comprehensive swallowing disorder assessment, dysphagia treatment systems, and advanced communication therapy tools.',
      color: '#006B7D',
      image: 'https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjB0aGVyYXB5JTIwY29tbXVuaWNhdGlvbiUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzAzMjY3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'speech' as Page,
      features: ['Dysphagia Treatment', 'Communication Therapy', 'Swallowing Assessment', 'Voice Training']
    }
  ];

  return (
    <div className="pt-16">
      {/* Solutions Grid - Main Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
            >
              <Activity className="w-4 h-4" />
              <span className="text-sm font-semibold">Complete Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}
            >
              Comprehensive Rehabilitation Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Tailored solutions spanning the entire spectrum of physiotherapy and rehabilitation medicine, 
              designed to deliver exceptional patient outcomes
            </motion.p>
          </div>

          {/* Solutions Grid with Images */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => solution.page && onNavigate(solution.page)}
                className="group cursor-pointer"
              >
                <div 
                  className="rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 h-full"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = solution.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                  }}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, ${solution.color}90 0%, transparent 60%)` }}
                    />
                    
                    {/* Icon Badge */}
                    <div 
                      className="absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        color: solution.color
                      }}
                    >
                      {solution.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-4" style={{ color: '#1E3A4C' }}>
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solution.desc}
                    </p>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: solution.color }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <button
                      className="flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: solution.color }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Specialties Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Additional Specialties</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Integrated Care Solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(94, 96, 206, 0.15)';
                e.currentTarget.style.borderColor = '#5E60CE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: '#5E60CE' }}
              />
              
              <h3 className="text-3xl font-bold mb-4 relative" style={{ color: '#1E3A4C' }}>
                Gynecology & Pelvic Floor
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 relative">
                Advanced biofeedback systems and pelvic floor stimulation for comprehensive 
                urogynecology treatment and rehabilitation.
              </p>
              
              <div className="flex flex-wrap gap-2 relative">
                {['Biofeedback Systems', 'Pelvic Floor Therapy', 'Urogynecology'].map((tag, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 107, 125, 0.15)';
                e.currentTarget.style.borderColor = '#006B7D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: '#006B7D' }}
              />
              
              <h3 className="text-3xl font-bold mb-4 relative" style={{ color: '#1E3A4C' }}>
                Integrated Care Delivery
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 relative">
                Our comprehensive integrated approach ensures seamless care delivery across all 
                patient populations and clinical settings.
              </p>
              
              <div className="flex flex-wrap gap-2 relative">
                {['All Patient Populations', 'Clinical Integration', 'Seamless Care'].map((tag, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#ECFDF5', color: '#047857' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #5E60CE 0%, #006B7D 100%)' }}
        />
        
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Find the Perfect Solution for Your Facility
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-10 leading-relaxed"
          >
            Let our experts help you design the ideal rehabilitation setup tailored to your specific needs
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button
              onClick={() => onNavigate('space-planner')}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              style={{ backgroundColor: 'white', color: '#5E60CE' }}
            >
              <span>Try 3D Space Planner</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              className="px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10 text-white hover:scale-105"
            >
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
