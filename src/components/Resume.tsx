import React, { memo } from 'react';
import { FileText, Eye, Download, GraduationCap, Briefcase, Award, Sparkles, ExternalLink } from 'lucide-react';
import AnimateOnScroll from './MicroInteractions';

const Resume = () => {
  return (
    <section id="resume" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-50 via-sage-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Credentials & Resume
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-4">
              Curriculum Vitae
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed">
              Explore my academic background, technical qualifications, and practical experience in Data Science.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Summary and details of credentials */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <AnimateOnScroll animation="slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-forest-900 flex items-center gap-2.5">
                  <span className="p-2 bg-emerald-100 rounded-lg text-emerald-700"><FileText className="w-5 h-5" /></span>
                  Resume Highlights
                </h3>
                <p className="text-base text-forest-700 leading-relaxed font-medium">
                  Currently pursuing a degree in Data Science, with solid foundational skills in statistical modeling, machine learning, and programming. I combine academic theory with practical projects and professional certifications to build robust data solutions.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 gap-4">
              <AnimateOnScroll animation="scale-in" delay={100}>
                <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white shadow-md">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-900">Education</h4>
                      <p className="text-sm text-forest-700 font-semibold mt-1">BSc Data Science</p>
                      <p className="text-xs text-forest-500 mt-0.5">KBC NMU Jalgaon</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="scale-in" delay={200}>
                <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl text-white shadow-md">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-900">Internship</h4>
                      <p className="text-sm text-forest-700 font-semibold mt-1">College Tips</p>
                      <p className="text-xs text-forest-500 mt-0.5">Creative & Strategy</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="scale-in" delay={300}>
                <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-gradient-to-br from-forest-600 to-emerald-600 rounded-xl text-white shadow-md">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-900">Core Certifications</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-emerald-50 text-emerald-800 text-xs px-2.5 py-1 rounded-md border border-emerald-100 font-semibold">Kaggle Pandas</span>
                        <span className="bg-teal-50 text-teal-800 text-xs px-2.5 py-1 rounded-md border border-teal-100 font-semibold">Kaggle Machine Learning</span>
                        <span className="bg-cyan-50 text-cyan-800 text-xs px-2.5 py-1 rounded-md border border-cyan-100 font-semibold">Deloitte Analytics</span>
                        <span className="bg-sage-50 text-sage-800 text-xs px-2.5 py-1 rounded-md border border-sage-100 font-semibold">MKCL Python</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Right: Beautiful Visual Resume Card */}
          <div className="lg:col-span-5">
            <AnimateOnScroll animation="bounce-in" delay={200}>
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100 relative group overflow-hidden">
                {/* Glowing decoration hover effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative space-y-6">
                  {/* Miniature representation of resume */}
                  <div className="bg-gradient-to-br from-sage-50 to-emerald-50 rounded-2xl p-5 border border-emerald-50 shadow-inner relative space-y-4">
                    <div className="flex items-center justify-between border-b border-emerald-100/50 pb-3">
                      <div>
                        <h4 className="font-bold text-forest-900 text-lg">Rohit P. Chavan</h4>
                        <p className="text-xs text-emerald-600 font-semibold">BSc Data Science Student</p>
                      </div>
                      <FileText className="w-8 h-8 text-emerald-600 opacity-60" />
                    </div>
                    
                    <div className="space-y-2 text-xs text-forest-700">
                      <div className="flex justify-between">
                        <span className="font-semibold text-forest-900">📍 Location:</span>
                        <span>Shirpur, Maharashtra</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-forest-900">📧 Email:</span>
                        <span>chavanrohit2213@gmail.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-forest-900">💻 Technical Skills:</span>
                        <span>Python, Pandas, ML, SQL</span>
                      </div>
                    </div>
                    
                    {/* Visual paper lines mockup */}
                    <div className="space-y-1.5 pt-1">
                      <div className="h-1.5 bg-emerald-200/50 rounded-full w-full"></div>
                      <div className="h-1.5 bg-emerald-200/40 rounded-full w-5/6"></div>
                      <div className="h-1.5 bg-emerald-200/30 rounded-full w-4/5"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-forest-900 text-center text-lg sm:text-xl">
                      Access Full Document
                    </h4>
                    <p className="text-sm text-forest-600 text-center font-medium leading-relaxed">
                      Download the high-quality PDF to keep for offline reading or open the document directly in your browser.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        View Resume
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>
                      <a
                        href="/resume.pdf"
                        download="Rohit_Chavan_Resume.pdf"
                        className="flex-1 inline-flex justify-center items-center gap-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Resume);
