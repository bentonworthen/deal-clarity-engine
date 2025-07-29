
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Phone, PhoneOff, Users, Clock, Brain, FileText } from 'lucide-react';

const AINoteTaker = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [aiInsights, setAiInsights] = useState([]);
  const [callStarted, setCallStarted] = useState(false);

  const transcript = [
    { speaker: 'Founder', time: '0:05', text: "Thanks for taking the time to meet with us today. I'm excited to share VitaFlow's progress since our last conversation." },
    { speaker: 'VC', time: '0:12', text: "Of course! I've been following your metrics. Can you walk me through the customer traction you mentioned?" },
    { speaker: 'Founder', time: '0:20', text: "Absolutely. We've onboarded 127 healthcare organizations in the past 6 months, with an average contract value of $25K annually." },
    { speaker: 'VC', time: '0:35', text: "That's impressive growth. What's driving the adoption?" },
    { speaker: 'Founder', time: '0:42', text: "Our AI reduces administrative workload by 40% on average. Hospitals are seeing immediate ROI through efficiency gains." }
  ];

  const insights = [
    { type: 'metric', text: '127 healthcare customers acquired', confidence: 95 },
    { type: 'financial', text: '$25K average contract value', confidence: 98 },
    { type: 'value-prop', text: '40% reduction in administrative workload', confidence: 92 },
    { type: 'market', text: 'Strong product-market fit in healthcare', confidence: 88 }
  ];

  useEffect(() => {
    let interval;
    if (callStarted && isRecording) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callStarted, isRecording]);

  const startCall = () => {
    setCallStarted(true);
    setIsRecording(true);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const endCall = () => {
    setCallStarted(false);
    setIsRecording(false);
    setCallDuration(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Call Header */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                VF
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">VitaFlow Pitch Call</h2>
                <p className="text-slate-300">John Martinez, CEO & Co-founder</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {callStarted && (
                <div className="flex items-center space-x-2 text-slate-300">
                  <Clock className="h-4 w-4" />
                  <span>{formatTime(callDuration)}</span>
                </div>
              )}
              
              {!callStarted ? (
                <Button onClick={startCall} className="bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Start Call
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button 
                    onClick={toggleRecording}
                    variant={isRecording ? "destructive" : "default"}
                    className={isRecording ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}
                  >
                    {isRecording ? <MicOff className="mr-2 h-4 w-4" /> : <Mic className="mr-2 h-4 w-4" />}
                    {isRecording ? 'Mute' : 'Unmute'}
                  </Button>
                  <Button onClick={endCall} variant="destructive">
                    <PhoneOff className="mr-2 h-4 w-4" />
                    End Call
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {isRecording && (
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">AI Note Taker Active</span>
              <Badge className="bg-green-600">Recording</Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {callStarted && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Live Transcript */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-400" />
              <CardTitle className="text-white">Live Transcript</CardTitle>
              {isRecording && <Badge className="bg-green-600">Live</Badge>}
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {transcript.map((item, idx) => (
                  <div key={idx} className="animate-fade-in">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge 
                        variant={item.speaker === 'Founder' ? 'default' : 'secondary'}
                        className={item.speaker === 'Founder' ? 'bg-blue-600' : 'bg-purple-600'}
                      >
                        {item.speaker}
                      </Badge>
                      <span className="text-xs text-slate-400">{item.time}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3 pl-4 border-l-2 border-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
                
                {isRecording && (
                  <div className="flex items-center space-x-2 text-slate-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Listening...</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-400" />
              <CardTitle className="text-white">AI Insights</CardTitle>
              <Badge className="bg-purple-600">Real-time</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/5 animate-scale-in">
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant="outline" 
                        className={
                          insight.type === 'metric' ? 'border-blue-400 text-blue-400' :
                          insight.type === 'financial' ? 'border-green-400 text-green-400' :
                          insight.type === 'value-prop' ? 'border-yellow-400 text-yellow-400' :
                          'border-purple-400 text-purple-400'
                        }
                      >
                        {insight.type}
                      </Badge>
                      <span className="text-xs text-slate-400">{insight.confidence}% confidence</span>
                    </div>
                    <p className="text-slate-300 text-sm">{insight.text}</p>
                  </div>
                ))}
                
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-green-600">Key Takeaway</Badge>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Strong traction metrics and clear value proposition. Revenue growth and customer adoption indicate product-market fit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!callStarted && (
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-12 text-center">
            <Phone className="h-16 w-16 text-slate-400 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Ready to Start AI-Powered Note Taking</h3>
            <p className="text-slate-300 mb-6 max-w-md mx-auto">
              Our AI will automatically transcribe the conversation, extract key insights, and generate actionable notes in real-time.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center">
                <FileText className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">Live Transcription</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">AI Analysis</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">Smart Notes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AINoteTaker;
