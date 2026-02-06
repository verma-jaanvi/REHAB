import { motion } from 'motion/react';
import { CheckCircle, Brain, Rocket, Award, TrendingUp, Users } from 'lucide-react';
import { Page } from '../../App';

interface HomePageSectionsProps {
  onNavigate: (page: Page) => void;
}

export function HomePageSections({ onNavigate }: HomePageSectionsProps) {
  return (
    <>
      {/* Technology Showcase with Images */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#ECFDF5', color: '#047857' }}
            >
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-semibold">Advanced Technology</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Cutting-Edge Equipment & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the future of rehabilitation with our state-of-the-art technology and innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <div className="relative h-96">
                <img 
                  src="https://images.unsplash.com/photo-1666257434991-d80079a812d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVybyUyMHJlaGFiaWxpdGF0aW9uJTIwcm9ib3RpYyUyMHRoZXJhcHl8ZW58MXx8fHwxNzcwMzI1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Robotic Rehabilitation Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Robotic Rehabilitation</h3>
                  <p className="opacity-90">Advanced robotic systems for neuro and orthopedic rehabilitation</p>
                </div>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <div className="relative h-96">
                <img 
                  src="https://images.unsplash.com/photo-1764314428902-41e1c2382a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMHJlaGFiaWxpdGF0aW9uJTIwdGhlcmFweXxlbnwxfHx8fDE3NzAzMjU1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Virtual Reality Therapy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Virtual Reality Therapy</h3>
                  <p className="opacity-90">Immersive VR experiences for engaging rehabilitation sessions</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
          >
            <div className="relative h-80">
              <img 
                src="https://images.unsplash.com/photo-1707303902323-6fb2aa97d269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcwMjk2Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Medical Equipment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-12 text-white max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">Modern Medical Equipment</h3>
                  <p className="text-lg opacity-90 mb-6">State-of-the-art equipment designed for maximum therapeutic outcomes and patient comfort</p>
                  <button
                    onClick={() => onNavigate('solutions')}
                    className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#7ED6DF', color: '#1E3A4C' }}
                  >
                    Explore Solutions
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team & Leadership with Images */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MDMyNTUwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rehax Team Collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(94, 96, 206, 0.2) 0%, rgba(0, 107, 125, 0.2) 100%)' }}
                />
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
              >
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">Expert Team</span>
              </motion.div>
              
              <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
                Meet the Rehax Team
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our leadership brings together decades of experience in healthcare, technology, and operational excellence
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { name: 'Palani Duraisamy', role: 'Co-founder & CEO', icon: <Brain className="w-8 h-8" /> },
                  { name: 'Saravanan Duraisamy', role: 'Managing Director', icon: <TrendingUp className="w-8 h-8" /> },
                  { name: 'Shanmugam Duraisamy', role: 'Business Admin', icon: <Award className="w-8 h-8" /> }
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-2xl text-center hover:scale-105 transition-all"
                    style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
                  >
                    <div className="mb-3 mx-auto" style={{ color: '#5E60CE' }}>
                      {member.icon}
                    </div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: '#1E3A4C' }}>{member.name}</h4>
                    <p className="text-xs text-gray-600">{member.role}</p>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #006B7D 0%, #5E60CE 100%)', color: 'white' }}
              >
                Learn More About Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas with Visual Elements */}
      <section className="py-24 px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #1E3A4C 100%)' }}>
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 text-white">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Deep Expertise Across All Domains
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive modalities and project solutions spanning the entire spectrum of rehabilitation medicine
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Neuro Rehabilitation (Adult & Pediatric)',
              'Orthopedic/Sports Rehab',
              'Spinal Rehabilitation',
              'Pain Management',
              'Gynecology & Pelvic Floor',
              'Speech Rehabilitation',
              'Wellness & Fitness',
              'Cardiac & Pulmonary Rehab',
              'Geriatric & Chronic Care'
            ].map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl hover:scale-105 transition-all cursor-pointer"
                style={{ 
                  backgroundColor: 'rgba(126, 214, 223, 0.1)',
                  border: '1px solid rgba(126, 214, 223, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(126, 214, 223, 0.2)';
                  e.currentTarget.style.borderColor = '#7ED6DF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(126, 214, 223, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(126, 214, 223, 0.2)';
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#7ED6DF' }} />
                  <p className="font-semibold text-white">{domain}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Industry-Leading Partner Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with the world's most trusted manufacturers to deliver proven, reliable rehabilitation technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Chattanooga', desc: 'Global leader in therapeutic modalities' },
              { name: 'BTL Robotics', desc: 'Advanced robotic rehabilitation' },
              { name: 'Walkbot', desc: 'Robotic gait trainer' },
              { name: 'DIERS Motion Lab', desc: 'Gait Analysis' },
              { name: 'ETAC', desc: 'Smart Patient handling' },
              { name: 'Remed', desc: 'Advance rehab modalities' },
              { name: 'EGZOtech', desc: 'Advance multijoint Robotic and EMG' },
              { name: 'Shinhwa', desc: 'Advance Spine rehab' }
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl text-center hover:scale-105 transition-all"
                style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '2px solid #E5E7EB'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7ED6DF';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#5E60CE20', color: '#5E60CE' }}
                >
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#1E3A4C' }}>{brand.name}</h3>
                <p className="text-sm text-gray-600">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #006B7D 0%, #5E60CE 100%)' }}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Transform Your Rehabilitation Center?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how Rehax can help you create a world-class facility
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('space-planner')}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#7ED6DF', color: '#1E3A4C' }}
            >
              Start Planning Your Space
            </button>
            <button
              className="px-8 py-4 rounded-full font-semibold border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
