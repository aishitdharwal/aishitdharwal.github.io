import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Star, Users, Clock, Award, TrendingUp, Play, BookOpen, Target, Brain, Shield, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "AI-Powered Product Strategy",
  "Machine Learning for PMs",
  "Data-Driven Decision Making", 
  "User Research with AI Tools",
  "Predictive Analytics",
  "AI Ethics in Product Development"
];

const curriculum = [
  {
    week: "Week 1-2",
    title: "AI Fundamentals for Product Managers",
    description: "Understanding AI/ML capabilities, limitations, and applications in product development"
  },
  {
    week: "Week 3-4", 
    title: "Data Strategy & Analytics",
    description: "Leveraging data for product decisions, setting up measurement frameworks"
  },
  {
    week: "Week 5-6",
    title: "AI Product Development Lifecycle", 
    description: "Building AI-powered features from ideation to deployment"
  },
  {
    week: "Week 7-8",
    title: "Ethics, Bias, and Responsible AI",
    description: "Ensuring fairness, transparency, and accountability in AI products"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior PM at Google",
    quote: "This course completely transformed how I approach AI product development. The practical frameworks are invaluable."
  },
  {
    name: "Marcus Rodriguez", 
    role: "VP Product at Stripe",
    quote: "The most comprehensive AI PM course I've taken. Perfect balance of technical depth and strategic thinking."
  },
  {
    name: "Dr. Priya Patel",
    role: "Chief Product Officer",
    quote: "Essential knowledge for any PM working in the AI era. The instructors are world-class."
  }
];

const stats = [
  { number: "500+", label: "Product Managers Trained" },
  { number: "95%", label: "Job Advancement Rate" },  
  { number: "4.9/5", label: "Average Rating" },
  { number: "8 Weeks", label: "Program Duration" }
];

const courseModules = [
  {
    icon: Brain,
    title: "AI Fundamentals for Product Leaders",
    description: "Master the core concepts of AI/ML and understand how to evaluate technical feasibility and business impact of AI initiatives."
  },
  {
    icon: Target,
    title: "AI Product Strategy & Roadmapping",
    description: "Learn to build compelling AI product strategies, prioritize features, and create roadmaps that align with business objectives."
  },
  {
    icon: BookOpen,
    title: "Data-Driven Product Decisions",
    description: "Develop expertise in leveraging data analytics, setting up measurement frameworks, and making informed product decisions."
  },
  {
    icon: Shield,
    title: "AI Ethics & Responsible Development",
    description: "Navigate the complex landscape of AI ethics, bias mitigation, and responsible AI practices in product development."
  },
  {
    icon: Rocket,
    title: "Scaling AI Products",
    description: "Master the techniques for scaling AI products, managing technical debt, and building sustainable AI-powered platforms."
  }
];

const whyJoinReasons = [
  "Industry-Leading Curriculum designed by AI product experts from Google, OpenAI, and Meta",
  "Hands-On Projects with real AI tools and frameworks used by top tech companies",
  "Expert Mentorship from seasoned AI product leaders who've scaled products to millions of users", 
  "Career Acceleration with 95% of graduates receiving promotions or new opportunities within 6 months",
  "Exclusive Network access to our community of 500+ AI product professionals and ongoing support"
];

