
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

  // Team data
  const teamData = {
    founders: [
      {
        name: 'John Martinez',
        role: 'CEO & Co-Founder',
        experience: '12 years',
        background: 'Ex-Google, Stanford MBA',
        expertise: ['Product Strategy', 'Go-to-Market', 'Team Building'],
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Sarah Chen',
        role: 'CTO & Co-Founder',
        experience: '15 years',
        background: 'Ex-Meta, MIT PhD',
        expertise: ['AI/ML', 'System Architecture', 'Technical Leadership'],
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      }
    ],
    keyHires: [
      {
        name: 'Mike Rodriguez',
        role: 'VP of Engineering',
        joined: '2023',
        background: 'Ex-Uber, 8 years experience',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Lisa Wang',
        role: 'VP of Sales',
        joined: '2023',
        background: 'Ex-Salesforce, 10 years experience',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    ],
    teamMetrics: {
      totalEmployees: 45,
      engineeringTeam: 25,
      salesTeam: 12,
      productTeam: 8,
      avgExperience: '8.2 years',
      retentionRate: '94%'
    }
  };

  // Sector Overview data
  const sectorData = {
    marketSize: {
      tam: 2500000000,
      sam: 450000000,
      som: 45000000
    },
    growthRate: 23.5,
    keyTrends: [
      'AI-powered automation adoption accelerating',
      'Enterprise SaaS consolidation',
      'Remote work driving digital transformation',
      'Regulatory compliance requirements increasing'
    ],
    competitiveLandscape: [
      { company: 'Competitor A', marketShare: 25, funding: 150000000 },
      { company: 'Competitor B', marketShare: 18, funding: 89000000 },
      { company: 'Competitor C', marketShare: 12, funding: 67000000 },
      { company: 'VACA', marketShare: 3, funding: 8500000 }
    ],
    marketDrivers: [
      'Digital transformation initiatives',
      'Cost optimization pressures',
      'Regulatory compliance requirements',
      'Customer experience expectations'
    ]
  };

  // Product data
  const productData = {
    coreFeatures: [
      'AI-powered workflow automation',
      'Real-time analytics dashboard',
      'Multi-platform integration',
      'Advanced reporting suite',
      'Custom workflow builder',
      'API-first architecture'
    ],
    technicalSpecs: {
      architecture: 'Microservices-based',
      scalability: '99.9% uptime',
      security: 'SOC 2 Type II compliant',
      performance: '< 200ms response time'
    },
    customerMetrics: {
      activeUsers: 12500,
      monthlyGrowth: 15.2,
      customerSatisfaction: 4.8,
      netRetentionRate: 118
    },
    roadmap: [
      { quarter: 'Q1 2024', features: ['Advanced AI models', 'Mobile app launch'] },
      { quarter: 'Q2 2024', features: ['Enterprise SSO', 'Advanced analytics'] },
      { quarter: 'Q3 2024', features: ['Multi-tenant architecture', 'API marketplace'] },
      { quarter: 'Q4 2024', features: ['AI-powered insights', 'Global expansion'] }
    ]
  };

  // Inflection Analysis data
  const inflectionData = {
    growthMetrics: [
      { month: 'Jan', revenue: 125000, users: 8500, deals: 12 },
      { month: 'Feb', revenue: 145000, users: 9200, deals: 15 },
      { month: 'Mar', revenue: 168000, users: 10100, deals: 18 },
      { month: 'Apr', revenue: 195000, users: 11200, deals: 22 },
      { month: 'May', revenue: 225000, users: 12500, deals: 28 },
      { month: 'Jun', revenue: 265000, users: 13800, deals: 35 }
    ],
    inflectionPoints: [
      {
        date: 'March 2024',
        event: 'Enterprise customer acquisition',
        impact: 'Revenue increased 40%',
        description: 'Secured first Fortune 500 customer, validating enterprise readiness'
      },
      {
        date: 'May 2024',
        event: 'Product-market fit achieved',
        impact: 'Net retention rate exceeded 120%',
        description: 'Customer satisfaction scores consistently above 4.5/5'
      }
    ],
    projections: {
      next6Months: 450000,
      next12Months: 850000,
      growthRate: 85
    }
  };

  // GTM & Market Analysis data
  const gtmData = {
    channels: [
      { channel: 'Direct Sales', contribution: 45, cost: 125000, roi: 3.2 },
      { channel: 'Partnerships', contribution: 30, cost: 75000, roi: 4.1 },
      { channel: 'Digital Marketing', contribution: 15, cost: 45000, roi: 2.8 },
      { channel: 'Referrals', contribution: 10, cost: 15000, roi: 5.5 }
    ],
    targetSegments: [
      { segment: 'Mid-market (100-1000 employees)', size: 15000, penetration: 2.1 },
      { segment: 'Enterprise (1000+ employees)', size: 2500, penetration: 0.8 },
      { segment: 'SMB (10-100 employees)', size: 85000, penetration: 0.3 }
    ],
    geographicExpansion: [
      { region: 'North America', current: 85, target: 60 },
      { region: 'Europe', current: 10, target: 25 },
      { region: 'Asia Pacific', current: 5, target: 15 }
    ]
  };

  // Suggested Questions data
  const suggestedQuestions = {
    business: [
      "What are your key competitive advantages and how defensible are they?",
      "Can you walk us through your unit economics and path to profitability?",
      "What are the main risks to your business model and how are you mitigating them?",
      "How do you plan to scale operations while maintaining quality?",
      "What's your strategy for customer retention and reducing churn?"
    ],
    market: [
      "How do you validate that you've achieved product-market fit?",
      "What's your strategy for expanding into new market segments?",
      "How do you stay ahead of competitive threats and market changes?",
      "What regulatory challenges do you anticipate and how will you address them?",
      "How do you measure market penetration and what's your target?"
    ],
    team: [
      "What key hires do you need to make in the next 6-12 months?",
      "How do you plan to scale the team while maintaining culture?",
      "What's your strategy for retaining top talent in a competitive market?",
      "How do you handle succession planning for key leadership roles?",
      "What's your approach to building a diverse and inclusive team?"
    ],
    product: [
      "What's your product development roadmap for the next 18 months?",
      "How do you prioritize feature development and customer requests?",
      "What's your strategy for maintaining technical debt and scalability?",
      "How do you measure product-market fit and user satisfaction?",
      "What's your approach to data security and privacy compliance?"
    ],
    financial: [
      "What's your current burn rate and runway?",
      "How do you plan to achieve profitability and what's the timeline?",
      "What are your key financial metrics and how do they compare to industry benchmarks?",
      "How do you plan to use the funding and what milestones will it help achieve?",
      "What's your strategy for managing cash flow and working capital?"
    ],
    growth: [
      "What's your customer acquisition strategy and cost structure?",
      "How do you plan to expand internationally and what are the challenges?",
      "What partnerships or strategic relationships are you pursuing?",
      "How do you measure and optimize your sales and marketing efficiency?",
      "What's your strategy for expanding into adjacent markets or products?"
    ]
  };

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
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in pt-6">
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
          <TabsTrigger value="suggested-questions" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Suggested Questions</TabsTrigger>
        </TabsList>

        <TabsContent value="company-overview">
          <div className="grid md:grid-cols-2 gap-6 pt-8">
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
          <div className="space-y-6">
            {/* Team Overview */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Team Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-900">{teamData.teamMetrics.totalEmployees}</div>
                    <div className="text-blue-700">Total Employees</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-900">{teamData.teamMetrics.avgExperience}</div>
                    <div className="text-blue-700">Avg Experience</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-900">{teamData.teamMetrics.retentionRate}</div>
                    <div className="text-blue-700">Retention Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founders */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Founding Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {teamData.founders.map((founder, idx) => (
                    <div key={idx} className="flex space-x-4 p-4 bg-blue-50 rounded-lg">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-900">{founder.name}</h4>
                        <p className="text-blue-700 font-medium">{founder.role}</p>
                        <p className="text-blue-600 text-sm">{founder.background}</p>
                        <div className="mt-2">
                          {founder.expertise.map((skill, skillIdx) => (
                            <Badge key={skillIdx} variant="outline" className="mr-1 mb-1 text-blue-700 border-blue-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Hires */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Key Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {teamData.keyHires.map((hire, idx) => (
                    <div key={idx} className="flex space-x-4 p-4 bg-blue-50 rounded-lg">
                      <img 
                        src={hire.image} 
                        alt={hire.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-900">{hire.name}</h4>
                        <p className="text-blue-700 font-medium">{hire.role}</p>
                        <p className="text-blue-600 text-sm">{hire.background}</p>
                        <p className="text-blue-600 text-sm">Joined: {hire.joined}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sector-overview">
          <div className="space-y-6">
            {/* Market Size */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Market Size & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">${(sectorData.marketSize.tam / 1000000000).toFixed(1)}B</div>
                    <div className="text-blue-700 text-sm">TAM</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">${(sectorData.marketSize.sam / 1000000).toFixed(0)}M</div>
                    <div className="text-blue-700 text-sm">SAM</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">${(sectorData.marketSize.som / 1000000).toFixed(0)}M</div>
                    <div className="text-blue-700 text-sm">SOM</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">{sectorData.growthRate}%</div>
                    <div className="text-blue-700 text-sm">Growth Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Competitive Landscape */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Competitive Landscape</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sectorData.competitiveLandscape}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#BFDBFE" />
                    <XAxis dataKey="company" stroke="#3B82F6" />
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
                    <Bar dataKey="marketShare" fill="#3B82F6" name="Market Share (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Key Trends */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Key Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {sectorData.keyTrends.map((trend, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700">{trend}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Drivers */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Market Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sectorData.marketDrivers.map((driver, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700">{driver}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="product">
          <div className="space-y-6">
            {/* Product Overview */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Product Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Core Features</h4>
                    <div className="space-y-2">
                      {productData.coreFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-blue-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Technical Specifications</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-blue-700">Architecture:</span>
                        <span className="text-blue-900 font-medium">{productData.technicalSpecs.architecture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Scalability:</span>
                        <span className="text-blue-900 font-medium">{productData.technicalSpecs.scalability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Security:</span>
                        <span className="text-blue-900 font-medium">{productData.technicalSpecs.security}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Performance:</span>
                        <span className="text-blue-900 font-medium">{productData.technicalSpecs.performance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Metrics */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Customer Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">{productData.customerMetrics.activeUsers.toLocaleString()}</div>
                    <div className="text-blue-700 text-sm">Active Users</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">{productData.customerMetrics.monthlyGrowth}%</div>
                    <div className="text-blue-700 text-sm">Monthly Growth</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">{productData.customerMetrics.customerSatisfaction}/5</div>
                    <div className="text-blue-700 text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">{productData.customerMetrics.netRetentionRate}%</div>
                    <div className="text-blue-700 text-sm">Net Retention</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Roadmap */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Product Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {productData.roadmap.map((quarter, idx) => (
                    <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">{quarter.quarter}</h4>
                      <div className="space-y-1">
                        {quarter.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-blue-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inflection-analysis">
          <div className="space-y-6">
            {/* Growth Metrics Chart */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Growth Trajectory</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={inflectionData.growthMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#BFDBFE" />
                    <XAxis dataKey="month" stroke="#3B82F6" />
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
                    <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={3} name="Revenue ($)" />
                    <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} name="Users" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Inflection Points */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Key Inflection Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inflectionData.inflectionPoints.map((point, idx) => (
                    <div key={idx} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-900">{point.event}</h4>
                        <Badge className="bg-blue-600 text-white">{point.date}</Badge>
                      </div>
                      <p className="text-blue-700 font-medium mb-1">{point.impact}</p>
                      <p className="text-blue-600 text-sm">{point.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projections */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Growth Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">${(inflectionData.projections.next6Months / 1000).toFixed(0)}K</div>
                    <div className="text-blue-700 text-sm">6-Month Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">${(inflectionData.projections.next12Months / 1000).toFixed(0)}K</div>
                    <div className="text-blue-700 text-sm">12-Month Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">{inflectionData.projections.growthRate}%</div>
                    <div className="text-blue-700 text-sm">Growth Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gtm-market-analysis">
          <div className="space-y-6">
            {/* GTM Channels */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Go-to-Market Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={gtmData.channels}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#BFDBFE" />
                    <XAxis dataKey="channel" stroke="#3B82F6" />
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
                    <Bar dataKey="contribution" fill="#3B82F6" name="Revenue Contribution (%)" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  {gtmData.channels.map((channel, idx) => (
                    <div key={idx} className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-blue-900">{channel.channel}</span>
                        <span className="text-blue-700">{channel.contribution}%</span>
                      </div>
                      <div className="flex justify-between text-sm text-blue-600">
                        <span>Cost: ${(channel.cost / 1000).toFixed(0)}K</span>
                        <span>ROI: {channel.roi}x</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Target Segments */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Target Market Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gtmData.targetSegments.map((segment, idx) => (
                    <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-blue-900">{segment.segment}</h4>
                        <Badge variant="outline" className="text-blue-700 border-blue-300">
                          {segment.penetration}% penetration
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-blue-600">
                        <span>Market Size: {segment.size.toLocaleString()} companies</span>
                        <span>Current Customers: {Math.round(segment.size * segment.penetration / 100)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Geographic Expansion */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Geographic Expansion Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gtmData.geographicExpansion.map((region, idx) => (
                    <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-blue-900">{region.region}</h4>
                        <div className="flex space-x-4">
                          <span className="text-blue-700">Current: {region.current}%</span>
                          <span className="text-blue-700">Target: {region.target}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" 
                          style={{ width: `${region.current}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="suggested-questions">
          <div className="space-y-6">
            {/* Business Model Questions */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Business Model & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestedQuestions.business.map((question, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-700">{question}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market & Competition Questions */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Market & Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestedQuestions.market.map((question, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-700">{question}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team & Culture Questions */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Team & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestedQuestions.team.map((question, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-700">{question}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Product & Technology Questions */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Product & Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestedQuestions.product.map((question, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-700">{question}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Financial Questions */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Financial & Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestedQuestions.financial.map((question, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-700">{question}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Growth & Expansion Questions */}
            <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Growth & Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestedQuestions.growth.map((question, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-700">{question}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyAnalysis;
