
/* ═══════════════════════════════════════════════════════════
   SK.Agent Portfolio — agent.js
   Sankar Karthikeyan · AI/ML Engineer Portfolio
═══════════════════════════════════════════════════════════ */

// ── Particle canvas ────────────────────────────────────────
(function(){
  const canvas=document.getElementById('pcanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');let W,H,pts=[];
  const N=55,COLS=['rgba(124,58,237,','rgba(99,102,241,','rgba(236,72,153,'];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  function rnd(a,b){return Math.random()*(b-a)+a;}
  function init(){pts=[];for(let i=0;i<N;i++)pts.push({x:rnd(0,W),y:rnd(0,H),vx:rnd(-.12,.12),vy:rnd(-.12,.12),r:rnd(.8,2.2),c:COLS[Math.floor(Math.random()*COLS.length)],a:rnd(.08,.35)});}
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+p.a+')';ctx.fill();});
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle='rgba(124,58,237,'+(0.05*(1-d/120))+')';ctx.lineWidth=.6;ctx.stroke();}}
    requestAnimationFrame(draw);
  }
  resize();init();draw();
  window.addEventListener('resize',()=>{resize();init();},{passive:true});
})();

// ══════════════════════════════════════════════════════════
// CHAPTER TRANSITIONS
// ══════════════════════════════════════════════════════════
const CHAPTER_TRANSITIONS = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B5EFA" stroke-width="1.4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: '✦ Chapter Complete',
    sub: 'You\'ve just met Sankar — the person, the philosophy, and what drives him every single day. Now it\'s time to see what he\'s actually shipped.',
    nextLabel: 'Explore Work Experience →'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B5EFA" stroke-width="1.4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: '✦ Chapter Complete',
    sub: 'The professional track record — products in production, benchmarks beaten, and awards won. Now let\'s go deeper into the technical craft.',
    nextLabel: 'Explore Projects & Skills →'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B5EFA" stroke-width="1.4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    title: '✦ Chapter Complete',
    sub: 'Technical depth — covered. Personal projects — shipped. Research published. Awards won. One final chapter: how to reach the person behind all of it.',
    nextLabel: "Let's Connect →"
  }
];