const guestMentors = [
  {
    name: "Dr. Sarah Chen",
    role: "VP of AI Products at Google",
    company: "Google",
    expertise: "AI Strategy & Ethics",
    image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2h8ZW58MXx8fHwxNzU2NDM0MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of ML Products",
    company: "OpenAI", 
    expertise: "LLM Product Development",
    image: "https://images.unsplash.com/photo-1635768229592-8c2532d33cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNofGVufDF8fHx8MTc1NjQ3NjMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Dr. Priya Patel",
    role: "Chief Product Officer",
    company: "Anthropic",
    expertise: "Responsible AI",
    image: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGFpfGVufDF8fHx8MTc1NjQ3NjMyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "James Wilson",
    role: "Senior Director, AI",
    company: "Meta",
    expertise: "AI at Scale",
    image: "https://images.unsplash.com/photo-1625502664816-4938b1d0d685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhaXxlbnwxfHx8fDE3NTY0NzYzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const videoTestimonials = [
  {
    name: "Alex Thompson",
    role: "Senior PM at Microsoft",
    quote: "The course completely transformed my understanding of AI product development. Within 3 months, I was promoted to lead our AI initiatives.",
    videoThumbnail: "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc1NjQ3NjMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "2:34"
  },
  {
    name: "Lisa Park", 
    role: "Product Lead at Spotify",
    quote: "The practical frameworks and real-world case studies made all the difference. I now confidently lead AI product discussions.",
    videoThumbnail: "https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwdGVzdGltb25pYWx8ZW58MXx8fHwxNzU2NDYyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "1:58"
  },
  {
    name: "David Kumar",
    role: "VP Product at Airbnb", 
    quote: "Best investment I've made in my career. The mentorship and network have been invaluable for my growth.",
    videoThumbnail: "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc1NjQ3NjMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:12"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded"></div>
            <span className="text-xl font-black text-black">AI PM Course</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-black hover:text-orange-500">
              Curriculum
            </Button>
            <Button variant="ghost" className="text-black hover:text-orange-500">
              Instructors
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-black">
              Apply Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-orange-100 text-orange-600 border-orange-200">
                  #1 AI Product Management Course
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-black text-black leading-tight">
                  Master AI Product Management
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Learn to build, ship, and scale AI-powered products from industry leaders. 
                  Join 500+ product managers who've transformed their careers with AI expertise.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-black">
                  View Curriculum
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <span className="font-black text-black">4.9/5</span>
                  <span className="text-gray-600">(250+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">500+ graduates</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 flex items-center justify-center">
                <div className="w-full h-full bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="w-24 h-24 bg-white/30 rounded-2xl mx-auto flex items-center justify-center">
                      <TrendingUp className="w-12 h-12" />
                    </div>
                    <p className="font-black text-2xl">AI-Powered Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-black text-orange-500">{stat.number}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-black">What You'll Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum designed by AI product leaders from top tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-orange-500 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-black">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-black">Course Modules</h2>
            <p className="text-xl text-gray-600">
              Five comprehensive modules covering everything from AI fundamentals to scaling products
            </p>
          </div>

          <div className="space-y-6">
            {courseModules.map((module, index) => (
              <Card key={index} className="border-2 border-white bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-black text-white font-black">
                        Module {index + 1}
                      </Badge>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <h3 className="text-xl font-black text-black">{module.title}</h3>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white font-black">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Should Join Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-black">Why You Should Join</h2>
                <p className="text-xl text-gray-600">
                  Join the leading AI Product Management program and accelerate your career
                </p>
              </div>
              
              <div className="space-y-6">
                {whyJoinReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8">
                Apply Now
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-black bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-orange-500 rounded-2xl mx-auto flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black">Career Transformation</h3>
                  <p className="text-gray-600">95% of our graduates receive promotions or new opportunities within 6 months</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-black rounded-2xl mx-auto flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black">Elite Network</h3>
                  <p className="text-gray-600">Connect with 500+ AI product professionals and industry leaders</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-black">8-Week Curriculum</h2>
            <p className="text-xl text-gray-600">
              Structured learning path from AI fundamentals to advanced product strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((module, index) => (
              <Card key={index} className="border-2 border-white bg-white">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-orange-500 text-white font-black">
                      {module.week}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-black text-black">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Mentors Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-black">Learn From Industry Leaders</h2>
            <p className="text-xl text-gray-600">
              Get mentored by AI product leaders from the world's top tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guestMentors.map((mentor, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-orange-500 transition-colors">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="aspect-square w-32 mx-auto">
                    <ImageWithFallback 
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-black">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.role}</p>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">
                      {mentor.company}
                    </Badge>
                    <p className="text-xs text-gray-500">{mentor.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 lg:py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-white">Success Stories</h2>
            <p className="text-xl text-gray-300">
              Watch how our graduates transformed their careers with AI expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-700 bg-gray-900 hover:border-orange-500 transition-colors">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-video relative">
                      <ImageWithFallback 
                        src={testimonial.videoThumbnail}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {testimonial.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <blockquote className="text-gray-300">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="space-y-1">
                      <p className="font-black text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Course Pricing Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-4 border-black bg-white">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-500 text-white font-black text-lg px-4 py-2">
                  Premium Course
                </Badge>
                <h2 className="text-4xl font-black text-black">AI Product Manager Mastery</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The most comprehensive 8-week program to master AI product development, 
                  led by industry experts from Google, OpenAI, and Meta. Transform your career 
                  with hands-on projects and exclusive mentorship.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-6xl font-black text-orange-500">$2,497</span>
                  <div className="text-left space-y-1">
                    <div className="text-lg font-black text-black">One-time payment</div>
                    <div className="text-sm text-gray-600">8-week intensive program</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Live sessions & recordings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>1-on-1 mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Lifetime community access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-12">
                  Apply Now - Start February 2025
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-black">
                  Schedule a Call
                </Button>
              </div>

              <div className="text-sm text-gray-500">
                Limited to 20 students per cohort • Next cohort starts February 15, 2025
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-black">What Our Graduates Say</h2>
            <p className="text-xl text-gray-600">
              Real results from product managers who've completed the program
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <p className="font-black text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Ready to Lead AI Product Development?
            </h2>
            <p className="text-xl text-gray-300">
              Join the next cohort starting February 2025. Limited spots available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-12">
              Apply Now - $2,497
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-black">
              Schedule a Call
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>8 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Certificate included</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Small cohorts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <span className="text-xl font-black text-black">AI PM Course</span>
            </div>
            <p className="text-gray-600">
              © 2025 AI Product Manager Course. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}