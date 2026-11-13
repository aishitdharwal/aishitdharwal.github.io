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
  "Identify risky code and hidden failure points before they reach production.",
  "Prioritize what to verify so you're not wasting time on low-risk changes.",
  "Apply a repeatable verification framework to AI-generated code.",
  "Explain and defend your technical decisions with evidence, not guesswork."
];

const targetAudience = [
  {
    title: "Software Engineers",
    icon: Code,
    description: "Using AI to write code? Learn how to check what it gets right.",
    popup: "You're using AI to write features, fix bugs, or move faster. But how do you know the code actually works? Learn a practical way to verify it without checking every line manually."
  },
  {
    title: "AI Engineers", 
    icon: Brain,
    description: "Building AI systems? Know what to trust in generated code.",
    popup: "Building AI systems often means working with code generated by AI, too. Learn how to question that code, check its behavior, and catch problems that aren't obvious at first glance."
  },
  {
    title: "Data Scientists",
    icon: Target,
    description: "Generating code for analysis? Know how to verify the results.",
    popup: "AI can generate Python scripts, analysis code, and more in seconds. But code that runs isn't necessarily code that's right. Learn how to verify the logic instead of trusting the output."
  },
  {
    title: "ML Engineers",
    icon: Lightbulb,
    description: "Using AI across ML workflows? Catch problems before they spread.",
    popup: "Using AI to speed up your pipelines, integrations, or model-serving code? Learn how to check what it generates, spot potential failures, and make decisions you can explain."
  }
];

const outcomes = [
  "Spot potential bugs, security risks, and hidden assumptions in AI-generated code.",
  "Identify which parts of AI-generated code deserve closer inspection, so you're not reviewing everything.", 
  "Apply a repeatable verification process instead of relying on guesswork.",
  "Ask better questions and design checks that reveal whether code behaves as intended.",
  "Explain why you trust a piece of code, or why it isn't ready to ship."
];

const faqs = [
  {
    question: "Do I need prior experience with AI coding tools?",
    answer: "No specific tool experience is required. We'll demonstrate the verification process using Claude, but the approach is designed to work with AI-generated code from any tool. Basic programming knowledge will help you follow the examples.",
    isOpen: false
  },
  {
    question: "What will I learn about verifying AI-generated code?", 
    answer: "You'll learn how to spot potential risks, decide what needs closer inspection, and use a repeatable approach to verify AI-generated code. Aishit will demonstrate the process live so you can see how the reasoning works in practice.",
    isOpen: false
  },
  {
    question: "Is this a hands-on workshop, or will I watch a live demonstration?",
    answer: "This is an instructor-led workshop with a live code verification demonstration. You'll watch Aishit apply the approach, explain his decisions, and take questions. You won't need to code along.",
    isOpen: false
  },
  {
    question: "Will I get a recording or access to the community afterward?",
    answer: "Workshop registration includes access to our builder community. Recording access and its duration, if offered, will be communicated separately. We don't promise lifetime access to workshop materials.",
    isOpen: false
  }
];

const painPoints = [
  "The code runs. But is it actually right?",
  "I can't review every line AI writes.",
  "What if I've missed something important?",
  "I'm spending too much time checking AI's work.",
  "How do I know when it's safe to ship?"
];

const painPointReplies = [
  "Exactly. Running code isn't necessarily correct code. Let's look at how to tell the difference.",
  "You shouldn't have to. The trick is knowing what deserves your attention first.",
  "That's a fair concern. Let's learn how to catch the things that aren't immediately obvious.",
  "That's defeating the purpose, isn't it? Let's make verification a smarter part of your workflow.",
  "Good question. You need evidence, not just an AI telling you everything looks fine."
];

