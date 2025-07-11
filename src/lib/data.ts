import { FiTrendingUp, FiBarChart2 } from 'react-icons/fi'
import { MdStore, MdOutlineSettingsSuggest } from 'react-icons/md'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { GiRocket } from 'react-icons/gi'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsTools } from 'react-icons/bs'
import { HiOutlineAdjustments } from 'react-icons/hi'
import { FaHandHoldingUsd } from 'react-icons/fa'
import Launch from '@/assets/images/launch.jpg'
import Ecommerce from '@/assets/images/ecommerce.jpg'
import Investor from '@/assets/images/investor.jpg'
import Marketing from '@/assets/images/marketing.jpg'
import Operations from '@/assets/images/operations.jpg'
import Testing from '@/assets/images/testing.jpg'
import Growth from '@/assets/images/growth.jpg'
import Sales from '@/assets/images/sales.jpg'
import Consulting from '@/assets/images/consulting.jpg'
import Campaign from '@/assets/images/campaign.jpg'

export const servicesData = [
  {
    title: 'Business Development Consulting',
    description:
      'We help retail and e-commerce brands scale by identifying growth opportunities, optimizing operations, and creating effective go-to-market strategies. Whether you’re launching or scaling, we provide clear roadmaps to success.',
    icon: FiTrendingUp,
    image: Consulting.src,
  },
  {
    title: 'E-commerce Store Optimization',
    description:
      'We build, audit, and scale online stores on platforms like Shopify, WooCommerce, and BigCommerce. This includes product-market fit analysis, store funnel optimization, and boosting conversion rates.',
    icon: MdStore,
    image: Ecommerce.src,
  },
  {
    title: 'Retail Business Growth Solutions',
    description:
      'Our team delivers proven frameworks to increase in-store and online traffic, improve customer retention, and implement customer-centric marketing strategies tailored for fashion, food, skincare, and lifestyle products.',
    icon: RiShoppingBag3Line,
    image: Growth.src,
  },
  {
    title: 'Strategy & Launch Campaigns',
    description:
      'From branding to beta testing and product launches—we work with startups and consumer goods brands to create impactful market entry strategies that convert attention into sales.',
    icon: GiRocket,
    image: Launch.src,
  },
  {
    title: 'Marketing Services',
    description:
      'We use performance-driven digital marketing across Meta Ads, Google Ads, SEO, and influencer campaigns to acquire customers profitably. Our approach focuses on ROI, not vanity metrics.',
    icon: FiBarChart2,
    image: Marketing.src,
  },
  {
    title: 'Market & Consumer Research',
    description:
      'Get accurate market intelligence and data-driven insights. We analyze consumer trends, competitor activity, and demand patterns to help you make informed, confident decisions.',
    icon: AiOutlinePieChart,
    image: Campaign.src,
  },
  {
    title: 'Product Development & Testing',
    description:
      'We help with idea validation, MVP development, and A/B testing, ensuring your product is refined for your ideal customer base before large-scale launch.',
    icon: BsTools,
    image: Testing.src,
  },
  {
    title: 'Sales Funnel Development',
    description:
      'Design and implement high-converting sales funnels and CRM systems that increase lead capture, nurture prospects, and drive consistent revenue growth.',
    icon: HiOutlineAdjustments,
    image: Sales.src,
  },
  {
    title: 'Investor Pitch & Funding',
    description:
      'Perfect for startups and scaling companies—we create compelling pitch decks, financial models, and investor strategy that improve funding outcomes.',
    icon: FaHandHoldingUsd,
    image: Investor.src,
  },
  {
    title: 'Business Operations Management',
    description:
      'For businesses that need a strategic operator: we manage team structure, project workflows, and KPI tracking while implementing systems for long-term efficiency and scaling.',
    icon: MdOutlineSettingsSuggest,
    image: Operations.src,
  },
]
