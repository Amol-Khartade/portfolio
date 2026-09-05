'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  Terminal,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate interactive transmission & create mailto link
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      formState.subject || 'Technical Inquiry via Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="emerald" pulse>
            DIRECT TRANSMISSION PROTOCOL
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {PORTFOLIO_DATA.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Quick Connect & Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card glow="emerald" className="space-y-6 bg-slate-950/80 border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-white">
                  Let’s Build Something Remarkable
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Available for leadership roles, mobile architectural advisory, offline-first system designs, and high-velocity development engagements.
                </p>
              </div>

              {/* Email Copier Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400">PRIMARY EMAIL</div>
                    <div className="font-mono text-xs sm:text-sm text-slate-200 truncate font-semibold">
                      {PORTFOLIO_DATA.personal.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 shrink-0 border border-slate-700"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Verified Channels
                </span>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-cyan-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">LinkedIn</div>
                      <div className="text-xs font-mono text-slate-400">
                        {PORTFOLIO_DATA.personal.name}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-emerald-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">GitHub</div>
                      <div className="text-xs font-mono text-slate-400">@amolkhartade</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </Card>
          </div>

          {/* Right: Modern Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <Card glow="cyan" className="bg-slate-950/80 border-slate-800">
              <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span>TRANSMIT_MESSAGE.sh</span>
                </div>
                <Badge variant="cyan" size="sm">
                  PORT: 443 / ENCRYPTED
                </Badge>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4 font-mono"
                >
                  <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-sans">
                    Transmission Dispatched
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your local mail client has been opened with your pre-filled inquiry. I will review and respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white"
                  >
                    Send Another Dispatch
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-slate-400 uppercase tracking-wider"
                      >
                        Identifier / Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-sans text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-slate-400 uppercase tracking-wider"
                      >
                        Return Address / Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-sans text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-slate-400 uppercase tracking-wider"
                    >
                      Protocol / Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="High-Performance Mobile Engagement / Advisory"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-sans text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-400 uppercase tracking-wider"
                    >
                      Payload / Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Detail your engineering challenges, offline synchronization requirements, or project scope..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-sans text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_0_rgba(16,185,129,0.7)]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Execute Transmission</span>
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
