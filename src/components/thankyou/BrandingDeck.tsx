import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const competitors = [
  {
    name: "Airtribe",
    primary: "#5B3FFF",
    secondary: "#A68AFF", 
    background: "#FFFFFF",
    typography: "Clean & modern—likely sans-serif (e.g., Poppins, Montserrat)"
  },
  {
    name: "100xEngineers", 
    primary: "#1E3A8A",
    secondary: "#3B82F6",
    background: "#FFFFFF",
    typography: "Technical & bold—strong sans-serif (e.g., Inter, Roboto)"
  },
  {
    name: "Growth School",
    primary: "#14B8A6", 
    secondary: "#0F766E",
    background: "#F1F5F9",
    typography: "Friendly sans-serif (e.g., Poppins, Lato)"
  },
  {
    name: "Maven",
    primary: "#1E40AF",
    secondary: "#3B82F6", 
    background: "#FFFFFF",
    typography: "Professional serif/sans mix (e.g., Merriweather + Open Sans)"
  },
  {
    name: "Product Institute",
    primary: "#1F2937",
    secondary: "#10B981",
    background: "#FFFFFF", 
    typography: "Elegant serif headings + sans body (e.g., Playfair Display + Source Sans)"
  }
];

const ourBrand = {
  name: "AI Product Manager Course",
  primary: "#FF4500", // Bold Orange
  secondary: "#000000", // Pure Black  
  tertiary: "#FFFFFF", // Pure White
  accent: "#F5F5F5", // Light Gray
  typography: "Bold & Minimal—Strong sans-serif (e.g., Roboto Black + Roboto Regular)"
};

const secondaryColors = [
  { name: "Gray 600", hex: "#4B5563", usage: "Secondary text, icons" },
  { name: "Gray 500", hex: "#6B7280", usage: "Muted text, placeholders" },
  { name: "Gray 400", hex: "#9CA3AF", usage: "Disabled states, subtle text" },
  { name: "Gray 300", hex: "#D1D5DB", usage: "Borders, dividers" },
  { name: "Gray 200", hex: "#E5E7EB", usage: "Light borders, backgrounds" },
  { name: "Gray 100", hex: "#F3F4F6", usage: "Subtle backgrounds" },
  { name: "Gray 50", hex: "#F9FAFB", usage: "Section backgrounds" }
];

const iconKit = [
  { name: "AI Brain", description: "Neural network representation" },
  { name: "Product Rocket", description: "Growth and innovation" },
  { name: "Data Charts", description: "Analytics and insights" },
  { name: "User Journey", description: "Customer experience mapping" },
  { name: "Strategy Compass", description: "Direction and planning" },
  { name: "Innovation Lightbulb", description: "Creative solutions" }
];