// ══════════════════════════════════════════════════════════
// PORTFOLIO CONTENT
// ══════════════════════════════════════════════════════════
const SESSIONS = [

  // ─────────────────────────────────────────────────────────
  // CHAPTER 1 — ABOUT ME
  // ─────────────────────────────────────────────────────────
  {
    id: 0, title: 'About Me', tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'Tell me about yourself.',
        tokens: 120
      },
      {
        role: 'agent',
        text: 'I\'m <strong>Sankar Karthikeyan</strong> — an <span class="highlight">AI/ML Engineer</span> who builds AI systems that don\'t just work in demos but hold up in production, under pressure, and in front of real users.<br><br>I currently serve as the <strong>Founding AI Engineer</strong> at SurveySparrow, where I was entrusted to establish the company\'s AI engineering function from scratch — before any AI team, any playbook, or any precedent within the organisation. Over 1.5 years, I\'ve turned that blank page into two live, enterprise-grade AI product lines.',
        tokens: 420
      },
      {
        role: 'user',
        text: 'What does building from scratch actually look like in practice?',
        tokens: 580
      },
      {
        role: 'agent',
        text: 'It means you\'re simultaneously the architect, engineer, researcher, and sometimes the product manager. There\'s no senior AI team to escalate to — just you, the problem, and the need to ship something customers trust.<br><br>My most significant output from that position: an AI Customer Support Agent that autonomously handles <span class="highlight">~80% of incoming queries</span> — no human in the loop. We ran it head-to-head against Intercom\'s FIN agent (the industry\'s benchmark), and ours came out ahead on accuracy.<div class="stat-row"><div class="mini-stat"><span class="mini-stat-val">~80%</span><span class="mini-stat-label">Autonomous Resolution</span></div><div class="mini-stat"><span class="mini-stat-val">99%</span><span class="mini-stat-label">Production Uptime</span></div><div class="mini-stat"><span class="mini-stat-val">&gt; FIN</span><span class="mini-stat-label">vs Intercom Benchmark</span></div></div>',
        tokens: 920
      },
      {
        role: 'user',
        text: 'What is your educational background?',
        tokens: 1080
      },
      {
        role: 'agent',
        text: 'I completed an <strong>M.Sc. in Data Science</strong> through a 5-year integrated programme at <em>Coimbatore Institute of Technology</em>, graduating in May 2025 with a CGPA of <span class="highlight">9.0 / 10</span>.<br><br>What I\'m most proud of isn\'t the grade — it\'s what happened alongside it. I presented original research at the <strong>IIM International Conference on Business Analytics</strong>, completed a data analytics internship at <strong>Ernst &amp; Young</strong>, and built and deployed production AI products for enterprise clients — all while keeping that academic standard.',
        tokens: 1460
      },
      {
        role: 'user',
        text: 'What is your core philosophy as an engineer?',
        tokens: 1620
      },
      {
        role: 'agent',
        text: 'Three things anchor everything I build:<br><br><strong>Production impact over prototype glory.</strong> A model that scores well on benchmarks but fails in production is worse than useless — it erodes trust. I build for the real environment first.<br><br><strong>Evaluation before celebration.</strong> I built a full LLM evaluation pipeline — where AI models grade other AI models systematically — because "it feels right" is never an acceptable quality bar in a live product.<br><br><strong>The Agentic frontier.</strong> We\'re in the middle of a shift from "AI as a feature" to "AI as an autonomous decision-maker." I want to be at the centre of that transition, not watching from the sidelines.',
        tokens: 1960
      },
      {
        role: 'user',
        text: 'If you had to describe your engineering philosophy in a single sentence?',
        tokens: 2100
      },
      {
        role: 'agent',
        text: '<em>"Build AI that earns trust through reliability, not just capability."</em><br><br>Every system I\'ve shipped comes with monitoring pipelines, evaluation frameworks, and documented fallback strategies — because the moment a user can\'t rely on your AI, it becomes a liability, not a product.',
        tokens: 2300,
        isLast: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // CHAPTER 2 — EXPERIENCE
  // ─────────────────────────────────────────────────────────
  {
    id: 1, title: 'Experience', tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'Walk me through your time at SurveySparrow.',
        tokens: 140
      },
      {
        role: 'agent',
        text: 'I joined SurveySparrow in December 2024 as an <strong>AI/ML Engineer Intern</strong> — and converted to a full-time role in May 2025 upon completing my degree. From the very first week, I wasn\'t writing support code or fixing test cases. I was designing the AI strategy, choosing the architecture, and shipping production features for enterprise clients.<br><br>That level of ownership at an early career stage is rare — and it pushed me to grow faster than any structured programme could have.',
        tokens: 480
      },
      {
        role: 'user',
        text: 'Tell me the full story behind the AI Customer Support Agent.',
        tokens: 640
      },
      {
        role: 'agent',
        text: 'The brief was deceptively simple: build an AI agent that reduces support load. The execution was anything but.<br><br>I designed a <strong>multimodal AI Support Agent</strong> deployed on <code>AWS AgentCore</code>, built around a retrieval-augmented generation (RAG) architecture. What makes it genuinely impactful:\n<br><br>• It understands <strong>text, screenshots, and file attachments</strong> — so customers can explain their problems naturally, not just through text\n<br>• It resolves <span class="highlight">~80% of incoming queries autonomously</span> — no escalation, no human delay\n<br>• It runs with <strong>99% uptime</strong> and has had zero critical production incidents since launch\n<br>• We benchmarked it against <strong>Intercom\'s FIN</strong> — the standard enterprise support AI — and ours outperformed it on accuracy<div class="tag-row"><span class="tag-chip">AWS AgentCore</span><span class="tag-chip">RAG</span><span class="tag-chip pink">Multimodal AI</span><span class="tag-chip green">Live in Production</span></div>',
        tokens: 1080
      },
      {
        role: 'user',
        text: 'What did you build for SparrowGenie?',
        tokens: 1240
      },
      {
        role: 'agent',
        text: 'SparrowGenie is SurveySparrow\'s enterprise AI suite — a broader platform targeting sales and pre-sales productivity. I owned the entire AI layer. Here\'s what I shipped independently:\n<br><br>• <strong>Knowledge Copilot</strong> — a RAG-powered assistant that gives instant, cited answers from internal documentation, reducing time-to-answer for sales teams\n<br>• <strong>RFP Automation</strong> — intelligently maps incoming RFP questions to the right sections of company documents, eliminating hours of manual search\n<br>• <strong>Proposal Generator</strong> — produces full, contextualised sales proposals from a brief input, dramatically accelerating the pre-sales cycle\n<br>• <strong>Meeting Intelligence Copilot</strong> — analyses upcoming client meetings, generates pre-call research, and surfaces relevant talking points automatically\n<br><br>Every one of these runs in production at <span class="highlight">99% uptime with zero critical incidents</span>.',
        tokens: 1680
      },
      {
        role: 'user',
        text: 'You won an AWS hackathon — what was that about?',
        tokens: 1840
      },
      {
        role: 'agent',
        text: 'At the <strong>AWS GenAILoft Hackathon 2025</strong>, I built a <strong>Developer Productivity Intelligence Platform</strong> that uses AI to measure and improve engineering team performance through DORA metrics — tracking deployment frequency, lead time for changes, change failure rate, and mean time to recovery.<br><br>The system automatically classifies code changes by type and business impact using AI, and surfaces actionable insights that help engineering managers identify bottlenecks in real time.<div class="award-card-inline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><div class="award-card-inline-text"><strong>🏆 Best Innovation Award — AWS GenAILoft 2025</strong><br>Recognised as the most innovative solution across all AWS Partner companies at the event</div></div>',
        tokens: 2180
      },
      {
        role: 'user',
        text: 'What did you build during your internship phase, and what about your time at EY?',
        tokens: 2340
      },
      {
        role: 'agent',
        text: 'During the internship period at SurveySparrow, I built two internal productivity tools that are now used by the engineering and product teams:\n<br><br><strong>AI QA Engineer</strong> — give it a product requirements document and it generates comprehensive test cases, scenario matrices, and working Playwright automation scripts. What used to take a QA engineer a full day now takes minutes. <span class="highlight">10× speed improvement, validated.</span>\n<br><br><strong>AI Product Manager</strong> — an end-to-end PM workflow engine. Input a single idea or user problem, and it produces user stories, a full PRD, wireframe descriptions, system architecture diagrams, and JIRA-ready tickets — automatically. This is what "AI replacing repetitive work" looks like in practice.\n<br><br>At <strong>Ernst &amp; Young</strong> in 2023, I worked as a Data Analyst Trainee, designing and delivering sales intelligence dashboards in SAP Analytics Cloud for business stakeholders. It was my first exposure to data work at an enterprise scale — and it confirmed that I wanted to go deeper into the AI layer.',
        tokens: 2600,
        isLast: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // CHAPTER 3 — PROJECTS & SKILLS
  // ─────────────────────────────────────────────────────────
  {
    id: 2, title: 'Projects & Skills', tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'What does your technical toolkit look like?',
        tokens: 130
      },
      {
        role: 'agent',
        text: 'My stack is deliberately assembled for building <span class="highlight">production AI systems at enterprise scale</span> — not just experiments or notebooks.<br><br><strong>AI & Machine Learning</strong><div class="tag-row"><span class="tag-chip">Agentic AI Systems</span><span class="tag-chip">RAG Architecture</span><span class="tag-chip">LLM Evaluation</span><span class="tag-chip">Prompt Engineering</span><span class="tag-chip pink">Deep Learning</span><span class="tag-chip pink">Classical ML</span></div><br><strong>Cloud & Infrastructure (AWS)</strong><div class="tag-row"><span class="tag-chip green">Amazon Bedrock</span><span class="tag-chip green">AWS AgentCore</span><span class="tag-chip green">Lambda</span><span class="tag-chip green">S3 · DynamoDB</span><span class="tag-chip green">Aurora RDS</span><span class="tag-chip green">CloudWatch</span><span class="tag-chip green">ECR</span></div><br><strong>Languages & Data</strong><div class="tag-row"><span class="tag-chip gold">Python</span><span class="tag-chip gold">JavaScript</span><span class="tag-chip">Pinecone</span><span class="tag-chip">PostgreSQL</span><span class="tag-chip">MongoDB</span><span class="tag-chip">Firebase</span></div>',
        tokens: 540
      },
      {
        role: 'user',
        text: 'How do you use AI tools in your own day-to-day engineering?',
        tokens: 710
      },
      {
        role: 'agent',
        text: 'I think of this as a competitive advantage, not just a preference. I work inside AI-native tools continuously:\n<br><br>• <code>Cursor</code> — AI-first code editor; context-aware pair programming that actually understands your codebase\n<br>• <code>Claude Code</code> — Anthropic\'s CLI-based agent for complex, multi-step engineering tasks\n<br>• <code>KIRO</code> — AWS\'s agentic IDE, purpose-built for cloud-native AI workflows\n<br>• <code>AntiGravity</code> — the AI assistant used to build this very portfolio\n<br>• <code>Perplexity</code> — AI-powered research when I need to go deep on a technical question fast\n<br>• <code>Granola</code> — AI meeting assistant, so I\'m fully present in conversations rather than taking notes\n<br><br>The cumulative effect: I consistently operate at a higher output level than the traditional engineering workflow allows.',
        tokens: 1140
      },
      {
        role: 'user',
        text: 'Tell me about your personal projects in depth.',
        tokens: 1310
      },
      {
        role: 'agent',
        text: '<strong>Portfolio Buzz — AI Investment Intelligence Platform</strong><br>This started as a personal frustration: existing investment tracking tools showed you data but didn\'t help you think. So I built one that does.<div class="tag-row"><span class="tag-chip">Flask</span><span class="tag-chip">Next.js</span><span class="tag-chip">MongoDB</span><span class="tag-chip pink">Perplexity AI API</span><span class="tag-chip">Vercel · Render</span></div>Portfolio Buzz uses multi-agent AI workflows to analyse equity and mutual fund portfolios, surface cross-asset comparisons, and generate investment reasoning — not just charts. It\'s the kind of tool I wanted to exist, so I built it.<br><br><strong>Analyze This — Universal Data Intelligence Tool</strong><br>The insight behind this project: most of the world\'s data lives in CSV files, and most of the people who need insights from them can\'t code. Analyze This accepts any CSV from any domain and automatically discovers patterns, outliers, and insights — no programming knowledge required. This project was good enough to be accepted and presented at the <strong>IIM International Conference on Business Analytics</strong>.',
        tokens: 1740
      },
      {
        role: 'user',
        text: 'What research have you published, and what awards have you received?',
        tokens: 1900
      },
      {
        role: 'agent',
        text: '<div class="award-card-inline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><div class="award-card-inline-text"><strong>Best Innovation — AWS GenAILoft Hackathon 2025</strong><br>Most innovative solution among all participating AWS Partner companies</div></div><br><strong>Research Presentation — IIM International Conference 2022</strong><br><em>"Insight Analysis for Any CSV File"</em> — presented at IIM\'s 9th International Conference on Business Analytics &amp; Intelligence, one of India\'s most rigorous academic forums for data science research. I was 20, and a third-year undergraduate. The paper was selected on merit from a highly competitive pool of submissions.',
        tokens: 2300
      },
      {
        role: 'user',
        text: 'Do you handle deployment and DevOps yourself, or do you hand that off?',
        tokens: 2460
      },
      {
        role: 'agent',
        text: 'I own the full delivery lifecycle. Handing off deployment would mean losing insight into how my systems behave in production — and that\'s insight I can\'t afford to lose when I\'m building AI systems that need to be trusted.<br><br>My DevOps stack:\n<br>• <strong>Jenkins</strong> — CI/CD pipelines for automated, tested deployment flows\n<br>• <strong>Docker</strong> — containerised services for reproducible environments across dev, staging, and production\n<br>• <strong>AWS ECR</strong> — container registry for production AI workloads\n<br>• <strong>CloudWatch</strong> — real-time monitoring, alerting, log analysis, and anomaly detection\n<br><br>And the meta-layer: I built the <strong>DORA Metrics Intelligence Platform</strong> that measures how effectively engineering teams use DevOps practices — because I don\'t just apply these tools, I think about how to measure their impact.',
        tokens: 2760,
        isLast: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // CHAPTER 4 — LET'S CONNECT
  // ─────────────────────────────────────────────────────────
  {
    id: 3, title: "Let's Connect", tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'What makes you meaningfully different from other AI engineers on the market right now?',
        tokens: 160
      },
      {
        role: 'agent',
        text: 'Most engineers at this stage can integrate an API and produce something that looks impressive. The gap shows when you go deeper.<br><br>What I bring that\'s genuinely uncommon for 1.5 years of experience:\n<br><br>• I\'ve built and operated <strong>LLM evaluation frameworks</strong> at scale — not just a few test prompts, but systematic pipelines where AI models assess AI outputs for quality, accuracy, and safety\n<br>• I\'ve run <strong>live competitive benchmarks</strong> against commercial AI products (Intercom FIN) — and designed the methodology, not just run someone else\'s script\n<br>• I\'ve shipped <strong>multiple AI products to enterprise production</strong> with 99% uptime — understanding not just model performance, but latency, token cost, fallback strategy, and observability\n<br>• I reason about AI quality in terms of <em>measurement</em> — not intuition\n<br><br>That\'s the difference between AI engineering as a skill and AI engineering as a discipline.',
        tokens: 580
      },
      {
        role: 'user',
        text: 'What kind of role or environment would bring out your best work?',
        tokens: 740
      },
      {
        role: 'agent',
        text: 'I do my best work in environments where <strong>AI is a serious, first-class investment</strong> — not a feature checkbox or a PR initiative.<br><br>Concretely, I\'m looking for:\n<br>• A role where I can own AI/ML engineering with real scope — architecture through production\n<br>• Work at the cutting edge of <strong>Agentic AI, LLM systems, and intelligent automation</strong>\n<br>• A team that values measurement, questions assumptions, and ships with velocity\n<br>• A problem space where AI isn\'t just supplementary — it\'s the core of the product\n<br><br>Geography isn\'t a constraint. I\'m equally open to a high-conviction startup and a company building at the frontier of what AI can do.',
        tokens: 1100
      },
      {
        role: 'user',
        text: 'Tell me something about you that doesn\'t show up on a resume.',
        tokens: 1260
      },
      {
        role: 'agent',
        text: 'A few things that offer a more complete picture:<div class="fun-grid"><div class="fun-card"><strong>IIM at 20</strong>Presenting original research at an IIM international conference as a third-year undergrad wasn\'t a school trip. It was a competitive submission accepted on merit — and I was one of the youngest there.</div><div class="fun-card"><strong>I Build What I Need</strong>Portfolio Buzz started because I invest personally and found existing tools shallow. The best way to understand a problem deeply enough to solve it is to have the problem yourself.</div><div class="fun-card"><strong>AI Is My Operating System</strong>I use 6+ AI tools daily — not because I have to, but because I believe this is how high-leverage work gets done in 2025. I\'m not adapting to the AI era; I\'m already inside it.</div><div class="fun-card"><strong>Standards Under Pressure</strong>I maintained a 9.0 CGPA at a rigorous five-year programme while simultaneously building and deploying production AI systems for enterprise customers. I don\'t trade one for the other.</div></div>',
        tokens: 1620
      },
      {
        role: 'user',
        text: 'I\'d like to reach out. How can I connect with you?',
        tokens: 1780
      },
      {
        role: 'agent',
        text: 'Genuinely glad to hear it — please do. I respond to serious enquiries promptly.<div class="contact-row"><a href="mailto:sankarkarthikeyan066@gmail.com?subject=Opportunity%20from%20Portfolio" class="contact-chip" id="final-email"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> sankarkarthikeyan066@gmail.com</a><a href="tel:+919361381816" class="contact-chip" id="final-phone"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg> +91 93613 81816</a><a href="https://www.linkedin.com/in/sankar-karthikeyan/" target="_blank" rel="noopener" class="contact-chip" id="final-linkedin"><svg width="15" height="15" viewBox="0 0 24 24" fill="#6366F1"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> linkedin.com/in/sankar-karthikeyan</a><a href="https://github.com/SankarKarthi" target="_blank" rel="noopener" class="contact-chip" id="final-github"><svg width="15" height="15" viewBox="0 0 24 24" fill="#EC4899"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg> github.com/SankarKarthi</a></div>',
        tokens: 2300,
        isLast: true,
        isFinal: true
      }
    ]
  }
];

// ══════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════
let currentSession  = 0;
let currentMsgIdx   = 0;
let isTyping        = false;
let isAutoPlay      = false;
let autoTimer       = null;
let _nextBtnHandler = null;

const T = {
  userMsgDelay: 400,
  thinkMin:     1600,
  thinkJitter:  1000,
  readUser:     2800,
  readAgent:    3800,
  lastMsgPause: 1800,
  sessLoadGap:  700,
};

// ══════════════════════════════════════════════════════════
// DOM
// ══════════════════════════════════════════════════════════
const messagesEl    = document.getElementById('messages');
const tokenFill     = document.getElementById('token-fill');
const tokenCount    = document.getElementById('token-count');
const tokenPctEl    = document.getElementById('token-pct');
const tokenLabelEl  = document.getElementById('token-label');
const exceededEl    = document.getElementById('token-exceeded');
const exceededFill  = document.getElementById('exceeded-fill');
const exceededIcon  = document.getElementById('exceeded-icon');
const exceededTitle = document.getElementById('exceeded-title');
const exceededSub   = document.getElementById('exceeded-sub');
const nextSessLabel = document.getElementById('next-sess-label');
const hintBar       = document.getElementById('hint-bar');

// ══════════════════════════════════════════════════════════
// PROGRESS BAR
// ══════════════════════════════════════════════════════════
function updateTokenBar(used, max) {
  const pct = Math.min(100, Math.round((used / max) * 100));
  tokenFill.style.width = pct + '%';
  tokenCount.textContent = pct;
  tokenPctEl.textContent = pct + '%';
  tokenFill.style.background = pct > 80
    ? 'linear-gradient(90deg,#7C3AED,#EC4899)'
    : 'linear-gradient(90deg,#7C3AED,#6366F1)';
}

// ══════════════════════════════════════════════════════════
// RENDER MESSAGE
// ══════════════════════════════════════════════════════════
function renderMessage(msg, animate = true) {
  const isUser = msg.role === 'user';
  const wrap = document.createElement('div');
  wrap.className = `msg ${isUser ? 'user' : 'agent'}` + (animate ? '' : ' visible');
  const time = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  wrap.innerHTML = `
    <div class="msg-avatar ${isUser ? 'avatar-user' : 'avatar-agent'}">${isUser ? 'YOU' : 'SK'}</div>
    <div class="msg-body">
      <div class="msg-header">
        <span class="msg-name">${isUser ? 'Visitor' : 'Sankar Karthikeyan'}</span>
        <span class="msg-time">${time}</span>
      </div>
      <div class="msg-bubble ${isUser ? 'bubble-user' : 'bubble-agent'}">${msg.text}</div>
    </div>`;
  messagesEl.appendChild(wrap);
  if (animate) requestAnimationFrame(() => requestAnimationFrame(() => wrap.classList.add('visible')));
  setTimeout(() => messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior:'smooth' }), 60);
}

