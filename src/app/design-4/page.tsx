'use client'
import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './design4.module.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

const services = [
  {
    id: 'MODULE_01',
    slug: 'DIGITAL_MARKETING',
    subtitle: '# SEO_PPC_FULL_FUNNEL',
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
    id: 'MODULE_02',
    slug: 'SOCIAL_CONTENT_CREATION',
    subtitle: '# STRATEGY_CONTENT_COMMUNITY',
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
    id: 'MODULE_03',
    slug: 'WEBSITE_DESIGN',
    subtitle: '# UI_UX_MOBILE_FIRST_CONVERSION',
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
    id: 'MODULE_04',
    slug: 'WEBSITE_HOSTING',
    subtitle: '# UPTIME_SECURITY_PERFORMANCE',
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
    id: 'MODULE_05',
    slug: 'SOFTWARE_APP_DEV',
    subtitle: '# CUSTOM_APPS_CRM_AUTOMATION',
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
    id: 'MODULE_06',
    slug: 'AD_CREATION_CAMPAIGNS',
    subtitle: '# PAID_MEDIA_FULL_FUNNEL',
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

const caseFiles = [
  {
    clientId: 'BLOOM_WELLNESS',
    sector: 'HEALTH & WELLNESS',
    keyMetric: '400%',
    metricLabel: 'FOLLOWER_GROWTH',
    resultLog: 'Revenue increased 185% in the first six months of engagement.',
    services: ['SOCIAL', 'CONTENT', 'STRATEGY'],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=90',
  },
  {
    clientId: 'APEX_PROPERTY',
    sector: 'REAL ESTATE',
    keyMetric: '2×',
    metricLabel: 'FASTER_DELIVERY',
    resultLog: 'Overhead reduced by 35% through workflow automation deployment.',
    services: ['AUTOMATION', 'WEB_DESIGN', 'CRM'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
  },
  {
    clientId: 'ELEVATE_COACHING',
    sector: 'PROFESSIONAL SERVICES',
    keyMetric: '312%',
    metricLabel: 'ROI_INCREASE',
    resultLog: 'Achieved 3× ROAS while freeing 15 hours per week for the client team.',
    services: ['MARKETING', 'ADS', 'FUNNELS'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=90',
  },
  {
    clientId: 'OAKRIDGE_FINANCIAL',
    sector: 'FINANCE',
    keyMetric: '3×',
    metricLabel: 'CONVERSION_RATE',
    resultLog: 'Tripled booked appointments within 90 days of website relaunch.',
    services: ['WEB_DESIGN', 'SEO', 'UX'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=90',
  },
  {
    clientId: 'LUXE_SALON_SPA',
    sector: 'BEAUTY & WELLNESS',
    keyMetric: '60%',
    metricLabel: 'TIME_SAVED',
    resultLog: 'Eliminated double-bookings and manual scheduling overhead entirely.',
    services: ['SOFTWARE', 'AUTOMATION', 'CRM'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90',
  },
  {
    clientId: 'CLEARVIEW_DENTAL',
    sector: 'HEALTHCARE',
    keyMetric: 'PG.1',
    metricLabel: 'IN_SIX_MONTHS',
    resultLog: 'Achieved page 1 rankings for 12 high-priority local search keywords.',
    services: ['SEO', 'CONTENT', 'LOCAL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
  },
]

const diagnosticMetrics = [
  { label: 'CLIENT_SATISFACTION', value: '95%', width: 95 },
  { label: 'AVG_ROI_DELIVERED', value: '312%', width: 88 },
  { label: 'PROJECTS_DELIVERED', value: '500+', width: 82 },
  { label: 'TOTAL_IMPRESSIONS', value: '4.2M+', width: 78 },
]

export default function Design4() {
  useEffect(() => {
    // Typing animation
    const el = document.getElementById('typed-text')
    if (el) {
      const text = 'DIGITAL_MARKETING + WEB_DESIGN + SOFTWARE_DEV'
      let i = 0
      el.textContent = ''
      const timer = setInterval(() => {
        if (i < text.length) {
          el.textContent += text[i]
          i++
        } else {
          clearInterval(timer)
        }
      }, 45)
    }

    // Scroll reveals
    const revealEls = document.querySelectorAll('[data-reveal]')
    revealEls.forEach((el) => {
      const htmlEl = el as HTMLElement
      if (htmlEl.getBoundingClientRect().top > window.innerHeight) {
        htmlEl.style.opacity = '0'
        htmlEl.style.transform = 'translateY(16px)'
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
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
    <div className={`${styles.root} ${jetbrainsMono.variable}`}>
      {/* Back Link */}
      <Link href="/" className={styles.back}>← Back</Link>

      {/* ─── SECTION 1: HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.scanlines} />
        <div className={styles.heroContent}>
          <p className={styles.promptPath}>
            <span className={styles.promptDir}>~/simplyusandu</span>
            <span className={styles.promptSymbol}>$</span>
          </p>
          <p className={styles.typedLine}>
            <span id="typed-text" className={styles.typedText}></span>
            <span className={styles.cursor}>█</span>
          </p>

          <div className={styles.heroMeta}>
            <p className={styles.metaLine1}>// Simply Us &amp; U — v2026.1.0</p>
            <p className={styles.metaLine2}>// INITIALIZING GROWTH PROTOCOL...</p>
            <p className={styles.metaLine3}>// STATUS: READY</p>
          </div>

          <p className={styles.taglineComment}>{'/* Your Growth. Our Obsession. */'}</p>

          <div className={styles.statsTable}>
            <pre className={styles.statsTablePre}>{`METRIC              VALUE\n─────────────────────────────\nCLIENTS_SERVED      100+\nAVG_ROI             312%\nTOTAL_IMPRESSIONS   4.2M+\nCLIENT_RATING       5-STAR`}</pre>
          </div>

          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.ctaGreen}>$ ./get-free-quote.sh</a>
            <a href="mailto:Support@SimplyUsandU.com" className={styles.ctaOutline}>$ contact@email</a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: SERVICES (MODULES) ─── */}
      <section className={styles.services} id="services">
        <div className={styles.servicesHeader} data-reveal>
          <p className={styles.terminalCmd}>&gt; ls ./services/</p>
          <h2 className={styles.sectionTitle}>[ SYSTEM MODULES ]</h2>
        </div>

        <div className={styles.modulesGrid}>
          {services.map((svc) => (
            <div key={svc.id} className={styles.moduleCard} data-reveal>
              <div className={styles.moduleImageWrap}>
                <Image
                  src={svc.image}
                  alt={svc.slug}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.moduleImageOverlay} />
              </div>
              <div className={styles.moduleBody}>
                <p className={styles.moduleId}>{svc.id}</p>
                <p className={styles.moduleTitle}>{svc.slug}</p>
                <p className={styles.moduleSubtitle}>{svc.subtitle}</p>
                <p className={styles.moduleDesc}>{svc.description}</p>
                <ul className={styles.moduleFeatures}>
                  {svc.features.map((f) => (
                    <li key={f} className={styles.moduleFeature}>{'// '}{f}</li>
                  ))}
                </ul>
                <a href="#contact" className={styles.moduleLink}>&gt; ./learn-more.sh</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: WHY US (SYSTEM DIAGNOSTICS) ─── */}
      <section className={styles.diagnostics} id="about">
        <div className={styles.diagnosticsInner}>
          <p className={styles.terminalCmd} data-reveal>&gt; run diagnostics --verbose</p>
          <h2 className={styles.diagTitle} data-reveal>SYSTEM DIAGNOSTICS</h2>

          <p className={styles.diagChecking} data-reveal>&gt; checking metrics...</p>

          <div className={styles.diagBars} data-reveal>
            {diagnosticMetrics.map((m) => (
              <div key={m.label} className={styles.diagRow}>
                <span className={styles.diagLabel}>{m.label}</span>
                <div className={styles.diagBarTrack}>
                  <div className={styles.diagBarFill} style={{ width: `${m.width}%` }} />
                </div>
                <span className={styles.diagValue}>{m.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.processSteps} data-reveal>
            {['DISCOVERY', 'STRATEGY', 'EXECUTION', 'SCALE'].map((step, i, arr) => (
              <div key={step} className={styles.processStepWrap}>
                <div className={styles.processStep}>
                  <span className={styles.processStepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.processStepLabel}>{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className={styles.processArrow}> → </span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.valueComments} data-reveal>
            <p className={styles.valueComment}>
              {'/* '}<span className={styles.valueKeyword}>INNOVATION</span>
              {': staying ahead with cutting-edge strategies */'}
            </p>
            <p className={styles.valueComment}>
              {'/* '}<span className={styles.valueKeyword}>PARTNERSHIP</span>
              {': functioning as an extension of your team */'}
            </p>
            <p className={styles.valueComment}>
              {'/* '}<span className={styles.valueKeyword}>RESULTS</span>
              {': data-driven, measurable optimization */'}
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: PORTFOLIO (CASE_FILES) ─── */}
      <section className={styles.caseFiles} id="portfolio">
        <div className={styles.caseFilesHeader} data-reveal>
          <p className={styles.terminalCmd}>&gt; cat ./case-studies/all.json</p>
          <h2 className={styles.sectionTitle}>CASE_FILES</h2>
        </div>

        <div className={styles.caseGrid}>
          {caseFiles.map((c) => (
            <div key={c.clientId} className={styles.caseCard} data-reveal>
              <div className={styles.caseImageWrap}>
                <Image src={c.image} alt={c.clientId} fill style={{ objectFit: 'cover' }} />
                <div className={styles.caseImageOverlay} />
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseClientId}>CLIENT_ID: {c.clientId}</p>
                <p className={styles.caseSector}>SECTOR: {c.sector}</p>
                <p className={styles.caseMetricNum}>{c.keyMetric}</p>
                <p className={styles.caseMetricLabel}>{c.metricLabel}</p>
                <p className={styles.caseResult}>RESULT_LOG: {c.resultLog}</p>
                <div className={styles.caseTags}>
                  {c.services.map((tag) => (
                    <span key={tag} className={styles.caseTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 5: SERVICE AREA (NETWORK COVERAGE) ─── */}
      <section className={styles.coverage}>
        <div className={styles.coverageInner} data-reveal>
          <p className={styles.terminalCmd}>&gt; ping --coverage-map</p>
          <h2 className={styles.sectionTitle}>NETWORK_COVERAGE</h2>

          <div className={styles.coverageTable}>
            {[
              { label: 'COVERAGE_AREA:', value: 'NATIONWIDE (ALL 50 STATES)' },
              { label: 'DELIVERY_MODEL:', value: 'REMOTE_FIRST' },
              { label: 'SUPPORT_HOURS:', value: 'MON-FRI 09:00–18:00 EST' },
              { label: 'RESPONSE_SLA:', value: '24_HOURS' },
              { label: 'CONTACT_PHONE:', value: '+1-770-524-0488' },
              { label: 'CONTACT_EMAIL:', value: 'SUPPORT@SIMPLYUSANDU.COM' },
            ].map((row) => (
              <div key={row.label} className={styles.coverageRow}>
                <span className={styles.coverageLabel}>{row.label}</span>
                <span className={styles.coverageValue}>
                  {row.label === 'CONTACT_PHONE:' ? (
                    <a href="tel:+17705240488" className={styles.coverageLink}>{row.value}</a>
                  ) : row.label === 'CONTACT_EMAIL:' ? (
                    <a href="mailto:Support@SimplyUsandU.com" className={styles.coverageLink}>{row.value}</a>
                  ) : row.value}
                </span>
              </div>
            ))}
          </div>

          <p className={styles.statusIndicator}>
            <span className={styles.statusDot}>●</span> SYSTEMS OPERATIONAL
          </p>
        </div>
      </section>

      {/* ─── SECTION 6: CTA (DEPLOY) ─── */}
      <section className={styles.deploy} id="contact">
        <div className={styles.deployInner} data-reveal>
          <p className={styles.deployPrompt}>&gt; READY TO DEPLOY?</p>
          <p className={styles.deploySub}>
            {'# Initialize your growth protocol with a free 30-minute strategy session.'}
          </p>
          <a href="tel:+17705240488" className={styles.deployPhone}>
            $ call +1-(770)-524-0488
          </a>
          <div className={styles.deployCtas}>
            <a href="tel:+17705240488" className={styles.deployBtn}>
              &gt; ./schedule-call.sh --free
            </a>
            <a href="mailto:Support@SimplyUsandU.com" className={styles.deployEmail}>
              $ email Support@SimplyUsandU.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: FOOTER ─── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <p className={styles.footerLogo}>{'/* Simply Us & U — v2026.1.0 */'}</p>
              <p className={styles.footerTagline}>// Your Growth. Our Obsession.</p>
              <p className={styles.footerContact}>
                {'// '}<a href="tel:+17705240488">(770) 524-0488</a>
              </p>
              <p className={styles.footerContact}>
                {'// '}<a href="mailto:Support@SimplyUsandU.com">Support@SimplyUsandU.com</a>
              </p>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.footerCol}>
                <p className={styles.footerColTitle}>// SERVICES</p>
                <a href="#services">Digital Marketing</a>
                <a href="#services">Social Content Creation</a>
                <a href="#services">Website Design</a>
                <a href="#services">Website Hosting</a>
                <a href="#services">Software & App Dev</a>
                <a href="#services">Ad Campaigns</a>
              </div>
              <div className={styles.footerCol}>
                <p className={styles.footerColTitle}>// COMPANY</p>
                <a href="#about">About Us</a>
                <a href="#portfolio">Case Files</a>
                <a href="#contact">Contact</a>
                <a href="#about">Our Process</a>
                <a href="#contact">Get a Quote</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              {'// © 2026 Simply Us & U. All rights reserved. — Remote · Serving clients nationwide.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
