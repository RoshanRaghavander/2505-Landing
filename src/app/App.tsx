import { Github, Twitter, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Hero Section */}
      <section className="px-6 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
            <div>
              <h1 
                className="mb-3" 
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: '400',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                2505
              </h1>
              <p 
                className="mb-8"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  color: '#a3a3a3'
                }}
              >
                25.05° N — threshold conditions
              </p>
            </div>
            
            <div className="flex gap-3 md:pt-2">
              <a
                href="https://works.2505.lab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-neutral-300 hover:border-neutral-900 transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#525252'
                }}
              >
                Works
              </a>
              <a
                href="https://blog.2505.lab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-neutral-300 hover:border-neutral-900 transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#525252'
                }}
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large card - Mission */}
            <div 
              className="md:col-span-2 lg:col-span-2 bg-white border border-neutral-200 p-8 md:p-12"
              style={{ minHeight: '320px' }}
            >
              <h2 
                className="mb-6"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: '400',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#525252'
                }}
              >
                Mission
              </h2>
              <p 
                className="mb-6"
                style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#404040' }}
              >
                A non-profit research lab focused on the development and release of applied technologies in artificial intelligence, security, and foundational systems.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#737373' }}>
                We produce work designed for real-world use, informed by deployment constraints, operational risk, and failure in practice.
              </p>
            </div>

            {/* Tall card - Stats/Identity */}
            <div 
              className="bg-neutral-900 text-white border border-neutral-800 p-8 md:p-12 flex flex-col justify-between"
              style={{ minHeight: '320px' }}
            >
              <div>
                <p 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'var(--font-mono)',
                    fontSize: '3rem',
                    fontWeight: '400',
                    lineHeight: '1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  2505
                </p>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                    color: '#a3a3a3'
                  }}
                >
                  Non-profit
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#ffffff', marginBottom: '0.25rem' }}>Independent</p>
                  <p style={{ fontSize: '0.8rem', lineHeight: '1.5', color: '#a3a3a3' }}>Not aligned with commercial or political interests.</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#ffffff', marginBottom: '0.25rem' }}>Research-driven</p>
                  <p style={{ fontSize: '0.8rem', lineHeight: '1.5', color: '#a3a3a3' }}>Decisions grounded in evidence, evaluation, and iteration.</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#ffffff', marginBottom: '0.25rem' }}>Long-term</p>
                  <p style={{ fontSize: '0.8rem', lineHeight: '1.5', color: '#a3a3a3' }}>Work selected for relevance over time, not immediacy.</p>
                </div>
              </div>
            </div>

            {/* Medium card - Purpose */}
            <div 
              className="bg-white border border-neutral-200 p-8 md:p-10"
              style={{ minHeight: '280px' }}
            >
              <h2 
                className="mb-4"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: '400',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#525252'
                }}
              >
                Purpose
              </h2>
              <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.7', color: '#404040' }}>
                To advance open and resilient systems by conducting applied research under realistic technical, environmental, and organizational constraints.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#737373' }}>
                Our work prioritizes robustness, interpretability, and long-term viability over novelty or short-term performance.
              </p>
            </div>

            {/* Medium card - Focus Areas */}
            <div 
              className="md:col-span-2 bg-white border border-neutral-200 p-8 md:p-10"
              style={{ minHeight: '280px' }}
            >
              <h2 
                className="mb-6"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: '400',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#525252'
                }}
              >
                Focus Areas
              </h2>
              <div className="space-y-5">
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: '500', lineHeight: '1.7', color: '#404040', marginBottom: '0.5rem' }}>
                    AI/ML Systems
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#737373' }}>
                    Learning systems designed for reliability, evaluation, and use beyond controlled environments.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: '500', lineHeight: '1.7', color: '#404040', marginBottom: '0.5rem' }}>
                    Secure Infrastructure
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#737373' }}>
                    Tools and architectures for systems that must operate under adversarial conditions.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: '500', lineHeight: '1.7', color: '#404040', marginBottom: '0.5rem' }}>
                    Foundational Technology
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#737373' }}>
                    Core software and technical primitives that enable durable, composable systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Wide card - Coordinates */}
            <div 
              className="md:col-span-2 lg:col-span-2 bg-neutral-100 border border-neutral-200 p-8 md:p-10 flex flex-col items-center justify-center"
              style={{ minHeight: '120px' }}
            >
              <p 
                className="mb-2"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.15em',
                  color: '#737373',
                  textAlign: 'center'
                }}
              >
                25.05° N — THRESHOLD CONDITIONS
              </p>
              <p 
                style={{ 
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  color: '#a3a3a3',
                  textAlign: 'center'
                }}
              >
                Systems are evaluated where assumptions break.
              </p>
            </div>

            {/* Social Links Card */}
            <div 
              className="bg-white border border-neutral-200 p-8 md:p-10 flex flex-col justify-between"
              style={{ minHeight: '120px' }}
            >
              <h2 
                className="mb-4"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: '400',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#525252'
                }}
              >
                Connect
              </h2>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/2505-lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a 
                  href="https://twitter.com/2505lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
                <a 
                  href="https://linkedin.com/company/2505-lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p 
            style={{ 
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              color: '#a3a3a3'
            }}
          >
            © 2505 — Independent research laboratory
          </p>
        </div>
      </footer>
    </div>
  );
}