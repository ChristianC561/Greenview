import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ArrowLeft } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&h=600&fit=crop" 
            alt="Modern office environment" 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/95 to-sky-800/95" />
        </div>
        <div className="container relative">
          <a 
            href="/" 
            className="inline-flex items-center text-white hover:text-sky-200 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>
          <h1 className="text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-sky-100 max-w-2xl">
            Comprehensive recruitment and staffing solutions tailored to your organization's unique needs.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-sky-900">Technical Recruitment</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-sky-900">Development & Engineering</h3>
                    <ul className="space-y-3">
                      {[
                        "Full Stack Developers (Java, Python, Ruby, JavaScript)",
                        "Frontend Specialists (React, Angular, Vue.js)",
                        "Backend Engineers (Node.js, Django, Spring)",
                        "Mobile Developers (iOS, Android, React Native)",
                        "DevOps Engineers",
                        "Cloud Architecture Specialists"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                          <ChevronRight className="w-4 h-4 text-sky-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-sky-900">SAP Expertise</h3>
                    <ul className="space-y-3">
                      {[
                        "SAP ABAP Developers",
                        "SAP Functional Consultants",
                        "SAP Project Managers",
                        "SAP Basis Administrators",
                        "SAP Security Specialists",
                        "SAP Integration Experts"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                          <ChevronRight className="w-4 h-4 text-sky-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-sky-900">Government & Healthcare</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-sky-900">Government Contracting</h3>
                    <ul className="space-y-3">
                      {[
                        "Security Cleared Professionals (Top Secret/SCI)",
                        "Data Governance Analysts",
                        "System Administrators",
                        "Project Managers",
                        "Cybersecurity Specialists",
                        "Technical Program Managers"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                          <ChevronRight className="w-4 h-4 text-sky-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-sky-900">Healthcare Staffing</h3>
                    <ul className="space-y-3">
                      {[
                        "Medical Directors",
                        "Nurse Practitioners",
                        "Registered Nurses (RN)",
                        "Healthcare Administrators",
                        "Clinical Managers",
                        "Healthcare IT Specialists"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                          <ChevronRight className="w-4 h-4 text-sky-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-sky-900">Our Recruitment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Requirements Analysis",
                description: "We work closely with your team to understand your specific needs, company culture, and technical requirements.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
              },
              {
                title: "Candidate Sourcing",
                description: "Utilizing our extensive network and advanced sourcing techniques to identify top talent.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
              },
              {
                title: "Thorough Screening",
                description: "Comprehensive evaluation of candidates' technical skills, experience, and cultural fit.",
                image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=400&h=300&fit=crop"
              },
              {
                title: "Placement & Support",
                description: "Seamless onboarding process and ongoing support to ensure successful placements.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop"
              }
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-sky-900">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-sky-100 mb-8">
              Let's discuss how we can help you find the perfect candidates for your organization.
            </p>
            <Button size="lg" asChild className="bg-white text-sky-900 hover:bg-sky-50">
              <a href="/">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}