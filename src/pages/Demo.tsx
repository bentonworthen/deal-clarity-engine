
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Play, Users, TrendingUp, Brain, FileText, Share2, Download, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import LoginScreen from '@/components/demo/LoginScreen';
import DashboardOverview from '@/components/demo/DashboardOverview';
import StartupAnalysis from '@/components/demo/StartupAnalysis';
import AINoteTaker from '@/components/demo/AINoteTaker';
import ResultsOutput from '@/components/demo/ResultsOutput';

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoSteps = [
    { id: 0, title: "Login & Overview", component: LoginScreen },
    { id: 1, title: "Dashboard", component: DashboardOverview },
    { id: 2, title: "Startup Analysis", component: StartupAnalysis },
    { id: 3, title: "AI Note Taker", component: AINoteTaker },
    { id: 4, title: "Results & Sharing", component: ResultsOutput }
  ];

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
  };

  const CurrentComponent = demoSteps[currentStep]?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {!isPlaying ? (
        // Demo Landing Page
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-6xl font-bold text-white mb-4">
                Decide
              </h1>
              <p className="text-xl text-blue-200 mb-2">
                AI-Powered Deal Scoring for Smart VCs
              </p>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Transform how you evaluate startup opportunities with automated data analysis, 
                AI-generated insights, and dynamic company scoring.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-scale-in">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Smart Scoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    AI-powered deal scoring with best/medium/worst case financial modeling
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="text-center">
                  <Brain className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white">AI Note Taking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Automated transcription and analysis during founder pitch calls
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="text-center">
                  <FileText className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Instant Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Real-time company summaries and competitive analysis
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              onClick={startDemo}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg animate-pulse"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Demo
            </Button>
          </div>
        </div>
      ) : (
        // Demo Interface
        <div className="min-h-screen">
          {/* Demo Progress Bar */}
          <div className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-white font-semibold">Decide Demo</h2>
                <div className="flex space-x-2">
                  {demoSteps.map((step, idx) => (
                    <div
                      key={step.id}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentStep 
                          ? 'bg-blue-400' 
                          : idx < currentStep 
                            ? 'bg-green-400' 
                            : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-slate-300 text-sm">
                  {currentStep + 1} of {demoSteps.length}: {demoSteps[currentStep]?.title}
                </span>
                <div className="flex space-x-2">
                  <Button 
                    onClick={prevStep} 
                    disabled={currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="text-white border-white/20"
                  >
                    Previous
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    disabled={currentStep === demoSteps.length - 1}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Demo Content */}
          <div className="p-6">
            {CurrentComponent && <CurrentComponent />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
