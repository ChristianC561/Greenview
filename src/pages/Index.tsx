import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Building2, Users, CheckCircle, Award, TrendingUp, Briefcase, Target, Clock, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced with stronger value proposition */}
      <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Professional background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting <span className="text-[#9b87f5]">Elite Talent</span> With Industry-Leading Organizations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl leading-relaxed">
              I'm Christian Chiacchio, a specialized Technical Recruitment Professional with a proven track record of placing top-tier developers and IT professionals in roles where they thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold px-8" onClick={() => window.open("https://www.linkedin.com/in/christian-michael1/", "_blank")}>
                View My Experience
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore My Expertise
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - New section with impressive metrics */}
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1A1F2C]">500+</p>
              <p className="text-gray-600 mt-2">Successful Placements</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1A1F2C]">95%</p>
              <p className="text-gray-600 mt-2">Retention Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1A1F2C]">48hrs</p>
              <p className="text-gray-600 mt-2">Average Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1A1F2C]">12+</p>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Enhanced with better copy */}
      <div id="expertise" className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-600">
            My specialized approach combines deep industry knowledge with a vast network of connections, allowing me to match exceptional talent with the perfect opportunity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Shield className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Technical Recruitment Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized in identifying and recruiting elite software developers, data analysts, and IT professionals across multiple technologies and domains. My technical background enables me to evaluate candidates beyond their resumes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Building2 className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Government Sector Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Extensive experience with government contractors and managing high-stakes client relationships in healthcare and technology sectors. I navigate complex requirements and security clearances with ease.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Healthcare Talent Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Proven track record in placing medical directors, nursing practitioners, and specialized healthcare professionals. I understand the unique challenges of healthcare staffing and compliance requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Process Section - New section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">
              My Recruitment Process
            </h2>
            <p className="text-xl text-gray-600">
              A strategic, thorough approach that consistently delivers exceptional results for both clients and candidates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-[#f0edfc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-xl mb-3">1. Needs Analysis</h3>
              <p className="text-gray-600">Deep understanding of your organization's culture, requirements, and long-term goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-[#f0edfc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-xl mb-3">2. Strategic Sourcing</h3>
              <p className="text-gray-600">Leveraging my extensive network and advanced tools to identify ideal candidates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-[#f0edfc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-xl mb-3">3. Rigorous Vetting</h3>
              <p className="text-gray-600">Comprehensive assessment of technical skills, experience, and cultural fit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-[#f0edfc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-xl mb-3">4. Ongoing Support</h3>
              <p className="text-gray-600">Continued engagement to ensure successful onboarding and long-term retention.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Enhanced with better layout */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1F2C]">
                Technical Expertise That <span className="text-[#9b87f5]">Sets Me Apart</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                My background in technology gives me a unique advantage in understanding the specific needs of both employers and candidates in the tech industry.
              </p>
              <div className="grid gap-6">
                {[
                  "Java, C, C++, Ruby, Python Development Recruitment",
                  "SAP ABAP and Enterprise Systems Talent Acquisition",
                  "UI/UX Designers and Frontend Development Specialists",
                  "Healthcare Technology Solutions Experts",
                  "Project Management and Agile Methodology Professionals",
                  "Business Development and Strategic Leadership Roles"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-[#9b87f5] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/70 to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-white text-xl font-medium">"Christian's technical understanding made all the difference in our hiring process."</p>
                  <p className="text-white/80 mt-2">— CTO, Healthcare Technology Firm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - New section */}
      <div className="bg-[#1A1F2C] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Partner With Me
            </h2>
            <p className="text-xl text-gray-300">
              I deliver more than just candidates—I provide comprehensive talent solutions that drive your business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A2F3C] p-8 rounded-lg">
              <Clock className="h-10 w-10 mb-4 text-[#9b87f5]" />
              <h3 className="text-xl font-bold mb-3">Time Efficiency</h3>
              <p className="text-gray-300">
                Reduce your time-to-hire by up to 40% with my streamlined recruitment process and pre-vetted candidate pool.
              </p>
            </div>
            <div className="bg-[#2A2F3C] p-8 rounded-lg">
              <Target className="h-10 w-10 mb-4 text-[#9b87f5]" />
              <h3 className="text-xl font-bold mb-3">Quality Matches</h3>
              <p className="text-gray-300">
                Access candidates who not only meet technical requirements but also align with your company culture and vision.
              </p>
            </div>
            <div className="bg-[#2A2F3C] p-8 rounded-lg">
              <Zap className="h-10 w-10 mb-4 text-[#9b87f5]" />
              <h3 className="text-xl font-bold mb-3">Industry Insights</h3>
              <p className="text-gray-300">
                Benefit from my deep understanding of market trends, salary benchmarks, and emerging skill sets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced with stronger call to action */}
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1F2C]">
            Ready to Transform Your Talent Acquisition?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Whether you're looking to fill critical technical positions or seeking strategic guidance on building high-performing teams, I'm here to help you navigate the complex landscape of technical recruitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold px-8 py-6 text-lg" onClick={() => window.open("https://www.linkedin.com/in/christian-michael1/", "_blank")}>
              Connect With Me Today
            </Button>
          </div>
          <p className="text-gray-500 mt-6">
            Typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