// ══════════════════════════════════════════════════════════
// TYPING INDICATOR
// ══════════════════════════════════════════════════════════
function showTyping() {
  const wrap = document.createElement('div');
  wrap.className = 'msg agent typing visible';
  wrap.id = 'typing-indicator';
  wrap.innerHTML = `
    <div class="msg-avatar avatar-agent">SK</div>
    <div class="msg-body">
      <div class="msg-header"><span class="msg-name">Sankar Karthikeyan</span></div>
      <div class="msg-bubble bubble-agent"><div class="typing-dots"><span></span><span></span><span></span></div></div>
    </div>`;
  messagesEl.appendChild(wrap);
  messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior:'smooth' });
}
function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

function addDivider(text) {
  const d = document.createElement('div');
  d.className = 'msg-divider';
  d.textContent = text;
  messagesEl.appendChild(d);
}

// ══════════════════════════════════════════════════════════
// LOAD CHAPTER
// ══════════════════════════════════════════════════════════
function loadSession(idx) {
  currentSession = idx;
  currentMsgIdx  = 0;
  isTyping       = false;
  const sess = SESSIONS[idx];
  messagesEl.innerHTML = '';
  updateTokenBar(0, sess.tokenMax);

  document.querySelectorAll('.sess-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
    btn.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    const s = btn.querySelector('.sess-status');
    if (i < idx)        { s.textContent = '✓'; s.className = 'sess-status done'; }
    else if (i === idx) { s.textContent = '▶'; s.className = 'sess-status active-s'; }
    else                { s.textContent = '·'; s.className = 'sess-status locked'; }
  });

  addDivider(`── ${sess.title} ──`);
  updateHint();
}

