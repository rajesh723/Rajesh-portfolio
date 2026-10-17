import { useEffect, useState } from 'react'
import {
  ArrowDown,  ArrowRight, ArrowUpRight, Braces, Check,
  ChevronRight, Code2, Database, Github, Layers3, Linkedin,
  Mail, Menu, Network, Server, Sparkles, Terminal, UtensilsCrossed, X, Zap, GraduationCap, Trophy, ExternalLink,
} from 'lucide-react'

type Project = {
  number: string
  name: string
  eyebrow: string
  description: string
  tags: string[]
  icon: typeof Layers3
  accent: string
  details: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    number: '01', name: 'TaskFlow', eyebrow: 'FULL-STACK PRODUCT',
    description: 'A collaborative project and task management app with JWT authentication, role-aware permissions, and a clean workflow for teams.',
    tags: ['React', 'TypeScript', 'Django REST', 'PostgreSQL', 'Docker'], icon: Layers3, accent: 'violet',
    details: ['JWT access and refresh token authentication', 'Project and task APIs with ownership-aware permissions', 'Filtering tasks by status and assignee', 'Docker Compose setup for the application stack'],
  },
  {
    number: '02', name: 'Retrieval-Augmented Generation', eyebrow: 'AI / BACKEND SYSTEM',
    description: 'A document question-answering backend designed around semantic retrieval, vector search, and a modular FastAPI service architecture.',
    tags: ['FastAPI', 'pgvector', 'PostgreSQL', 'Ollama', 'Embeddings'], icon: Network, accent: 'cyan',
    details: ['Document ingestion and query endpoints', 'Vector similarity search using pgvector', 'Ollama-based embedding workflow', 'Separated services for embeddings, retrieval, and streaming'],
  },
  {
    number: '03', name: 'Yummy Burger', eyebrow: 'MERN-STACK FOOD ORDERING APP',
    description: 'A full-stack food ordering application with menu browsing, order placement, and real-time tracking workflows, built with React and a Node.js/Express backend.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Context API'], icon: UtensilsCrossed, accent: 'cyan',
    details: ['Built responsive menu browsing and food ordering workflows with React functional components and Hooks', 'Implemented shared application state with Context API', 'Developed RESTful APIs using Node.js and Express.js', 'Integrated MongoDB to store and retrieve order, customer, and delivery data', 'Designed the experience around order progress and real-time tracking workflows'],
    demo: 'https://yummyburgerapp.vercel.app', github: 'https://github.com/rajesh723/yummyburger',
  },
  {
    number: '04', name: 'Wind Turbine Metrics UI', eyebrow: 'PRODUCTION ENGINEERING',
    description: 'A metrics-focused interface for monitoring wind turbine systems, bringing time-series data and operational signals into a usable dashboard.',
    tags: ['Angular', 'Django', 'OpenTSDB', 'Highcharts', 'REST APIs'], icon: Zap, accent: 'blue',
    details: ['Time-series monitoring and visualization', 'API and metadata retrieval optimization', 'Dashboard usability for operational metrics', 'Engineering work focused on reliability and response time'],
  },
]

