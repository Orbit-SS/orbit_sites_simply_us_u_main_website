'use client'
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './design1.module.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

const services = [
  {
    num: '01',
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
    num: '02',
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
    num: '03',
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
    num: '04',
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
    num: '05',
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
    num: '06',
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
    metric: '400% Follower Growth',
    result: 'Revenue +185% in 6 months',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=90',
  },
  {
    client: 'Apex Property Group',
    industry: 'Real Estate',
    metric: '2x Faster Delivery',
    result: 'Overhead reduced 35%',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
  },
  {
    client: 'Elevate Coaching Co',
    industry: 'Professional Services',
    metric: '312% ROI Increase',
    result: '3x ROAS, freed 15hrs/week',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=90',
  },
  {
    client: 'Oakridge Financial',
    industry: 'Finance',
    metric: '3x Conversion Rate',
    result: 'Tripled bookings in 90 days',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=90',
  },
  {
    client: 'Luxe Salon & Spa',
    industry: 'Beauty & Wellness',
    metric: '60% Time Saved',
    result: 'Eliminated double-bookings',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90',
  },
  {
    client: 'Clearview Dental',
    industry: 'Healthcare',
    metric: 'Page 1 in 6 Months',
    result: 'Ranked for 12 top keywords',
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
      'Their operations consulting cut our project delivery time in half. We finally have systems that scale with us instead of holding us back.',
    name: 'Marcus Rivera',
    title: 'COO, Apex Property Group',
  },
  {
    quote:
      'Our new website tripled our conversion rate in the first month. The design is premium and the performance is blazing fast — exactly what we needed.',
    name: 'James Thornton',
    title: 'Managing Director, Oakridge Financial Advisors',
  },
  {
    quote:
      'From SEO to paid ads, they took us from page three to the top of Google in under six months. The ROI has been incredible for our practice.',
    name: 'Dr. Kevin Nguyen',
    title: 'Partner, Clearview Dental Group',
  },
]

