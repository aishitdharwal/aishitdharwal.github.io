import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Clock, Calendar, Video, Users, ChevronDown, ChevronUp, Play, Brain, Code, Lightbulb, Target, Sparkles, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import exampleImage from 'figma:asset/26dee7eb21295ca5104fed75bfdebf1d46f48b54.png';
import mentorImage from 'figma:asset/a1d1c0882738f6509218c42cb1a194ced0988eb0.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
    <div className="flex items-start gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800 transition-all duration-300 hover:border-gray-700 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 group">
      <button
        onClick={handleToggle}
        className={`w-8 h-8 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-500 ${
          isChecked && showTrophy
            ? 'bg-transparent border-transparent transform scale-110'
            : isChecked 
            ? 'bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/30' 
            : 'border-gray-600 hover:border-orange-400 group-hover:border-orange-500'
        }`}
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
    quote: "Built my first working MVP in 90 minutes! The step-by-step approach made complex concepts incredibly simple. Now I'm launching my startup.",
    name: "Sarah Chen",
    role: "Product Manager | 10 years experience",
    company: "McKinsey",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NjE2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "As a non-technical founder, this webinar was a game-changer. I finally understand how to validate and build products efficiently.",
    name: "Marcus Rodriguez", 
    role: "Senior Director | 8 years experience",
    company: "Google",
    image: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg2Mjc2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "The practical frameworks saved me months of trial and error. I went from idea to working prototype in one session.",
    name: "Dr. Priya Patel",
    role: "VP Product | 12 years experience",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1711182673833-7e11dffa0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc1ODYyNzY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "This workshop taught me everything I needed to know about product validation. I launched my SaaS tool the next week!",
    name: "Alex Thompson",
    role: "Startup Founder | 6 years experience",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTg2Mjc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "From confusion to clarity in 90 minutes. The no-code tools opened up a whole new world of possibilities for me.",
    name: "Lisa Park",
    role: "Business Analyst | 8 years experience", 
    company: "Accenture",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NjI3NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "I went from having an idea to having paying customers in just 3 weeks after attending this masterclass.",
    name: "David Kumar",
    role: "Product Owner | 9 years experience",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTg2Mjc2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "The live demo was incredible! Watching an MVP come to life in real-time gave me so much confidence to start building.",
    name: "Emma Wilson",
    role: "Marketing Manager | 7 years experience",
    company: "HubSpot", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NjI3Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "Best investment I made this year. The templates and resources alone are worth 10x the price.",
    name: "James Foster",
    role: "Consultant | 11 years experience",
    company: "Deloitte",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTg2Mjc2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    quote: "I finally understand how to validate my ideas properly. This workshop saved me from building something nobody wanted.",
    name: "Sophia Martinez",
    role: "UX Designer | 5 years experience",
    company: "Adobe",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NjI3Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const learningPoints = [
  "Validate your idea with real customers using proven frameworks and tools",
  "Build a functional MVP using no-code/low-code tools in under 90 minutes", 
  "Set up analytics and feedback loops to measure product-market fit",
  "Launch and iterate based on user data to maximize early traction"
];

const targetAudience = [
  {
    title: "Product Manager",
    icon: Lightbulb,
    description: "Leading product development teams",
    popup: "This workshop is suitable for you because you'll master rapid prototyping techniques, learn validation frameworks, and develop skills to ship products faster."
  },
  {
    title: "AI Enthusiast", 
    icon: Brain,
    description: "Passionate about AI applications",
    popup: "This workshop is ideal for you because you'll discover how to integrate AI tools into product development and build AI-powered MVPs using no-code solutions."
  },
  {
    title: "Software Engineer",
    icon: Code,
    description: "Building technical solutions",
    popup: "This workshop is valuable for you because you'll understand the product side of development and learn to create MVPs efficiently using modern no-code tools."
  },
  {
    title: "Business Leader",
    icon: Target,
    description: "Ready to build and validate ideas",
    popup: "This workshop is perfect for you because you'll learn to validate ideas quickly, build MVPs without technical skills, and launch products that customers actually want."
  }
];

const promises = [
  "You'll leave with a working MVP that real users can interact with and test",
  "Learn battle-tested frameworks used by successful startups and Fortune 500 companies",
  "Get lifetime access to templates, tools, and resources worth over $500"
];

const outcomes = [
  "Launch your MVP live during the session with real user feedback",
  "Validate market demand using proven customer discovery techniques", 
  "Set up automated systems to collect user data and iterate quickly",
  "Create a sustainable product development workflow for future features",
  "Build confidence to pursue your entrepreneurial dreams with concrete skills"
];

