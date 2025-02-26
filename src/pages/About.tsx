import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle, Briefcase, Clock, Globe, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1F2C] text-white py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            alt="Innovation concept"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-[#9b87f5]">Christian Chiacchio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl leading-relaxed">
            A Visionary in Technical Recruitment with a Passion for Building High-Performance Teams
          </p>
        </div>
      </div>

      {/* Professional Journey Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1F2C]">My Professional Journey</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in technical recruitment, I've built a reputation for connecting exceptional talent with innovative organizations across healthcare, technology, and government sectors.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My career began in healthcare staffing, where I developed a deep understanding of the unique challenges in placing specialized medical professionals. This foundation evolved into a passion for technical recruitment, where I discovered my talent for identifying not just technical skills, but the human qualities that make candidates truly exceptional.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, I leverage my extensive network and industry expertise to help organizations build teams that drive innovation, growth, and competitive advantage in rapidly evolving markets.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#9b87f5]/20 rounded-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#9b87f5]/20 rounded-lg"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Professional portrait"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Philosophy & Approach */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">
              My Recruitment Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              I believe that exceptional recruitment is about more than matching skills to job descriptions—it's about understanding the human elements that create lasting professional relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-xl">People-First Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  I prioritize understanding both client culture and candidate aspirations to create matches that lead to long-term success and satisfaction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-xl">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  My deep understanding of technical roles allows me to evaluate candidates' capabilities accurately and match them to positions where they'll thrive.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-xl">Strategic Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  I work as an extension of your team, providing insights on market trends, compensation benchmarks, and talent acquisition strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1A1F2C]">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Committed to delivering exceptional results that exceed expectations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">Operating with honesty, transparency, and ethical standards in all interactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professionalism</h3>
              <p className="text-gray-600">Maintaining the highest standards of conduct and service delivery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsiveness</h3>
              <p className="text-gray-600">Providing timely communication and swift solutions to urgent hiring needs</p>
            </div>
          </div>
        </div>
        
        {/* Industry Experience */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1A1F2C]">Industry Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#9b87f5]/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold">Technology</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Software Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Data Science & Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Cloud Infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Cybersecurity</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#9b87f5]/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold">Government</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Federal Contractors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Security Clearance Roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Defense Technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Public Sector IT</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#9b87f5]/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold">Healthcare</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Health Information Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Medical Technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Clinical Staff</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>Telehealth Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-[#1A1F2C] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Ready to elevate your team with top-tier talent? I'm here to help you navigate the complex landscape of technical recruitment and find the perfect candidates for your organization.
            </p>
            <button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-10 py-4 rounded-lg text-lg font-medium transition-colors"
              onClick={() => window.open("https://www.linkedin.com/in/christian-michael1/", "_blank")}
            >
              Connect on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;