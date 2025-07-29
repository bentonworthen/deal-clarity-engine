
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';

const LoginScreen = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setShowWelcome(true);
    }, 2000);
  };

  if (showWelcome) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Sarah!</h2>
          <p className="text-slate-300">Ready to analyze your next big opportunity?</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors">
            <CardHeader className="text-center">
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <CardTitle className="text-white text-lg">12 New Deals</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 text-sm">Ready for analysis</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors">
            <CardHeader className="text-center">
              <BarChart3 className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <CardTitle className="text-white text-lg">8.7 Avg Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 text-sm">This quarter</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors">
            <CardHeader className="text-center">
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <CardTitle className="text-white text-lg">94% Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 text-sm">Prediction rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white mb-2">
            Sign in to Decide
          </CardTitle>
          <p className="text-slate-300">
            Access your deal analysis dashboard
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="sarah@rockportvc.com"
              defaultValue="sarah@rockportvc.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          <Button 
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoggingIn ? 'Signing in...' : 'Sign In'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;
