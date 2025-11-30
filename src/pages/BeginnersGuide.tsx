import { Zap, Clock, Bell, Workflow } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MainNavigation } from '@/components/MainNavigation';
import { Helmet } from 'react-helmet-async';

const BeginnersGuide = () => {
  return (
    <>
      <Helmet>
        <title>Getting Started with Notifyer - Complete Guide to Trackers & Scenarios</title>
        <meta name="description" content="Learn how to use Notifyer to create automated trackers. Complete guide covering scenarios, trackers, scheduling, and delivery options." />
        <meta name="keywords" content="Notifyer guide, web automation, trackers, scenarios, scheduled monitoring, automated updates" />
        <link rel="canonical" href="https://notifyer.me/beginners-guide" />
        <meta property="og:title" content="Getting Started with Notifyer - Complete Guide" />
        <meta property="og:description" content="Master Notifyer automations: learn about scenarios, trackers, scheduling, and delivery options." />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <MainNavigation />

        <main className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <header className="pt-16 pb-12 text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Getting Started with
              <br />
              <span className="text-primary">Notifyer</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-muted-foreground font-light">
              Learn how to turn web chaos into structured signals with automated Trackers
            </p>
          </header>

          {/* Core Concepts */}
          <article className="py-20 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Core Concepts
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Understand the building blocks of Notifyer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="bg-gradient-to-br from-card to-primary/5 border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"></div>
                      <div className="relative p-4 bg-card rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                        <span className="text-5xl">📦</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Scenarios</h3>
                  <p className="text-base text-muted-foreground leading-relaxed text-center mb-4">
                    Prebuilt automations with defined inputs, sources, and outputs. Think of them as micro-apps designed for specific monitoring tasks.
                  </p>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Example:</span> A "News Tracker" scenario requires topic selection and news sources as inputs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-card to-primary/5 border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"></div>
                      <div className="relative p-4 bg-card rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                        <span className="text-5xl">⚡</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Trackers</h3>
                  <p className="text-base text-muted-foreground leading-relaxed text-center mb-4">
                    Your activated instance of a Scenario. Each Tracker runs on your chosen schedule and delivers updates to your preferred channels.
                  </p>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Example:</span> Your "Tech News" tracker runs daily at 9 AM and emails you AI and startup updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* How to Create a Tracker */}
          <article className="py-20 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                How to Create a Tracker
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light mb-12">
                Four simple steps to start monitoring anything on the web
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-border/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle className="text-2xl">Choose a Scenario</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Browse the Scenario marketplace and select one that matches your monitoring needs. Each Scenario is purpose-built for specific use cases.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Popular:</span> News Tracker, LinkedIn Tracker, Competitor Tracker, Weather Tracker
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle className="text-2xl">Configure Inputs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fill in simple parameters specific to your chosen Scenario. No technical knowledge required - just answer straightforward questions.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Example:</span> For News Tracker, select topics like "AI" and sources like "TechCrunch"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle className="text-2xl">Set Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Choose when and how often you want to receive updates. Options range from daily to real-time, depending on your plan.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Free:</span> Daily updates • <span className="font-semibold text-foreground">Basic:</span> Hourly • <span className="font-semibold text-foreground">Pro:</span> Real-time
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <CardTitle className="text-2xl">Receive Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get structured, actionable updates delivered automatically to your chosen channels. No more manual checking required.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Channels:</span> Email, Dashboard, Notifications (Pro: WhatsApp, Slack, custom webhooks)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </article>

          {/* Key Features */}
          <article className="py-20 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Key Features
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <span className="text-4xl">⏰</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Run your Trackers on any schedule that suits your workflow - from daily digests to real-time monitoring.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <span className="text-4xl">📬</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Multiple Delivery Channels</h3>
                <p className="text-muted-foreground">
                  Receive updates via email, in-app dashboard, or integrate with your favorite tools using webhooks.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <span className="text-4xl">✨</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">No Code Required</h3>
                <p className="text-muted-foreground">
                  Simple, guided setup process. No workflows to build, no code to write, no technical expertise needed.
                </p>
              </div>
            </div>
          </article>

          {/* Best Practices */}
          <article className="py-20 animate-fade-in">
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Best Practices</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Start Simple</h4>
                    <p className="text-muted-foreground">Begin with one or two Trackers to understand how the system works before scaling up.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Choose the Right Schedule</h4>
                    <p className="text-muted-foreground">Match update frequency to your needs. Not everything requires real-time monitoring.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Refine Your Inputs</h4>
                    <p className="text-muted-foreground">After your first few updates, adjust parameters to ensure you're getting the most relevant information.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Use Multiple Trackers</h4>
                    <p className="text-muted-foreground">Create separate Trackers for different contexts rather than trying to monitor everything in one.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CTA */}
          <section className="pb-24 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create your first Tracker in minutes and start receiving structured updates automatically.
            </p>
            <a 
              href="https://app.notifyer.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Launch Notifyer
            </a>
          </section>
        </main>
      </div>
    </>
  );
};

export default BeginnersGuide;
