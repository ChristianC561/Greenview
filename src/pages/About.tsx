import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Star, Briefcase, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            alt="Innovation concept"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-[#9b87f5]">Christian Chiacchio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl leading-relaxed">
              A Trusted Partner in Technical Recruitment Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1F2C]">My Professional Journey</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in technical recruitment, I've built my career on a foundation of deep industry knowledge, technical understanding, and a genuine passion for connecting exceptional talent with opportunities where they can thrive.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My journey began in the fast-paced world of technology staffing, where I quickly recognized the critical importance of understanding both the technical requirements and the human elements of successful placements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, I leverage my expertise to serve clients across healthcare, government, and technology sectors, providing tailored recruitment solutions that address their unique challenges and opportunities.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Professional portrait"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-[#1A1F2C] font-bold">12+ Years</p>
              <p className="text-gray-600">Industry Experience</p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gray-50 rounded-xl p-10 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">My Recruitment Philosophy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe that exceptional recruitment is about more than matching skills to job descriptions—it's about understanding people, cultures, and the unique dynamics that make teams successful.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <Shield className="h-8 w-8 mb-2 text-[#9b87f5]" />
                <CardTitle>Quality Over Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  I focus on presenting a select group of exceptionally qualified candidates rather than overwhelming clients with numerous mediocre options.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 mb-2 text-[#9b87f5]" />
                <CardTitle>Cultural Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Technical skills matter, but cultural fit is equally important. I carefully assess both to ensure long-term success for all parties.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <Star className="h-8 w-8 mb-2 text-[#9b87f5]" />
                <CardTitle>Transparent Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  I believe in open, honest communication throughout the recruitment process, setting realistic expectations and delivering on promises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">Professional Background</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              My diverse experience across multiple industries provides me with unique insights into the technical recruitment landscape.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 border-l-4 border-[#9b87f5] shadow-sm">
              <div className="flex items-start gap-4">
                <Briefcase className="h-8 w-8 text-[#9b87f5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#1A1F2C]">Senior Technical Recruiter</h3>
                  <p className="text-[#9b87f5] font-medium mb-4">2018 - Present</p>
                  <p className="text-gray-600 leading-relaxed">
                    Leading technical recruitment initiatives for enterprise clients across healthcare and government sectors. Specialized in placing software developers, data engineers, and IT security professionals in high-clearance environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 border-l-4 border-[#9b87f5] shadow-sm">
              <div className="flex items-start gap-4">
                <Briefcase className="h-8 w-8 text-[#9b87f5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#1A1F2C]">Technical Recruitment Specialist</h3>
                  <p className="text-[#9b87f5] font-medium mb-4">2013 - 2018</p>
                  <p className="text-gray-600 leading-relaxed">
                    Developed and implemented technical recruitment strategies for mid-market technology companies. Successfully placed over 200 professionals in roles ranging from frontend development to systems architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 border-l-4 border-[#9b87f5] shadow-sm">
              <div className="flex items-start gap-4">
                <Briefcase className="h-8 w-8 text-[#9b87f5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#1A1F2C]">IT Recruitment Consultant</h3>
                  <p className="text-[#9b87f5] font-medium mb-4">2010 - 2013</p>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized in recruiting for healthcare IT positions, working closely with hospital systems and medical technology providers to build high-performing technical teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="h-8 w-8 text-[#9b87f5]" />
              <h2 className="text-3xl font-bold text-[#1A1F2C]">Education</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">Bachelor of Science in Business Administration</h3>
                <p className="text-[#9b87f5] font-medium">University of Maryland</p>
                <p className="text-gray-600">Concentration in Human Resources Management</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">Associate's Degree in Computer Science</h3>
                <p className="text-[#9b87f5] font-medium">Montgomery College</p>
                <p className="text-gray-600">Foundation in programming and systems design</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Award className="h-8 w-8 text-[#9b87f5]" />
              <h2 className="text-3xl font-bold text-[#1A1F2C]">Certifications</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">Certified Technical Recruiter (CTR)</h3>
                <p className="text-gray-600">Specialized certification in technical talent acquisition</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">SHRM-CP</h3>
                <p className="text-gray-600">Society for Human Resource Management - Certified Professional</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">Healthcare Recruitment Specialist</h3>
                <p className="text-gray-600">Certification in healthcare industry staffing</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1A1F2C] text-white p-12 rounded-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise in technical recruitment can help you build high-performing teams that drive your organization forward.
          </p>
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold px-8" onClick={() => window.open("https://www.linkedin.com/in/christian-michael1/", "_blank")}>
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;