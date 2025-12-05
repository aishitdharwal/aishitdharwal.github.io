import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Clock, Calendar, Video, Users, ChevronDown, ChevronUp, Play, Brain, Code, Lightbulb, Target, Sparkles, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import exampleImage from 'figma:asset/26dee7eb21295ca5104fed75bfdebf1d46f48b54.png';
import mentorImage from 'figma:asset/a1d1c0882738f6509218c42cb1a194ced0988eb0.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import MyImage from '../assets/aishit-picture.jpg';

// Global trophy opacity state - controlled by a single timer
let globalTrophyOpacity = 1;

// Checkbox component for "Are You Still Stuck at" section
function StuckAtCheckbox({ point, index, onToggle }: { point: string; index: number; onToggle: (index: number, checked: boolean) => void }) {
  const [isChecked, setIsChecked] = useState(false);
  const [showTrophy, setShowTrophy] = useState(false);
  const [trophyOpacity, setTrophyOpacity] = useState(1);
  const trophyRef = useRef<HTMLSpanElement>(null);
  
  // Subscribe to global trophy animation
  useEffect(() => {
    if (showTrophy) {
      const updateOpacity = () => {
        setTrophyOpacity(globalTrophyOpacity);
      };
      
      // Update immediately
      updateOpacity();
      
      // Listen for global opacity changes
      window.addEventListener('trophy-opacity-update', updateOpacity);
      
      return () => {
        window.removeEventListener('trophy-opacity-update', updateOpacity);
      };
    }
  }, [showTrophy]);
  
  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onToggle(index, newChecked);
    
    // Set trophy after 3 seconds if checked
    if (newChecked) {
      setTimeout(() => {
        setShowTrophy(true);
      }, 3000);
    } else {
      setShowTrophy(false);
    }
  };
  
  return (
    <div 
      className="flex items-start gap-3 p-4 bg-gray-900 rounded-lg border transition-all duration-300 hover:border-gray-700 hover:shadow-lg group" 
      style={{ 
        borderColor: isChecked ? 'rgba(49, 175, 212, 0.5)' : '#1f2937',
        boxShadow: isChecked ? '0 0 20px rgba(49, 175, 212, 0.1)' : undefined 
      }}
    >
      <button
        onClick={handleToggle}
        className={`w-8 h-8 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-500 ${
          isChecked && showTrophy
            ? 'bg-transparent border-transparent transform scale-110'
            : isChecked 
            ? 'shadow-lg' 
            : 'border-gray-600 hover:border-[#31afd4] group-hover:border-[#31afd4]'
        }`}
        style={isChecked && !showTrophy ? { 
          backgroundColor: '#31afd4', 
          borderColor: '#31afd4',
          boxShadow: '0 0 20px rgba(49, 175, 212, 0.5)' 
        } : undefined}
      >
        {isChecked && showTrophy ? (
          <span 
            ref={trophyRef}
            className="text-2xl animate-trophy-blink filter drop-shadow-lg transition-opacity duration-300"
            style={{ opacity: trophyOpacity }}
          >
            🏆
          </span>
        ) : isChecked ? (
          <Check className="w-4 h-4 text-white" />
        ) : null}
      </button>
      <p className="text-gray-300 text-base cursor-pointer transition-colors duration-300 group-hover:text-white" onClick={handleToggle}>
        {point}
      </p>
    </div>
  );
}