// ══════════════════════════════════════════════════════════
// HINT BAR — updates as conversation progresses
// ══════════════════════════════════════════════════════════
function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function updateHint() {
  const sess = SESSIONS[currentSession];
  if (currentMsgIdx >= sess.messages.length) {
    hintBar.textContent = 'Chapter complete — preparing the next one...';
    return;
  }
  const next = sess.messages[currentMsgIdx];
  if (next.role === 'user') {
    hintBar.innerHTML = `<span class="hint-q">${escHtml(next.text)}</span>`;
  } else {
    hintBar.textContent = 'Sit tight — composing a response...';
  }
}

// ══════════════════════════════════════════════════════════
// ADVANCE CONVERSATION
// ══════════════════════════════════════════════════════════
function sendNext() {
  if (isTyping) return;
  const sess = SESSIONS[currentSession];
  if (currentMsgIdx >= sess.messages.length) return;
  isTyping = true;
  const msg = sess.messages[currentMsgIdx];

  if (msg.role === 'user') {
    setTimeout(() => {
      renderMessage(msg);
      updateTokenBar(msg.tokens, sess.tokenMax);
      currentMsgIdx++;
      isTyping = false;
      updateHint();
      if (isAutoPlay) autoTimer = setTimeout(sendNext, T.readUser);
    }, T.userMsgDelay);
  } else {
    setTimeout(() => {
      showTyping();
      const thinkTime = T.thinkMin + Math.random() * T.thinkJitter;
      setTimeout(() => {
        removeTyping();
        renderMessage(msg);
        updateTokenBar(msg.tokens, sess.tokenMax);
        currentMsgIdx++;
        isTyping = false;
        updateHint();
        if (msg.isLast) {
          setTimeout(triggerChapterEnd, T.lastMsgPause);
        } else {
          autoTimer = setTimeout(sendNext, T.readAgent);
        }
      }, thinkTime);
    }, 200);
  }
}

