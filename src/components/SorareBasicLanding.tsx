import {
    Check,
    Newspaper,
    Linkedin,
    Navigation,
    Target,
    Cloud,
    Users,
} from 'lucide-react'
import { MainNavigation } from './MainNavigation'
import n8nLogo from '@/assets/n8n-logo.png'
import apifyLogo from '@/assets/apify-logo.png'
import mollieLogo from '@/assets/mollie-logo.png'
export const SorareBasicLanding = () => {
    return (
        <div className="min-h-screen bg-background">
            <MainNavigation />

            <div className="container mx-auto px-6 lg:px-8">
                {/* Hero Section */}
                <header className="text-center pt-20 pb-20 max-w-5xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-2 tracking-tighter text-foreground">
                            Notifyer
                        </h1>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground leading-tight mt-8">
                        Turn the web into signals.
                        <br />
                        Not noise.
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
                        Activate real automations as{' '}
                        <span className="text-foreground font-semibold">
                            Trackers
                        </span>
                        . Monitor anything over time. Get structured updates.{' '}
                        <span className="text-foreground font-semibold">
                            No workflows. No coding. No maintenance.
                        </span>
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a
                            href="https://app.notifyer.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                        >
                            Start tracking for free
                        </a>
                        <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/90 transition-all shadow-sm hover:shadow-md">
                            View examples
                        </button>
                    </div>
                </header>

                {/* Video Section */}
                <section className="mb-24 max-w-5xl mx-auto">
                    <div className="bg-card rounded-3xl shadow-sm border border-border/50 overflow-hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full rounded-xl"
                        >
                            <source src="/video.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>

                {/* How It Works */}
                <section className="mb-24 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
                        How It Works
                    </h2>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Four simple steps to automate any web monitoring task
                    </p>
                    <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-4xl">📦</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                                        1
                                    </div>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 text-lg">
                                    Select a Scenario
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Browse prebuilt automations for your needs
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-4xl">⚙️</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                                        2
                                    </div>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 text-lg">
                                    Configure inputs
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Set simple parameters for your tracker
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-4xl">⏰</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                                        3
                                    </div>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 text-lg">
                                    Set time & interval
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Choose when and how often to receive updates
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-4xl">📧</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                                        4
                                    </div>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 text-lg">
                                    Receive updates
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Get structured reports automatically
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="mb-24 max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
                        Transparent Pricing
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Start free, scale as you grow. Pay only for what you use
                        with clear, predictable costs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Free Tier */}
                        <div className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border hover:-translate-y-1">
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-muted rounded-2xl mb-4">
                                        <span className="text-3xl">🌱</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        Free
                                    </h3>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold text-foreground">
                                            $0
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        Perfect to get started
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Up to 3 Trackers
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Weekly intervals only
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Email delivery
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Basic Scenarios
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Community support
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href="https://app.notifyer.me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-md text-center"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Basic Tier */}
                        <div className="group bg-card rounded-3xl p-8 shadow-xl transition-all duration-500 border-2 border-primary hover:-translate-y-1 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                Popular
                            </div>
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                                        <span className="text-3xl">⚡</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        Basic
                                    </h3>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold text-foreground">
                                            $10
                                        </span>
                                        <span className="text-xl text-muted-foreground">
                                            /mo
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        For regular monitoring
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Up to 5 Trackers
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Daily intervals
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                All Scenarios
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Dashboard access
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Email support
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href="https://app.notifyer.me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg text-center"
                                    >
                                        Start Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Pro Tier */}
                        <div className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border hover:-translate-y-1">
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl mb-4">
                                        <span className="text-3xl">🚀</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        Pro
                                    </h3>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold text-foreground">
                                            $30
                                        </span>
                                        <span className="text-xl text-muted-foreground">
                                            /mo
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        For power users
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Unlimited Trackers
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Real-time intervals
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Advanced Scenarios
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                API access
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Priority execution
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Custom channels
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">
                                                Priority support
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href="https://app.notifyer.me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-md text-center"
                                    >
                                        Upgrade Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Section */}
                    <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-card to-muted/30 rounded-3xl p-8 shadow-sm border border-border/50 text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Enterprise
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                            Custom solutions for organizations. Volume
                            discounts, dedicated support, SLA guarantees, and
                            custom integrations.
                        </p>
                        <a
                            href="mailto:enterprise@notifyer.me"
                            className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/90 transition-all shadow-sm hover:shadow-md"
                        >
                            Contact Sales
                        </a>
                    </div>
                </section>

                {/* Live Use Cases */}
                <section className="mb-24 max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
                        Real-World Scenarios
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        See what you can build with Notifyer - from simple
                        alerts to complex monitoring workflows
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border hover:shadow-md transition-all group flex gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Newspaper className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-2">
                                    News Tracker
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Select topics and sources. Every morning at
                                    9, you get a clean summary by email.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border hover:shadow-md transition-all group flex gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-sky-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Linkedin className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-2">
                                    LinkedIn Tracker
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Select profiles and get a highlight feed
                                    without scrolling the algorithm.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border hover:shadow-md transition-all group flex gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Navigation className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-2">
                                    Commute Tracker
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Select your route and transport mode and
                                    receive timing before you leave.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border hover:shadow-md transition-all group flex gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-2">
                                    Competitor Tracker
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Monitor what competitors are building,
                                    shipping, and talking about. Delivered as a
                                    report.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border hover:shadow-md transition-all group flex gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Cloud className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-2">
                                    Weather Tracker
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Get personalized weather updates for your
                                    location and activities at your preferred
                                    time.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border hover:shadow-md transition-all group flex gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-rose-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-2">
                                    Lead Generation Tracker
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Monitor new leads from multiple sources and
                                    get consolidated daily reports with
                                    actionable insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Powered By Section */}
                <section className="mb-24 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                        Powered by Industry Leaders
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Built on robust infrastructure from trusted automation
                        and data platforms
                    </p>
                    <div className="bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 rounded-3xl p-12 border border-border/30">
                        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20">
                            <div className="flex items-center justify-center px-10 py-5 bg-card rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg border border-border/20">
                                <img
                                    src={n8nLogo}
                                    alt="n8n workflow automation"
                                    className="h-12 w-auto"
                                />
                            </div>
                            <div className="flex items-center justify-center px-10 py-5 bg-card rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg border border-border/20">
                                <img
                                    src={apifyLogo}
                                    alt="Apify web scraping"
                                    className="h-12 w-auto"
                                />
                            </div>
                            <div className="flex items-center justify-center px-10 py-5 bg-card rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg border border-border/20">
                                <img
                                    src={mollieLogo}
                                    alt="Mollie payments"
                                    className="h-12 w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mental Model */}
                <section className="mb-24 max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
                        Core Concepts
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Three building blocks that power your automated
                        workflows
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                            <div className="mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-3">
                                    <span className="text-2xl">📦</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Scenario
                            </h3>
                            <p className="text-muted-foreground mb-2">
                                A prebuilt micro-app
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Ready-to-use automations with defined inputs and
                                outputs. Think of them as specialized monitoring
                                tools.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                            <div className="mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-3">
                                    <span className="text-2xl">⚡</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Tracker
                            </h3>
                            <p className="text-muted-foreground mb-2">
                                Your running instance
                            </p>
                            <p className="text-sm text-muted-foreground">
                                An activated Scenario configured with your
                                settings, running on your schedule.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                            <div className="mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-3">
                                    <span className="text-2xl">🌐</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Notifyer
                            </h3>
                            <p className="text-muted-foreground mb-2">
                                The operating system
                            </p>
                            <p className="text-sm text-muted-foreground">
                                A platform that turns web data into structured,
                                scheduled signals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pb-24 max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-12 md:p-16 border border-primary/20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                            Stop checking. Start receiving.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join thousands turning web chaos into structured
                            signals
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a
                                href="https://app.notifyer.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Create your first Tracker
                            </a>
                            <a
                                href="https://app.notifyer.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-all shadow-md border border-border"
                            >
                                Explore Scenarios
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
