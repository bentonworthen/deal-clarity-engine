
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Share2, Mail, MessageSquare, FileText, CheckCircle2, Star, TrendingUp } from 'lucide-react';

const ResultsOutput = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleShare = () => {
    setIsSharing(true);
    setTimeout(() => setIsSharing(false), 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  const executiveSummary = {
    company: "VitaFlow",
    score: 9.2,
    recommendation: "Strong Invest",
    keyStrengths: [
      "Exceptional product-market fit with 127 healthcare customers",
      "Strong financial metrics: $3.2M ARR, 180% YoY growth",
      "Experienced team with previous healthcare exits",
      "Clear competitive advantage with 40% efficiency gains"
    ],
    concerns: [
      "Highly competitive market with well-funded players",
      "Regulatory risks in healthcare sector",
      "Customer concentration risk"
    ],
    nextSteps: [
      "Schedule technical due diligence session",
      "Review customer references and case studies",
      "Assess regulatory compliance framework",
      "Evaluate go-to-market expansion strategy"
    ]
  };

  const meetingNotes = [
    {
      topic: "Customer Traction",
      notes: "127 healthcare organizations onboarded in 6 months. Average contract value of $25K annually. Strong retention rates with existing customers expanding usage.",
      sentiment: "positive"
    },
    {
      topic: "Product Differentiation", 
      notes: "AI-powered workflow optimization reduces administrative workload by 40%. Proprietary machine learning algorithms trained on healthcare-specific data.",
      sentiment: "positive"
    },
    {
      topic: "Market Opportunity",
      notes: "$47B TAM in Healthcare IT. Growing demand for AI-powered solutions post-pandemic. Strong regulatory tailwinds supporting automation.",
      sentiment: "positive"
    },
    {
      topic: "Competition",
      notes: "Several well-funded competitors including Epic, Cerner integrations. Need to maintain technology edge and customer intimacy.",
      sentiment: "neutral"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Results Header */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                VF
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Analysis Complete</h1>
                <p className="text-slate-300">VitaFlow deal evaluation ready for review</p>
                <div className="flex items-center space-x-2 mt-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 text-sm">Analysis validated</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-5xl font-bold text-green-400 mb-2">9.2</div>
              <Badge className="bg-green-600 text-lg px-4 py-2">
                <Star className="mr-1 h-4 w-4" />
                Strong Invest
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <Button onClick={handleSave} disabled={isSaving} className="bg-blue-600 hover:bg-blue-700">
            {isSaving ? (
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            {isSaving ? 'Saving...' : 'Save to CRM'}
          </Button>
          
          <Button onClick={handleShare} disabled={isSharing} variant="outline" className="text-white border-white/20">
            {isSharing ? (
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
            ) : (
              <Share2 className="mr-2 h-4 w-4" />
            )}
            {isSharing ? 'Sharing...' : 'Share with Team'}
          </Button>
          
          <Button variant="outline" className="text-white border-white/20">
            <FileText className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
        
        <div className="flex items-center space-x-2 text-slate-300 text-sm">
          <span>Analysis completed in 4.2 seconds</span>
          <TrendingUp className="h-4 w-4 text-green-400" />
        </div>
      </div>

      {/* Results Tabs */}
      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList className="bg-white/10 backdrop-blur-md">
          <TabsTrigger value="summary" className="data-[state=active]:bg-blue-600">Executive Summary</TabsTrigger>
          <TabsTrigger value="notes" className="data-[state=active]:bg-blue-600">Meeting Notes</TabsTrigger>
          <TabsTrigger value="action" className="data-[state=active]:bg-blue-600">Action Items</TabsTrigger>
          <TabsTrigger value="share" className="data-[state=active]:bg-blue-600">Share Options</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Investment Recommendation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">Key Strengths</h4>
                    <ul className="space-y-2">
                      {executiveSummary.keyStrengths.map((strength, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">Key Concerns</h4>
                    <ul className="space-y-2">
                      {executiveSummary.concerns.map((concern, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-4 h-4 border-2 border-yellow-400 rounded-full mt-0.5 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{concern}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-slate-600 pt-6">
                  <h4 className="font-semibold text-blue-400 mb-3">Recommended Next Steps</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {executiveSummary.nextSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-slate-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notes">
          <div className="space-y-4">
            {meetingNotes.map((note, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">{note.topic}</h4>
                    <Badge 
                      className={
                        note.sentiment === 'positive' ? 'bg-green-600' :
                        note.sentiment === 'negative' ? 'bg-red-600' :
                        'bg-yellow-600'
                      }
                    >
                      {note.sentiment}
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm">{note.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="action">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Action Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-slate-300">Schedule technical due diligence call</span>
                  </div>
                  <Badge variant="outline" className="text-slate-400 border-slate-500">High Priority</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-slate-300">Request customer reference list</span>
                  </div>
                  <Badge variant="outline" className="text-slate-400 border-slate-500">Medium Priority</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-slate-300">Review competitive analysis report</span>
                  </div>
                  <Badge variant="outline" className="text-slate-400 border-slate-500">Low Priority</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="share">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Share with Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Summary
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Share in Slack
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <FileText className="mr-2 h-4 w-4" />
                  Export to Notion
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">CRM Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Download className="mr-2 h-4 w-4" />
                  Save to Salesforce
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Export to HubSpot
                </Button>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">
                  <Download className="mr-2 h-4 w-4" />
                  Save to Airtable
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResultsOutput;