// ══════════════════════════════════════════════════════════
// CHAPTER END OVERLAY
// ══════════════════════════════════════════════════════════
function triggerChapterEnd() {
  const sess = SESSIONS[currentSession];
  if (currentSession === SESSIONS.length - 1 && sess.messages.slice(-1)[0]?.isFinal) {
    showPortfolioEnd(); return;
  }

  updateTokenBar(sess.tokenMax, sess.tokenMax);
  const transition = CHAPTER_TRANSITIONS[currentSession];
  const nextIdx = currentSession + 1;

  if (exceededIcon)  exceededIcon.innerHTML    = transition.icon;
  if (exceededTitle) exceededTitle.textContent = transition.title;
  if (exceededSub)   exceededSub.textContent   = transition.sub;
  if (nextSessLabel) nextSessLabel.textContent = transition.nextLabel;

  const btn = document.getElementById('next-sess-btn');
  if (btn) {
    btn.style.display = 'none';
    btn.style.opacity = '0';
    btn.style.animation = '';
    btn.disabled = false;
    if (_nextBtnHandler) btn.removeEventListener('click', _nextBtnHandler);
    _nextBtnHandler = function() {
      btn.disabled = true;
      exceededEl.style.opacity = '0';
      exceededEl.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        exceededEl.style.display = 'none';
        exceededEl.style.opacity = '1';
        exceededEl.style.transition = '';
        exceededFill.style.width = '0%';
        btn.style.display = 'none';
        btn.style.opacity = '0';
        btn.disabled = false;
        setTimeout(() => {
          loadSession(nextIdx);
          autoTimer = setTimeout(sendNext, 1200); // always resume
        }, T.sessLoadGap);
      }, 550);
    };
    btn.addEventListener('click', _nextBtnHandler);
  }

  exceededEl.style.display = 'flex';
  setTimeout(() => { exceededFill.style.width = '100%'; }, 100);
  setTimeout(() => {
    if (btn) { btn.style.display = 'inline-flex'; btn.style.animation = 'fadeInUp 0.45s ease forwards'; }
  }, 1900);
}

