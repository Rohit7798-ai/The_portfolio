import React, { memo } from 'react';
import AnimatedProjectCard from './AnimatedProjectCard';
import AnimateOnScroll from './MicroInteractions';
import studentPerformanceDashboard from '../assets/student-performance-dashboard.webp';
import bitcoinSentimentAnalysis from '../assets/bitcoin-sentiment-analysis.webp';
import titanicSurvivalAnalysis from '../assets/titanic-survival-analysis.webp';
import telecomChurnAnalysis from '../assets/telecom-churn-analysis.webp';
import superstorePerformance from '../assets/superstore-performance.webp';
import studentDepressionAnalysis from '../assets/student-depression-analysis.webp';
import aiJobsImpact from '../assets/ai-jobs-impact.webp';
import iplAuctionSummary from '../assets/ipl-auction-summary.webp';
import luminaViz from '../assets/luminaviz.webp';

const Portfolio = memo(() => {
  // Component for displaying academic projects without filtering

  const projects = [
    {
      id: 10,
      title: 'LuminaViz - Interactive Analytics Dashboard',
      category: 'data-science',
      image: luminaViz,
      description: 'An interactive web application that empowers users to upload custom datasets (CSV/Excel) and instantly generate dynamic visual dashboards. Features highly customizable chart modules including bar graphs, scatter plots, line trends, and donut charts with auto-inferred data types, responsive resizing, and clean analytical insights.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'CSV/Excel Parser'],
      year: '2025',
      live: 'https://luminaviz.netlify.app/'
    },
    {
      id: 1,
      title: 'Netflix Data Analysis Project',
      category: 'data-science',
      image: '/lovable-uploads/1b1a06e0-9aff-45c7-a7e7-e9a02971cb69.webp',
      description: 'Netflix Data Analysis Project | Jun 2025 – Jul 2025. Analysis of Netflix content growth over time, popular genres and countries, clear dominance of Movies over TV Shows, and key content contributors (e.g., US, India)',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
      year: '2025'
    },
    {
      id: 2,
      title: 'Telecom Customer Churn Analysis',
      category: 'data-science',
      image: telecomChurnAnalysis,
      description: 'Analyzed churn across 7,000+ customer records, identifying an overall churn rate of 26.5% with month-to-month contract holders churning at 42.5% vs. just 3.2% for two-year contracts. Segmented churn by tenure, payment method, and service bundles; found 40%+ churn in the 0-2 month cohort and 44% churn for electronic-check payers. Produced a strategic recommendations report covering onboarding campaigns, senior-citizen outreach, and AutoPay incentives projected to reduce churn by up to 30+ percentage points.',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Churn Analytics', 'Predictive Modeling'],
      year: '2025'
    },
    {
      id: 3,
      title: 'Superstore Business Performance Analysis',
      category: 'data-science',
      image: superstorePerformance,
      description: 'Explored 9,994 retail transaction records spanning multiple years, segmenting $2.2M+ in revenue by shipping mode, customer type, and geography. Identified furniture as a loss-making category (Tables: -$17,725 despite $206K in sales) and Technology as the top profit driver ($145K+), enabling prioritized product-mix recommendations. Mapped geographic concentration risk—California alone accounts for 37% of top-market sales—and proposed regional diversification strategies.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Business Analytics', 'Financial Analysis'],
      year: '2025'
    },
    {
      id: 4,
      title: 'Student Depression Analysis',
      category: 'data-science',
      image: studentDepressionAnalysis,
      description: 'Processed 27,901 records across 18 demographic, academic, lifestyle, and mental-health features to surface key depression risk factors. Found that financial stress, poor sleep (<5 hrs), high academic pressure (levels 3-5), and unhealthy diet are the strongest correlates of depression among 18-34-year-olds. Visualized results through heatmaps, bar charts, and age-trend line plots; delivered actionable insights for early intervention targeting.',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Behavioral Analytics'],
      year: '2025'
    },
    {
      id: 5,
      title: 'AI Impact on Jobs by 2030',
      category: 'data-science',
      image: aiJobsImpact,
      description: 'Analyzed 3,000 job records including salary, AI Exposure Index, Automation Probability, and skill profiles to categorize roles into low/medium/high automation risk bands. Challenged the assumption that high-paying jobs are automation-safe; identified future-proof roles including Doctor, Research Scientist, AI Engineer, Nurse, and Teacher based on skill indicators. Demonstrated that skills matter more than education credentials alone in predicting automation resilience.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Predictive Modeling'],
      year: '2025'
    },
    {
      id: 6,
      title: 'Student Performance Analysis',
      category: 'data-science',
      image: studentPerformanceDashboard,
      description: 'Students who completed the test preparation course scored significantly higher on average. Students with standard lunch performed better than those with free/reduced lunch. Female students tend to score higher in reading and writing. Strong correlation exists between reading and writing scores.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis'],
      year: '2024'
    },
    {
      id: 7,
      title: 'Trader Behavior vs Bitcoin Market Sentiment',
      category: 'data-science',
      image: bitcoinSentimentAnalysis,
      description: 'Higher risk and larger position sizes during Fear days. Sell-side trades dominate during Extreme Greed. Volatility increases profitability spread during emotional market conditions',
      technologies: ['Python', 'Pandas', 'Financial Analysis', 'Sentiment Analysis'],
      year: '2024'
    },
    {
      id: 8,
      title: 'Titanic Survival Analysis',
      category: 'data-science',
      image: titanicSurvivalAnalysis,
      description: 'Gender: Females had a much higher survival rate compared to males. Ticket Class: First and second-class passengers survived more often than those in third class. Embarkation Point: Passengers boarding at Southampton experienced the highest fatalities. Family Size: Having many siblings or spouses on board was linked to lower survival chances. Age & Fare: Younger passengers and those who paid fares above the median had better odds of survival. In addition, higher-class passengers with fewer dependents had the best outcomes.',
      technologies: ['Python', 'Pandas', 'Data Analysis', 'Statistical Modeling'],
      year: '2024'
    },
    {
      id: 9,
      title: 'IPL Auction 2023 - Insightful Summary',
      category: 'data-science',
      image: iplAuctionSummary,
      description: 'Summarized auction dynamics across teams, player categories, and bid patterns to surface spend efficiency and value picks.',
      technologies: ['Excel', 'Python', 'Data Analysis', 'Sports Analytics'],
      year: '2024'
    }
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-3 sm:mb-4">Projects</h2>
            <p className="text-base sm:text-lg lg:text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed">
              Student projects and coursework showcasing my learning journey in data science, Python programming, and statistical analysis
            </p>
          </div>
        </AnimateOnScroll>

        {/* Enhanced Projects Grid with Animated Cards - Mobile Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="scale-in" delay={index * 100}>
              <AnimatedProjectCard project={project} index={index} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
});
Portfolio.displayName = 'Portfolio';

export default Portfolio;