const testimonials = [
  {
    quote: "He doesn't just lecture; he actively engages, figures out exactly where you're stuck, and then explains concepts with incredible clarity and patience.",
    name: "Jay Jhaveri",
    role: "Senior Software Engineer | 9+ Years of Experience",
    company: "AI Consultant",
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/jay.jpeg?raw=true"
  },
  {
    quote: "He cuts through the noise and hype that plague this industry, focusing instead on the fundamental principles that actually matter for business outcomes.",
    name: "Indy Banerjee", 
    role: "Partner | 30+ Years of Experience",
    company: "McKinsey & Company, Inc.",
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/indy.jpeg?raw=true"
  },
  {
    quote: "He has a rare ability to break technical topics down to their smallest parts, explaining the why and the how and bringing it all together into a clear mental models that stick.",
    name: "Ashni Shah",
    role: "Strategy & Operations | 13+ Years of Experience",
    company: "Founder",
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/ashni.jpeg?raw=true"
  },
  {
    quote: "I witnessed significant growth in my understanding of AI and technology, and my confidence soared. He provided valuable insights into AI concepts and offered expert advice on navigating job prospects in the AI world.",
    name: "Anas Khan",
    role: "Technical Business Analyst | 6+ Years of Experience",
    company: "AI Professional",
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/anas.jpeg?raw=true"
  },
  {
    quote: "His practical insights & industry use case studies make him outstanding in the field. His breadth of knowledge, spanning deep learning algorithms, transformers, large language models, and model validation metrics, is truly impressive.",
    name: "Dharmender Singh",
    role: "Chapter Leader | 18+ Years of Experience", 
    company: "Fidelity Investments",
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/dharmender.jpeg?raw=true"
  },
  {
    quote: "I felt much more confident and prepared as I pursued opportunities in AI. He has a genuine passion for the field and a real gift for helping others succeed.",
    name: "Krina Trivedi",
    role: "Product Manager | 9+ Years of Experience",
    company: "University of Ottawa",
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/krina.jpeg?raw=true"
  },
  {
    quote: "His passion for the subject matter is contagious, and he has a natural talent for keeping students engaged while covering technical material.",
    name: "Subhash Dasyam",
    role: "Lead Security Architect | 15+ Years of Experience",
    company: "Emirates NBD", 
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/subhash.jpeg?raw=true"
  },
  {
    quote: "Aishit is an exceptional mentor with deep expertise in AI. He possesses strong conceptual clarity, especially when it comes to the mathematical foundations behind AI and machine learning.",
    name: "Sithal Sigireddy",
    role: "Gen AI Architect | 17+ Years of Experience",
    company: "Oracle",
    image: "https://github.com/aishitdharwal/testimonial-images/blob/main/sithal.jpeg?raw=true"
  },
  // {
  //   quote: "I finally understand how to validate my ideas properly. This workshop saved me from building something nobody wanted.",
  //   name: "Sophia Martinez",
  //   role: "UX Designer | 5 years experience",
  //   company: "Adobe",
  //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NjI3Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  // }
];

const learningPoints = [
  "Master end-to-end AI Agent development using LangChain/LangGraph with stateful, multi-step workflows and external tool integration",
  "Deploy production-ready agents on AWS using Lambda, S3, and API Gateway with complete deployment templates", 
  "Build and configure enterprise AI Agents using Amazon Bedrock's managed service with automatic orchestration and security",
  "Implement robust state management, memory persistence, and scaling patterns for real-world cloud deployments"
];

const targetAudience = [
  {
    title: "Software Developer",
    icon: Code,
    description: "Building AI-powered applications",
    popup: "This workshop is perfect for you because you'll learn practical steps for integrating AI Agent frameworks (LangChain/LangGraph) and deploying them to production using AWS cloud services."
  },
  {
    title: "ML Engineer / Data Scientist", 
    icon: Brain,
    description: "Moving models to production",
    popup: "This workshop solves your 'Mailing the Model' problem by teaching you application-layer deployment using high-level agent frameworks and specific AWS services for production AI agents."
  },
  {
    title: "Cloud / DevOps Engineer",
    icon: Target,
    description: "Managing cloud infrastructure",
    popup: "This workshop is ideal for you because you'll understand the unique infrastructure and deployment patterns for AI Agents, making you a key contributor to AI/ML initiatives at your organization."
  },
  {
    title: "Technical Product Manager",
    icon: Lightbulb,
    description: "Overseeing AI/ML products",
    popup: "This workshop gives you deep understanding of the technical complexity and deployment pipeline of AI Agents, enabling you to make informed decisions and lead AI product initiatives effectively."
  }
];

const promises = [
  "You'll leave with a working, cloud-hosted AI Agent that's accessible via public API endpoint",
  "Learn production-grade deployment patterns used by leading AI companies and enterprises",
  "Get lifetime access to deployment templates, infrastructure code, and resources worth over $500"
];

const outcomes = [
  "Confidently build a working, multi-tool AI Agent using LangChain or LangGraph frameworks",
  "Successfully deploy your custom agent code to AWS with public API access for real users", 
  "Evaluate and utilize Amazon Bedrock Agents capabilities for accelerated enterprise development",
  "Implement proper state management and memory persistence for production agent deployments",
  "Add critical, in-demand AI Agent Productionization skills to your professional portfolio"
];

