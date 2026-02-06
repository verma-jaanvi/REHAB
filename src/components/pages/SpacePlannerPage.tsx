import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Box, Maximize2, DollarSign, Users, Sparkles, CheckCircle2, Download, Calendar, Settings, Zap, TrendingUp } from 'lucide-react';

export function SpacePlannerPage() {
  const [budgetValue, setBudgetValue] = useState(50); // 0-100 scale
  const [spaceSizeValue, setSpaceSizeValue] = useState(50); // 0-100 scale
  const [focusArea, setFocusArea] = useState('general');

  // Convert slider values to categories and actual values
  const getBudgetInfo = () => {
    if (budgetValue <= 33) {
      return {
        category: 'small',
        label: 'Starter',
        range: '₹10L - ₹30L',
        equipmentCost: '₹18L',
        installation: '₹2L',
        training: '₹1L',
        total: '₹21L',
        actualAmount: Math.round(10 + (budgetValue / 33) * 20) // 10L to 30L
      };
    } else if (budgetValue <= 66) {
      return {
        category: 'medium',
        label: 'Professional',
        range: '₹30L - ₹75L',
        equipmentCost: '₹45L',
        installation: '₹5L',
        training: '₹2L',
        total: '₹52L',
        actualAmount: Math.round(30 + ((budgetValue - 33) / 33) * 45) // 30L to 75L
      };
    } else {
      return {
        category: 'large',
        label: 'Premium',
        range: '₹75L+',
        equipmentCost: '₹90L',
        installation: '₹10L',
        training: '₹4L',
        total: '₹104L',
        actualAmount: Math.round(75 + ((budgetValue - 66) / 34) * 50) // 75L to 125L
      };
    }
  };

  const getSpaceSizeInfo = () => {
    if (spaceSizeValue <= 33) {
      return {
        category: 'small',
        label: 'Compact',
        range: '500-1000 sq ft',
        area: Math.round(500 + (spaceSizeValue / 33) * 500), // 500 to 1000
        equipment: '8-12',
        capacity: '4-6',
        patients: '4-6 patients'
      };
    } else if (spaceSizeValue <= 66) {
      return {
        category: 'medium',
        label: 'Standard',
        range: '1000-2500 sq ft',
        area: Math.round(1000 + ((spaceSizeValue - 33) / 33) * 1500), // 1000 to 2500
        equipment: '15-20',
        capacity: '8-12',
        patients: '8-12 patients'
      };
    } else {
      return {
        category: 'large',
        label: 'Spacious',
        range: '2500+ sq ft',
        area: Math.round(2500 + ((spaceSizeValue - 66) / 34) * 1500), // 2500 to 4000
        equipment: '25-35',
        capacity: '15-20',
        patients: '15-20 patients'
      };
    }
  };

  const budgetInfo = getBudgetInfo();
  const spaceInfo = getSpaceSizeInfo();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1645334424307-6de7ff8f2f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGFyY2hpdGVjdHVyZSUyMDNEfGVufDF8fHx8MTc3MDMyNzAwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern Interior Design"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(94, 96, 206, 0.95) 0%, rgba(0, 107, 125, 0.95) 100%)' }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 backdrop-blur-xl"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">AI-Powered Planning</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            3D Space Planner
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
          >
            Design your perfect rehabilitation center in real-time. Adjust the sliders and watch your space come to life instantly.
          </motion.p>
        </div>
      </section>

      {/* Main Planner Section - Side by Side */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side - Controls */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                  style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
                >
                  <Settings className="w-4 h-4" />
                  <span className="text-sm font-semibold">Configure Your Space</span>
                </motion.div>
                
                <h2 className="text-4xl font-bold mb-3" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
                  Customize Settings
                </h2>
                <p className="text-gray-600">
                  Adjust sliders and see your space update in real-time
                </p>
              </div>

              {/* Budget Slider */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
                  >
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold" style={{ color: '#1E3A4C' }}>Budget Range</h3>
                    <p className="text-sm text-gray-600">{budgetInfo.range}</p>
                  </div>
                  <div 
                    className="px-3 py-1 rounded-lg text-sm font-bold"
                    style={{ backgroundColor: '#5E60CE20', color: '#5E60CE' }}
                  >
                    {budgetInfo.label}
                  </div>
                </div>
                
                {/* Slider */}
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={budgetValue}
                    onChange={(e) => setBudgetValue(parseInt(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #5E60CE 0%, #5E60CE ${budgetValue}%, #E5E7EB ${budgetValue}%, #E5E7EB 100%)`
                    }}
                  />
                  
                  {/* Labels */}
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>₹10L</span>
                    <span>₹30L</span>
                    <span>₹75L</span>
                    <span>₹125L+</span>
                  </div>
                </div>

                {/* Budget Details */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between text-gray-600">
                      <span>Estimated Investment:</span>
                      <span className="font-bold" style={{ color: '#5E60CE' }}>₹{budgetInfo.actualAmount}L</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Space Size Slider */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#ECFDF5', color: '#047857' }}
                  >
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold" style={{ color: '#1E3A4C' }}>Space Size</h3>
                    <p className="text-sm text-gray-600">{spaceInfo.range}</p>
                  </div>
                  <div 
                    className="px-3 py-1 rounded-lg text-sm font-bold"
                    style={{ backgroundColor: '#ECFDF5', color: '#047857' }}
                  >
                    {spaceInfo.label}
                  </div>
                </div>
                
                {/* Slider */}
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={spaceSizeValue}
                    onChange={(e) => setSpaceSizeValue(parseInt(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #006B7D 0%, #006B7D ${spaceSizeValue}%, #E5E7EB ${spaceSizeValue}%, #E5E7EB 100%)`
                    }}
                  />
                  
                  {/* Labels */}
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>500 sq ft</span>
                    <span>1000</span>
                    <span>2500</span>
                    <span>4000+</span>
                  </div>
                </div>

                {/* Space Details */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between text-gray-600">
                      <span>Actual Area:</span>
                      <span className="font-bold" style={{ color: '#006B7D' }}>{spaceInfo.area} sq ft</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Focus Area Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}
                  >
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#1E3A4C' }}>Focus Area</h3>
                    <p className="text-sm text-gray-600">Rehabilitation specialty</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {[
                    { value: 'general', label: 'General Rehab', icon: '🏥' },
                    { value: 'neuro', label: 'Neuro Rehab', icon: '🧠' },
                    { value: 'sports', label: 'Sports Rehab', icon: '⚽' },
                    { value: 'orthopedic', label: 'Orthopedic', icon: '🦴' },
                    { value: 'cardiac', label: 'Cardiac Rehab', icon: '❤️' },
                    { value: 'pediatric', label: 'Pediatric', icon: '👶' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFocusArea(option.value)}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                        focusArea === option.value ? 'shadow-lg scale-102' : 'hover:scale-102'
                      }`}
                      style={{
                        backgroundColor: focusArea === option.value ? '#7ED6DF' : '#F3F4F6',
                        color: '#1E3A4C'
                      }}
                    >
                      <span className="text-xl">{option.icon}</span>
                      <span className="flex-1 text-left">{option.label}</span>
                      {focusArea === option.value && (
                        <CheckCircle2 className="w-5 h-5" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl"
                style={{ 
                  background: 'linear-gradient(135deg, #5E60CE 0%, #006B7D 100%)',
                  color: 'white'
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Estimated Total</h3>
                </div>
                <div className="text-4xl font-bold mb-2">{budgetInfo.total}</div>
                <p className="text-sm opacity-80">Complete setup with equipment, installation & training</p>
              </motion.div>
            </div>

            {/* Right Side - 3D Visualizer */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24"
              >
                {/* 3D Viewer */}
                <div 
                  className="rounded-3xl overflow-hidden mb-6 relative"
                  style={{ 
                    height: '500px',
                    background: 'linear-gradient(135deg, #5E60CE 0%, #006B7D 50%, #7ED6DF 100%)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${budgetValue}-${spaceSizeValue}-${focusArea}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotateY: [0, 360]
                      }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ 
                        rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 }
                      }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="text-center">
                        <Box className="w-32 h-32 mx-auto mb-4 text-white drop-shadow-2xl" />
                        <p className="text-2xl font-bold text-white mb-2">Interactive 3D View</p>
                        <p className="text-white/80">Real-time visualization updating...</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating Info Cards */}
                  <div 
                    className="absolute top-6 left-6 p-5 rounded-2xl backdrop-blur-xl"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <p className="text-xs font-semibold mb-3 text-white/80">Equipment</p>
                    <div className="space-y-2 text-sm text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7ED6DF' }} />
                        <span>Robotic Gait Trainer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7ED6DF' }} />
                        <span>Treatment Tables</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7ED6DF' }} />
                        <span>Exercise Area</span>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="absolute top-6 right-6 p-5 rounded-2xl backdrop-blur-xl"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <p className="text-xs font-semibold mb-3 text-white/80">Metrics</p>
                    <div className="space-y-2 text-sm text-white">
                      <div className="flex justify-between gap-6">
                        <span className="opacity-80">Area:</span>
                        <span className="font-bold">{spaceInfo.area} sq ft</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span className="opacity-80">Equipment:</span>
                        <span className="font-bold">{spaceInfo.equipment}</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span className="opacity-80">Capacity:</span>
                        <span className="font-bold">{spaceInfo.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Update Badge */}
                  <div 
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full backdrop-blur-xl flex items-center gap-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                  >
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#7ED6DF' }} />
                    <span className="text-white text-sm font-semibold">Live Preview</span>
                  </div>
                </div>

                {/* Details Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div 
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#EEF2FF', color: '#5E60CE' }}
                      >
                        <Box className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold" style={{ color: '#1E3A4C' }}>Space Details</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Area:</span>
                        <span className="font-semibold" style={{ color: '#1E3A4C' }}>{spaceInfo.area} sq ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Equipment:</span>
                        <span className="font-semibold" style={{ color: '#1E3A4C' }}>{spaceInfo.equipment} items</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Capacity:</span>
                        <span className="font-semibold" style={{ color: '#1E3A4C' }}>{spaceInfo.capacity} patients</span>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#ECFDF5', color: '#047857' }}
                      >
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold" style={{ color: '#1E3A4C' }}>Investment</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Equipment:</span>
                        <span className="font-semibold" style={{ color: '#1E3A4C' }}>{budgetInfo.equipmentCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Installation:</span>
                        <span className="font-semibold" style={{ color: '#1E3A4C' }}>{budgetInfo.installation}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-bold" style={{ color: '#1E3A4C' }}>Total:</span>
                        <span className="font-bold text-lg" style={{ color: '#006B7D' }}>{budgetInfo.total}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#7ED6DF', color: '#1E3A4C' }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Plan</span>
                  </button>
                  <button
                    className="flex-1 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-2"
                    style={{ borderColor: '#006B7D', color: '#006B7D', backgroundColor: 'white' }}
                  >
                    <Calendar className="w-5 h-5 inline mr-2" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Powerful Features</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3A4C', fontFamily: 'var(--font-heading)' }}>
              Why Use Our Space Planner?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced planning tools designed specifically for rehabilitation centers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Real-Time Updates',
                desc: 'See your space transform instantly as you adjust sliders. No waiting, no loading.',
                color: '#5E60CE'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'AI-Powered Optimization',
                desc: 'Intelligent space optimization for maximum efficiency, workflow, and patient satisfaction.',
                color: '#006B7D'
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: 'Instant Cost Breakdown',
                desc: 'Comprehensive pricing with equipment, installation, and ROI projections updated live.',
                color: '#7ED6DF'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl hover:scale-105 transition-all duration-300"
                style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = feature.color;
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1E3A4C' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Slider Styles */}
      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          border: 3px solid currentColor;
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          border: 3px solid currentColor;
        }
        
        input[type="range"]:focus {
          outline: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          color: #5E60CE;
        }
        
        input[type="range"]::-moz-range-thumb {
          color: #5E60CE;
        }
      `}</style>
    </div>
  );
}