export default function BrandingDeck() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-12" style={{ fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-black">AI Product Manager Course</h1>
        <h2 className="text-xl text-gray-600">Brand Identity & Competitor Analysis</h2>
      </div>

      {/* Competitor Analysis */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-black mb-4">Competitor Analysis</h2>
          <p className="text-gray-600">Visual analysis of competitor color palettes and typography</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitors.map((competitor, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-gray-300 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-black text-black">{competitor.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded border border-gray-300"
                      style={{ backgroundColor: competitor.primary }}
                    />
                    <span className="text-sm font-medium">Primary: {competitor.primary}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded border border-gray-300"
                      style={{ backgroundColor: competitor.secondary }}
                    />
                    <span className="text-sm font-medium">Secondary: {competitor.secondary}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded border border-gray-300"
                      style={{ backgroundColor: competitor.background }}
                    />
                    <span className="text-sm font-medium">Background: {competitor.background}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-600">{competitor.typography}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Brand Colors */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-black mb-4">Our Brand Colors</h2>
          <p className="text-gray-600">Bold, clean, and premium color palette that stands out from competitors</p>
        </div>

        <Card className="border-4 border-black bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-black text-black text-center">{ourBrand.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div 
                  className="w-20 h-20 mx-auto rounded-lg border-2 border-gray-300"
                  style={{ backgroundColor: ourBrand.primary }}
                />
                <div>
                  <p className="font-black text-black">Primary</p>
                  <p className="text-sm text-gray-600">{ourBrand.primary}</p>
                  <Badge className="mt-1 bg-orange-500 text-white">Bold Orange</Badge>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div 
                  className="w-20 h-20 mx-auto rounded-lg border-2 border-gray-300"
                  style={{ backgroundColor: ourBrand.secondary }}
                />
                <div>
                  <p className="font-black text-black">Secondary</p>
                  <p className="text-sm text-gray-600">{ourBrand.secondary}</p>
                  <Badge className="mt-1 bg-black text-white">Pure Black</Badge>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div 
                  className="w-20 h-20 mx-auto rounded-lg border-2 border-gray-300"
                  style={{ backgroundColor: ourBrand.tertiary }}
                />
                <div>
                  <p className="font-black text-black">Tertiary</p>
                  <p className="text-sm text-gray-600">{ourBrand.tertiary}</p>
                  <Badge className="mt-1 bg-gray-100 text-black">Pure White</Badge>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div 
                  className="w-20 h-20 mx-auto rounded-lg border-2 border-gray-300"
                  style={{ backgroundColor: ourBrand.accent }}
                />
                <div>
                  <p className="font-black text-black">Accent</p>
                  <p className="text-sm text-gray-600">{ourBrand.accent}</p>
                  <Badge className="mt-1 bg-gray-200 text-black">Light Gray</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Secondary Colors */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-black mb-4">Secondary Colors</h2>
          <p className="text-gray-600">Supporting gray palette for text hierarchy and backgrounds</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {secondaryColors.map((color, index) => (
            <Card key={index} className="border-2 border-gray-200">
              <CardContent className="p-4 space-y-3">
                <div 
                  className="w-full h-16 rounded-lg border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="space-y-1">
                  <p className="font-black text-black text-sm">{color.name}</p>
                  <p className="text-xs text-gray-600">{color.hex}</p>
                  <p className="text-xs text-gray-500">{color.usage}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-black mb-4">Typography</h2>
          <p className="text-gray-600">Bold, minimal, and highly legible typography system</p>
        </div>

        <Card className="border-2 border-gray-200">
          <CardContent className="p-8 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-black">Heading 1 - Ultra Bold</h1>
              <h2 className="text-3xl font-black text-black">Heading 2 - Ultra Bold</h2>
              <h3 className="text-2xl font-black text-black">Heading 3 - Ultra Bold</h3>
              <p className="text-lg text-gray-700">Body Text - Regular weight for optimal readability and clean appearance</p>
              <p className="text-sm text-gray-600">Caption Text - Smaller supporting text for details and metadata</p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-medium">Font Stack: Roboto (Black, Regular) - Modern, clean, highly legible</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Icon Kit */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-black mb-4">Icon Kit</h2>
          <p className="text-gray-600">Essential icons representing our AI Product Management focus</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {iconKit.map((icon, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div>
                  <p className="font-black text-black">{icon.name}</p>
                  <p className="text-sm text-gray-600">{icon.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Illustrations */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-black mb-4">Illustration Style</h2>
          <p className="text-gray-600">Clean, geometric, and bold illustrations with our signature orange accent</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-lg"></div>
              </div>
              <p className="font-black text-black text-center">AI & Data</p>
              <p className="text-sm text-gray-600 text-center">Neural networks, algorithms, data flows</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <div className="aspect-square bg-gradient-to-br from-black to-gray-800 rounded-2xl mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg"></div>
              </div>
              <p className="font-black text-black text-center">Product Strategy</p>
              <p className="text-sm text-gray-600 text-center">Roadmaps, planning, user journeys</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-black rounded-lg"></div>
              </div>
              <p className="font-black text-black text-center">Growth & Scale</p>
              <p className="text-sm text-gray-600 text-center">Metrics, optimization, expansion</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}