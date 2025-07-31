
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
    if (sentiment >= 8) return 'text-blue-600';
    if (sentiment >= 6) return 'text-blue-500';
    return 'text-blue-700';
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'strength': return <CheckCircle2 className="h-5 w-5 text-blue-600" />;
      case 'concern': return <AlertTriangle className="h-5 w-5 text-blue-500" />;
      case 'opportunity': return <Star className="h-5 w-5 text-blue-700" />;
      default: return <CheckCircle2 className="h-5 w-5 text-blue-400" />;
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
            className="border-blue-200 bg-white/80 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calls
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-blue-900">{companyName} Analysis</h1>
            <p className="text-blue-700">Call with {participantName} • {companyData.date}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-200 bg-white/80 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Analysis
          </Button>
        </div>
      </div>

      {/* Call Summary Card */}
      <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-sm text-blue-600">Call Type</div>
                <div className="font-semibold text-blue-900">{companyData.type}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-sm text-blue-600">Duration</div>
                <div className="font-semibold text-blue-900">{companyData.duration}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-sm text-blue-600">Overall Sentiment</div>
                <div className="font-semibold text-blue-900 flex items-center">
                  {keyMetrics.overallScore}/10
                  <Badge className={`ml-2 ${companyData.sentiment === 'positive' ? 'bg-blue-600' : companyData.sentiment === 'neutral' ? 'bg-blue-500' : 'bg-blue-700'} text-white`}>
                    {companyData.sentiment}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-sm text-blue-600">Recommendation</div>
                <div className="font-semibold text-blue-900">{keyMetrics.investmentRecommendation}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Tabs defaultValue="company-overview" className="space-y-6">
        <TabsList className="bg-white/80 backdrop-blur-md border-blue-200">
          <TabsTrigger value="company-overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Company Overview</TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Team</TabsTrigger>
          <TabsTrigger value="sector-overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Sector Overview</TabsTrigger>
          <TabsTrigger value="product" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Product</TabsTrigger>
          <TabsTrigger value="inflection-analysis" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Inflection Analysis</TabsTrigger>
          <TabsTrigger value="gtm-market-analysis" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">GTM & Market Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="company-overview">
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-700">Overall Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-blue-100 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" 
                        style={{ width: `${keyMetrics.overallScore * 10}%` }}
                      />
                    </div>
                    <span className="text-blue-900 font-bold">{keyMetrics.overallScore}/10</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700">Confidence Level</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-blue-100 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" 
                        style={{ width: `${keyMetrics.confidenceLevel}%` }}
                      />
                    </div>
                    <span className="text-blue-900 font-bold">{keyMetrics.confidenceLevel}%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Risk Level</span>
                  <Badge className="bg-blue-500 text-white">{keyMetrics.riskLevel}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Time to Decision</span>
                  <span className="text-blue-900">{keyMetrics.timeToDecision}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Follow-up Actions</span>
                  <Badge variant="outline" className="text-blue-700 border-blue-300">{keyMetrics.followUpActions} pending</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Call Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {companyData.keyTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-blue-700 text-sm">{topic}</span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Key Insight</h4>
                  <p className="text-blue-700 text-sm">{companyData.insights}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="team">
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Sentiment Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sentimentTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#BFDBFE" />
                  <XAxis dataKey="time" stroke="#3B82F6" />
                  <YAxis domain={[0, 10]} stroke="#3B82F6" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #BFDBFE',
                      borderRadius: '8px',
                      color: '#1E40AF',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                    }}
                    labelFormatter={(value) => `Time: ${value}`}
                    formatter={(value, name) => [value, 'Sentiment Score']}
                  />
                  <Line type="monotone" dataKey="sentiment" stroke="#2563EB" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sector-overview">
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Topic Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topicBreakdown.map((topic, idx) => (
                  <div key={idx} className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-900">{topic.topic}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-blue-700 border-blue-300">
                          {topic.mentions} mentions
                        </Badge>
                        <span className={`font-bold ${getSentimentColor(topic.sentiment)}`}>
                          {topic.sentiment}/10
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-600">Duration: {topic.duration}</span>
                      <div className="w-24 bg-blue-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" 
                          style={{ width: `${topic.sentiment * 10}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="product">
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Competitive Analysis vs Industry Benchmark</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={competitiveAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#BFDBFE" />
                  <XAxis dataKey="metric" stroke="#3B82F6" />
                  <YAxis stroke="#3B82F6" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #BFDBFE',
                      borderRadius: '8px',
                      color: '#1E40AF',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Bar dataKey="score" fill="#3B82F6" name="Company Score" />
                  <Bar dataKey="benchmark" fill="#93C5FD" name="Industry Benchmark" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inflection-analysis">
          <div className="space-y-4">
            {aiInsights.map((insight, idx) => (
              <Card key={idx} className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-900">{insight.title}</h4>
                        <Badge variant="outline" className="text-blue-700 border-blue-300">
                          {insight.confidence}% confidence
                        </Badge>
                      </div>
                      <p className="text-blue-700 text-sm">{insight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gtm-market-analysis">
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">GTM & Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Market Size</h4>
                    <p className="text-blue-700 text-sm">Total Addressable Market (TAM): $2.5B</p>
                    <p className="text-blue-700 text-sm">Serviceable Addressable Market (SAM): $450M</p>
                    <p className="text-blue-700 text-sm">Serviceable Obtainable Market (SOM): $45M</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">GTM Strategy</h4>
                    <p className="text-blue-700 text-sm">Direct sales to enterprise customers</p>
                    <p className="text-blue-700 text-sm">Partnership with system integrators</p>
                    <p className="text-blue-700 text-sm">Digital marketing and content strategy</p>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Market Positioning</h4>
                  <p className="text-blue-700 text-sm">Positioned as a premium solution with advanced AI capabilities, targeting mid to large enterprises seeking to modernize their operations with intelligent automation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyAnalysis;
