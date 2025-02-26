import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Building2, Users, CheckCircle, Award, Briefcase, Target, TrendingUp, Zap, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced with stronger value proposition */}
      <div className="bg-[#1A1F2C] text-white py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Professional background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connecting <span className="text-[#9b87f5]">Elite Talent</span> With <span className="text-[#9b87f5]">Visionary Companies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl leading-relaxed">
            Christian Chiacchio | Technical Recruitment Strategist with a proven track record of building high-performance teams in software development, healthcare IT, and government contracting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg px-8" onClick={() => window.open("https://www.linkedin.com/in/christian-michael1/", "_blank")}>
              View My Experience
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-[#9b87f5] text-lg px-8 transition-all" 
              onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover My Expertise
            </Button>
          </div>
          
          {/* Social proof metrics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#9b87f5] mb-2">500+</div>
              <div className="text-gray-300">Successful Placements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#9b87f5] mb-2">95%</div>
              <div className="text-gray-300">Retention Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#9b87f5] mb-2">10+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">
              Why Partner With Me?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In today's competitive tech landscape, finding the right talent isn't just about filling positions—it's about building the foundation for your company's future success. I bring a strategic approach to technical recruitment that goes beyond keywords and resumes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Precision Matching</h3>
                    <p className="text-gray-600">I don't just match skills—I align personalities, work styles, and career aspirations with your company culture and objectives.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Industry Insight</h3>
                    <p className="text-gray-600">With deep knowledge of tech and healthcare markets, I provide valuable perspectives on talent trends, compensation benchmarks, and skill availability.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Accelerated Hiring</h3>
                    <p className="text-gray-600">My streamlined process reduces time-to-hire by 40%, connecting you with qualified candidates when you need them most.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="Strategic recruitment partnership"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/80 to-transparent flex items-end">
                  <div className="p-8">
                    <div className="text-white text-xl font-semibold mb-2">Strategic Partnership</div>
                    <div className="text-gray-200">Building relationships that drive business growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Enhanced with more compelling content */}
      <div id="expertise" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1A1F2C]">
          Areas of Expertise
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          With specialized knowledge across multiple technical domains, I deliver exceptional talent solutions tailored to your industry's unique challenges and opportunities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 mb-4 text-[#9b87f5]" />
              <CardTitle className="text-2xl">Technical Recruitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Specialized in recruiting software developers, data analysts, and IT professionals across multiple technologies. My technical understanding allows me to evaluate candidates beyond buzzwords, ensuring genuine expertise.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Software Engineering</span>
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Data Science</span>
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">DevOps</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Building2 className="h-12 w-12 mb-4 text-[#9b87f5]" />
              <CardTitle className="text-2xl">Government Contracting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Extensive experience with government contractors and managing client relationships in healthcare and technology sectors. I understand the unique requirements and security clearances needed for these specialized roles.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Federal Contracts</span>
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Security Clearance</span>
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Compliance</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 mb-4 text-[#9b87f5]" />
              <CardTitle className="text-2xl">Healthcare Recruitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Expertise in placing medical directors, nursing practitioners, and healthcare professionals. I navigate the complex intersection of healthcare and technology to find specialists who can drive innovation in patient care.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Health IT</span>
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Clinical Staff</span>
                <span className="px-3 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-full text-sm">Telehealth</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Process Section - New section */}
      <div className="bg-[#1A1F2C] py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            My Recruitment Process
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            A strategic, transparent approach designed to identify exceptional talent aligned with your organization's vision and culture.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Discovery</h3>
              <p className="text-gray-300">Understanding your business goals, culture, and specific role requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Sourcing</h3>
              <p className="text-gray-300">Leveraging my extensive network and advanced search strategies to identify ideal candidates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Evaluation</h3>
              <p className="text-gray-300">Rigorous assessment of technical skills, experience, and cultural alignment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">4. Placement</h3>
              <p className="text-gray-300">Facilitating the hiring process and ensuring a smooth transition for both parties</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Enhanced with more compelling content */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1F2C]">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                My technical background enables me to understand the nuanced requirements of specialized roles, ensuring I connect you with candidates who truly possess the skills your projects demand.
              </p>
              <div className="grid gap-6">
                {[
                  "Full-Stack Development (Java, C, C++, Ruby, Python)",
                  "Enterprise Systems (SAP ABAP, Oracle, Salesforce)",
                  "Frontend Specialists (React, Angular, Vue.js)",
                  "Healthcare Technology & Compliance",
                  "Data Science & Machine Learning",
                  "DevOps & Cloud Infrastructure"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm">
                    <CheckCircle className="h-6 w-6 text-[#9b87f5] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#9b87f5]/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#9b87f5]/20 rounded-lg"></div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - New section */}
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1A1F2C]">
          Client Success Stories
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Don't just take my word for it—hear from the organizations I've helped build exceptional teams.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 text-center">
                "Christian's understanding of our technical requirements was exceptional. He found us a senior developer who hit the ground running and became a team leader within months."
              </p>
              <div className="text-center">
                <div className="font-semibold text-[#1A1F2C]">Sarah Johnson</div>
                <div className="text-gray-500 text-sm">CTO, HealthTech Innovations</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 text-center">
                "Working with Christian transformed our hiring process. His candidates consistently exceed expectations, and his industry insights have been invaluable for our growth strategy."
              </p>
              <div className="text-center">
                <div className="font-semibold text-[#1A1F2C]">Michael Chen</div>
                <div className="text-gray-500 text-sm">VP of Engineering, DataSphere</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 text-center">
                "As a government contractor, our hiring needs are complex. Christian navigated security clearances and technical requirements flawlessly, delivering top talent consistently."
              </p>
              <div className="text-center">
                <div className="font-semibold text-[#1A1F2C]">Amanda Rodriguez</div>
                <div className="text-gray-500 text-sm">Director of HR, GovTech Solutions</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section - Enhanced with more compelling content */}
      <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Let's collaborate to find the exceptional talent your organization needs to innovate, grow, and lead in your industry. The right hire isn't just a skill match—it's a catalyst for transformation.
            </p>
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg px-10 py-6" onClick={() => window.open("https://www.linkedin.com/in/christian-michael1/", "_blank")}>
              Connect With Me
            </Button>
            <p className="mt-8 text-gray-400">
              Typically respond within 24 hours • Available for urgent hiring needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
