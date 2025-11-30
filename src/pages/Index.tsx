import { SorareBasicLanding } from '@/components/SorareBasicLanding';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Notifyer - Turn the web into signals, not noise</title>
        <meta name="description" content="Activate real automations as Trackers. Monitor anything over time. Get structured updates automatically. No workflows. No coding. No maintenance." />
        <meta name="keywords" content="web automation, trackers, monitoring, scheduled updates, notifyer, scenarios, automation platform" />
        <link rel="canonical" href="https://notifyer.me" />
        <meta property="og:title" content="Notifyer - Turn the web into signals, not noise" />
        <meta property="og:description" content="Monitor anything over time with automated Trackers. Get structured updates without workflows or coding." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notifyer - Web Automation Simplified" />
        <meta name="twitter:description" content="Turn the web into signals. Activate automations as Trackers and get structured updates automatically." />
      </Helmet>
      <SorareBasicLanding />
    </>
  );
};

export default Index;