export default function Design1Page() {
  useEffect(() => {
    // Scroll reveal
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]
    revealEls.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(28px)'
      }
    })
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            el.style.transition = 'opacity 0.55s ease, transform 0.55s ease'
            revealObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px' }
    )
    revealEls.forEach((el) => revealObserver.observe(el))

    // Counter animation
    const counterEls = Array.from(document.querySelectorAll('[data-counter]')) as HTMLElement[]
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = parseInt(el.dataset.counter || '0', 10)
            const suffix = el.dataset.suffix || ''
            const prefix = el.dataset.prefix || ''
            const duration = 1800
            const start = performance.now()
            const animate = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = Math.floor(eased * target)
              el.textContent = prefix + current + suffix
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
            counterObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )
    counterEls.forEach((el) => counterObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      counterObserver.disconnect()
    }
  }, [])

  return (
    <div className={`${styles.root} ${outfit.variable}`}>
      {/* Back link */}
      <Link href="/" className={styles.backLink}>
        ← Back
      </Link>

      {/* ── SECTION 1: HERO ─────────────────────────────────── */}
      <section className={styles.hero}>
        {/* Background image */}
        <div className={styles.heroBgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=90"
            alt="Digital marketing analytics"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroOverlay} />

        {/* Sticky navbar */}
        <nav className={styles.navbar}>
          <span className={styles.navLogo}>Simply Us &amp; U</span>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#portfolio">Case Studies</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="/contact" className={styles.navCta}>
            Get Started
          </a>
        </nav>

        {/* Hero content */}
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>EST. 2017 · DIGITAL GROWTH AGENCY</p>
          <h1 className={styles.heroH1}>The Growth Engine Behind Brands That Move Fast.</h1>
          <p className={styles.heroSub}>
            Marketing, design, and technology — deployed as one integrated system.
          </p>
          <div className={styles.heroCtas}>
            <a href="/contact" className={styles.heroCtaPrimary}>
              Get a Free Quote
            </a>
            <a href="mailto:Support@SimplyUsandU.com" className={styles.heroCtaSecondary}>
              Or Email Us
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.heroStats}>
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>100+</span>
            <span className={styles.heroStatLabel}>Clients Served</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>312%</span>
            <span className={styles.heroStatLabel}>Avg ROI</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>4.2M+</span>
            <span className={styles.heroStatLabel}>Impressions</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>5-Star</span>
            <span className={styles.heroStatLabel}>Rating</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICES ─────────────────────────────── */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>WHAT WE DO</p>
          <h2 className={styles.sectionH2}>Services Built to Scale Your Business</h2>
          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <div key={svc.num} className={styles.serviceCard} data-reveal>
                <div className={styles.serviceImageWrap}>
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={800}
                    height={500}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className={styles.serviceBody}>
                  <span className={styles.serviceNum}>{svc.num}</span>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceSubtitle}>{svc.subtitle}</p>
                  <p className={styles.serviceDesc}>{svc.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {svc.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href="/contact" className={styles.serviceLink}>
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY US ───────────────────────────────── */}
      <section id="about" className={styles.whyUs}>
        <div className={styles.container}>
          <h2 className={styles.sectionH2} data-reveal>
            Why Simply Us &amp; U
          </h2>

          {/* Animated stat counters */}
          <div className={styles.bigStats}>
            <div className={styles.bigStatBlock} data-reveal>
              <span
                className={styles.bigStatNum}
                data-counter="100"
                data-suffix="+"
              >
                0+
              </span>
              <span className={styles.bigStatLabel}>Clients Served</span>
            </div>
            <div className={styles.bigStatBlock} data-reveal>
              <span
                className={styles.bigStatNum}
                data-counter="312"
                data-suffix="%"
              >
                0%
              </span>
              <span className={styles.bigStatLabel}>Avg ROI Delivered</span>
            </div>
            <div className={styles.bigStatBlock} data-reveal>
              <span
                className={styles.bigStatNum}
                data-counter="4"
                data-suffix=".2M+"
              >
                0
              </span>
              <span className={styles.bigStatLabel}>Total Impressions</span>
            </div>
            <div className={styles.bigStatBlock} data-reveal>
              <span
                className={styles.bigStatNum}
                data-counter="95"
                data-suffix="%"
              >
                0%
              </span>
              <span className={styles.bigStatLabel}>Client Satisfaction</span>
            </div>
          </div>

          {/* Value pillars */}
          <div className={styles.pillars}>
            <div className={styles.pillarCard} data-reveal>
              <h3 className={styles.pillarTitle}>Innovation</h3>
              <p className={styles.pillarDesc}>
                We stay ahead of the curve so you do too. From AI-driven automation to emerging ad
                platforms, we bring cutting-edge strategy to every engagement.
              </p>
            </div>
            <div className={styles.pillarCard} data-reveal>
              <h3 className={styles.pillarTitle}>Partnership</h3>
              <p className={styles.pillarDesc}>
                We embed ourselves in your business like an in-house team — not a vendor. Your wins
                are our wins, your goals become our obsession.
              </p>
            </div>
            <div className={styles.pillarCard} data-reveal>
              <h3 className={styles.pillarTitle}>Results</h3>
              <p className={styles.pillarDesc}>
                Big-agency results without the big-agency price tag. Every campaign, every project,
                every dollar measured and optimized for maximum return.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className={styles.timeline} data-reveal>
            <div className={styles.timelineItem}>
              <span className={styles.timelineYear}>2017</span>
              <span className={styles.timelineDot} />
              <span className={styles.timelineLabel}>Founded</span>
            </div>
            <div className={styles.timelineLine} />
            <div className={styles.timelineItem}>
              <span className={styles.timelineYear}>2018</span>
              <span className={styles.timelineDot} />
              <span className={styles.timelineLabel}>First Enterprise Partner</span>
            </div>
            <div className={styles.timelineLine} />
            <div className={styles.timelineItem}>
              <span className={styles.timelineYear}>2020</span>
              <span className={styles.timelineDot} />
              <span className={styles.timelineLabel}>Expanded to Software</span>
            </div>
            <div className={styles.timelineLine} />
            <div className={styles.timelineItem}>
              <span className={styles.timelineYear}>2024</span>
              <span className={styles.timelineDot} />
              <span className={styles.timelineLabel}>100+ Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PORTFOLIO ────────────────────────────── */}
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>OUR WORK</p>
          <h2 className={styles.sectionH2}>Real Results for Real Businesses</h2>
          <div className={styles.portfolioGrid}>
            {portfolio.map((item) => (
              <div key={item.client} className={styles.portfolioItem} data-reveal>
                <div className={styles.portfolioImageWrap}>
                  <Image
                    src={item.image}
                    alt={item.client}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.portfolioGradient} />
                  <div className={styles.portfolioContent}>
                    <span className={styles.portfolioTag}>{item.industry}</span>
                    <p className={styles.portfolioClient}>{item.client}</p>
                    <p className={styles.portfolioMetric}>{item.metric}</p>
                    <p className={styles.portfolioResult}>{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>CLIENT LOVE</p>
          <h2 className={styles.sectionH2}>What Our Clients Say</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard} data-reveal>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <p className={styles.testimonialName}>{t.name}</p>
                <p className={styles.testimonialTitle}>{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SERVICE AREA ─────────────────────────── */}
      <section id="service-area" className={styles.serviceArea}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>WHERE WE WORK</p>
          <h2 className={styles.sectionH2}>Serving Businesses Nationwide</h2>
          <p className={styles.serviceAreaCallout}>Remote-First. Nationwide Reach.</p>
          <p className={styles.serviceAreaSub}>
            We serve clients across all 50 states. No office required — just results.
          </p>
          <div className={styles.serviceAreaBoxes}>
            <div className={styles.serviceAreaBox} data-reveal>
              <span className={styles.serviceAreaIcon}>📍</span>
              <span className={styles.serviceAreaBoxTitle}>Remote — Nationwide</span>
            </div>
            <div className={styles.serviceAreaBox} data-reveal>
              <span className={styles.serviceAreaIcon}>🕐</span>
              <span className={styles.serviceAreaBoxTitle}>Mon–Fri, 9am–6pm EST</span>
            </div>
            <div className={styles.serviceAreaBox} data-reveal>
              <span className={styles.serviceAreaIcon}>📞</span>
              <a href="tel:+17705240488" className={styles.serviceAreaPhone}>
                (770) 524-0488
              </a>
            </div>
          </div>
          <p className={styles.serviceAreaIndustries}>
            Industries served: Health &amp; Wellness, Real Estate, Finance, Professional Services,
            Beauty, Healthcare, and more.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: CTA ──────────────────────────────────── */}
      <section id="contact" className={styles.ctaSection}>
        <div className={styles.container}>
          <p className={styles.ctaEyebrow}>FREE 30-MIN STRATEGY CALL</p>
          <h2 className={styles.ctaH2}>Ready to Accelerate Your Growth?</h2>
          <p className={styles.ctaSub}>
            No sales deck — just a candid conversation about where you are and where you want to go.
          </p>
          <a href="tel:+17705240488" className={styles.ctaPhone}>
            (770) 524-0488
          </a>
          <a href="mailto:Support@SimplyUsandU.com" className={styles.ctaEmailBtn}>
            Send Us an Email
          </a>
        </div>
      </section>

      {/* ── SECTION 7: FOOTER ───────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>Simply Us &amp; U</span>
              <span className={styles.footerTagline}>Your Growth. Our Obsession.</span>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>Services</p>
              <a href="#services">Digital Marketing</a>
              <a href="#services">Social Content Creation</a>
              <a href="#services">Website Design</a>
              <a href="#services">Website Hosting</a>
              <a href="#services">Software &amp; App Development</a>
              <a href="#services">Ad Creation &amp; Campaign Mgmt</a>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>Company</p>
              <a href="#about">About</a>
              <a href="#portfolio">Case Studies</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>Contact</p>
              <a href="tel:+17705240488">(770) 524-0488</a>
              <a href="mailto:Support@SimplyUsandU.com">Support@SimplyUsandU.com</a>
              <span>Mon–Fri, 9am–6pm EST</span>
              <span>Remote — Serving clients nationwide</span>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 Simply Us &amp; U. All rights reserved.</span>
            <div className={styles.footerBottomLinks}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