function showPortfolioEnd() {
  clearTimeout(autoTimer);
  hintBar.innerHTML = `<span style="color:#10B981;font-style:normal;">✦ Portfolio complete — thank you for your time. I look forward to connecting.</span>`;
  document.querySelectorAll('.sess-btn').forEach(btn => {
    const s = btn.querySelector('.sess-status');
    s.textContent = '✓'; s.className = 'sess-status done';
  });
}

// ══════════════════════════════════════════════════════════
// SIDEBAR NAV — click any chapter to jump; auto-play resumes
// ══════════════════════════════════════════════════════════
document.querySelectorAll('.sess-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    clearTimeout(autoTimer);
    isTyping = false;
    if (exceededEl.style.display !== 'none') {
      exceededEl.style.display = 'none';
      exceededFill.style.width = '0%';
      const b = document.getElementById('next-sess-btn');
      if (b) { b.style.display = 'none'; b.style.opacity = '0'; }
    }
    loadSession(i);
    // Resume auto-play after brief pause
    autoTimer = setTimeout(sendNext, 1200);
  });
});

// ══════════════════════════════════════════════════════════
// INIT — auto-start 2 seconds after page load
// ══════════════════════════════════════════════════════════
loadSession(0);
isAutoPlay = true;
autoTimer = setTimeout(sendNext, 2000); // starts automatically — no button needed
