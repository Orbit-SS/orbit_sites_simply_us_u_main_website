'use client'
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import styles from './design2.module.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

const services = [
  {
    num: '01',
    title: 'Digital Marketing',
    description: 'Paid ads, SEO, email funnels, and full-funnel campaigns that deliver measurable ROI.',
    features: [
      'Full-funnel campaign strategy & execution',
      'SEO audits with keyword research & link building',
      'Google Ads & Bing Ads management',
      'Email automation sequences & nurture flows',
    ],
  },
  {
    num: '02',
    title: 'Social Content Creation',
    description: 'Scroll-stopping content, reels, graphics, and social strategy that grows your audience.',
    features: [
      'Platform-specific content calendars',
      'Reels, carousels & graphic design',
      'Community management & engagement',
      'Monthly analytics & growth reports',
    ],
  },
  {
    num: '03',
    title: 'Website Design',
    description: 'Custom, conversion-focused websites that look premium and perform even better.',
    features: [
      'Custom UI/UX design & prototyping',
      'Mobile-first responsive development',
      'Sales funnels & landing page optimization',
      'E-commerce store setup & configuration',
    ],
  },
  {
    num: '04',
    title: 'Website Hosting',
    description: 'Fast, secure, and reliable hosting with 99.9% uptime and hands-free management.',
    features: [
      '99.9% uptime with 24/7 monitoring',
      'Free SSL certificates & firewall protection',
      'Daily automated backups with one-click restore',
      'Managed WordPress updates & staging environments',
    ],
  },
  {
    num: '05',
    title: 'Software & App Development',
    description: 'Custom apps, CRM integrations, workflow automation, and scalable software solutions.',
    features: [
      'Custom web & mobile application development',
      'CRM integration & data migration',
      'Workflow automation & process optimization',
      'RESTful & GraphQL API development',
    ],
  },
  {
    num: '06',
    title: 'Ad Creation & Campaign Management',
    description: 'High-converting Google Ads, Meta campaigns, creative design, and ongoing A/B testing.',
    features: [
      'Google Ads & Meta Ads campaign management',
      'Custom ad creative design & video production',
      'Audience targeting & retargeting strategy',
      'Ongoing A/B testing & performance optimization',
    ],
  },
]

const portfolio = [
  {
    client: 'Bloom Wellness Studio',
    industry: 'Health & Wellness',
    metric: '400%',
    metricLabel: 'Follower Growth',
    result: 'Revenue +185% in 6 months',
    tags: ['Social Content', 'Digital Marketing'],
  },
  {
    client: 'Apex Property Group',
    industry: 'Real Estate',
    metric: '2×',
    metricLabel: 'Faster Delivery',
    result: 'Overhead reduced 35%',
    tags: ['Website Design', 'Software Dev'],
  },
  {
    client: 'Elevate Coaching Co',
    industry: 'Professional Services',
    metric: '312%',
    metricLabel: 'ROI Increase',
    result: '3x ROAS, freed 15hrs/week',
    tags: ['Ad Campaigns', 'Automation'],
  },
  {
    client: 'Oakridge Financial',
    industry: 'Finance',
    metric: '3×',
    metricLabel: 'Conversion Rate',
    result: 'Tripled bookings in 90 days',
    tags: ['Website Design', 'Hosting'],
  },
  {
    client: 'Luxe Salon & Spa',
    industry: 'Beauty & Wellness',
    metric: '60%',
    metricLabel: 'Time Saved',
    result: 'Eliminated double-bookings',
    tags: ['Software Dev', 'Automation'],
  },
  {
    client: 'Clearview Dental',
    industry: 'Healthcare',
    metric: 'Page 1',
    metricLabel: 'in 6 Months',
    result: 'Ranked for 12 top keywords',
    tags: ['SEO', 'Paid Ads'],
  },
]

