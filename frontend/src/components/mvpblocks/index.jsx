"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Users, Activity, DollarSign, Eye, Cpu, Server, Zap, TrendingUp } from "lucide-react";
import { DashboardCard } from "../ui/dashboard-card";
import { DashboardHeader } from "../ui/dashboard-header";
import { AdminSidebar } from "../ui/admin-sidebar";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState({ cpu: 0, memory: 0, requestsPerSecond: 0 });
  const [scalingDecision, setScalingDecision] = useState(null);
  const [history, setHistory] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [systemStatus, setSystemStatus] = useState("UP");

  const fetchMetrics = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/metrics/current");
      const data = res.data;
      setMetrics(data);
      setHistory(prev => [...prev.slice(-19), { ...data, time: new Date().toLocaleTimeString() }]);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  const fetchHealth = async () => {
    try {
      const res = await axios.get("http://localhost:5000/health");
      setSystemStatus(res.data.Status);
    } catch (error) {
      setSystemStatus("DOWN");
    }
  }

  const handleScalingEvaluate = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/scaling/evaluate");
      setScalingDecision(res.data);
      toast.success(`Scaling Decision: ${res.data.action}`);
    } catch (error) {
      toast.error("Failed to evaluate scaling");
    }
  };

  useEffect(() => {
    fetchMetrics();
    fetchHealth();
    const interval = setInterval(fetchMetrics, 2000); // Poll every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "CPU Usage",
      value: `${metrics.cpu}%`,
      change: metrics.cpu > 80 ? "Critical" : "Normal",
      changeType: metrics.cpu > 80 ? "negative" : "positive",
      icon: Cpu,
      color: "text-[#9b87f5]",
      bgColor: "bg-[#9b87f5]/10",
    },
    {
      title: "Memory Usage",
      value: `${metrics.memory}%`,
      change: metrics.memory > 80 ? "High" : "Optimal",
      changeType: metrics.memory > 80 ? "negative" : "positive",
      icon: Server,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Requests/Sec",
      value: metrics.requestsPerSecond,
      change: "Real-time",
      changeType: "positive",
      icon: Activity,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "System Status",
      value: systemStatus,
      change: systemStatus === "UP" ? "Healthy" : "Down",
      changeType: systemStatus === "UP" ? "positive" : "negative",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#0a0613] text-white">
        <AdminSidebar />
        <SidebarInset className="bg-[#0a0613]">
          <Toaster position="top-right" />
          <DashboardHeader />

          <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">CloudSense Dashboard</h1>
              <Button
                onClick={handleScalingEvaluate}
                className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Trigger Autoscaling
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <DashboardCard key={index} stat={stat} />
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="mb-4 text-lg font-medium">Real-time Metrics</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={history}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1a1625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Line type="monotone" dataKey="cpu" stroke="#9b87f5" strokeWidth={2} dot={false} name="CPU %" />
                      <Line type="monotone" dataKey="memory" stroke="#3b82f6" strokeWidth={2} dot={false} name="Memory %" />
                      <Line type="monotone" dataKey="requestsPerSecond" stroke="#10b981" strokeWidth={2} dot={false} name="Req/s" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="col-span-3 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="mb-4 text-lg font-medium">Scaling Decisions</h3>
                {scalingDecision ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                      <span className="text-white/60">Action</span>
                      <span className="font-semibold text-[#9b87f5]">{scalingDecision.action}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                      <span className="text-white/60">Reason</span>
                      <span className="text-sm">{scalingDecision.reason}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center text-white/40">
                    No recent scaling actions
                  </div>
                )}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}