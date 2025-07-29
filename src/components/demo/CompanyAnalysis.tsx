
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar } from 'recharts';
import { ArrowLeft, Phone, Calendar, Clock, TrendingUp, Users, DollarSign, Target, AlertTriangle, CheckCircle2, Star, Download, Share2, Mic, Brain } from 'lucide-react';

interface CompanyAnalysisProps {
  companyData: {
    participant: string;
    date: string;
    duration: string;
    type: string;
    status: string;
    sentiment: string;
    keyTopics: string[];
    insights: string;
  };
  onBack: () => void;
}

const CompanyAnalysis = ({ companyData, onBack }: CompanyAnalysisProps) => {
  // Extract company name from participant field
  const companyName = companyData.participant.split(' (')[1]?.replace(')', '') || 'Company';
  const participantName = companyData.participant.split(' (')[0] || 'Unknown';

  // Fake data for detailed analysis
  const sentimentTimeline = [
    { time: '0:00', sentiment: 7.0, topic: 'Introduction' },
    { time: '5:00', sentiment: 8.2, topic: 'Product Demo' },
    { time: '15:00', sentiment: 6.8, topic: 'Competition Discussion' },
    { time: '25:00', sentiment: 9.1, topic: 'Traction Metrics' },
    { time: '35:00', sentiment: 8.5, topic: 'Next Steps' },
  ];

  const topicBreakdown = [
    { topic: 'Product-Market Fit', mentions: 12, sentiment: 8.7, duration: '8 min' },
    { topic: 'Revenue Growth', mentions: 8, sentiment: 9.2, duration: '6 min' },
    { topic: 'Team & Leadership', mentions: 6, sentiment: 8.1, duration: '4 min' },
    { topic: 'Competition', mentions: 4, sentiment: 6.8, duration: '5 min' },
    { topic: 'Market Opportunity', mentions: 7, sentiment: 8.9, duration: '7 min' },
  ];

  const competitiveAnalysis = [
    { metric: 'Technology', score: 85, benchmark: 70 },
    { metric: 'Market Position', score: 78, benchmark: 65 },
    { metric: 'Team Quality', score: 92, benchmark: 75 },
    { metric: 'Traction', score: 88, benchmark: 60 },
    { metric: 'Scalability', score: 76, benchmark: 70 },
    { metric: 'Defensibility', score: 82, benchmark: 68 },
  ];

  const keyMetrics = {
    overallScore: 8.7,
    confidenceLevel: 94,
    investmentRecommendation: 'Strong Consider',
    riskLevel: 'Medium',
    timeToDecision: '2-3 weeks',
    followUpActions: 4
  };

  const aiInsights = [
    {
      type: 'strength',
      title: 'Strong Product Differentiation',
      description: 'The company demonstrated clear competitive advantages with proprietary technology that addresses specific market pain points.',
      confidence: 92
    },
    {
      type: 'concern',
      title: 'Market Timing Uncertainty',
      description: 'While the market opportunity is large, adoption timeline may be longer than projected based on industry patterns.',
      confidence: 78
    },
    {
      type: 'opportunity',
      title: 'Partnership Potential',
      description: 'Strong indicators of strategic partnership opportunities that could accelerate growth significantly.',
      confidence: 85
    }
  ];

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 8) return 'text-green-400';
    if (sentiment >= 6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'strength': return <CheckCircle2 className="h-5 w-5 text-green-400" />;
      case 'concern': return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'opportunity': return <Star className="h-5 w-5 text-blue-400" />;
      default: return <CheckCircle2 className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onBack}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calls
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">{companyName} Analysis</h1>
            <p className="text-slate-300">Call with {participantName} • {companyData.date}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Share2 className="mr-2 h-4 w-4" />
            Share Analysis
          </Button>
        </div>
      </div>

      {/* Call Summary Card */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-sm text-slate-300">Call Type</div>
                <div className="font-semibold text-white">{companyData.type}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-sm text-slate-300">Duration</div>
                <div className="font-semibold text-white">{companyData.duration}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-purple-400" />
              <div>
                <div className="text-sm text-slate-300">Overall Sentiment</div>
                <div className="font-semibold text-white flex items-center">
                  {keyMetrics.overallScore}/10
                  <Badge className={`ml-2 ${companyData.sentiment === 'positive' ? 'bg-green-600' : companyData.sentiment === 'neutral' ? 'bg-yellow-600' : 'bg-red-600'}`}>
                    {companyData.sentiment}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="h-8 w-8 text-yellow-400" />
              <div>
                <div className="text-sm text-slate-300">Recommendation</div>
                <div className="font-semibold text-white">{keyMetrics.investmentRecommendation}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-white/10 backdrop-blur-md">
          <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">Overview</TabsTrigger>
          <TabsTrigger value="sentiment" className="data-[state=active]:bg-blue-600">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="topics" className="data-[state=active]:bg-blue-600">Key Topics</TabsTrigger>
          <TabsTrigger value="competitive" className="data-[state=active]:bg-blue-600">Competitive Position</TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-blue-600">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Overall Score</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={keyMetrics.overallScore * 10} className="w-20" />
                    <span className="text-white font-bold">{keyMetrics.overallScore}/10</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Confidence Level</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={keyMetrics.confidenceLevel} className="w-20" />
                    <span className="text-white font-bold">{keyMetrics.confidenceLevel}%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Risk Level</span>
                  <Badge className="bg-yellow-600">{keyMetrics.riskLevel}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Time to Decision</span>
                  <span className="text-white">{keyMetrics.timeToDecision}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Follow-up Actions</span>
                  <Badge variant="outline" className="text-slate-300 border-slate-500">{keyMetrics.followUpActions} pending</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Call Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {companyData.keyTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{topic}</span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-white/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Insight</h4>
                  <p className="text-slate-300 text-sm">{companyData.insights}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sentiment">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Sentiment Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sentimentTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis domain={[0, 10]} stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                    labelFormatter={(value) => `Time: ${value}`}
                    formatter={(value, name) => [value, 'Sentiment Score']}
                  />
                  <Line type="monotone" dataKey="sentiment" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="topics">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Topic Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topicBreakdown.map((topic, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{topic.topic}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-slate-300 border-slate-500">
                          {topic.mentions} mentions
                        </Badge>
                        <span className={`font-bold ${getSentimentColor(topic.sentiment)}`}>
                          {topic.sentiment}/10
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Duration: {topic.duration}</span>
                      <Progress value={topic.sentiment * 10} className="w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitive">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Competitive Analysis vs Industry Benchmark</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={competitiveAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                  <Bar dataKey="score" fill="#3B82F6" name="Company Score" />
                  <Bar dataKey="benchmark" fill="#6B7280" name="Industry Benchmark" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <div className="space-y-4">
            {aiInsights.map((insight, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{insight.title}</h4>
                        <Badge variant="outline" className="text-slate-300 border-slate-500">
                          {insight.confidence}% confidence
                        </Badge>
                      </div>
                      <p className="text-slate-300 text-sm">{insight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyAnalysis;