const faqs = [
  {
    question: "Do I need prior AWS experience to follow along?",
    answer: "Basic AWS familiarity is helpful but not required. We'll walk through each AWS service (Lambda, API Gateway, S3, Bedrock) step-by-step with clear explanations.",
    isOpen: false
  },
  {
    question: "What if I've only worked with LangChain locally?", 
    answer: "Perfect! This workshop is designed specifically for developers who have local LangChain/LangGraph experience but haven't deployed to production yet. We bridge that exact gap.",
    isOpen: false
  },
  {
    question: "Will I really deploy a live agent in 2 hours?",
    answer: "Yes! You'll deploy a working AI Agent to AWS during the session. We focus on practical, hands-on deployment with real infrastructure setup and live testing.",
    isOpen: false
  },
  {
    question: "What tools and accounts do I need?",
    answer: "You'll need: a computer with internet, an AWS account (free tier works), and basic Python knowledge. We'll provide all code templates and deployment scripts during the session.",
    isOpen: false
  }
];

export default function WebinarLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [seatsLeft, setSeatsLeft] = useState(15);
  const [checkedItems, setCheckedItems] = useState(new Set<number>());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Global trophy animation controller
  useEffect(() => {
    let animationFrame: number;
    
    const animateTrophies = () => {
      const time = Date.now();
      // 2-second cycle: 1 second full opacity, 1 second faded
      const cycle = (time % 2000) / 2000; // 0 to 1
      globalTrophyOpacity = cycle < 0.5 ? 1 : 0.3;
      
      // Dispatch custom event to notify all trophies
      window.dispatchEvent(new CustomEvent('trophy-opacity-update'));
      
      animationFrame = requestAnimationFrame(animateTrophies);
    };
    
    animateTrophies();
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Auto-close popup after 4 seconds
  useEffect(() => {
    if (selectedAudience) {
      const timer = setTimeout(() => {
        setSelectedAudience(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [selectedAudience]);

  // Decrease seats every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft(prev => prev > 1 ? prev - 1 : 1);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Countdown timer with days, hours, minutes, seconds
    const updateCountdown = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      
      setTimeLeft({
        days: 8,
        hours: 19,
        minutes: 10,
        seconds: 59 - seconds
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif', backgroundColor: '#050505' }}>
      {/* Sticky Offer Header */}
      <div className="sticky top-0 z-50 bg-gray-900 text-white border-b border-gray-700">
        <div className="px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-black">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: '#31afd4' }} />
              <span>OFFER ENDS IN {timeLeft.minutes}M {timeLeft.seconds}S</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="animate-pulse" style={{ color: '#31afd4' }}>•</span>
              <span className="animate-pulse">LIMITED SEATS ONLY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Ticker Banner */}
      <section className="overflow-hidden py-3" style={{ backgroundColor: '#31afd4' }}>
        <div className="relative">
          <div className="animate-scroll-fast whitespace-nowrap">
            <div className="inline-flex items-center gap-8 text-white font-black text-sm">
              <span>🎁 BONUS Q&A SESSION AT END OF WORKSHOP</span>
              <span>✨ EXCLUSIVE BONUS Q&A SESSION AT END OF WORKSHOP</span>
              <span>🎁 BONUS Q&A SESSION AT END OF WORKSHOP</span>
              <span>✨ EXCLUSIVE BONUS Q&A SESSION AT END OF WORKSHOP</span>
              <span>🎁 BONUS Q&A SESSION AT END OF WORKSHOP</span>
              <span>✨ EXCLUSIVE BONUS Q&A SESSION AT END OF WORKSHOP</span>
              <span>🎁 BONUS Q&A SESSION AT END OF WORKSHOP</span>
              <span>✨ EXCLUSIVE BONUS Q&A SESSION AT END OF WORKSHOP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Value Prop Statement */}
      <section className="px-4 py-12 text-center space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-block">
            <Badge className="bg-gray-800 text-gray-300 font-black px-4 py-2 text-base rounded-full border border-gray-600">
              For Developers, ML Engineers & Cloud Professionals
            </Badge>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Hands On. Zero Fluff. {' '}
            <span style={{ color: '#31afd4' }}>Deploy Your AI Agent on AWS</span>{' '}
            in 90 Minutes.
          </h1>
          
          {/* Supporting Text */}
          <p className="text-white/80 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          Master the step that truly counts. Deploy an AI Agent to AWS and make it usable in the real world.
          </p>
        </div>
      </section>

      {/* Coach Video Section */}
      <section className="px-4 py-4" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-gray-700 bg-gray-900 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9]">
                <img 
                  src={MyImage}
                  alt="Coach Introduction"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  🔴 LIVE Preview
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-black">
                  2:34
                </div> */}
              </div>
              <div className="p-3 bg-gray-900">
                <p className="text-white text-base font-black mb-1">👋 Meet Your Instructor</p>
                <p className="text-gray-300 text-base">
                  I'll show you exactly how to deploy production-ready AI Agents on AWS using Production grade best practices. Join me live!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Webinar Details Cards */}
      <section className="px-4 py-4 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-lg mx-auto space-y-4">
          {/* Info Cards Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Date Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center" 
                  style={{ 
                    backgroundColor: '#31afd4',
                    boxShadow: '0 0 15px rgba(49, 175, 212, 0.4)'
                  }}
                >
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Date</span>
              </div>
              <p className="text-white font-black text-lg">14th Dec 2025</p>
            </div>
            
            {/* Time Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center" 
                  style={{ 
                    backgroundColor: '#31afd4',
                    boxShadow: '0 0 15px rgba(49, 175, 212, 0.4)'
                  }}
                >
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Time</span>
              </div>
              <p className="text-white font-black text-lg">6PM IST</p>
            </div>
            
            {/* Language Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center" 
                  style={{ 
                    backgroundColor: '#31afd4',
                    boxShadow: '0 0 15px rgba(49, 175, 212, 0.4)'
                  }}
                >
                  <Video className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Language</span>
              </div>
              <p className="text-white font-black text-lg">English</p>
            </div>
            
            {/* Duration Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center" 
                  style={{ 
                    backgroundColor: '#31afd4',
                    boxShadow: '0 0 15px rgba(49, 175, 212, 0.4)'
                  }}
                >
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Duration</span>
              </div>
              <p className="text-white font-black text-lg">2 Hours</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-2">
          <a href="https://rzp.io/rzp/PeYihNh">
            <Button 
              size="lg" 
              className="w-full text-white font-black text-xl py-4 rounded-2xl border-0"
              style={{
                backgroundColor: '#31afd4',
                boxShadow: '0 0 30px rgba(49, 175, 212, 0.5), 0 4px 20px rgba(49, 175, 212, 0.3)'
              }}
            >
              Register Now @ INR 99/- ONLY
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="px-4 py-8 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-white">What You Will Learn</h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Master production-grade AI Agent deployment on AWS with hands-on experience using both custom and managed approaches.
          </p>
        </div>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {learningPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-4 bg-gray-900 rounded-lg border-2 transition-all duration-300 hover:border-gray-700"
              style={{
                borderColor: 'rgba(49, 175, 212, 0.4)',
                boxShadow: '0 0 15px rgba(49, 175, 212, 0.1)'
              }}
            >
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ 
                  backgroundColor: '#31afd4',
                  boxShadow: '0 0 15px rgba(49, 175, 212, 0.4)'
                }}
              >
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-300 text-base">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scrolling Testimonials */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        
        <div className="px-4 py-8">
          <h2 className="text-3xl font-black text-white text-center mb-8">What Students Say</h2>
          
          <div className="relative h-96 overflow-hidden max-w-lg mx-auto">
            <div className="animate-scroll-vertical space-y-4">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card key={index} className="border-2 border-gray-700 bg-gray-800 flex-shrink-0">
                  <CardContent className="p-4 space-y-3">
                    <blockquote className="text-gray-300 text-base">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                        <ImageWithFallback 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-black text-white text-base">{testimonial.name}</p>
                        <p className="text-sm font-black" style={{ color: '#31afd4' }}>{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* This is for you if you are */}
      <section className="px-4 py-8 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">This Is For You If You Are</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {targetAudience.map((item, index) => (
            <div key={index} className="relative">
              <Card 
                className="border-2 bg-gray-900 transition-all duration-300 cursor-pointer transform hover:scale-105 h-full group"
                style={{
                  borderColor: '#31afd4',
                  boxShadow: '0 0 25px rgba(49, 175, 212, 0.3), 0 0 50px rgba(49, 175, 212, 0.15)'
                }}
                onClick={() => setSelectedAudience(selectedAudience === item.title ? null : item.title)}
              >
                <CardContent className="p-6 text-center space-y-3 h-full flex flex-col justify-center">
                  <div 
                    className="w-12 h-12 bg-gray-700 rounded-xl mx-auto flex items-center justify-center transition-all duration-300 group-hover:bg-gray-600"
                    style={selectedAudience === item.title ? {
                      backgroundColor: '#1f2937',
                      borderWidth: '2px',
                      borderColor: '#31afd4',
                      boxShadow: '0 0 20px rgba(49, 175, 212, 0.3)'
                    } : undefined}
                  >
                    <item.icon className="w-6 h-6 text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-black text-white text-xl">{item.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Popup */}
              {selectedAudience === item.title && (
                <div className={`absolute z-20 w-72 max-w-[calc(100vw-2rem)] ${
                  index >= 2 ? 'bottom-full mb-2' : 'top-full mt-2'
                } ${
                  index % 2 === 0 ? 'left-0' : 'right-0'
                }`}>
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className={`absolute ${
                      index >= 2 ? '-bottom-2' : '-top-2'
                    } ${
                      index % 2 === 0 ? 'left-6' : 'right-6'
                    }`}>
                      <div className={`w-4 h-4 bg-gray-800 border-gray-600 ${
                        index >= 2 ? 'border-r border-b rotate-45' : 'border-l border-t rotate-45'
                      }`}></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ 
                          backgroundColor: '#31afd4',
                          boxShadow: '0 0 15px rgba(49, 175, 212, 0.4)'
                        }}
                      >
                        <Lightbulb className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed">{item.popup}</p>
                      <button 
                        onClick={() => setSelectedAudience(null)}
                        className="w-5 h-5 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      >
                        <span className="text-gray-300 text-xs">×</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Are You Still Stuck at */}
      <section className="px-4 py-8 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">Are You Still Stuck at</h2>
        </div>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {[
            "Building great AI Agents locally, but can't get them to production on AWS?",
            "Stuck in the 'Jupyter Notebook Graveyard' - your agents work in dev but not in deployment?", 
            "Confused by AWS documentation and can't figure out the right service combination?",
            "Uncertain whether to use custom deployment (LangChain) or managed services (Bedrock)?",
            "Missing production experience in your portfolio to showcase AI Agent deployment skills?"
          ].map((point, index) => (
            <StuckAtCheckbox 
              key={index} 
              point={point} 
              index={index} 
              onToggle={(idx, checked) => {
                const newCheckedItems = new Set(checkedItems);
                if (checked) {
                  newCheckedItems.add(idx);
                } else {
                  newCheckedItems.delete(idx);
                }
                setCheckedItems(newCheckedItems);
              }}
            />
          ))}
        </div>

        {/* Dynamic Response Text */}
        {checkedItems.size > 0 && (
          <div className="max-w-lg mx-auto pt-4 space-y-4">
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl blur-xl"></div>
              
              {/* Main response card */}
              <div className="relative text-center p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-600/50 backdrop-blur-sm">
                {/* Decorative elements */}
                <div className="absolute top-2 left-4 w-2 h-2 bg-gray-500 rounded-full opacity-30"></div>
                <div className="absolute top-4 right-6 w-1 h-1 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-20"></div>
                
                <div className="space-y-4">
                  <p className="text-white font-black text-2xl leading-relaxed">
                    {checkedItems.size === 1 && "We'll bridge that gap! Production deployment made simple 💪"}
                    {checkedItems.size === 2 && "You're not alone! Most developers face this. Let's fix it 💜"}
                    {checkedItems.size === 3 && "We'll show you the exact AWS services you need ✅"}
                    {checkedItems.size === 4 && "We'll teach BOTH paths so you can choose wisely 😉"}
                    {checkedItems.size === 5 && "Let's build that portfolio project together! 😊"}
                  </p>
                  
                  <div>
                  <a href="https://rzp.io/rzp/PeYihNh">
                    <Button 
                      size="lg" 
                      className="text-white font-black px-10 py-3 text-xl rounded-xl transition-all duration-300 transform hover:scale-105"
                      style={{
                        backgroundColor: '#31afd4',
                        boxShadow: '0 0 30px rgba(49, 175, 212, 0.5), 0 4px 20px rgba(49, 175, 212, 0.3)'
                      }}
                    >
                      Register Now @ INR 99/- ONLY
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Meet Your Coach */}
      <section className="px-4 py-12 bg-gray-900">
        <div className="max-w-lg mx-auto space-y-6">
          <h2 className="text-3xl font-black text-white text-center">Meet Your Coach</h2>
          
          <Card className="border-2 border-gray-700 bg-gray-800 overflow-hidden">
            <CardContent className="p-6 space-y-6">
              {/* Coach Image and Basic Info */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-20 h-20 rounded-full overflow-hidden border-2" 
                  style={{ 
                    borderColor: '#31afd4',
                    boxShadow: '0 0 20px rgba(49, 175, 212, 0.3)'
                  }}
                >
                  <img 
                    src={exampleImage}
                    alt="Coach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-2xl font-black text-white">Aishit Dharwal</h3>
                  <p className="font-black text-base" style={{ color: '#31afd4' }}>AI Educator | Head of AI</p>
                  <p className="text-sm text-gray-400">IIT Bombay | Patent Holder</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-3xl font-black" style={{ color: '#31afd4' }}>4000+</div>
                  <div className="text-sm text-gray-400">Mentees</div>
                </div>
                <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-3xl font-black" style={{ color: '#31afd4' }}>400+</div>
                  <div className="text-sm text-gray-400">Masterclasses</div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                <blockquote className="text-gray-300 text-base italic text-center">
                  "Deploying AI Agents to production isn't about perfect code - it's about understanding cloud infrastructure, choosing the right deployment pattern, and bridging the gap from prototype to production. I'll show you the exact AWS deployment strategies I use to ship production-ready AI systems."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Promise */}
      <section className="px-4 py-12" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-lg mx-auto space-y-8">
          {/* Promise Badge */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center space-y-4">
              {/* Decorative stars */}
              <div className="relative">
                <div className="absolute -top-2 -left-8" style={{ color: '#31afd4' }}>✦</div>
                <div className="absolute -top-3 -right-6" style={{ color: '#4fc3dc' }}>✧</div>
                <div className="absolute -bottom-2 -left-6" style={{ color: '#5cd4e8' }}>✦</div>
                <div className="absolute -bottom-3 -right-8" style={{ color: '#31afd4' }}>✧</div>
                
                {/* Shield Badge */}
                <div 
                  className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 border-2" 
                  style={{ borderColor: 'rgba(49, 175, 212, 0.3)' }}
                >
                  <div className="text-center space-y-4">
                    {/* Enhanced thumbs up with glow effect */}
                    <div className="relative">
                      <div 
                        className="absolute inset-0 rounded-full blur-xl scale-150" 
                        style={{ backgroundColor: 'rgba(49, 175, 212, 0.2)' }}
                      ></div>
                      <div className="relative text-5xl transform hover:scale-110 transition-transform duration-300">👍</div>
                    </div>
                    <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-black border-2 border-gray-300 shadow-lg">
                      OUR PROMISE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Sections */}
          <div className="space-y-8">
            {/* Lifetime Access */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-black text-gray-300">Lifetime Access</h3>
              <p className="text-gray-400 text-base">
                Get lifetime access to all resources. Access anytime, anywhere.
              </p>
            </div>

            {/* 100% Refund Policy */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-black text-gray-300">100% Refund Policy</h3>
              <p className="text-gray-400 text-base">
                Cancel anytime within 14 days of purchase and get a full refund, no questions asked.
              </p>
            </div>

            {/* Free Upgrades */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-black text-gray-300">Free Template Updates</h3>
              <p className="text-gray-400 text-base">
                Get all updates and additions (if any) to this workshop free for 30 days.
              </p>
            </div>
          </div>

          {/* Q&A Banner */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2 text-gray-300">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-black">Live Group Q&A Session</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <a href="https://rzp.io/rzp/PeYihNh">
          <Button 
            size="lg" 
            className="w-full text-white font-black text-xl"
            style={{
              backgroundColor: '#31afd4',
              boxShadow: '0 0 30px rgba(49, 175, 212, 0.5), 0 4px 20px rgba(49, 175, 212, 0.3)'
            }}
          >
            Register Now @ INR 99/- ONLY
          </Button>
          </a>
        </div>
      </section>

      {/* Still Confused? */}
      <section className="px-4 py-12 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gray-700 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-500 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-lg mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-gray-800 rounded-2xl mx-auto flex items-center justify-center border border-gray-700">
              <Brain className="w-10 h-10" style={{ color: '#31afd4' }} />
            </div>
            <h2 className="text-3xl font-black text-white">Still Confused?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Join 500+ developers and engineers who deployed their first production AI Agents. This is your fastest path from local prototype to live AWS deployment.
            </p>
          </div>
          
          <div className="pt-4">
          <a href="https://rzp.io/rzp/PeYihNh">
            <Button 
              size="lg" 
              className="text-white font-black px-8 py-4 text-xl transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#31afd4',
                boxShadow: '0 0 30px rgba(49, 175, 212, 0.5), 0 4px 20px rgba(49, 175, 212, 0.3)'
              }}
            >
              Register Now @ INR 99/- ONLY
            </Button>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-gray-400 text-base">
            <div className="flex items-center gap-1">
              <Users className="w-5 h-5" />
              <span>500+ enrolled</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5" />
              <span>2 hours only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="px-4 py-8" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-lg mx-auto">
          <div className="text-center space-y-6">
            <p className="text-white font-black text-lg">⏰ Workshop Starts In:</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-black text-white animate-blink">{timeLeft.days}</div>
                <div className="text-sm text-gray-400">DAYS</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-black text-white animate-blink">{timeLeft.hours}</div>
                <div className="text-sm text-gray-400">HOURS</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-black text-white animate-blink">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-400">MINS</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-black text-white animate-blink">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-400">SECS</div>
              </div>
            </div>
            
            {/* CTA under countdown */}
            <div className="pt-4">
            <a href="https://rzp.io/rzp/PeYihNh">
              <Button 
                size="lg" 
                className="w-full text-white font-black text-xl py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: '#31afd4',
                  boxShadow: '0 0 30px rgba(49, 175, 212, 0.5), 0 4px 20px rgba(49, 175, 212, 0.3)'
                }}
              >
                Register Now @ INR 99/- ONLY
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What you will be able to do after this */}
      <section className="px-4 py-8 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">What You'll Be Able to Do After This</h2>
        </div>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {outcomes.map((outcome, index) => (
            <Card 
              key={index} 
              className="border-2 bg-gray-900 hover:border-gray-600 transition-all duration-300"
              style={{
                borderColor: 'rgba(49, 175, 212, 0.4)',
                boxShadow: '0 0 15px rgba(49, 175, 212, 0.1)'
              }}
            >
              <CardContent className="p-4 flex items-start gap-3">
                <Badge 
                  className="font-black text-xs flex-shrink-0 border"
                  style={{
                    backgroundColor: '#1f2937',
                    color: '#31afd4',
                    borderColor: '#374151'
                  }}
                >
                  #{index + 1}
                </Badge>
                <p className="text-gray-300 text-base">{outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-8" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <h2 className="text-3xl font-black text-white">
            Ready to Deploy Your First AI Agent?
          </h2>
          <p className="text-gray-300">
            Join us live on December 14th, 2025 at 6:00 PM IST
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>500+ registered</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>2 hours</span>
              </div>
              <div className="flex items-center gap-1">
                <Video className="w-4 h-4" />
                <span>Live Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-8 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-2 max-w-lg mx-auto">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-700 bg-gray-900 transition-all duration-300"
              style={{
                borderColor: openFaq === index ? 'rgba(49, 175, 212, 0.5)' : '#374151',
                boxShadow: openFaq === index ? '0 0 20px rgba(49, 175, 212, 0.1)' : undefined
              }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-3 text-left flex items-center justify-between hover:bg-gray-800 transition-colors rounded-lg"
                >
                  <span className="font-black text-white text-base">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-3 pb-3">
                    <p className="text-gray-300 text-base">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Urgency Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white border-t border-gray-700">
        <div className="px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-black max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 animate-pulse" style={{ color: '#31afd4' }} />
              <span>Hurry! only <span className="underline animate-pulse">{seatsLeft}</span> seats left</span>
            </div>
            <a href="https://rzp.io/rzp/PeYihNh">
            <Button 
              size="sm" 
              className="text-white font-black px-4 py-2 text-sm"
              style={{
                backgroundColor: '#31afd4',
                boxShadow: '0 0 20px rgba(49, 175, 212, 0.4)'
              }}
            >
              Register Now @ INR 99 ONLY
            </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-8 pb-20 border-t border-gray-800" style={{ backgroundColor: '#050505', marginBottom: '45px' }}>
        <div className="max-w-lg mx-auto space-y-4">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Aishit Dharwal. All rights reserved
            </p>
          </div>
          
          {/* Links - Simple style like in image */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/refund-policy" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Refund Policy
            </Link>
            <Link 
              to="/terms-and-conditions" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}