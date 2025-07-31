
import React from 'react';
import { Button } from "@/components/custom";
import { ArrowRight, Play, Brain, TrendingUp, Users, Zap, Star, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-snow-white via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-vat-indigo/10 text-vat-indigo font-medium text-sm mb-6">
                <Zap className="mr-2 h-4 w-4" />
                AI-Powered Deal Intelligence
              </div>
              <h1 className="font-heading text-6xl md:text-7xl font-bold text-deep-navy mb-6 tracking-tight">
                Decide
              </h1>
              <p className="text-2xl text-vat-indigo mb-4 max-w-3xl mx-auto font-medium">
                Transform VC Decision-Making with AI
              </p>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Transform VC decision-making with AI-powered deal analysis and intelligent scoring.
              </p>
            </div>
            
            <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-vat-indigo hover:bg-vat-indigo/90 text-white px-8 py-4 text-lg w-full sm:w-auto h-14">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="border-mint-tech text-mint-tech hover:bg-mint-tech/5 px-8 py-4 text-lg w-full sm:w-auto h-14">
                Request Access
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating cards animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 animate-float">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg">
              <div className="text-mint-tech font-mono font-bold text-2xl">9.2</div>
              <div className="text-gray-600 text-sm">Deal Score</div>
            </div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg">
              <div className="text-vat-indigo font-mono font-bold text-xl">127</div>
              <div className="text-gray-600 text-sm">Customers</div>
            </div>
          </div>
          <div className="absolute bottom-1 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg">
              <div className="text-mint-tech font-mono font-bold text-xl">$3.2M</div>
              <div className="text-gray-600 text-sm">ARR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-deep-navy mb-4">
            Everything VCs Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial screening to final investment decision, Decide streamlines your entire deal evaluation process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-vat-indigo to-mint-tech rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-deep-navy mb-4">Smart Deal Scoring</h3>
              <p className="text-gray-600 mb-4">
                AI-powered scoring with best/medium/worst case financial modeling and market analysis.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-mint-tech/10 text-mint-tech text-sm font-medium">Automated</span>
                <span className="px-3 py-1 rounded-full bg-vat-indigo/10 text-vat-indigo text-sm font-medium">Accurate</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-tech to-vat-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-deep-navy mb-4">AI Note Taking</h3>
              <p className="text-gray-600 mb-4">
                Real-time transcription and analysis during founder calls with automated insight extraction.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-vat-indigo/10 text-vat-indigo text-sm font-medium">Real-time</span>
                <span className="px-3 py-1 rounded-full bg-mint-tech/10 text-mint-tech text-sm font-medium">Smart</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-vat-indigo to-mint-tech rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-deep-navy mb-4">Instant Insights</h3>
              <p className="text-gray-600 mb-4">
                Dynamic company summaries, competitive analysis, and inflection point detection.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-mint-tech/10 text-mint-tech text-sm font-medium">Fast</span>
                <span className="px-3 py-1 rounded-full bg-vat-indigo/10 text-vat-indigo text-sm font-medium">Comprehensive</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">Trusted by Leading VCs</h3>
            <p className="text-gray-600">Join hundreds of investors making smarter decisions with AI</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-mono text-3xl font-bold text-vat-indigo mb-2">500+</div>
              <p className="text-gray-600">Deals Analyzed</p>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-mint-tech mb-2">94%</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-vat-indigo mb-2">75%</div>
              <p className="text-gray-600">Time Saved</p>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-mint-tech mb-2">50+</div>
              <p className="text-gray-600">VC Firms</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-heading text-4xl font-bold text-deep-navy mb-6">
          Ready to Transform Your Deal Flow?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          See how Decide can help you evaluate opportunities faster and make better investment decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/demo">
            <Button size="lg" className="bg-vat-indigo hover:bg-vat-indigo/90 text-white px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Interactive Demo
            </Button>
          </Link>
          <Button size="lg" variant="secondary" className="border-mint-tech text-mint-tech hover:bg-mint-tech/5 px-8 py-4 text-lg">
            Schedule a Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
