import { motion } from "motion/react";
import {
  Brain,
  Activity,
  Zap,
  Monitor,
  Radio,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { WorkflowImageCard } from "../ui/WorkflowImageCard";

import acuteStage from "../../assets/image/neuroRehab/acuteStage.png";
import advancedMob from "../../assets/image/neuroRehab/advancedMob.png";
import earlyRehab from "../../assets/image/neuroRehab/earlyRehab.png";
import funcIntegrate from "../../assets/image/neuroRehab/funcIntegrate.jpg";
import MandCAcess from "../../assets/image/neuroRehab/MandCAcess.png";

import roboticGaitTraining from "../../assets/image/neuroRehab/roboticGaitTraining.png";
import upperLimbRobotics from "../../assets/image/neuroRehab/upperLimbRobotics.png";
import emgBiofeedback from "../../assets/image/neuroRehab/emgBiofeedback.png";
import virtualRehabilitation from "../../assets/image/neuroRehab/virtualRehabilitation.png";
import rtmsTherapy from "../../assets/image/neuroRehab/rtmsTherapy.png";
import neuroAssessment from "../../assets/image/neuroRehab/neuroAssessment.png";
import checkMark from "../../assets/image/neuroRehab/check-mark.png";

export function NeuroRehabPage() {
  const technologies = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Robotic Gait Training",
      desc: "Advanced robotic systems for comprehensive gait rehabilitation in adult and pediatric patients",
      features: [
        "Walkbot system",
        "Adjustable body weight support",
        "Real-time feedback",
        "Customizable protocols",
      ],
      image: roboticGaitTraining,
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Upper Limb Robotics",
      desc: "Sophisticated robotic devices for arm and hand rehabilitation",
      features: [
        "Multi-joint coordination",
        "Haptic feedback",
        "Gamification elements",
        "Progress tracking",
      ],
      image: upperLimbRobotics,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "EMG & Biofeedback",
      desc: "Electromyography systems for muscle activity assessment and training",
      features: [
        "Real-time monitoring",
        "Visual feedback",
        "Treatment protocols",
        "Data analysis",
      ],
      image: emgBiofeedback,
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Virtual Rehabilitation",
      desc: "Immersive virtual reality systems for engaging neuro rehab therapy",
      features: [
        "VR environments",
        "Interactive exercises",
        "Motivation boost",
        "Outcome measurement",
      ],
      image: virtualRehabilitation,
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "RTMS Therapy",
      desc: "Repetitive Transcranial Magnetic Stimulation for neuroplasticity enhancement",
      features: [
        "Non-invasive",
        "FDA approved protocols",
        "Stroke recovery",
        "Pain management",
      ],
      image: rtmsTherapy,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Neuro Assessment",
      desc: "Advanced systems for comprehensive neurological evaluation",
      features: [
        "Balance assessment",
        "Gait analysis",
        "Cognitive testing",
        "Functional outcomes",
      ],
      image: neuroAssessment,
    },
  ];

  const applications = [
    "Stroke Rehabilitation",
    "Traumatic Brain Injury",
    "Spinal Cord Injury",
    "Cerebral Palsy",
    "Parkinson's Disease",
    "Multiple Sclerosis",
    "Peripheral Neuropathy",
    "Post-surgical Recovery",
  ];

  const workflowStages = [
    {
      title: "Acute Stage (Bed-bound)",
      description:
        "Focus on early intervention: Multi-modal device, Zero-space swallow therapy, Supine exercise/cycle, NMES/Salotherapy.",
      image: acuteStage,
    },
    {
      title: "Early Rehabilitation",
      description:
        "Introduction of active therapies: Gross/fine motor robotics, Standing device, EMG biofeedback, Magnetic stimulation (as needed).",
      image: earlyRehab,
    },
    {
      title: "Advanced Mobilization",
      description:
        "Progressing towards independent movement: Treadmill w/ hoist for gait, advanced cycle trainers, pelvic therapy.",
      image: advancedMob,
    },
    {
      title: "Functional Integration",
      description:
        "Real-world application: ADL trainers, fine motor robotics, parallel bars, optional VR and virtual rehabilitation for cognitive integration.",
      image: funcIntegrate,
    },
    {
      title: "Monitoring & Continuous Assessment",
      description:
        "Ongoing data-driven adjustments: Measurement devices (EMG, dynamometer), progress tracking, adaptive therapy updates for sustained recovery.",
      image: MandCAcess,
    },
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
            style={{
              background:
                "linear-gradient(135deg, rgba(94, 96, 206, 0.92) 0%, rgba(66, 72, 163, 0.92) 100%)",
            }}
          />
        </div>

        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Advanced Neurological Solutions
            </span>
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
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Neuro Rehabilitation Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Advanced technology for comprehensive neurological rehabilitation in
            adult and pediatric patients
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
              style={{ backgroundColor: "#EEF2FF", color: "#5E60CE" }}
            >
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Structured Treatment Pathway
              </span>
            </motion.div>

            <h2
              className="text-5xl font-bold mb-6"
              style={{ color: "#1E3A4C", fontFamily: "var(--font-heading)" }}
            >
              Optimized Patient Recovery Workflow
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A structured workflow ensures appropriate equipment utilization
              across all stages of neurorehabilitation, maximizing patient
              progression and outcomes.
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
                  <h3 className="text-3xl font-bold mb-4">
                    Comprehensive Recovery Journey
                  </h3>
                  <p className="text-lg opacity-90">
                    From acute care to independent living, our integrated
                    workflow ensures seamless patient progression through every
                    stage of neurological rehabilitation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {/* Top row: 3 cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ">
              {workflowStages.slice(0, 3).map((stage, index) => (
                <WorkflowImageCard key={index} {...stage} index={index} />
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
              {workflowStages.slice(3, 5).map((stage, index) => (
                /* We use md:max-w-[calc(33.333%-1.33rem)] to account for the gap */
                <div
                  key={index + 3}
                  className="w-full md:w-[31%] lg:w-[30%]"
                  style={{ width: "365px", height: "300px" }}
                >
                  <WorkflowImageCard {...stage} index={index + 3} />
                </div>
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
              background: "linear-gradient(135deg, #5E60CE 0%, #006B7D 100%)",
              color: "white",
            }}
          >
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Comprehensive Care at Every Stage
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Our integrated approach ensures seamless transitions between
              recovery stages, with continuous monitoring and adaptive therapy
              adjustments for optimal patient outcomes.
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
              style={{ backgroundColor: "#ECFDF5", color: "#047857" }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Advanced Equipment</span>
            </motion.div>

            <h2
              className="text-5xl font-bold mb-6"
              style={{ color: "#1E3A4C", fontFamily: "var(--font-heading)" }}
            >
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of advanced neuro rehabilitation equipment and
              systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
            
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ backgroundColor: "#F5FEFF" }}
              >
                
                {/* Top Section*/}
                <div className="p-6 flex justify-center">
                  
                  <div
                    className="overflow-hidden rounded-2xl w-full flex items-center justify-center bg-gray-100"
                    style={{ height: "200px" }}
                  >
                    
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                {/* Bottom Section: Content Container */}
                <div className="px-8 pt-2 flex flex-col flex-1">
                  
                  <h3
                    className="text-xl font-bold"
                    style={{
                      color: "#1E3A4C",
                      minHeight: "4rem",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "var(--font-desc)",
                      fontSize: "18.78px",
                    }}
                  >
                    
                    {tech.title}
                  </h3>
                  {/* Description: */}
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "#4A5565",
                      fontSize: "9.5px",
                      minHeight: "45px",
                    }}
                  >
                    
                    {tech.desc}
                  </p>
                  {/* Features:*/}
                  <ul
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{
                      gap: "10px 35px",
                      marginBottom: "16px",
                    }}
                  >
                    {tech.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img
                          src={checkMark}
                          alt="check"
                          style={{
                            width: "10px",
                            height: "10px",
                          }}
                        />

                        <span
                          style={{
                            color: "#4A5565",
                            fontSize: "9.5px",
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* Learn More */}
                  <button
                    className="flex items-center gap-1 mb-8 font-semibold group/btn transition-all duration-300"
                    style={{ color: "#006B7D", fontSize: "11px", marginTop: "auto" }}
                  >
                    
                    Learn More <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section
        className="py-24 px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0A1628 0%, #1E3A4C 100%)",
        }}
      >
        {/* Animated Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto text-white relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(126, 214, 223, 0.1)",
                border: "1px solid rgba(126, 214, 223, 0.2)",
              }}
            >
              <Target className="w-4 h-4" style={{ color: "#7ED6DF" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#7ED6DF" }}
              >
                Treatment Areas
              </span>
            </motion.div>

            <h2
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Clinical Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven effectiveness across a wide range of neurological
              conditions
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
                style={{
                  backgroundColor: "rgba(126, 214, 223, 0.1)",
                  border: "1px solid rgba(126, 214, 223, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(126, 214, 223, 0.2)";
                  e.currentTarget.style.borderColor = "#7ED6DF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(126, 214, 223, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(126, 214, 223, 0.2)";
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
            <h2
              className="text-5xl font-bold mb-6"
              style={{ color: "#1E3A4C", fontFamily: "var(--font-heading)" }}
            >
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements in patient outcomes and
              facility performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Enhanced Patient Outcomes",
                desc: "Accelerated recovery through intensive, task-specific training with immediate feedback",
                color: "#5E60CE",
              },
              {
                title: "Objective Measurement",
                desc: "Precise tracking of progress with quantifiable data for evidence-based decision making",
                color: "#006B7D",
              },
              {
                title: "Increased Motivation",
                desc: "Engaging, gamified experiences that improve patient adherence and therapy participation",
                color: "#7ED6DF",
              },
              {
                title: "Therapist Efficiency",
                desc: "Automated assistance reduces physical demands while maintaining high-quality care",
                color: "#5E60CE",
              },
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
                  color: "white",
                }}
              >
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="opacity-95 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery */}

      {/* Implementation Support */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-6"
              style={{ color: "#1E3A4C", fontFamily: "var(--font-heading)" }}
            >
              Complete Implementation Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're with you every step of the way, from installation to ongoing
              optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Training & Education",
                desc: "Comprehensive training programs for your clinical team on all neuro rehab equipment and protocols",
                icon: <Brain className="w-8 h-8" />,
              },
              {
                title: "Clinical Protocols",
                desc: "Evidence-based treatment protocols customized for your patient population and clinical goals",
                icon: <Target className="w-8 h-8" />,
              },
              {
                title: "Ongoing Support",
                desc: "Dedicated technical and clinical support with regular follow-ups and optimization consultations",
                icon: <CheckCircle2 className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white hover:scale-105 transition-all"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#7ED6DF20", color: "#006B7D" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#1E3A4C" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #5E60CE 0%, #4248A3 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Transform Your Neuro Rehab Center?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how our advanced neuro rehabilitation solutions can
            benefit your facility
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "#7ED6DF", color: "#1E3A4C" }}
            >
              Request Demo
            </button>
            <button
              className="px-8 py-4 rounded-full font-semibold border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
