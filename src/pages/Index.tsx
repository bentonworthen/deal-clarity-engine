
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Brain, TrendingUp, Users, Zap, Star, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="animate-fade-in">
              <Badge className="bg-blue-600 text-white mb-6 px-4 py-2 text-sm">
                <Zap className="mr-2 h-4 w-4" />
                AI-Powered Deal Intelligence
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Decide
              </h1>
              <p className="text-2xl text-blue-200 mb-4 max-w-3xl mx-auto">
                Transform VC Decision-Making with AI
              </p>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
                Evaluate startup opportunities faster and smarter with automated data analysis, 
                AI-generated insights, and intelligent deal scoring built for modern VCs.
              </p>
            </div>
            
            <div className="animate-scale-in">
              <Link to="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg mr-4">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-4 text-lg">
                Request Access
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating cards animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-green-400 font-bold text-2xl">9.2</div>
              <div className="text-white text-sm">Deal Score</div>
            </div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-blue-400 font-bold text-xl">127</div>
              <div className="text-white text-sm">Customers</div>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-purple-400 font-bold text-xl">$3.2M</div>
              <div className="text-white text-sm">ARR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything VCs Need in One Platform
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From initial screening to final investment decision, Decide streamlines your entire deal evaluation process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Smart Deal Scoring</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                AI-powered scoring with best/medium/worst case financial modeling and market analysis.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge className="bg-green-600">Automated</Badge>
                <Badge className="bg-blue-600">Accurate</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">AI Note Taking</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                Real-time transcription and analysis during founder calls with automated insight extraction.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge className="bg-purple-600">Real-time</Badge>
                <Badge className="bg-orange-600">Smart</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Instant Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                Dynamic company summaries, competitive analysis, and inflection point detection.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge className="bg-yellow-600">Fast</Badge>
                <Badge className="bg-green-600">Comprehensive</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Leading VCs</h3>
            <p className="text-slate-300">Join hundreds of investors making smarter decisions with AI</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-slate-300">Deals Analyzed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
              <p className="text-slate-300">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
              <p className="text-slate-300">Time Saved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-slate-300">VC Firms</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Deal Flow?
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          See how Decide can help you evaluate opportunities faster and make better investment decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/demo">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Interactive Demo
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-4 text-lg">
            Schedule a Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
