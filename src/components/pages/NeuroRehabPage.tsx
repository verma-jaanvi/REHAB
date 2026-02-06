import { motion } from 'motion/react';
import { Brain, Activity, Zap, Monitor, Radio, Target, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function NeuroRehabPage() {
  const technologies = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Robotic Gait Training',
      desc: 'Advanced robotic systems for comprehensive gait rehabilitation in adult and pediatric patients',
      features: ['Walkbot system', 'Adjustable body weight support', 'Real-time feedback', 'Customizable protocols']
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Upper Limb Robotics',
      desc: 'Sophisticated robotic devices for arm and hand rehabilitation',
      features: ['Multi-joint coordination', 'Haptic feedback', 'Gamification elements', 'Progress tracking']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'EMG & Biofeedback',
      desc: 'Electromyography systems for muscle activity assessment and training',
      features: ['Real-time monitoring', 'Visual feedback', 'Treatment protocols', 'Data analysis']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Virtual Rehabilitation',
      desc: 'Immersive virtual reality systems for engaging neuro rehab therapy',
      features: ['VR environments', 'Interactive exercises', 'Motivation boost', 'Outcome measurement']
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'RTMS Therapy',
      desc: 'Repetitive Transcranial Magnetic Stimulation for neuroplasticity enhancement',
      features: ['Non-invasive', 'FDA approved protocols', 'Stroke recovery', 'Pain management']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Neuro Assessment',
      desc: 'Advanced systems for comprehensive neurological evaluation',
      features: ['Balance assessment', 'Gait analysis', 'Cognitive testing', 'Functional outcomes']
    }
  ];

  const applications = [
    'Stroke Rehabilitation',
    'Traumatic Brain Injury',
    'Spinal Cord Injury',
    'Cerebral Palsy',
    "Parkinson's Disease",
    'Multiple Sclerosis',
    'Peripheral Neuropathy',
    'Post-surgical Recovery'
  ];

  const workflowStages = [
    {
      number: '01',
      title: 'Acute Stage (Bed-bound)',
      description: 'Focus on early intervention: Multi-modal device, Zero-space swallow therapy, Supine exercise/cycle, NMES/Salotherapy.',
      color: '#5E60CE'
    },
    {
      number: '02',
      title: 'Early Rehabilitation',
      description: 'Introduction of active therapies: Gross/fine motor robotics, Standing device, EMG biofeedback, Magnetic stimulation (as needed).',
      color: '#006B7D'
    },
    {
      number: '03',
      title: 'Advanced Mobilization',
      description: 'Progressing towards independent movement: Treadmill w/ hoist for gait, advanced cycle trainers, pelvic therapy.',
      color: '#7ED6DF'
    },
    {
      number: '04',
      title: 'Functional Integration',
      description: 'Real-world application: ADL trainers, fine motor robotics, parallel bars, optional VR and virtual rehabilitation for cognitive integration.',
      color: '#5E60CE'
    },
    {
      number: '05',
      title: 'Monitoring & Continuous Assessment',
      description: 'Ongoing data-driven adjustments: Measurement devices (EMG, dynamometer), progress tracking, adaptive therapy updates for sustained recovery.',
      color: '#006B7D'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1764314428902-41e1c2382a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2xvZ2ljYWwlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHklMjBwYXRpZW50fGVufDF8fHx8MTc3MDMyNzQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Neurological Rehabilitation"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(94, 96, 206, 0.92) 0%, rgba(66, 72, 163, 0.92) 100%)' }}
          />
        </div>

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
            <span className="text-sm font-semibold">Advanced Neurological Solutions</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Brain className="w-20 h-20 mx-auto" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Neuro Rehabilitation Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Advanced technology for comprehensive neurological rehabilitation in adult and pediatric patients
          </motion.p>
        </div>
      </section>

      {/* Optimized Patient Recovery Workflow Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
            >
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">Structured Treatment Pathway</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Optimized Patient Recovery Workflow
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A structured workflow ensures appropriate equipment utilization across all stages of neurorehabilitation, maximizing patient progression and outcomes.
            </p>
          </div>

          {/* Workflow Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-16"
          >
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1666257434991-d80079a812d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVybyUyMHJlaGFiaWxpdGF0aW9uJTIwcm9ib3RpYyUyMHRoZXJhcHl8ZW58MXx8fHwxNzcwMzI1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Neuro Rehabilitation Workflow"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-12 text-white max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">Comprehensive Recovery Journey</h3>
                  <p className="text-lg opacity-90">
                    From acute care to independent living, our integrated workflow ensures seamless patient progression through every stage of neurological rehabilitation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div 
              className="absolute left-0 right-0 top-20 h-0.5 hidden lg:block"
              style={{ 
                background: 'linear-gradient(90deg, #5E60CE 0%, #006B7D 50%, #7ED6DF 100%)',
                opacity: 0.2
              }}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {workflowStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Stage Card */}
                  <div 
                    className="group p-8 rounded-3xl transition-all duration-300 hover:scale-105 cursor-pointer h-full"
                    style={{ 
                      backgroundColor: 'white',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = stage.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    {/* Stage Number Badge */}
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                      style={{ 
                        backgroundColor: `${stage.color}15`,
                        color: stage.color,
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {stage.number}
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-2xl font-bold mb-4"
                      style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}
                    >
                      {stage.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Hover Arrow */}
                    <div 
                      className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: stage.color }}
                    >
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Connector Arrow (desktop only) */}
                  {index < workflowStages.length - 1 && index % 3 !== 2 && (
                    <div 
                      className="hidden lg:block absolute top-20 -right-4 z-10"
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: stage.color }}
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workflow Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl text-center"
            style={{ 
              background: 'linear-gradient(135deg, #5E60CE 0%, #006B7D 100%)',
              color: 'white'
            }}
          >
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Comprehensive Care at Every Stage</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Our integrated approach ensures seamless transitions between recovery stages, with continuous monitoring and adaptive therapy adjustments for optimal patient outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
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
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Advanced Equipment</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of advanced neuro rehabilitation equipment and systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#5E60CE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#5E60CE20', color: '#5E60CE' }}
                >
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A4C' }}>{tech.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{tech.desc}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7ED6DF' }} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-24 px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #1E3A4C 100%)' }}>
        {/* Animated Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-7xl mx-auto text-white relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(126, 214, 223, 0.1)', border: '1px solid rgba(126, 214, 223, 0.2)' }}
            >
              <Target className="w-4 h-4" style={{ color: '#7ED6DF' }} />
              <span className="text-sm font-semibold" style={{ color: '#7ED6DF' }}>Treatment Areas</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Clinical Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven effectiveness across a wide range of neurological conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl text-center hover:scale-105 transition-all cursor-pointer"
                style={{ backgroundColor: 'rgba(126, 214, 223, 0.1)', border: '1px solid rgba(126, 214, 223, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(126, 214, 223, 0.2)';
                  e.currentTarget.style.borderColor = '#7ED6DF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(126, 214, 223, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(126, 214, 223, 0.2)';
                }}
              >
                <p className="font-semibold">{app}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements in patient outcomes and facility performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Enhanced Patient Outcomes',
                desc: 'Accelerated recovery through intensive, task-specific training with immediate feedback',
                color: '#5E60CE'
              },
              {
                title: 'Objective Measurement',
                desc: 'Precise tracking of progress with quantifiable data for evidence-based decision making',
                color: '#006B7D'
              },
              {
                title: 'Increased Motivation',
                desc: 'Engaging, gamified experiences that improve patient adherence and therapy participation',
                color: '#7ED6DF'
              },
              {
                title: 'Therapist Efficiency',
                desc: 'Automated assistance reduces physical demands while maintaining high-quality care',
                color: '#5E60CE'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl hover:scale-105 transition-all cursor-pointer"
                style={{ 
                  background: `linear-gradient(135deg, ${benefit.color} 0%, ${benefit.color}dd 100%)`,
                  color: 'white' 
                }}
              >
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="opacity-95 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Support */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Complete Implementation Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're with you every step of the way, from installation to ongoing optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Training & Education',
                desc: 'Comprehensive training programs for your clinical team on all neuro rehab equipment and protocols',
                icon: <Brain className="w-8 h-8" />
              },
              {
                title: 'Clinical Protocols',
                desc: 'Evidence-based treatment protocols customized for your patient population and clinical goals',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Ongoing Support',
                desc: 'Dedicated technical and clinical support with regular follow-ups and optimization consultations',
                icon: <CheckCircle2 className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white hover:scale-105 transition-all"
                style={{ 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#7ED6DF20', color: '#006B7D' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A4C' }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Transform Your Neuro Rehab Center?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how our advanced neuro rehabilitation solutions can benefit your facility
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#7ED6DF', color: '#1E3A4C' }}
            >
              Request Demo
            </button>
            <button
              className="px-8 py-4 rounded-full font-semibold border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}