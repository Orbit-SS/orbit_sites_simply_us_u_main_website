'use client'
import { Cormorant_Garamond } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './design3.module.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
})

const services = [
  {
    numeral: 'I',
    title: 'Digital Marketing',
    subtitle: 'SEO, PPC & FULL-FUNNEL STRATEGY',
    description: 'Paid ads, SEO, email funnels, and full-funnel campaigns that deliver measurable ROI.',
    features: [
      'Full-funnel campaign strategy & execution',
      'SEO audits with keyword research & link building',
      'Google Ads & Bing Ads management',
      'Email automation sequences & nurture flows',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90',
  },
  {
    numeral: 'II',
    title: 'Social Content Creation',
    subtitle: 'STRATEGY, CONTENT & COMMUNITY',
    description: 'Scroll-stopping content, reels, graphics, and social strategy that grows your audience.',
    features: [
      'Platform-specific content calendars',
      'Reels, carousels & graphic design',
      'Community management & engagement',
      'Monthly analytics & growth reports',
    ],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=90',
  },
  {
    numeral: 'III',
    title: 'Website Design',
    subtitle: 'UI/UX, MOBILE-FIRST & CONVERSION',
    description: 'Custom, conversion-focused websites that look premium and perform even better.',
    features: [
      'Custom UI/UX design & prototyping',
      'Mobile-first responsive development',
      'Sales funnels & landing page optimization',
      'E-commerce store setup & configuration',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=90',
  },
  {
    numeral: 'IV',
    title: 'Website Hosting',
    subtitle: 'UPTIME, SECURITY & PERFORMANCE',
    description: 'Fast, secure, and reliable hosting with 99.9% uptime and hands-free management.',
    features: [
      '99.9% uptime with 24/7 monitoring',
      'Free SSL certificates & firewall protection',
      'Daily automated backups with one-click restore',
      'Managed WordPress updates & staging environments',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90',
  },
  {
    numeral: 'V',
    title: 'Software & App Development',
    subtitle: 'CUSTOM APPS, CRM & AUTOMATION',
    description: 'Custom apps, CRM integrations, workflow automation, and scalable software solutions.',
    features: [
      'Custom web & mobile application development',
      'CRM integration & data migration',
      'Workflow automation & process optimization',
      'RESTful & GraphQL API development',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90',
  },
  {
    numeral: 'VI',
    title: 'Ad Creation & Campaign Management',
    subtitle: 'PAID MEDIA & FULL-FUNNEL',
    description: 'High-converting Google Ads, Meta campaigns, creative design, and ongoing A/B testing.',
    features: [
      'Google Ads & Meta Ads campaign management',
      'Custom ad creative design & video production',
      'Audience targeting & retargeting strategy',
      'Ongoing A/B testing & performance optimization',
    ],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=90',
  },
]

const portfolio = [
  {
    client: 'Bloom Wellness Studio',
    industry: 'Health & Wellness',
    metric: '400%',
    label: 'Follower Growth',
    result: 'Revenue increased 185% in the first six months.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=90',
  },
  {
    client: 'Apex Property Group',
    industry: 'Real Estate',
    metric: '2×',
    label: 'Faster Delivery',
    result: 'Overhead reduced by 35% through workflow automation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
  },
  {
    client: 'Elevate Coaching Co',
    industry: 'Professional Services',
    metric: '312%',
    label: 'ROI Increase',
    result: '3× ROAS achieved; freed 15 hours per week for the team.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=90',
  },
  {
    client: 'Oakridge Financial',
    industry: 'Finance',
    metric: '3×',
    label: 'Conversion Rate',
    result: 'Tripled bookings in the first 90 days after launch.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=90',
  },
  {
    client: 'Luxe Salon & Spa',
    industry: 'Beauty & Wellness',
    metric: '60%',
    label: 'Time Saved',
    result: 'Eliminated double-bookings and manual scheduling overhead.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90',
  },
  {
    client: 'Clearview Dental',
    industry: 'Healthcare',
    metric: 'Pg. 1',
    label: 'In 6 Months',
    result: 'Ranked for 12 top-priority keywords in the local market.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
  },
]

const testimonials = [
  {
    quote:
      'Simply Us & You transformed our social media presence. We went from inconsistent posting to a fully automated content machine that generates real leads.',
    name: 'Sarah Chen',
    title: 'CEO, Bloom Wellness Studio',
  },
  {
    quote:
      'The marketing automation they set up pays for itself every month. Our team can focus on clients instead of chasing leads manually.',
    name: 'Priya Patel',
    title: 'Founder, Elevate Coaching Co',
  },
  {
    quote:
      'Our new website tripled our conversion rate in the first month. The design is premium and the performance is blazing fast — exactly what we needed.',
    name: 'James Thornton',
    title: 'Managing Director, Oakridge Financial Advisors',
  },
]

export default function Design3() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('[data-reveal]')
    revealEls.forEach((el) => {
      const htmlEl = el as HTMLElement
      if (htmlEl.getBoundingClientRect().top > window.innerHeight) {
        htmlEl.style.opacity = '0'
        htmlEl.style.transform = 'translateY(20px)'
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
            target.style.opacity = '1'
            target.style.transform = 'translateY(0)'
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.1 }
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`${styles.root} ${cormorantGaramond.variable}`}>
      {/* Back Link */}
      <Link href="/" className={styles.back}>← Back</Link>

      {/* ─── SECTION 1: HERO ─── */}
      <section className={styles.hero}>
        <nav className={styles.nav}>
          <span className={styles.navLogo}>Simply Us &amp; U</span>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className={styles.navCta}>Get Started</a>
          </div>
        </nav>

        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.heroEyebrow}>EST. 2017 · DIGITAL GROWTH AGENCY</p>
            <h1 className={styles.heroH1}>
              Your Growth.<br />Our Obsession.
            </h1>
            <div className={styles.goldRule} />
            <p className={styles.heroSub}>
              Marketing, design, and technology — deployed as one integrated system.
              Big-agency results without the big-agency price tag.
            </p>
            <div className={styles.heroCtas}>
              <a href="#contact" className={styles.ctaPrimary}>Begin Your Engagement</a>
              <a href="#portfolio" className={styles.ctaSecondary}>Our Work →</a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90"
              alt="Growth strategy"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className={styles.heroImageOverlay} />
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: SERVICES ─── */}
      <section className={styles.services} id="services">
        <div className={styles.sectionHeader} data-reveal>
          <h2 className={styles.sectionTitleGold}>Our Disciplines</h2>
          <div className={styles.sectionRule} />
          <p className={styles.sectionSub}>
            Six integrated practices. One agency. Infinite possibility.
          </p>
        </div>

        {services.map((svc, i) => (
          <div
            key={svc.numeral}
            className={`${styles.serviceRow} ${i % 2 === 0 ? styles.serviceRowNormal : styles.serviceRowReverse}`}
            data-reveal
          >
            <div className={styles.serviceImageWrap}>
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.serviceText}>
              <span className={styles.serviceNumeral}>{svc.numeral}</span>
              <div className={styles.serviceRule} />
              <p className={styles.serviceSubtitle}>{svc.subtitle}</p>
              <h3 className={styles.serviceTitle}>{svc.title}</h3>
              <p className={styles.serviceDesc}>{svc.description}</p>
              <ul className={styles.serviceFeatures}>
                {svc.features.map((f) => (
                  <li key={f} className={styles.serviceFeature}>
                    <span className={styles.featureDot}>·</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.serviceLink}>Explore this service →</a>
            </div>
          </div>
        ))}
      </section>

      {/* ─── SECTION 3: WHY US ─── */}
      <section className={styles.whyUs} id="about">
        <div className={styles.whyUsInner}>
          <p className={styles.whyEyebrow} data-reveal>
            EIGHT YEARS. ONE HUNDRED CLIENTS. FIVE HUNDRED PROJECTS.
          </p>
          <h2 className={styles.whyH2} data-reveal>
            Why Discerning Businesses Choose Us
          </h2>

          <div className={styles.statsGrid} data-reveal>
            {[
              { num: '100+', label: 'Clients Served' },
              { num: '312%', label: 'Average ROI' },
              { num: '4.2M+', label: 'Impressions Delivered' },
              { num: '95%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label} className={styles.statBlock}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.valueStatements} data-reveal>
            {[
              {
                word: 'Innovation.',
                desc: 'We study emerging platforms, algorithms, and consumer behaviors obsessively — so you benefit before your competitors even notice.',
              },
              {
                word: 'Partnership.',
                desc: 'We embed ourselves in your business, functioning as an extension of your team rather than a vendor you file invoices with.',
              },
              {
                word: 'Results.',
                desc: 'Every decision is driven by data. Every campaign is optimized relentlessly. Every dollar you invest is accountable.',
              },
            ].map((v) => (
              <div key={v.word} className={styles.valueStatement}>
                <div className={styles.valueRule} />
                <h3 className={styles.valueWord}>{v.word}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.timeline} data-reveal>
            <div className={styles.timelineLine} />
            {[
              { year: '2017', event: 'Founded in Atlanta, GA' },
              { year: '2018', event: 'First 25 clients onboarded' },
              { year: '2020', event: 'Expanded to full-stack software' },
              { year: '2024', event: '100+ clients, 500+ projects delivered' },
            ].map((t) => (
              <div key={t.year} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <span className={styles.timelineYear}>{t.year}</span>
                <span className={styles.timelineEvent}>{t.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: PORTFOLIO ─── */}
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.sectionHeader} data-reveal>
          <h2 className={styles.sectionTitleGold}>Selected Work</h2>
          <div className={styles.sectionRule} />
          <p className={styles.sectionSub}>
            A curated selection of engagements and their outcomes.
          </p>
        </div>

        <div className={styles.portfolioGrid}>
          {/* Top row: large left + smaller right */}
          <div className={styles.portfolioTopRow}>
            {portfolio.slice(0, 2).map((p, i) => (
              <div
                key={p.client}
                className={`${styles.portfolioItem} ${i === 0 ? styles.portfolioItemLarge : styles.portfolioItemSmall}`}
                data-reveal
              >
                <div className={styles.portfolioImageWrap}>
                  <Image src={p.image} alt={p.client} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.portfolioOverlay}>
                    <p className={styles.portfolioClient}>{p.client}</p>
                    <p className={styles.portfolioMetric}>{p.metric}</p>
                    <p className={styles.portfolioResult}>{p.result}</p>
                  </div>
                </div>
                <div className={styles.portfolioCaption}>
                  <span className={styles.portfolioCaptionClient}>{p.client}</span>
                  <span className={styles.portfolioCaptionIndustry}>{p.industry}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: three equal */}
          <div className={styles.portfolioBottomRow}>
            {portfolio.slice(2, 5).map((p) => (
              <div key={p.client} className={styles.portfolioItem} data-reveal>
                <div className={styles.portfolioImageWrap}>
                  <Image src={p.image} alt={p.client} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.portfolioOverlay}>
                    <p className={styles.portfolioClient}>{p.client}</p>
                    <p className={styles.portfolioMetric}>{p.metric}</p>
                    <p className={styles.portfolioResult}>{p.result}</p>
                  </div>
                </div>
                <div className={styles.portfolioCaption}>
                  <span className={styles.portfolioCaptionClient}>{p.client}</span>
                  <span className={styles.portfolioCaptionIndustry}>{p.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={styles.testimonials} data-reveal>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.testimonial}>
              <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
              <p className={styles.testimonialName}>— {t.name}</p>
              <p className={styles.testimonialTitle}>{t.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 5: SERVICE AREA ─── */}
      <section className={styles.serviceArea}>
        <div className={styles.serviceAreaInner} data-reveal>
          <p className={styles.serviceAreaEyebrow}>A NATIONAL PRACTICE</p>
          <h2 className={styles.serviceAreaH2}>Wherever Business Grows, We Are There</h2>
          <div className={styles.goldRule} style={{ margin: '1.5rem auto' }} />
          <p className={styles.serviceAreaDesc}>
            We work remotely with clients across all fifty states, serving every industry with
            the same dedication as a firm down the street.
          </p>

          <div className={styles.serviceAreaStats}>
            {[
              { label: 'All 50 States', sub: 'Nationwide Coverage' },
              { label: 'Mon–Fri, 9am–6pm', sub: 'Eastern Standard Time' },
              { label: '24-Hour Response', sub: 'Guaranteed SLA' },
            ].map((s) => (
              <div key={s.label} className={styles.serviceAreaStat}>
                <span className={styles.serviceAreaStatLabel}>{s.label}</span>
                <span className={styles.serviceAreaStatSub}>{s.sub}</span>
              </div>
            ))}
          </div>

          <div className={styles.industriesList}>
            <p className={styles.industriesTitle}>Industries We Serve</p>
            <div className={styles.industries}>
              {[
                'Law & Legal Services',
                'Health & Wellness',
                'Real Estate',
                'Finance & Wealth Management',
                'Beauty & Personal Care',
                'Dental & Healthcare',
                'Professional Coaching',
                'E-Commerce & Retail',
                'Hospitality & Events',
                'Technology & SaaS',
              ].map((ind) => (
                <span key={ind} className={styles.industry}>— {ind}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CTA ─── */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaInner} data-reveal>
          <p className={styles.ctaEyebrow}>BEGIN YOUR ENGAGEMENT</p>
          <h2 className={styles.ctaH2}>Let Us Earn Your Trust</h2>
          <p className={styles.ctaSub}>
            Book a complimentary 30-minute conversation. No agenda — simply an opportunity
            to understand your ambitions.
          </p>
          <a href="tel:+17705240488" className={styles.ctaPhone}>(770) 524-0488</a>
          <p className={styles.ctaEmail}>
            Or write to us at{' '}
            <a href="mailto:Support@SimplyUsandU.com" className={styles.ctaEmailLink}>
              Support@SimplyUsandU.com
            </a>
          </p>
          <a href="tel:+17705240488" className={styles.ctaButton}>Schedule a Conversation</a>
        </div>
      </section>

      {/* ─── SECTION 7: FOOTER ─── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <p className={styles.footerLogo}>Simply Us &amp; U</p>
              <p className={styles.footerTagline}>Your Growth. Our Obsession.</p>
              <p className={styles.footerContact}>
                <a href="tel:+17705240488">(770) 524-0488</a>
              </p>
              <p className={styles.footerContact}>
                <a href="mailto:Support@SimplyUsandU.com">Support@SimplyUsandU.com</a>
              </p>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.footerCol}>
                <p className={styles.footerColTitle}>Services</p>
                <a href="#services">Digital Marketing</a>
                <a href="#services">Social Content Creation</a>
                <a href="#services">Website Design</a>
                <a href="#services">Website Hosting</a>
                <a href="#services">Software & App Development</a>
                <a href="#services">Ad Creation & Campaigns</a>
              </div>
              <div className={styles.footerCol}>
                <p className={styles.footerColTitle}>Company</p>
                <a href="#about">About Us</a>
                <a href="#portfolio">Our Work</a>
                <a href="#contact">Contact</a>
                <a href="#about">Our Process</a>
                <a href="#contact">Get a Quote</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>© 2026 Simply Us &amp; U. All rights reserved. Remote — Serving clients nationwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