export default function WebinarLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [seatsLeft, setSeatsLeft] = useState(15);
  const [checkedItems, setCheckedItems] = useState(new Set<number>());
  const [lastChecked, setLastChecked] = useState<number | null>(null);
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
    const targetDate = new Date("2026-11-22T11:00:00+05:30").getTime();
    let timer: ReturnType<typeof setInterval> | undefined;

    const updateCountdown = () => {
      // const now = new Date();
      // const seconds = now.getSeconds();
      
      // setTimeLeft({
      //   days: 8,
      //   hours: 16,
      //   minutes: 34,
      //   seconds: 59 - seconds
      // });
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        // 2. Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // 3. Stop the timer if the date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (timer) clearInterval(timer);
      }
    };

    updateCountdown();
    timer = setInterval(updateCountdown, 1000);

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
            <Badge className="bg-gray-800 text-gray-300 font-black px-4 py-2 text-base rounded-full border border-gray-600 whitespace-normal text-center leading-snug">
              THE NEXT WAVE OF ENGINEERS WON'T JUST WRITE CODE
            </Badge>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            The Next Big Skill Isn't Writing More Code. {' '}
            <span style={{ color: '#31afd4' }}>It's Knowing What's Right.</span>
          </h1>
          
          {/* Supporting Text */}
          <p className="text-white/80 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          AI can generate code in seconds. But can you tell what works, what breaks, and what to trust? Watch Aishit verify AI-generated code live using Claude, and learn a practical approach you can apply beyond any single tool.
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
                <div className="space-y-3 text-gray-300 text-base">
                  <p>Hi, I'm Aishit. AI builder, advisor, and educator who's taught 5,000+ learners.</p>
                  <p>AI tools will keep changing. Your ability to reason shouldn't depend on them.</p>
                  <p>I'll show you how to question AI-generated code, understand what can go wrong, and build the confidence to make technical decisions on your own.</p>
                </div>
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
              <p className="text-white font-black text-lg">22nd Nov 2026</p>
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
              <p className="text-white font-black text-lg">11AM IST</p>
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
              Register for ₹199
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="px-4 py-8 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-white">What You'll Walk Away With</h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Learn a practical approach to verifying AI-generated code, without reviewing everything line by line.
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
          <h2 className="text-3xl font-black text-white">This Is for You If You Are</h2>
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
          <h2 className="text-3xl font-black text-white">Ever Caught Yourself Thinking...</h2>
        </div>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {painPoints.map((point, index) => (
            <StuckAtCheckbox 
              key={index} 
              point={point} 
              index={index} 
              onToggle={(idx, checked) => {
                const newCheckedItems = new Set(checkedItems);
                if (checked) {
                  newCheckedItems.add(idx);
                  setLastChecked(idx);
                } else {
                  newCheckedItems.delete(idx);
                  if (lastChecked === idx) {
                    const remaining = Array.from(newCheckedItems);
                    setLastChecked(remaining.length ? remaining[remaining.length - 1] : null);
                  }
                }
                setCheckedItems(newCheckedItems);
              }}
            />
          ))}
        </div>

        {/* Dynamic Response Text */}
        {lastChecked !== null && (
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
                    {painPointReplies[lastChecked]}
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
                      Register for ₹199
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
                  <p className="font-black text-base" style={{ color: '#31afd4' }}>AI Builder | Advisor | Educator</p>
                  <p className="text-sm text-gray-400">IIT Bombay Alum | Patent Holder</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-3xl font-black" style={{ color: '#31afd4' }}>5,000+</div>
                  <div className="text-sm text-gray-400">Learners Taught</div>
                </div>
                <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-3xl font-black" style={{ color: '#31afd4' }}>400+</div>
                  <div className="text-sm text-gray-400">Masterclasses</div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                <blockquote className="text-gray-300 text-base italic text-center">
                  "I've seen engineers spend more time checking AI-generated code than they saved writing it. The answer isn't to review everything. It's to know what to question, what to test, and how to make that decision with confidence."
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
              <h3 className="text-2xl font-black text-gray-300">Builder Community Access</h3>
              <p className="text-gray-400 text-base">
                Connect with engineers and serious AI builders who are learning, experimenting, and solving real problems.
              </p>
            </div>

            {/* 100% Refund Policy */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-black text-gray-300">100% Refund Policy</h3>
              <p className="text-gray-400 text-base">
                Changed your mind? Request a full refund within 48 hours of purchase. No questions asked.
              </p>
            </div>

            {/* Free Upgrades */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-black text-gray-300">Live Q&A with Aishit</h3>
              <p className="text-gray-400 text-base">
                Bring your questions. Get answers, challenge assumptions, and understand the reasoning behind the approach.
              </p>
            </div>
          </div>

          {/* Q&A Banner */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2 text-gray-300">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-black">Ready to Verify AI Code with Confidence?</span>
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
            Register for ₹199
          </Button>
          </a>
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
                Register for ₹199
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What you will be able to do after this */}
      <section className="px-4 py-8 space-y-6" style={{ backgroundColor: '#050505' }}>
        <div className="text-center">
          <h2 className="text-3xl font-black text-white">What Can You Learn in Just 2 Hours?</h2>
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
            Ready to Stop Guessing and Start Verifying?
          </h2>
          <p className="text-gray-300">
            Join Aishit live on November 22nd, 2026 at 11:00 AM IST.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Live Workshop</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>2 Hours</span>
              </div>
              <div className="flex items-center gap-1">
                <Video className="w-4 h-4" />
                <span>Live Code Verification Demo</span>
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
              Register for ₹199
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