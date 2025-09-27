import { Button } from "./ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ThankYouPage() {
  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/G0mcJWewWMSHEYSi553HuL', '_blank');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="px-6 py-8 text-center sm:px-8 md:px-12">
        <div className="max-w-sm mx-auto space-y-6 md:max-w-md lg:max-w-lg md:space-y-8">
          {/* Success Icon with 3D Animation */}
          <div className="relative -mt-4 mb-12 md:mb-16">
            {/* Animated Glow Background */}
            <motion.div 
              className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1.8, 2.2, 1.8],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main 3D Circle */}
            <motion.div 
              className="relative w-28 h-28 mx-auto md:w-32 md:h-32 lg:w-36 lg:h-36"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 200,
                delay: 0.2
              }}
            >
              {/* 3D Shadow Layer */}
              <div className="absolute inset-0 bg-orange-600 rounded-full translate-y-1 blur-sm"></div>
              
              {/* Main Circle with 3D effect */}
              <motion.div 
                className="relative w-full h-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-orange-300/50 shadow-2xl shadow-orange-500/50"
                animate={{
                  y: [-2, 2, -2],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: "linear-gradient(135deg, #fb923c 0%, #f97316 45%, #ea580c 100%)",
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.2), inset 0 -2px 8px rgba(0, 0, 0, 0.2)"
                }}
              >
                {/* Animated Check Icon */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    type: "spring",
                    damping: 12,
                    stiffness: 200
                  }}
                >
                  <CheckCircle className="w-14 h-14 text-white drop-shadow-lg md:w-16 md:h-16 lg:w-18 lg:h-18" />
                </motion.div>
              </motion.div>
              
              {/* Subtle Ring Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-orange-300/30 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
          
          {/* Main Headline */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl font-black text-white leading-tight md:text-4xl lg:text-5xl">
              Congrats! You're in.
            </h1>
            <h2 className="text-xl font-black text-orange-500 md:text-2xl lg:text-3xl">
              Join the WhatsApp Group for all updates
            </h2>
          </div>
          
          {/* Supporting Text */}
          <p className="text-gray-300 text-lg leading-relaxed px-2 md:text-xl md:px-4 lg:text-2xl lg:leading-relaxed">
            You're all set for the webinar! Join the WhatsApp group to get reminders, updates, and webinar link. See you there!
          </p>

          {/* WhatsApp CTA Button */}
          <div className="pt-4 px-2 md:pt-6">
            <Button 
              onClick={handleJoinWhatsApp}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto md:text-xl md:py-5 md:px-10 lg:text-2xl lg:py-6 lg:px-12"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              Join WhatsApp Group
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}