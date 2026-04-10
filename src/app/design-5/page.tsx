'use client';

import { Syne } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './design5.module.css';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });

/* ---- DATA ---- */

const services = [
  {
    id: 1,
    title: 'Digital Marketing',
    subtitle: 'SEO, PPC & FULL-FUNNEL STRATEGY',
    description:
      'Paid ads, SEO, email funnels, and full-funnel campaigns that deliver measurable ROI.',
    features: [
      'Full-funnel campaign strategy & execution',
      'SEO audits with keyword research & link building',
      'Google Ads & Bing Ads management',
      'Email automation sequences & nurture flows',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90',
  },
  {
    id: 2,
    title: 'Social Content Creation',
    subtitle: 'STRATEGY, CONTENT & COMMUNITY',
    description:
      'Scroll-stopping content, reels, graphics, and social strategy that grows your audience.',
    features: [
      'Platform-specific content calendars',
      'Reels, carousels & graphic design',
      'Community management & engagement',
      'Monthly analytics & growth reports',
    ],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=90',
  },
  {
    id: 3,
    title: 'Website Design',
    subtitle: 'UI/UX, MOBILE-FIRST & CONVERSION',
    description:
      'Custom, conversion-focused websites that look premium and perform even better.',
    features: [
      'Custom UI/UX design & prototyping',
      'Mobile-first responsive development',
      'Sales funnels & landing page optimization',
      'E-commerce store setup & configuration',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=90',
  },
  {
    id: 4,
    title: 'Website Hosting',
    subtitle: 'UPTIME, SECURITY & PERFORMANCE',
    description:
      'Fast, secure, and reliable hosting with 99.9% uptime and hands-free management.',
    features: [
      '99.9% uptime with 24/7 monitoring',
      'Free SSL certificates & firewall protection',
      'Daily automated backups with one-click restore',
      'Managed WordPress updates & staging environments',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90',
  },
  {
    id: 5,
    title: 'Software & App Development',
    subtitle: 'CUSTOM APPS, CRM & AUTOMATION',
    description:
      'Custom apps, CRM integrations, workflow automation, and scalable software solutions.',
    features: [
      'Custom web & mobile application development',
      'CRM integration & data migration',
      'Workflow automation & process optimization',
      'RESTful & GraphQL API development',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90',
  },
  {
    id: 6,
    title: 'Ad Creation & Campaign Management',
    subtitle: 'PAID MEDIA & FULL-FUNNEL',
    description:
      'High-converting Google Ads, Meta campaigns, creative design, and ongoing A/B testing.',
    features: [
      'Google Ads & Meta Ads campaign management',
      'Custom ad creative design & video production',
      'Audience targeting & retargeting strategy',
      'Ongoing A/B testing & performance optimization',
    ],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=90',
  },
];

const portfolio = [
  {
    client: 'Bloom Wellness Studio',
    industry: 'Health & Wellness',
    metric: '400%',
    result: 'Follower growth & Revenue +185% in 6 months',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=90',
  },
  {
    client: 'Apex Property Group',
    industry: 'Real Estate',
    metric: '2x',
    result: 'Faster delivery & overhead reduced by 35%',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
  },
  {
    client: 'Elevate Coaching Co',
    industry: 'Professional Services',
    metric: '312%',
    result: 'ROI increase with 3x ROAS achieved',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=90',
  },
  {
    client: 'Oakridge Financial',
    industry: 'Finance',
    metric: '3x',
    result: 'Conversion rate — tripled bookings in 90 days',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=90',
  },
  {
    client: 'Luxe Salon & Spa',
    industry: 'Beauty & Wellness',
    metric: '60%',
    result: 'Time saved & eliminated double-bookings entirely',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90',
  },
  {
    client: 'Clearview Dental',
    industry: 'Healthcare',
    metric: 'Pg. 1',
    result: 'Google ranking in 6 months — 12 top keywords',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
  },
];

const testimonials = [
  {
    quote:
      'Simply Us & You transformed our social media presence. We went from inconsistent posting to a fully automated content machine that generates real leads.',
    name: 'Sarah Chen',
    role: 'CEO, Bloom Wellness Studio',
  },
  {
    quote:
      'They built a custom booking system that replaced three separate tools we were paying for. Our staff saves hours every week and clients love the experience.',
    name: 'Diana Reyes',
    role: 'Owner, Luxe Salon & Spa',
  },
  {
    quote:
      'From SEO to paid ads, they took us from page three to the top of Google in under six months. The ROI has been incredible for our practice.',
    name: 'Dr. Kevin Nguyen',
    role: 'Partner, Clearview Dental Group',
  },
];

const pillars = [
  {
    title: 'Innovation',
    desc: 'We stay ahead of algorithm changes, platform shifts, and emerging channels so you never fall behind.',
  },
  {
    title: 'Partnership',
    desc: 'We embed with your team like in-house experts — not an agency that disappears after onboarding.',
  },
  {
    title: 'Results',
    desc: 'Every deliverable is tied to a metric. If it doesn\'t move the needle, we pivot until it does.',
  },
];

const timeline = [
  { year: '2017', event: 'Founded with a mission to level the playing field for growing businesses.' },
  { year: '2018', event: 'Expanded to full-service digital marketing & software development.' },
  { year: '2020', event: 'Surpassed 50 active clients across 12 industries nationwide.' },
  { year: '2024', event: '100+ clients, 500+ projects, and 4.2M+ monthly impressions delivered.' },
];

/* ---- COMPONENT ---- */

export default function Design5Page() {
  useEffect(() => {
    /* ------ SCROLL REVEAL ------ */
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    revealEls.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(32px)';
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || '0';
            el.style.transitionDelay = `${delay}ms`;
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px' },
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    /* ------ COUNTER ANIMATION ------ */
    const counterEls = Array.from(
      document.querySelectorAll<HTMLElement>('[data-counter]'),
    );

    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.counter || '0', 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1600;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = `${prefix}${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    counterEls.forEach((el) => counterObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className={`${styles.root} ${syne.variable}`}>
      {/* BACK LINK */}
      <Link href="/" className={styles.backLink}>
        ← Back
      </Link>

      {/* ============================================================
          NAV
          ============================================================ */}
      <nav className={styles.nav}>
        <span className={styles.navLogo}>SU&amp;U</span>
        <Link href="tel:+17705240488" className={styles.navCta}>
          Get Started
        </Link>
      </nav>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className={styles.hero}>
        {/* Left Column */}
        <div className={styles.heroLeft}>
          <p className={styles.heroLabel} data-reveal data-delay="0">
            DIGITAL · MARKETING · WEB DESIGN · SOFTWARE
          </p>

          <h1 className={styles.heroHeadline} data-reveal data-delay="80">
            SIMPLY
            <span className={styles.heroHeadlineLine2}>US &amp; U</span>
          </h1>

          <p className={styles.heroSub} data-reveal data-delay="160">
            The growth engine behind brands that move fast.
          </p>

          <div className={styles.heroCtas} data-reveal data-delay="240">
            <Link href="mailto:Support@SimplyUsandU.com" className={styles.ctaPrimary}>
              Get a Free Quote
            </Link>
            <Link href="#portfolio" className={styles.ctaSecondary}>
              View Our Work →
            </Link>
          </div>

          <p className={styles.heroStats} data-reveal data-delay="320">
            100+ Clients · 312% Avg ROI · 4.2M+ Impressions · 5-Star
          </p>
        </div>

        {/* Right Column — Rotating Badge */}
        <div className={styles.heroRight} data-reveal data-delay="200">
          <div className={styles.badgeWrapper}>
            <div className={styles.badgeRing}>
              <svg viewBox="0 0 200 200" className={styles.badgeSvg}>
                <defs>
                  <path
                    id="circle"
                    d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text
                  fontSize="11"
                  fill="#F5EDE0"
                  fontFamily="inherit"
                  letterSpacing="4"
                >
                  <textPath href="#circle">
                    YOUR GROWTH · OUR OBSESSION · SINCE 2017 ·&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>
            <div className={styles.badgeCenter}>SU&amp;U</div>
          </div>
        </div>
      </section>

      {/* Hero Stats Bar */}
      <div className={styles.heroStatsBar}>
        <div className={styles.heroStatItem} data-reveal data-delay="0">
          <span
            className={styles.heroStatValue}
            data-counter="100"
            data-suffix="+"
          >
            100+
          </span>
          <span className={styles.heroStatLabel}>Clients Served</span>
        </div>
        <div className={styles.heroStatItem} data-reveal data-delay="80">
          <span
            className={styles.heroStatValue}
            data-counter="312"
            data-suffix="%"
          >
            312%
          </span>
          <span className={styles.heroStatLabel}>Avg ROI</span>
        </div>
        <div className={styles.heroStatItem} data-reveal data-delay="160">
          <span
            className={styles.heroStatValue}
            data-counter="42"
            data-suffix="M+"
          >
            4.2M+
          </span>
          <span className={styles.heroStatLabel}>Impressions</span>
        </div>
        <div className={styles.heroStatItem} data-reveal data-delay="240">
          <span className={styles.heroStatValue}>5-Star</span>
          <span className={styles.heroStatLabel}>Client Rating</span>
        </div>
      </div>

      {/* ============================================================
          SERVICES
          ============================================================ */}
      <section className={styles.services} id="services">
        <div className={styles.servicesInner}>
          <div className={styles.servicesHeader} data-reveal>
            <span className={styles.sectionEyebrow}>WHAT WE BUILD</span>
            <h2 className={styles.sectionH2}>Six Ways We Accelerate Your Growth</h2>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((svc, idx) => (
              <div
                key={svc.id}
                className={`${styles.serviceCard} ${
                  idx % 2 !== 0 ? styles.serviceCardStaggered : ''
                }`}
                data-reveal
                data-delay={String((idx % 3) * 100)}
              >
                {/* Image */}
                <div className={styles.serviceImageWrapper}>
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.serviceImageOverlay} />
                </div>

                {/* Body */}
                <div className={styles.serviceCardBody}>
                  <span className={styles.serviceNumber}>
                    {String(svc.id).padStart(2, '0')}
                  </span>
                  <span className={styles.serviceSubtitle}>{svc.subtitle}</span>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceDesc}>{svc.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {svc.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link href="mailto:Support@SimplyUsandU.com" className={styles.serviceCardCta}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY US (ORANGE SECTION)
          ============================================================ */}
      <section className={styles.whyUs} id="about">
        <div className={styles.whyUsInner}>
          <div className={styles.whyUsHeader} data-reveal>
            <span className={styles.whyUsEyebrow}>THE DIFFERENCE</span>
            <h2 className={styles.whyUsH2}>Why Simply Us &amp; U?</h2>
            <p className={styles.whyUsSub}>
              Big-agency results without the big-agency price tag.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={styles.whyUsStatsGrid}>
            <div className={styles.whyUsStat} data-reveal data-delay="0">
              <span
                className={styles.whyUsStatValue}
                data-counter="100"
                data-suffix="+"
              >
                100+
              </span>
              <span className={styles.whyUsStatLabel}>Clients Served</span>
            </div>
            <div className={styles.whyUsStat} data-reveal data-delay="100">
              <span
                className={styles.whyUsStatValue}
                data-counter="312"
                data-suffix="%"
              >
                312%
              </span>
              <span className={styles.whyUsStatLabel}>Avg ROI</span>
            </div>
            <div className={styles.whyUsStat} data-reveal data-delay="200">
              <span
                className={styles.whyUsStatValue}
                data-counter="4"
                data-suffix=".2M+"
              >
                4.2M+
              </span>
              <span className={styles.whyUsStatLabel}>Impressions</span>
            </div>
            <div className={styles.whyUsStat} data-reveal data-delay="300">
              <span
                className={styles.whyUsStatValue}
                data-counter="95"
                data-suffix="%"
              >
                95%
              </span>
              <span className={styles.whyUsStatLabel}>Satisfaction</span>
            </div>
          </div>

          {/* Value Pillars */}
          <div className={styles.whyUsPillars}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={styles.whyUsPillar}
                data-reveal
                data-delay={String(i * 100)}
              >
                <h3 className={styles.whyUsPillarTitle}>{p.title}</h3>
                <p className={styles.whyUsPillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className={styles.whyUsTimeline} data-reveal>
            <div className={styles.whyUsTimelineTrack} />
            {timeline.map((t) => (
              <div key={t.year} className={styles.whyUsTimelineItem}>
                <span className={styles.whyUsTimelineYear}>{t.year}</span>
                <span className={styles.whyUsTimelineEvent}>{t.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PORTFOLIO
          ============================================================ */}
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.portfolioHeader} data-reveal>
          <span className={styles.sectionEyebrow}>OUR WORK</span>
          <h2 className={styles.portfolioH2}>Momentum. Proven.</h2>
        </div>

        <div className={styles.portfolioTrack}>
          {portfolio.map((item) => (
            <div key={item.client} className={styles.portfolioCard}>
              <Image
                src={item.image}
                alt={item.client}
                fill
                style={{ objectFit: 'cover' }}
                sizes="320px"
              />
              <div className={styles.portfolioGradient} />
              <div className={styles.portfolioContent}>
                <span className={styles.portfolioTag}>{item.industry}</span>
                <h3 className={styles.portfolioClient}>{item.client}</h3>
                <p className={styles.portfolioMetric}>{item.metric}</p>
                <p className={styles.portfolioResult}>{item.result}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.portfolioScrollHint}>← Scroll →</p>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className={styles.testimonials} id="testimonials">
        <div className={styles.testimonialsInner}>
          <div data-reveal>
            <span className={styles.sectionEyebrow}>CLIENT STORIES</span>
            <h2 className={styles.sectionH2} style={{ color: '#F5EDE0' }}>
              Results That Speak.
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={styles.testimonialCard}
                data-reveal
                data-delay={String(i * 120)}
              >
                <div className={styles.testimonialQuoteMark}>&ldquo;</div>
                <p className={styles.testimonialText}>{t.quote}</p>
                <p className={styles.testimonialAuthorName}>{t.name}</p>
                <p className={styles.testimonialAuthorRole}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE AREA
          ============================================================ */}
      <section className={styles.serviceArea} id="contact">
        <div className={styles.serviceAreaBg} aria-hidden="true">
          Nationwide.
        </div>
        <div className={styles.serviceAreaContent} data-reveal>
          <span className={styles.sectionEyebrow}>COVERAGE</span>
          <h2 className={styles.serviceAreaTitle}>
            Remote-First. Results-Everywhere.
          </h2>
          <p className={styles.serviceAreaSub}>
            We work with ambitious businesses across all 50 states. No office required.
            Just growth.
          </p>
          <div className={styles.serviceAreaPills}>
            <span className={styles.serviceAreaPill}>All 50 States</span>
            <span className={styles.serviceAreaPill}>Mon–Fri, 9am–6pm EST</span>
            <span className={styles.serviceAreaPill}>24-Hour Response</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className={styles.ctaSection} id="get-started">
        <div className={styles.ctaSectionInner} data-reveal>
          <h2 className={styles.ctaH2}>ACCELERATE.</h2>
          <p className={styles.ctaSub}>
            Book a free 30-minute strategy call. No deck — just a real conversation about
            your growth.
          </p>
          <Link href="tel:+17705240488" className={styles.ctaPhone}>
            (770) 524-0488
          </Link>
          <div className={styles.ctaButtons}>
            <Link href="tel:+17705240488" className={styles.ctaButtonPrimary}>
              CALL NOW
            </Link>
            <Link href="mailto:Support@SimplyUsandU.com" className={styles.ctaButtonSecondary}>
              Email Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <span className={styles.footerBrand}>Simply Us &amp; U</span>
            <span className={styles.footerTagline}>Your Growth. Our Obsession.</span>
          </div>

          <div className={styles.footerCols}>
            {/* Services */}
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <ul>
                <li><Link href="#services">Digital Marketing</Link></li>
                <li><Link href="#services">Social Content Creation</Link></li>
                <li><Link href="#services">Website Design</Link></li>
                <li><Link href="#services">Website Hosting</Link></li>
                <li><Link href="#services">Software &amp; App Development</Link></li>
                <li><Link href="#services">Ad Creation &amp; Campaign Management</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#portfolio">Our Work</Link></li>
                <li><Link href="#testimonials">Testimonials</Link></li>
                <li><Link href="#get-started">Get a Quote</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.footerCol}>
              <h4>Contact</h4>
              <ul>
                <li>
                  <span className={styles.footerContactItem}>
                    <Link href="tel:+17705240488">(770) 524-0488</Link>
                  </span>
                </li>
                <li>
                  <span className={styles.footerContactItem}>
                    <Link href="mailto:Support@SimplyUsandU.com">
                      Support@SimplyUsandU.com
                    </Link>
                  </span>
                </li>
                <li>
                  <span className={styles.footerContactItem}>
                    Remote — Serving clients nationwide
                  </span>
                </li>
                <li>
                  <span className={styles.footerContactItem}>
                    Mon–Fri, 9am–6pm EST
                  </span>
                </li>
                <li>
                  <span className={styles.footerContactItem}>
                    Founded 2017 · 15+ Team Members
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerBottomText}>
            &copy; 2026 Simply Us &amp; U. All rights reserved.
          </span>
          <div className={styles.footerBottomLinks}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
