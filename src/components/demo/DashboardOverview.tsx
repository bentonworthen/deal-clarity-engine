
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Eye, Clock, Star, ArrowRight, Zap } from 'lucide-react';

const DashboardOverview = () => {
  const dealData = [
    { name: 'Week 1', deals: 4 },
    { name: 'Week 2', deals: 7 },
    { name: 'Week 3', deals: 12 },
    { name: 'Week 4', deals: 8 },
  ];

  const scoreData = [
    { name: 'Jan', score: 7.2 },
    { name: 'Feb', score: 8.1 },
    { name: 'Mar', score: 7.8 },
    { name: 'Apr', score: 8.7 },
  ];

  const recentDeals = [
    { company: 'VitaFlow', sector: 'HealthTech', score: 9.2, status: 'hot' },
    { company: 'DataMesh', sector: 'AI/ML', score: 8.8, status: 'warm' },
    { company: 'GreenLab', sector: 'CleanTech', score: 7.4, status: 'cool' },
    { company: 'CloudSync', sector: 'SaaS', score: 8.1, status: 'warm' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Deal Flow Dashboard</h1>
          <p className="text-slate-300">AI-powered insights for smarter investment decisions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Zap className="mr-2 h-4 w-4" />
          New Analysis
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Deals</CardTitle>
            <Eye className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">24</div>
            <p className="text-xs text-green-400">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Avg Deal Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8.7</div>
            <p className="text-xs text-green-400">+0.9 this quarter</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">127h</div>
            <p className="text-xs text-purple-400">This month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Success Rate</CardTitle>
            <Star className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">94%</div>
            <p className="text-xs text-yellow-400">Prediction accuracy</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Recent Deals */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Deal Flow Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dealData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar dataKey="deals" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Average Deal Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={scoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Deals */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Recent Deals</CardTitle>
          <Button variant="outline" size="sm" className="text-white border-white/20">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDeals.map((deal, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="font-medium text-white">{deal.company}</h4>
                    <p className="text-sm text-slate-400">{deal.sector}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-bold text-white">{deal.score}</div>
                    <Badge 
                      variant={deal.status === 'hot' ? 'destructive' : deal.status === 'warm' ? 'default' : 'secondary'}
                      className={
                        deal.status === 'hot' ? 'bg-red-600' : 
                        deal.status === 'warm' ? 'bg-orange-600' : 
                        'bg-blue-600'
                      }
                    >
                      {deal.status}
                    </Badge>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