export default function Design2Page() {
  return (
    <div className={`${styles.root} ${spaceGrotesk.variable}`}>
      {/* Back link */}
      <Link href="/" className={styles.backLink}>
        ← Back
      </Link>

      {/* ── SECTION 1: HERO ─────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroCornerLeft}>SIMPLY US &amp; U</div>
        <div className={styles.heroCornerRight}>
          <a href="tel:+17705240488">(770) 524-0488</a>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroGiant}>
            DIGITAL
            <br />
            MARKETING.
            <br />
            WEB DESIGN.
            <br />
            SOFTWARE.
          </h1>
          <div className={styles.heroRule} />
          <p className={styles.heroTagline}>YOUR GROWTH. OUR OBSESSION.</p>
          <div className={styles.heroCtas}>
            <a href="/contact" className={styles.heroCtaYellow}>
              GET A FREE QUOTE
            </a>
            <a href="mailto:Support@SimplyUsandU.com" className={styles.heroCtaWhite}>
              OR EMAIL US
            </a>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className={styles.heroTicker}>
          <div className={styles.heroTickerInner}>
            <span>
              100+ CLIENTS SERVED&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;312% AVG
              ROI&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;4.2M+ IMPRESSIONS&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;5-STAR
              RATING&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;
            </span>
            <span aria-hidden>
              100+ CLIENTS SERVED&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;312% AVG
              ROI&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;4.2M+ IMPRESSIONS&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;5-STAR
              RATING&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICES ─────────────────────────────── */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>02 / SERVICES</p>
          <h2 className={styles.servicesH2}>WHAT WE DO</h2>
        </div>
        <div className={styles.servicesStrips}>
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`${styles.strip} ${i % 2 === 1 ? styles.stripAlt : ''}`}
            >
              <div className={styles.stripNum}>{svc.num}</div>
              <div className={styles.stripContent}>
                <h3 className={styles.stripTitle}>{svc.title}</h3>
                <p className={styles.stripDesc}>{svc.description}</p>
                <ul className={styles.stripFeatures}>
                  {svc.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.stripArrow}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: WHY US / THE NUMBERS ─────────────────── */}
      <section id="about" className={styles.numbers}>
        <div className={styles.container}>
          <h2 className={styles.numbersH2}>THE NUMBERS DON&apos;T LIE.</h2>
          <div className={styles.statsStack}>
            <div className={styles.statRow}>
              <span className={styles.statValue}>100+</span>
              <span className={styles.statLabel}>CLIENTS SERVED</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statValue}>312%</span>
              <span className={styles.statLabel}>AVG ROI DELIVERED</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statValue}>4.2M+</span>
              <span className={styles.statLabel}>TOTAL IMPRESSIONS</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statValue}>5-STAR</span>
              <span className={styles.statLabel}>CLIENT RATING</span>
            </div>
          </div>

          {/* Value pillars */}
          <div className={styles.valuePillars}>
            <div className={styles.valuePillar}>
              <span className={styles.valuePillarWord}>INNOVATION.</span>
              <p className={styles.valuePillarDesc}>
                We stay ahead of the curve so you do too. AI-driven automation, emerging ad platforms,
                cutting-edge strategy in every engagement.
              </p>
            </div>
            <div className={styles.valuePillar}>
              <span className={styles.valuePillarWord}>PARTNERSHIP.</span>
              <p className={styles.valuePillarDesc}>
                We embed ourselves in your business like an in-house team — not a vendor. Your wins
                are our wins, your goals become our obsession.
              </p>
            </div>
            <div className={styles.valuePillar}>
              <span className={styles.valuePillarWord}>RESULTS.</span>
              <p className={styles.valuePillarDesc}>
                Big-agency results without the big-agency price tag. Every campaign, every dollar
                measured and optimized for maximum return.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className={styles.numbersTimeline}>
            <div className={styles.timelineRow}>
              <span className={styles.timelineYear}>2017</span>
              <span className={styles.timelineEvent}>— FOUNDED</span>
            </div>
            <div className={styles.timelineRow}>
              <span className={styles.timelineYear}>2018</span>
              <span className={styles.timelineEvent}>— FIRST ENTERPRISE PARTNER</span>
            </div>
            <div className={styles.timelineRow}>
              <span className={styles.timelineYear}>2020</span>
              <span className={styles.timelineEvent}>— EXPANDED TO SOFTWARE</span>
            </div>
            <div className={styles.timelineRow}>
              <span className={styles.timelineYear}>2024</span>
              <span className={styles.timelineEvent}>— 100 CLIENTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PORTFOLIO ────────────────────────────── */}
      <section id="portfolio" className={styles.work}>
        <div className={styles.container}>
          <h2 className={styles.workH2}>WORK.</h2>
          <div className={styles.workGrid}>
            {portfolio.map((item) => (
              <div key={item.client} className={styles.workItem}>
                <p className={styles.workClient}>{item.client}</p>
                <p className={styles.workIndustry}>{item.industry}</p>
                <div className={styles.workMetricWrap}>
                  <span className={styles.workMetric}>{item.metric}</span>
                  <span className={styles.workMetricLabel}>{item.metricLabel}</span>
                </div>
                <p className={styles.workResult}>{item.result}</p>
                <div className={styles.workTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.workTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SERVICE AREA ─────────────────────────── */}
      <section id="service-area" className={styles.serviceArea}>
        <div className={styles.container}>
          <h2 className={styles.serviceAreaH2}>WHERE WE WORK.</h2>
          <p className={styles.serviceAreaBold}>REMOTE. NATIONWIDE. RELENTLESS.</p>
          <p className={styles.serviceAreaSub}>
            All 50 states. Mon–Fri, 9am–6pm EST. No office needed — just results.
          </p>
          <p className={styles.serviceAreaContact}>
            <a href="tel:+17705240488">(770) 524-0488</a>
            &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;
            <a href="mailto:Support@SimplyUsandU.com">Support@SimplyUsandU.com</a>
          </p>
        </div>
      </section>

      {/* ── SECTION 6: CTA ──────────────────────────────────── */}
      <section id="contact" className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaH2}>CALL NOW.</h2>
          <a href="tel:+17705240488" className={styles.ctaPhone}>
            (770) 524-0488
          </a>
          <p className={styles.ctaSub}>NO DECKS. NO PITCHES. JUST GROWTH.</p>
          <a href="/contact" className={styles.ctaBtn}>
            BOOK FREE STRATEGY CALL
          </a>
        </div>
      </section>

      {/* ── SECTION 7: FOOTER ───────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <p className={styles.footerLogo}>SIMPLY US &amp; U</p>
            <p className={styles.footerTagline}>YOUR GROWTH. OUR OBSESSION.</p>
          </div>
          <div className={styles.footerServices}>
            <span>Digital Marketing</span>
            <span>Social Content Creation</span>
            <span>Website Design</span>
            <span>Website Hosting</span>
            <span>Software &amp; App Development</span>
            <span>Ad Creation &amp; Campaign Management</span>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 Simply Us &amp; U. All rights reserved.</span>
            <div className={styles.footerLinks}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