const skills = [
  { title: 'Backend & APIs', icon: Server, items: ['Python', 'Django', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Data & Storage', icon: Database, items: ['PostgreSQL', 'Redis', 'MongoDB', 'pgvector', 'OpenTSDB', 'SQL optimization'] },
  { title: 'Frontend', icon: Code2, items: ['React', 'TypeScript', 'Angular', 'JavaScript', 'Highcharts', 'Tailwind CSS'] },
  { title: 'Cloud & AI', icon: Braces, items: ['Docker', 'Kubernetes', 'Azure', 'RAG', 'Embeddings', 'LangChain'] },
]

const navItems = [
  ['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Skills', '#skills'], ['Education', '#education'], ['DSA', '#problem-solving'], ['Contact', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [copied, setCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    const updateSpotlight = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    window.addEventListener('pointermove', updateSpotlight, { passive: true })

    const nodes = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      window.removeEventListener('pointermove', updateSpotlight)
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('krajesh001p@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = 'mailto:krajesh001p@gmail.com'
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="scroll-progress-track" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Rajesh Kumar home"><span className="brand-mark">R<span>K</span></span><span>rajesh<span className="brand-dot">.</span>dev</span></a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> SOFTWARE ENGINEER <span className="availability-divider">/</span> INDIA</div>
            <h1>Building systems<br />that <span className="gradient-text">scale with purpose.</span></h1>
            <p className="hero-description">I'm Rajesh — a software engineer focused on dependable backend systems, thoughtful full-stack products, and practical AI applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/rajesh723" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a>
              <a href="https://www.linkedin.com/in/rajesh-kumar-82530b189/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} /></a>
              <span className="social-separator" />
              <span className="mono small-muted">PYTHON · APIs · AI</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative code terminal">
            <div className="visual-orbit orbit-outer" /><div className="visual-orbit orbit-inner" />
            <div className="terminal-card">
              <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span>rajesh@engineer: ~/building</span><Terminal size={14} /></div>
              <div className="terminal-body">
                <div className="code-line"><span className="line-no">01</span><span><b className="code-purple">class</b> <b className="code-cyan">Engineer</b>:</span></div>
                <div className="code-line indent"><span className="line-no">02</span><span><b className="code-purple">def</b> <b className="code-yellow">__init__</b>(self):</span></div>
                <div className="code-line indent2"><span className="line-no">03</span><span>self.focus = <b className="code-green">"reliable systems"</b></span></div>
                <div className="code-line indent2"><span className="line-no">04</span><span>self.curiosity = <b className="code-green">"always_on"</b></span></div>
                <div className="code-line gap-line"><span className="line-no">05</span><span /></div>
                <div className="code-line"><span className="line-no">06</span><span><b className="code-purple">def</b> <b className="code-yellow">build</b>(self, idea):</span></div>
                <div className="code-line indent"><span className="line-no">07</span><span>plan = <b className="code-cyan">design</b>(idea)</span></div>
                <div className="code-line indent"><span className="line-no">08</span><span>result = <b className="code-cyan">ship</b>(plan)</span></div>
                <div className="code-line indent"><span className="line-no">09</span><span><b className="code-purple">return</b> result <span className="cursor" /></span></div>
              </div>
              <div className="terminal-status"><span><span className="status-dot" /> ready to build</span><span className="mono">UTF-8&nbsp; · &nbsp;Python</span></div>
            </div>
            <div className="float-chip chip-api"><span className="chip-icon"><Network size={15} /></span><span><b>API-first</b><small>Design mindset</small></span></div>
            <div className="float-chip chip-ai"><span className="chip-icon"><Sparkles size={15} /></span><span><b>AI curious</b><small>RAG · embeddings</small></span></div>
            <div className="hero-coordinate mono">12°58' N&nbsp; 77°35' E</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDown size={13} /></a>
          <div className="hero-index mono">01 — 05</div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading reveal"><span className="section-kicker">01 / ABOUT ME</span><h2>Curious by nature.<br /><span className="muted-heading">Engineer by craft.</span></h2></div>
          <div className="about-grid">
            <div className="about-copy reveal"><p className="lead-copy">I enjoy turning complex problems into systems that are simple to use, reliable in production, and easy to evolve.</p><p>My work spans backend API development, database performance, and frontend experiences that make operational data useful. Lately, I've also been exploring retrieval-augmented generation and vector search to build more capable applications.</p><p>I value clear interfaces, measurable improvements, and understanding why a system behaves the way it does — not just making it work once.</p><a className="text-link" href="#experience">More about my experience <ArrowRight size={15} /></a></div>
            <div className="stats-grid reveal">
              <div className="stat-card"><span className="stat-value">1.5<span>×</span></span><span className="stat-label">Faster API response times</span><span className="stat-foot">Django · Node.js · REST APIs</span></div>
              <div className="stat-card"><span className="stat-value">3<span>×</span></span><span className="stat-label">Faster metadata retrieval</span><span className="stat-foot">PostgreSQL ORM optimization</span></div>
              <div className="stat-card"><span className="stat-value">{"<"}250<span>ms</span></span><span className="stat-label">Dashboard response times</span><span className="stat-foot">Real-time data delivery pipelines</span></div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading reveal"><span className="section-kicker">02 / EXPERIENCE</span><h2>Where I've made<br /><span className="muted-heading">an impact.</span></h2></div>
          <div className="experience-card reveal">
            <div className="experience-marker"><span /></div>
            <div className="experience-main"><div className="experience-top"><div><span className="role-type">PROFESSIONAL EXPERIENCE</span><h3>Software Developer</h3><p className="company-name">Accenture <span className="company-dot">·</span> India</p></div><span className="date-pill">JUN 2024 — PRESENT</span></div>
              <p className="experience-summary">Building scalable backend services and full-stack tooling for industrial analytics, real-time data delivery, and ML model lifecycle management across cloud and edge environments.</p>
              <ul className="impact-list">
                <li><Check size={15} /><span>Designed scalable backend services and REST APIs with <strong>Python (Django) and Node.js</strong>, improving API response times by <strong>1.5×</strong>.</span></li>
                <li><Check size={15} /><span>Optimized PostgreSQL data access and Redis caching to achieve <strong>3× faster metadata retrieval</strong>.</span></li>
                <li><Check size={15} /><span>Built data-delivery pipelines and a real-time React dashboard for high-frequency time-series workloads, achieving <strong>sub-250 ms response times</strong>.</span></li>
                <li><Check size={15} /><span>Developed full-stack ML model deployment tooling with React and Django/Node.js APIs for lifecycle management across <strong>Azure Cloud and on-premise edge environments</strong>, including air-gapped deployments.</span></li>
                <li><Check size={15} /><span>Implemented <strong>JWT authentication and authorization</strong> and used Pub/Sub architecture for real-time data processing.</span></li>
                <li><Check size={15} /><span>Containerized development and deployment workflows with Docker and collaborated across backend architecture, API design, debugging, and performance optimization.</span></li>
              </ul>
              <div className="tag-row"><span>Python</span><span>Django</span><span>Node.js</span><span>PostgreSQL</span><span>Redis</span><span>React</span><span>Azure</span><span>Docker</span><span>Pub/Sub</span></div>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading section-heading-row reveal"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Things I've <span className="muted-heading">built.</span></h2></div><span className="project-count mono">04 PROJECTS <span>·</span> AND GROWING</span></div>
          <div className="projects-grid">{projects.map((project) => {
            const Icon = project.icon
            return <article className={`project-card reveal accent-${project.accent}`} key={project.number}>
              <div className="project-card-top"><span className="project-number mono">/{project.number}</span><span className="project-type">{project.eyebrow}</span><button className="project-open" aria-label={`View ${project.name} details`} onClick={() => setActiveProject(project)}><ArrowUpRight size={18} /></button></div>
              <div className="project-illustration"><div className="illustration-grid" /><div className="illustration-icon"><Icon size={29} strokeWidth={1.5} /></div><div className="illustration-orbit" /><span className="illustration-label mono">{project.number} / BUILD</span></div>
              <h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-row project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <button className="project-detail-link" onClick={() => setActiveProject(project)}>Explore project <ArrowRight size={15} /></button>
            </article>
          })}</div>
          <div className="projects-note reveal"><span className="note-icon"><Sparkles size={16} /></span><p>Yummy Burger is a featured MERN-stack build. Explore the live application or inspect the source code on GitHub.</p></div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading reveal"><span className="section-kicker">04 / TOOLKIT</span><h2>The tools behind<br /><span className="muted-heading">the work.</span></h2><p className="section-intro">A practical toolkit for building APIs, working with data, shipping interfaces, and exploring AI-powered systems.</p></div>
          <div className="skills-grid">{skills.map((group, index) => { const Icon = group.icon; return <article className="skill-card reveal" key={group.title} style={{ animationDelay: `${index * 80}ms` }}><div className="skill-card-heading"><span className="skill-icon"><Icon size={18} /></span><span className="skill-index mono">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article> })}</div>
          <div className="learning-strip reveal"><span className="learning-spark"><Sparkles size={17} /></span><span><strong>Currently exploring</strong><small>RAG architecture · vector retrieval · production-ready AI systems</small></span><span className="learning-live"><i /> LEARNING IN PUBLIC</span></div>
        </section>

        <section className="education-section section-wrap" id="education">
          <div className="section-heading reveal"><span className="section-kicker">05 / EDUCATION</span><h2>Where the journey<br /><span className="muted-heading">took shape.</span></h2><p className="section-intro">A strong engineering foundation built through a five-year dual-degree program.</p></div>
          <article className="education-card reveal">
            <div className="education-icon"><GraduationCap size={25} /></div>
            <div className="education-main">
              <div className="education-top"><span className="role-type">DUAL DEGREE PROGRAM</span><span className="date-pill">JUL 2019 — JUN 2024</span></div>
              <h3>National Institute of Technology, Durgapur</h3>
              <p className="education-degree">B.Tech + M.Tech · Chemical Engineering</p>
              <div className="education-meta"><span><strong>7.6</strong><small>CGPA</small></span><span className="education-meta-divider" /><span><strong>5 years</strong><small>Integrated program</small></span></div>
            </div>
            <span className="education-watermark mono">NITD</span>
          </article>
        </section>

        <section className="problem-solving-section section-wrap" id="problem-solving">
          <div className="section-heading reveal"><span className="section-kicker">06 / PROBLEM SOLVING</span><h2>Consistency over<br /><span className="muted-heading">clever shortcuts.</span></h2><p className="section-intro">Competitive programming and data structures practice sharpen my approach to problem decomposition, algorithmic thinking, and writing efficient code.</p></div>
          <div className="coding-stats-grid">
            <article className="coding-stat-card reveal"><div className="coding-stat-top"><span className="coding-platform-icon leetcode-icon"><Code2 size={19} /></span><span className="coding-platform-label">ALGORITHM PRACTICE</span></div><strong className="coding-stat-value">450<span>+</span></strong><span className="coding-stat-title">LeetCode problems solved</span><p>Regular practice across data structures, algorithms, and coding patterns.</p><a href="https://leetcode.com/u/Rajesh62/" target="_blank" rel="noreferrer" className="coding-profile-link">View LeetCode profile <ExternalLink size={14} /></a></article>
            <article className="coding-stat-card reveal"><div className="coding-stat-top"><span className="coding-platform-icon codechef-icon"><Trophy size={19} /></span><span className="coding-platform-label">COMPETITIVE PROGRAMMING</span></div><strong className="coding-stat-value">1780</strong><span className="coding-stat-title">CodeChef peak rating · 3-star</span><p>100+ problems solved, with a focus on algorithmic problem solving under constraints.</p><a href="https://www.codechef.com/users/rajesh121" target="_blank" rel="noreferrer" className="coding-profile-link">View CodeChef profile <ExternalLink size={14} /></a></article>
            <article className="coding-stat-card reveal"><div className="coding-stat-top"><span className="coding-platform-icon codeforces-icon"><Braces size={19} /></span><span className="coding-platform-label">CONTEST PRACTICE/PROGRAMMING</span></div><strong className="coding-stat-value">1212</strong><span className="coding-stat-title">Codeforces peak rating · Pupil</span><p>200+ problems solved while building speed and accuracy in implementation.</p><a href="https://codeforces.com/profile/rajesh062" target="_blank" rel="noreferrer" className="coding-profile-link">View CodeForces profile <ExternalLink size={14} /></a></article>
          </div>
          <div className="dsa-focus reveal"><span className="dsa-focus-icon"><Sparkles size={17} /></span><div><strong>Core DSA focus</strong><p>Arrays & strings · Hashing · Two pointers · Binary search · Trees & graphs · Dynamic programming · Complexity analysis</p></div></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel reveal"><div className="contact-grid-bg" /><div className="contact-content"><span className="section-kicker">07 / WHAT'S NEXT</span><h2>Have a good problem?<br /><span className="gradient-text">Let's solve it.</span></h2><p>I'm interested in opportunities where I can build reliable backend systems, work on thoughtful products, and keep learning alongside strong engineers.</p><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}>{copied ? <Check size={17} /> : <Mail size={17} />}{copied ? 'Email copied' : 'Copy my email'} <ArrowUpRight size={16} /></button><a className="button button-ghost" href="https://www.linkedin.com/in/rajesh-kumar-82530b189/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a></div><span className="contact-note mono">OPEN TO MEANINGFUL ENGINEERING OPPORTUNITIES</span></div><div className="contact-decoration"><div className="contact-ring ring-one" /><div className="contact-ring ring-two" /><div className="contact-ring ring-three" /><div className="contact-core"><Code2 size={34} /></div><span className="contact-coordinate mono">LET'S BUILD / 2026</span></div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">R<span>K</span></span><span>rajesh<span className="brand-dot">.</span>dev</span></a><span className="footer-copy">Designed & built with curiosity<span> · </span>© {new Date().getFullYear()} Rajesh Kumar</span><div className="footer-links"><a href="https://github.com/rajesh723" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={16} /></a><a href="https://www.linkedin.com/in/rajesh-kumar-82530b189/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={16} /></a><a href="#home" aria-label="Back to top"><ChevronRight className="back-top-icon" size={16} /></a></div></footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null) }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-top"><span className="section-kicker">PROJECT / {activeProject.number}</span><button className="modal-close" aria-label="Close project details" onClick={() => setActiveProject(null)}><X size={19} /></button></div><span className="modal-eyebrow">{activeProject.eyebrow}</span><h2 id="modal-title">{activeProject.name}</h2><p className="modal-description">{activeProject.description}</p><h4>Engineering highlights</h4><ul className="modal-list">{activeProject.details.map((detail) => <li key={detail}><Check size={15} />{detail}</li>)}</ul><div className="tag-row modal-tags">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="modal-actions">{activeProject.demo ? <a href={activeProject.demo} target="_blank" rel="noreferrer" className="button button-primary">Live demo <ArrowUpRight size={15} /></a> : <span className="button button-ghost link-pending" aria-disabled="true">Live demo URL needed</span>}{activeProject.github ? <a href={activeProject.github} target="_blank" rel="noreferrer" className="button button-primary">View source <Github size={16} /><ArrowUpRight size={15} /></a> : <span className="button button-ghost link-pending" aria-disabled="true">GitHub URL needed</span>}<button className="button button-ghost" onClick={() => setActiveProject(null)}>Close details</button></div><p className="modal-disclaimer">Project links open the live demo and source repository in a new tab.</p></section></div>}
    </div>
  )
}

export default App
