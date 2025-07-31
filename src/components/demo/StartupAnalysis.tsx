
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Download, ExternalLink, TrendingUp, Users, DollarSign, Target, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';

const StartupAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  React.useEffect(() => {
    if (isAnalyzing) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing]);

  const financialData = [
    { year: '2022', revenue: 0.5, projection: 2.1 },
    { year: '2023', revenue: 1.8, projection: 4.2 },
    { year: '2024', revenue: 3.2, projection: 8.1 },
    { year: '2025', revenue: 5.8, projection: 15.2 },
    { year: '2026', revenue: 9.1, projection: 28.4 },
  ];

  const competitiveData = [
    { metric: 'Product', value: 85 },
    { metric: 'Market', value: 92 },
    { metric: 'Team', value: 78 },
    { metric: 'Traction', value: 88 },
    { metric: 'Technology', value: 94 },
    { metric: 'Funding', value: 72 },
  ];

  if (isAnalyzing) {
    return (
      <div className="max-w-6xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-12 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-white mb-4">Analyzing VACA...</h2>
            <p className="text-slate-300 mb-6">Pulling data from Harmonic API and running AI analysis</p>
            
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Financial Data</span>
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Market Analysis</span>
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Competitive Intelligence</span>
                <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">AI Scoring</span>
                <div className="w-4 h-4 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Company Header */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                VF
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">VACA</h1>
                <p className="text-slate-300 mb-3">AI-powered healthcare workflow optimization</p>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-600">Series A</Badge>
                  <Badge variant="outline" className="text-slate-300 border-slate-500">HealthTech</Badge>
                  <Badge variant="outline" className="text-slate-300 border-slate-500">AI/ML</Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-green-400 mb-2">9.2</div>
              <p className="text-slate-300 text-sm">Deal Score</p>
              <Button size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Full Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Revenue (ARR)</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$3.2M</div>
            <p className="text-xs text-green-400">+180% YoY</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Market Size</CardTitle>
            <Target className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$47B</div>
            <p className="text-xs text-blue-400">TAM Healthcare IT</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Customers</CardTitle>
            <Users className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">127</div>
            <p className="text-xs text-purple-400">Healthcare orgs</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Funding</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$8.5M</div>
            <p className="text-xs text-yellow-400">Previous rounds</p>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Tabs */}
      <Tabs defaultValue="scoring" className="space-y-6">
        <TabsList className="bg-white/10 backdrop-blur-md">
          <TabsTrigger value="scoring" className="data-[state=active]:bg-blue-600">Deal Scoring</TabsTrigger>
          <TabsTrigger value="financials" className="data-[state=active]:bg-blue-600">Financials</TabsTrigger>
          <TabsTrigger value="competitive" className="data-[state=active]:bg-blue-600">Competitive</TabsTrigger>
          <TabsTrigger value="risks" className="data-[state=active]:bg-blue-600">Risk Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="scoring" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-white">Best Case</CardTitle>
                <div className="text-4xl font-bold text-green-400">9.7</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Market dominance</span>
                  <span className="text-green-400">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Revenue growth</span>
                  <span className="text-green-400">250%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Exit multiple</span>
                  <span className="text-green-400">12x</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 ring-2 ring-blue-400">
              <CardHeader className="text-center">
                <CardTitle className="text-white">Most Likely</CardTitle>
                <div className="text-4xl font-bold text-blue-400">9.2</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Market share</span>
                  <span className="text-blue-400">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Revenue growth</span>
                  <span className="text-blue-400">180%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Exit multiple</span>
                  <span className="text-blue-400">8x</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-white">Worst Case</CardTitle>
                <div className="text-4xl font-bold text-orange-400">6.8</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Market share</span>
                  <span className="text-orange-400">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Revenue growth</span>
                  <span className="text-orange-400">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Exit multiple</span>
                  <span className="text-orange-400">4x</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financials">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Revenue Projection</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} name="Actual Revenue ($M)" />
                  <Line type="monotone" dataKey="projection" stroke="#3B82F6" strokeWidth={3} strokeDasharray="8 8" name="Projected Revenue ($M)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitive">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Competitive Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={competitiveData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#9CA3AF' }} />
                  <PolarRadiusAxis tick={{ fill: '#9CA3AF' }} />
                  <Radar name="VACA" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks">
          <div className="space-y-4">
            <Card className="bg-red-500/10 backdrop-blur-md border-red-500/20">
              <CardContent className="p-4 flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <div>
                  <h4 className="font-medium text-white">High Competition</h4>
                  <p className="text-sm text-slate-300">Several well-funded competitors in healthcare AI space</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-yellow-500/10 backdrop-blur-md border-yellow-500/20">
              <CardContent className="p-4 flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                <div>
                  <h4 className="font-medium text-white">Regulatory Risk</h4>
                  <p className="text-sm text-slate-300">Healthcare regulations could impact product development</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-500/10 backdrop-blur-md border-green-500/20">
              <CardContent className="p-4 flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <div>
                  <h4 className="font-medium text-white">Strong Team</h4>
                  <p className="text-sm text-slate-300">Experienced leadership with previous exits</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StartupAnalysis;
