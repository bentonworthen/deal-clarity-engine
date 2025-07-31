import React, { useState } from 'react';
import { 
  Button, 
  StatusPill, 
  DashboardCard, 
  MetricCard, 
  Header, 
  Sidebar, 
  SidebarItem 
} from '@/components/custom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  Home, 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Phone,
  Calendar,
  Star,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 125000, deals: 12 },
    { month: 'Feb', revenue: 180000, deals: 15 },
    { month: 'Mar', revenue: 220000, deals: 18 },
    { month: 'Apr', revenue: 195000, deals: 16 },
    { month: 'May', revenue: 280000, deals: 22 },
    { month: 'Jun', revenue: 320000, deals: 25 },
  ];

  const dealStatusData = [
    { name: 'B2B', value: 45, color: '#00D6A3' },
    { name: 'B2C', value: 35, color: '#5B6BFF' },
    { name: 'Reverse Charge', value: 20, color: '#f59e0b' },
  ];

  const recentTransactions = [
    {
      id: 1,
      company: 'TechFlow Solutions',
      amount: 125000,
      status: 'b2b' as const,
      date: '2024-01-15',
      dealScore: 8.5,
    },
    {
      id: 2,
      company: 'DataMesh Inc',
      amount: 89000,
      status: 'b2c' as const,
      date: '2024-01-14',
      dealScore: 7.2,
    },
    {
      id: 3,
      company: 'GreenLab Systems',
      amount: 156000,
      status: 'reverse-charge' as const,
      date: '2024-01-13',
      dealScore: 9.1,
    },
    {
      id: 4,
      company: 'CloudSync Pro',
      amount: 98000,
      status: 'b2b' as const,
      date: '2024-01-12',
      dealScore: 6.8,
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: ${entry.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-snow-white via-white to-gray-50">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      >
        <SidebarItem icon={<Home className="h-5 w-5" />} isActive>
          Dashboard
        </SidebarItem>
        <SidebarItem icon={<BarChart3 className="h-5 w-5" />}>
          Analytics
        </SidebarItem>
        <SidebarItem icon={<Users className="h-5 w-5" />} badge={12}>
          Deals
        </SidebarItem>
        <SidebarItem icon={<FileText className="h-5 w-5" />}>
          Reports
        </SidebarItem>
        <SidebarItem icon={<Settings className="h-5 w-5" />}>
          Settings
        </SidebarItem>
      </Sidebar>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title="Deal Clarity Dashboard"
          subtitle="AI-Powered Investment Intelligence"
          actions={
            <div className="flex items-center gap-3">
              <Button variant="secondary">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Demo
              </Button>
              <Button>
                <Zap className="mr-2 h-4 w-4" />
                New Analysis
              </Button>
            </div>
          }
        />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Total Revenue"
                value="$1,280,000"
                icon={<DollarSign className="h-5 w-5" />}
                trend={{ value: 12.5, isPositive: true }}
              />
              <MetricCard
                title="Active Deals"
                value="108"
                icon={<Target className="h-5 w-5" />}
                trend={{ value: 8.2, isPositive: true }}
              />
              <MetricCard
                title="Avg Deal Score"
                value="8.4"
                icon={<Star className="h-5 w-5" />}
                trend={{ value: 2.1, isPositive: false }}
              />
              <MetricCard
                title="Success Rate"
                value="94%"
                icon={<Activity className="h-5 w-5" />}
                trend={{ value: 3.7, isPositive: true }}
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DashboardCard title="Revenue Trends" subtitle="Monthly revenue and deal count">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="revenue" fill="#5B6BFF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </DashboardCard>

              <DashboardCard title="Deal Status Distribution" subtitle="Breakdown by transaction type">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={dealStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {dealStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </DashboardCard>
            </div>

            {/* Recent Transactions */}
            <DashboardCard 
              title="Recent Transactions" 
              subtitle="Latest deal activities and scores"
              action={
                <Button variant="secondary" size="sm">
                  View All
                </Button>
              }
            >
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div 
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-vat-indigo/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-vat-indigo to-mint-tech rounded-lg flex items-center justify-center text-white font-bold">
                        {transaction.company.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{transaction.company}</h4>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="font-mono font-semibold text-gray-900">
                          ${transaction.amount.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">Amount</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-mono font-semibold text-gray-900">
                          {transaction.dealScore}
                        </div>
                        <div className="text-sm text-gray-500">Score</div>
                      </div>
                      
                      <StatusPill status={transaction.status}>
                        {transaction.status.toUpperCase()}
                      </StatusPill>
                      
                      <ArrowUpRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard title="Start New Analysis" subtitle="Begin evaluating a new opportunity">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Upload company data or start with a company search to begin your analysis.
                  </p>
                  <Button className="w-full">
                    <Zap className="mr-2 h-4 w-4" />
                    New Analysis
                  </Button>
                </div>
              </DashboardCard>
              
              <DashboardCard title="Schedule Demo Call" subtitle="Book a personalized walkthrough">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    See how our AI can transform your deal evaluation process.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                </div>
              </DashboardCard>
              
              <DashboardCard title="Generate Report" subtitle="Create comprehensive deal reports">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Export detailed analysis reports for your investment committee.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </div>
              </DashboardCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 