const faqs = [
  {
    question: "Do I need technical skills to follow along?",
    answer: "No! This webinar is designed for both technical and non-technical learners. We use code as well as no-code tools and visual builders that anyone can master.",
    isOpen: false
  },
  {
    question: "What if I don't have a project idea yet?", 
    answer: "Perfect! We'll help you identify and validate ideas during the session. Come with curiosity and leave with clarity.",
    isOpen: false
  },
  {
    question: "Will we really build something in 90 minutes?",
    answer: "Yes! We'll have a working MVP by the end. We focus on speed and validation, not perfection. Launch fast, iterate faster.",
    isOpen: false
  },
  {
    question: "What tools do I need for the webinar?",
    answer: "Just a computer and internet connection. We'll provide access to all tools and templates during the live session.",
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
        days: 3,
        hours: 14,
        minutes: 32,
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
    <div className="min-h-screen bg-black" style={{ fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
      {/* Sticky Offer Header */}
      <div className="sticky top-0 z-50 bg-gray-900 text-white border-b border-gray-700">
        <div className="px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-black">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>OFFER ENDS IN {timeLeft.minutes}M {timeLeft.seconds}S</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="animate-pulse text-orange-500">•</span>
              <span className="animate-pulse">LIMITED SEATS ONLY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Ticker Banner */}
      <section className="bg-orange-500 overflow-hidden py-3">
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
      <section className="px-4 py-12 text-center space-y-6 bg-black">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-block">
            <Badge className="bg-gray-800 text-gray-300 font-black px-4 py-2 text-base rounded-full border border-gray-600">
              FOR Product, Dev and AI enthusiasts
            </Badge>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Learn How We Built An{' '}
            <span className="text-orange-500">MVP From Scratch</span>{' '}
            <span className="text-orange-500">(Live Demo)</span>{' '}
            In Just 90 Minutes Using{' '}
            <span className="text-orange-500">No-Code AI</span>{' '}
            - Without Any Technical Skills!
          </h1>
          
          {/* Supporting Text */}
          <p className="text-white/80 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Whether your goal is to validate ideas, launch products, or start a business — it's not just about building, it's about speed, validation, and the confidence you truly deserve — even if you're starting from zero. It's time to turn your passion into product!
          </p>
        </div>
      </section>

      {/* Coach Video Section */}
      <section className="px-4 py-4 bg-black">
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-gray-700 bg-gray-900 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9]">
                <img 
                  src={exampleImage}
                  alt="Coach Introduction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  🔴 LIVE Preview
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-black">
                  2:34
                </div>
              </div>
              <div className="p-3 bg-gray-900">
                <p className="text-white text-base font-black mb-1">👋 Meet Your Coach</p>
                <p className="text-gray-300 text-base">
                  "I'll show you exactly how I built 3 successful MVPs using no-code tools. Join me live!"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Webinar Details Cards */}
      <section className="px-4 py-4 space-y-6 bg-black">
        <div className="max-w-lg mx-auto space-y-4">
          {/* Info Cards Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Date Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Date</span>
              </div>
              <p className="text-white font-black text-lg">5th Oct</p>
            </div>
            
            {/* Time Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Time</span>
              </div>
              <p className="text-white font-black text-lg">11AM IST</p>
            </div>
            
            {/* Language Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Language</span>
              </div>
              <p className="text-white font-black text-lg">English</p>
            </div>
            
            {/* Duration Card */}
            <div className="bg-gray-800/60 rounded-2xl p-4 space-y-2 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">Duration</span>
              </div>
              <p className="text-white font-black text-lg">90 Mins</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-2">
            <Button 
              size="lg" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xl py-4 rounded-2xl border-0"
            >
              Register Now @ INR99/- ONLY
            </Button>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="px-4 py-8 space-y-6 bg-black">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-white">What You Will Learn</h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Master the complete MVP building process with hands-on experience and real-world applications.
          </p>
        </div>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {learningPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800 transition-all duration-300 hover:border-gray-700">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                        <p className="text-sm text-orange-400 font-black">{testimonial.role}</p>
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
      <section className="px-4 py-8 space-y-6 bg-black">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">This Is For You If You Are</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {targetAudience.map((item, index) => (
            <div key={index} className="relative">
              <Card 
                className={`border-2 ${selectedAudience === item.title ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 hover:border-gray-600 transition-all duration-300 cursor-pointer transform hover:scale-105 h-full group`}
                onClick={() => setSelectedAudience(selectedAudience === item.title ? null : item.title)}
              >
                <CardContent className="p-6 text-center space-y-3 h-full flex flex-col justify-center">
                  <div className={`w-12 h-12 bg-gray-700 rounded-xl mx-auto flex items-center justify-center transition-all duration-300 ${selectedAudience === item.title ? 'bg-gray-600 border-2 border-orange-500 shadow-lg shadow-orange-500/20' : 'group-hover:bg-gray-600'}`}>
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
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section className="px-4 py-8 space-y-6 bg-black">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">Are You Still Stuck at</h2>
        </div>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {[
            "Know AI but don't know the fundamentals",
            "Know theoretical but don't know how to build your own project", 
            "Overwhelmed by AI buzz and don't know where to start",
            "Are a techie but stuck at the same salary because you're not AI enabled",
            "Want to automate your tasks/find AI solutions for business but have no idea how"
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
                    {checkedItems.size === 1 && "It Happens! We'll get you up to speed 💪"}
                    {checkedItems.size === 2 && "You're not alone! MOST people face this. 💜"}
                    {checkedItems.size === 3 && "Buzzwords can get confusing. Let's learn it right ✅"}
                    {checkedItems.size === 4 && "Become AI enabled. Then, DEMAND your worth 😉"}
                    {checkedItems.size === 5 && "It's not magic! We'll teach you the steps 😊"}
                  </p>
                  
                  <div>
                    <Button 
                      size="lg" 
                      className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-3 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now @ INR99/- ONLY
                    </Button>
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
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500">
                  <img 
                    src={exampleImage}
                    alt="Coach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-2xl font-black text-white">Head of AI - Skooc</h3>
                  <p className="text-orange-400 font-black text-base">IITB Alumni</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-3xl font-black text-orange-500">4000+</div>
                  <div className="text-sm text-gray-400">Mentees</div>
                </div>
                <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-3xl font-black text-orange-500">400+</div>
                  <div className="text-sm text-gray-400">Masterclasses</div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                <blockquote className="text-gray-300 text-base italic text-center">
                  "Building successful products isn't about having the perfect idea - it's about rapid validation, smart iteration, and understanding your users deeply. I'll teach you the exact frameworks I've used to launch 12+ profitable ventures."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Promise */}
      <section className="px-4 py-12 bg-black">
        <div className="max-w-lg mx-auto space-y-8">
          {/* Promise Badge */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center space-y-4">
              {/* Decorative stars */}
              <div className="relative">
                <div className="absolute -top-2 -left-8 text-orange-500">✦</div>
                <div className="absolute -top-3 -right-6 text-orange-400">✧</div>
                <div className="absolute -bottom-2 -left-6 text-orange-300">✦</div>
                <div className="absolute -bottom-3 -right-8 text-orange-500">✧</div>
                
                {/* Shield Badge */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 border-2 border-orange-500/30">
                  <div className="text-center space-y-4">
                    {/* Enhanced thumbs up with glow effect */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl scale-150"></div>
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
                Get access forever on a one-time payment and watch anytime, anywhere as per your convenience.
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
              <h3 className="text-2xl font-black text-gray-300">Free Upgrades</h3>
              <p className="text-gray-400 text-base">
                Gain all future updates, additions and changes made to the course at no additional cost.
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
          
          <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xl">
            Register Now @ INR99/- ONLY
          </Button>
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
              <Brain className="w-10 h-10 text-orange-500" />
            </div>
            <h2 className="text-3xl font-black text-white">Still Confused?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Join 500+ entrepreneurs who transformed ideas into working products. This is your fastest path to building something real.
            </p>
          </div>
          
          <div className="pt-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 text-xl transition-all duration-300 transform hover:scale-105">
              Register Now @ INR99/- ONLY
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-gray-400 text-base">
            <div className="flex items-center gap-1">
              <Users className="w-5 h-5" />
              <span>4000+ learners</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5" />
              <span>90 mins only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="px-4 py-8 bg-black">
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
              <Button 
                size="lg" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xl py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Register Now @ INR99/- ONLY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What you will be able to do after this */}
      <section className="px-4 py-8 space-y-6 bg-black">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">What You'll Be Able to Do After This</h2>
        </div>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="border-2 border-gray-700 bg-gray-900 hover:border-gray-600 transition-all duration-300">
              <CardContent className="p-4 flex items-start gap-3">
                <Badge className="bg-gray-700 text-orange-500 font-black text-xs flex-shrink-0 border border-gray-600">
                  #{index + 1}
                </Badge>
                <p className="text-gray-300 text-base">{outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-8 bg-black">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <h2 className="text-3xl font-black text-white">
            Ready to Build Your MVP?
          </h2>
          <p className="text-gray-300">
            Join us live on October 5th, 2024 at 11:00 AM IST
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>4000+ learners</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>90 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <Video className="w-4 h-4" />
                <span>Live session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-8 space-y-6 bg-black">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-2 max-w-lg mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-2 border-gray-700 bg-gray-900 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
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
              <Clock className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Hurry! only <span className="underline animate-pulse">{seatsLeft}</span> seats left</span>
            </div>
            <Button size="sm" className="bg-orange-500 text-white hover:bg-orange-600 font-black px-4 py-2 text-sm">
              Register Now @ INR99 ONLY
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-6 mb-16 bg-black border-t border-gray-800">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI Classroom. Learn From First Principles
          </p>
        </div>
      </footer>
    </div>
  );
}