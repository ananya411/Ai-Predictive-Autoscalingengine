import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function SignIn() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-120, 120], [14, -14]);
    const rotateY = useTransform(x, [-120, 120], [-14, 14]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signin", formData);
            if (res.status === 200) {
                toast.success("Welcome back 🚀");
                localStorage.setItem("token", res.data.token);
                setTimeout(() => navigate("/dashboard"), 1200);
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Signin failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0a0613] text-white overflow-hidden">
            <Toaster position="top-center" />

            {/* Animated grid background */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            {/* Ambient blobs */}
            <motion.div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#9b87f5]/25 blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.6, 0.25] }} transition={{ duration: 10, repeat: Infinity }} />
            <motion.div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/25 blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 12, repeat: Infinity }} />

            <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2">
                {/* LEFT — PRODUCT STORY */}
                <div className="hidden lg:flex flex-col justify-center px-20">
                    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-6xl font-extrabold leading-tight bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                        CloudSense
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="mt-6 max-w-xl text-xl text-white/70">
                        Scale smarter with <span className="text-white">AI-powered cloud insights</span>. Ensure peak performance, zero downtime, and optimized cloud costs.
                    </motion.p>

                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 space-y-4 text-white/70">
                        <li>⚡ Predict incidents before they happen</li>
                        <li>📊 Real-time AI cost analysis</li>
                        <li>🛡️ Self-healing cloud infrastructure</li>
                    </motion.ul>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-12 grid grid-cols-3 gap-6">
                        <Stat value="24/7" label="Monitoring" />
                        <Stat value="99.99%" label="Uptime" />
                        <Stat value="AI" label="Driven" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="relative mt-14 h-72 overflow-hidden rounded-3xl border border-white/10">
                        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" alt="Cloud dashboard" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    </motion.div>
                </div>

                {/* RIGHT — SIGNIN FORM */}
                <div className="flex items-center justify-center px-6">
                    <motion.div
                        style={{ rotateX, rotateY }}
                        onMouseMove={(e) => {
                            const r = e.currentTarget.getBoundingClientRect();
                            x.set(e.clientX - r.left - r.width / 2);
                            y.set(e.clientY - r.top - r.height / 2);
                        }}
                        onMouseLeave={() => { x.set(0); y.set(0); }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-[#9b87f5]/40 via-transparent to-[#9b87f5]/40 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100" />

                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-[#9b87f5] to-white bg-clip-text text-transparent">Welcome Back</h2>
                            <p className="mt-2 text-white/60">Sign in to CloudSense</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white/80">Email</Label>
                                <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/5 border-white/10 text-white" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-white/80">Password</Label>
                                <Input id="password" type="password" value={formData.password} onChange={handleChange} required className="bg-white/5 border-white/10 text-white" />
                            </div>

                            <Button type="submit" disabled={loading} className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] transition-all">
                                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-white/60">
                            Don’t have an account? <Link to="/signup" className="text-[#9b87f5] hover:underline">Sign up</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function Stat({ value, label }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{label}</div>
        </div>
    );
}