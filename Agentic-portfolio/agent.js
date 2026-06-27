
/* ═══════════════════════════════════════════════════════════
   SK.Agent Portfolio — agent.js
   Professional agentic portfolio for Sankar Karthikeyan
═══════════════════════════════════════════════════════════ */

// ── Particle background ────────────────────────────────────
(function(){
  const canvas=document.getElementById('pcanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');let W,H,pts=[];
  const N=55,COLS=['rgba(124,58,237,','rgba(99,102,241,','rgba(236,72,153,'];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  function rnd(a,b){return Math.random()*(b-a)+a;}
  function init(){pts=[];for(let i=0;i<N;i++)pts.push({x:rnd(0,W),y:rnd(0,H),vx:rnd(-.12,.12),vy:rnd(-.12,.12),r:rnd(.8,2.2),c:COLS[Math.floor(Math.random()*COLS.length)],a:rnd(.08,.35)});}
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+p.a+')';ctx.fill();
    });
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle='rgba(124,58,237,'+(0.05*(1-d/120))+')';ctx.lineWidth=.6;ctx.stroke();}
    }
    requestAnimationFrame(draw);
  }
  resize();init();draw();
  window.addEventListener('resize',()=>{resize();init();},{passive:true});
})();

// ══════════════════════════════════════════════════════════
// CHAPTER TRANSITION MESSAGES — professional & elegant
// ══════════════════════════════════════════════════════════
const CHAPTER_TRANSITIONS = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B5EFA" stroke-width="1.4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: '✦ Chapter Complete',
    sub: 'Sankar\'s identity, background, and engineering philosophy have been explored. Ready to dive into what he has actually built and shipped.',
    nextLabel: 'Explore Work Experience →'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B5EFA" stroke-width="1.4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: '✦ Chapter Complete',
    sub: 'Professional achievements, product launches, and measurable impact — all covered. Time to explore the technical depth and personal work.',
    nextLabel: 'Explore Projects & Skills →'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B5EFA" stroke-width="1.4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
    title: '✦ Chapter Complete',
    sub: 'Technical skills, personal projects, and recognition — all mapped. One final chapter remains: the person behind the work and how to reach him.',
    nextLabel: 'Let\'s Connect →'
  }
];

// ══════════════════════════════════════════════════════════
// PORTFOLIO CONTENT — 4 CHAPTERS
// ══════════════════════════════════════════════════════════
const SESSIONS = [
  // ── CHAPTER 1: About Me ──────────────────────────────────
  {
    id: 0,
    title: 'About Me',
    sysPrompt: 'You are Sankar Karthikeyan\'s portfolio AI. Answer all questions truthfully, representing <strong>Sankar Karthikeyan — AI/ML Engineer</strong>. This chapter covers identity, background and philosophy.',
    tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'Tell me about yourself.',
        tokens: 120
      },
      {
        role: 'agent',
        text: 'I\'m <strong>Sankar Karthikeyan</strong> — an <span class="highlight">AI/ML Engineer</span> with 1.5 years of experience building production-grade AI systems that ship, scale, and earn trust.<br><br>I\'m currently the <strong>Founding AI Engineer</strong> at <em>SurveySparrow</em>, where I was among the first to introduce AI capabilities before a dedicated team existed — and built two flagship product lines from the ground up.',
        tokens: 420
      },
      {
        role: 'user',
        text: 'What does "Founding AI Engineer" actually mean in practice?',
        tokens: 580
      },
      {
        role: 'agent',
        text: 'It means complete ownership — from architecture to production. I lead AI development for two flagship products: <em>SparrowDesk</em> (AI customer support) and <em>SparrowGenie</em> (enterprise AI suite).<br><br>My defining achievement: an AI Support Agent that autonomously resolves <span class="highlight">~80% of customer queries</span> — benchmarked directly against Intercom\'s FIN agent, and ours outperforms it in accuracy.<div class="stat-row"><div class="mini-stat"><span class="mini-stat-val">~80%</span><span class="mini-stat-label">Autonomous Resolution</span></div><div class="mini-stat"><span class="mini-stat-val">99%</span><span class="mini-stat-label">Production Uptime</span></div><div class="mini-stat"><span class="mini-stat-val">&gt; FIN</span><span class="mini-stat-label">vs Intercom</span></div></div>',
        tokens: 920
      },
      {
        role: 'user',
        text: 'What is your academic background?',
        tokens: 1080
      },
      {
        role: 'agent',
        text: 'I hold an <strong>M.Sc. in Data Science</strong> — a 5-year integrated programme from <em>Coimbatore Institute of Technology</em>, graduating May 2025 with a CGPA of <span class="highlight">9.0</span>.<br><br>Alongside my studies, I:\n<br>• Presented research at the <strong>IIM International Conference on Business Analytics &amp; Intelligence</strong>\n<br>• Interned at <strong>Ernst &amp; Young</strong> as a Data Analyst Trainee\n<br>• Shipped production-level AI products for enterprise clients\n<br>• Won the <strong>AWS GenAILoft Best Innovation Award 2025</strong>',
        tokens: 1460
      },
      {
        role: 'user',
        text: 'What drives your work in AI?',
        tokens: 1620
      },
      {
        role: 'agent',
        text: 'Three convictions guide everything I build:<br><br><strong>Production over prototypes.</strong> I care about AI that runs reliably in front of real users — delivering measurable business impact, not just impressive demos.<br><br><strong>The Agentic frontier.</strong> We\'re shifting from "AI as a feature" to "AI as an autonomous reasoner." That transition is where I want to contribute most meaningfully.<br><br><strong>Rigorous evaluation.</strong> I built an LLM evaluation platform precisely because subjective quality isn\'t enough. Every system I ship has benchmarks, monitors, and fallbacks.',
        tokens: 1960
      },
      {
        role: 'user',
        text: 'How would you describe your engineering philosophy in one line?',
        tokens: 2100
      },
      {
        role: 'agent',
        text: '<em>"Build AI that earns trust through reliability, not just capability."</em><br><br>Every deployment I manage has monitoring, evaluation pipelines, fallback strategies, and zero critical incidents on record.',
        tokens: 2300,
        isLast: true
      }
    ]
  },

  // ── CHAPTER 2: Experience ────────────────────────────────
  {
    id: 1,
    title: 'Experience',
    sysPrompt: 'This chapter covers <strong>Sankar\'s professional work experience</strong> — roles held, products shipped, and measurable impact delivered.',
    tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'Walk me through your professional journey at SurveySparrow.',
        tokens: 140
      },
      {
        role: 'agent',
        text: 'I joined in December 2024 as an <strong>AI/ML Engineer Intern</strong> and transitioned to full-time in May 2025. From day one, I was given genuine ownership — not support tickets. My role was to envision AI products that didn\'t yet exist, then take them through to production.',
        tokens: 480
      },
      {
        role: 'user',
        text: 'Tell me about the AI Customer Support Agent — your flagship product.',
        tokens: 640
      },
      {
        role: 'agent',
        text: 'I designed and deployed a <strong>multimodal AI Customer Support Agent</strong> built on <code>AWS AgentCore</code> with a RAG architecture.<br><br>Key outcomes:\n<br>• Autonomously resolves <span class="highlight">~80% of support queries</span> without human intervention\n<br>• Handles text, screenshots, and file attachments — fully multimodal\n<br>• Benchmarked against <strong>Intercom\'s FIN</strong> — outperforms it on accuracy\n<br>• Live in production at 99% uptime with zero critical incidents<div class="tag-row"><span class="tag-chip">AWS AgentCore</span><span class="tag-chip">RAG</span><span class="tag-chip pink">Multimodal</span><span class="tag-chip green">Production</span></div>',
        tokens: 1080
      },
      {
        role: 'user',
        text: 'What have you built under SparrowGenie?',
        tokens: 1240
      },
      {
        role: 'agent',
        text: 'SparrowGenie is our enterprise AI suite. I owned the AI layer end-to-end and independently shipped:\n<br><br>• <strong>RAG Knowledge Copilot</strong> — instant answers from company documentation\n<br>• <strong>AI RFP Automation</strong> — maps source documents to RFP questions automatically\n<br>• <strong>Automated Proposal Generation</strong> — full RFP responses and sales proposals from minimal input\n<br>• <strong>RAG Sales Copilot</strong> — analyses upcoming meetings, generates pre-call intelligence and summaries\n<br><br>All delivered with <span class="highlight">99% uptime and zero critical production incidents</span>.',
        tokens: 1680
      },
      {
        role: 'user',
        text: 'Tell me about the AWS GenAILoft award-winning work.',
        tokens: 1840
      },
      {
        role: 'agent',
        text: 'I built a <strong>Developer Productivity Intelligence Platform</strong> measuring engineering performance through DORA metrics — deployment frequency, lead time, change failure rate, and AI-driven impact classification.<div class="award-card-inline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><div class="award-card-inline-text"><strong>Best Innovation — AWS GenAILoft Hackathon 2025</strong><br>Recognised as the most innovative solution among all AWS Partnership companies</div></div>',
        tokens: 2180
      },
      {
        role: 'user',
        text: 'How about your internship work and earlier experience at EY?',
        tokens: 2340
      },
      {
        role: 'agent',
        text: 'During my internship at SurveySparrow:\n<br><br>• <strong>AI QA Automation</strong> — generates test cases, test scenarios, and Playwright code directly from PRDs. Delivered a <span class="highlight">10× improvement</span> in test creation velocity.\n<br>• <strong>AI Product Manager Assistant</strong> — automates end-to-end PM workflows: user stories, PRDs, wireframes, architecture diagrams, and JIRA tickets — all from a single natural language brief.\n<br>• Full AWS infrastructure ownership: Bedrock, S3, DynamoDB, Aurora RDS, Lambda, EventBridge, ECR, CloudWatch.\n<br><br>At <strong>Ernst &amp; Young</strong> (2023), I served as a Data Analyst Trainee, designing sales data intelligence dashboards using SAP Analytics Cloud.',
        tokens: 2600,
        isLast: true
      }
    ]
  },

  // ── CHAPTER 3: Projects & Skills ─────────────────────────
  {
    id: 2,
    title: 'Projects & Skills',
    sysPrompt: 'This chapter covers <strong>technical expertise, personal projects, research and recognition</strong>.',
    tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'What is your core technical stack?',
        tokens: 130
      },
      {
        role: 'agent',
        text: 'My stack is built for <span class="highlight">production AI systems</span> at enterprise scale:<br><br><strong>AI / ML</strong><div class="tag-row"><span class="tag-chip">Agentic AI</span><span class="tag-chip">RAG Architectures</span><span class="tag-chip">LLM Evaluation</span><span class="tag-chip">Prompt Engineering</span><span class="tag-chip pink">Machine Learning</span><span class="tag-chip pink">Deep Learning</span></div><br><strong>Cloud Infrastructure</strong><div class="tag-row"><span class="tag-chip green">Amazon Bedrock</span><span class="tag-chip green">AWS AgentCore</span><span class="tag-chip green">Lambda</span><span class="tag-chip green">S3 · DynamoDB</span><span class="tag-chip green">Aurora RDS</span><span class="tag-chip green">CloudWatch</span></div><br><strong>Languages &amp; Databases</strong><div class="tag-row"><span class="tag-chip gold">Python</span><span class="tag-chip gold">JavaScript</span><span class="tag-chip">Pinecone</span><span class="tag-chip">PostgreSQL</span><span class="tag-chip">MongoDB</span><span class="tag-chip">Firebase</span></div>',
        tokens: 540
      },
      {
        role: 'user',
        text: 'What AI development tools do you use in your day-to-day work?',
        tokens: 710
      },
      {
        role: 'agent',
        text: 'Beyond building AI, I work <em>within</em> AI-native environments daily — which meaningfully accelerates my output:\n<br><br>• <code>Cursor</code> — AI-first code editor with pair-programming capability\n<br>• <code>Claude Code</code> — Anthropic\'s CLI agent for complex engineering workflows\n<br>• <code>KIRO</code> — AWS\'s agentic IDE designed for cloud-native AI development\n<br>• <code>AntiGravity</code> — advanced AI coding assistant (this portfolio was built with it)\n<br>• <code>Perplexity</code> — AI-powered research and technical intelligence\n<br>• <code>Granola</code> — AI meeting notes, so I remain fully present in conversations\n<br><br>This toolchain allows me to operate at a fundamentally different velocity.',
        tokens: 1140
      },
      {
        role: 'user',
        text: 'Tell me about your personal projects.',
        tokens: 1310
      },
      {
        role: 'agent',
        text: '<strong>Portfolio Buzz</strong> — A full-stack AI investment platform for tracking, analysing, and comparing equity and mutual fund portfolios in one place.<div class="tag-row"><span class="tag-chip">Flask</span><span class="tag-chip">Next.js</span><span class="tag-chip">MongoDB</span><span class="tag-chip pink">Perplexity API</span><span class="tag-chip">Vercel · Render</span></div>Built with multi-agent AI workflows for portfolio insights, cross-asset comparisons, and investment decision intelligence.<br><br><strong>Analyze This</strong> — A domain-agnostic CSV analysis tool. Any dataset, any domain — it surfaces meaningful insights automatically, without requiring any programming knowledge from the user.',
        tokens: 1740
      },
      {
        role: 'user',
        text: 'What about research contributions and recognition?',
        tokens: 1900
      },
      {
        role: 'agent',
        text: '<div class="award-card-inline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><div class="award-card-inline-text"><strong>Best Innovation — AWS GenAILoft Hackathon 2025</strong><br>Most innovative solution among all AWS Partnership companies — Developer Productivity Intelligence Platform</div></div><br>Research publication: <strong>IIM\'s 9th International Conference on Business Analytics &amp; Intelligence (2022)</strong> — presented <em>"Insight Analysis for Any CSV File"</em>, one of India\'s most prestigious business analytics forums.',
        tokens: 2300
      },
      {
        role: 'user',
        text: 'Do you also own DevOps and deployment pipelines, or is that separate?',
        tokens: 2460
      },
      {
        role: 'agent',
        text: 'I own the full delivery lifecycle — not just the model. My DevOps stack includes:\n<br><br>• <strong>Jenkins</strong> — CI/CD pipelines for automated deployment\n<br>• <strong>Docker</strong> — containerised AI services for consistent, reproducible environments\n<br>• <strong>AWS ECR</strong> — container registry for production AI workloads\n<br>• <strong>CloudWatch</strong> — real-time monitoring, alerting, and observability\n<br><br>I also built a <strong>DORA Metrics Intelligence Platform</strong> that measures engineering delivery performance — because I don\'t just use DevOps practices, I build systems that help teams improve them.',
        tokens: 2760,
        isLast: true
      }
    ]
  },

  // ── CHAPTER 4: Let's Connect ─────────────────────────────
  {
    id: 3,
    title: "Let's Connect",
    sysPrompt: 'Final chapter — covering <strong>Sankar\'s professional aspirations, unique differentiators, and contact details</strong>.',
    tokenMax: 4096,
    messages: [
      {
        role: 'user',
        text: 'What makes you different from other AI/ML engineers in the market?',
        tokens: 160
      },
      {
        role: 'agent',
        text: '<em>"I don\'t just build with LLMs. I know how to evaluate, benchmark, and trust them at scale in production."</em><br><br>Most engineers can call an API and produce an impressive demo. What\'s less common:\n<br><br>• Building <strong>LLM evaluation pipelines</strong> where AI judges AI — systematically and at scale\n<br>• Creating <strong>competitive benchmarking systems</strong> — we ran ours against Intercom\'s FIN and won\n<br>• Maintaining <strong>99% uptime</strong> on AI systems with zero critical production incidents\n<br>• Designing for token cost, latency, fallback behaviour, and observability from the first line of code\n<br><br>That\'s the difference between AI that impresses in demos and AI that earns trust in production.',
        tokens: 580
      },
      {
        role: 'user',
        text: 'What kind of opportunities are you looking for?',
        tokens: 740
      },
      {
        role: 'agent',
        text: 'I\'m seeking roles where AI is treated as a <strong>strategic capability</strong>, not a feature afterthought.<br><br>Specifically, I want to:\n<br>• Lead or significantly contribute to AI/ML product engineering\n<br>• Work at the frontier of <strong>Agentic AI, LLM systems, and RAG architectures</strong>\n<br>• Own the complete loop — architecture, implementation, deployment, evaluation, improvement\n<br>• Contribute to a team that moves with conviction and measures everything\n<br><br>Whether that\'s a high-growth startup or an AI-native organisation redefining what\'s possible — I bring both the technical depth and the product sensibility to make meaningful impact.',
        tokens: 1100
      },
      {
        role: 'user',
        text: 'Tell me something personal about you beyond your professional work.',
        tokens: 1260
      },
      {
        role: 'agent',
        text: 'A few things that might offer a fuller picture:<div class="fun-grid"><div class="fun-card"><strong>Research at 20</strong>Presented at IIM\'s International Conference as a third-year undergraduate — one of the youngest contributors at the forum.</div><div class="fun-card"><strong>AI-Native Workflow</strong>I live inside AI tools daily — not because I have to, but because I genuinely believe this is how high-leverage engineering gets done.</div><div class="fun-card"><strong>Built for Myself</strong>Portfolio Buzz began as a personal tool. I invest, needed better analytics, and shipped the platform. That\'s how most of my best work starts.</div><div class="fun-card"><strong>Academics + Delivery</strong>CGPA of 9.0 while simultaneously shipping production AI for enterprise customers. I don\'t compromise on either.</div></div>',
        tokens: 1620
      },
      {
        role: 'user',
        text: 'How can I get in touch with you?',
        tokens: 1780
      },
      {
        role: 'agent',
        text: 'I would be glad to connect. Here are the best ways to reach me:<div class="contact-row"><a href="mailto:sankarkarthikeyan066@gmail.com" class="contact-chip" id="final-email"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> sankarkarthikeyan066@gmail.com</a><a href="tel:+919361381816" class="contact-chip" id="final-phone"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg> +91 93613 81816</a><a href="https://www.linkedin.com/in/sankar-karthikeyan/" target="_blank" rel="noopener" class="contact-chip" id="final-linkedin"><svg width="15" height="15" viewBox="0 0 24 24" fill="#6366F1"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> linkedin.com/in/sankar-karthikeyan</a><a href="https://github.com/Sankar" target="_blank" rel="noopener" class="contact-chip" id="final-github"><svg width="15" height="15" viewBox="0 0 24 24" fill="#EC4899"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg> github.com/Sankar</a></div>',
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
let currentSession = 0;
let currentMsgIdx  = 0;
let isTyping       = false;
let isAutoPlay     = false;
let autoTimer      = null;
let _nextBtnHandler = null;

// ══════════════════════════════════════════════════════════
// TIMING
// ══════════════════════════════════════════════════════════
const T = {
  userMsgDelay:   400,
  thinkMin:       1500,
  thinkJitter:    900,
  readUser:       2800,
  readAgent:      3800,
  lastMsgPause:   1800,
  sessLoadGap:    600,
};

// ══════════════════════════════════════════════════════════
// DOM
// ══════════════════════════════════════════════════════════
const messagesEl    = document.getElementById('messages');
const tokenFill     = document.getElementById('token-fill');
const tokenCount    = document.getElementById('token-count');
const tokenMaxEl    = document.getElementById('token-max');
const tokenPctEl    = document.getElementById('token-pct');
const tokenLabelEl  = document.getElementById('token-label');
const exceededEl    = document.getElementById('token-exceeded');
const exceededFill  = document.getElementById('exceeded-fill');
const exceededIcon  = document.getElementById('exceeded-icon');
const exceededTitle = document.getElementById('exceeded-title');
const exceededSub   = document.getElementById('exceeded-sub');
const exceededNote  = document.getElementById('exceeded-note');
const nextSessLabel = document.getElementById('next-sess-label');
const sendBtn       = document.getElementById('send-btn');
const autoBtn       = document.getElementById('auto-btn');
const hintBar       = document.getElementById('hint-bar');

// ══════════════════════════════════════════════════════════
// PROGRESS BAR
// ══════════════════════════════════════════════════════════
function updateTokenBar(used, max) {
  const pct = Math.min(100, Math.round((used / max) * 100));
  tokenFill.style.width = pct + '%';
  tokenCount.textContent = pct;
  tokenPctEl.textContent = pct + '%';
  if (pct > 80) {
    tokenFill.style.background = 'linear-gradient(90deg,#7C3AED,#EC4899)';
    tokenLabelEl.style.color = '';
  } else {
    tokenFill.style.background = 'linear-gradient(90deg,#7C3AED,#6366F1)';
    tokenLabelEl.style.color = '';
  }
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
  return wrap;
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

// ══════════════════════════════════════════════════════════
// CHAPTER DIVIDER
// ══════════════════════════════════════════════════════════
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
  currentMsgIdx = 0;
  isTyping = false;
  const sess = SESSIONS[idx];
  messagesEl.innerHTML = '';
  updateTokenBar(0, sess.tokenMax);

  // Update sidebar
  document.querySelectorAll('.sess-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
    btn.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    const s = btn.querySelector('.sess-status');
    if (i < idx)       { s.textContent = '✓'; s.className = 'sess-status done'; }
    else if (i === idx){ s.textContent = '▶'; s.className = 'sess-status active-s'; }
    else               { s.textContent = '·'; s.className = 'sess-status locked'; }
  });

  // Subtle section divider — just the chapter title
  addDivider(`── ${sess.title} ──`);
  sendBtn.disabled = false;
  updateHint();
}

// ══════════════════════════════════════════════════════════
// HINT BAR
// ══════════════════════════════════════════════════════════
function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function updateHint() {
  const sess = SESSIONS[currentSession];
  if (currentMsgIdx >= sess.messages.length) {
    hintBar.textContent = 'Chapter complete.';
    return;
  }
  const next = sess.messages[currentMsgIdx];
  if (next.role === 'user') {
    hintBar.innerHTML = `<span class="hint-q">${escHtml(next.text)}</span>`;
  } else {
    hintBar.textContent = 'Composing response...';
  }
}

// ══════════════════════════════════════════════════════════
// SEND NEXT
// ══════════════════════════════════════════════════════════
function sendNext() {
  if (isTyping) return;
  const sess = SESSIONS[currentSession];
  if (currentMsgIdx >= sess.messages.length) return;
  isTyping = true;
  sendBtn.disabled = true;
  const msg = sess.messages[currentMsgIdx];

  if (msg.role === 'user') {
    setTimeout(() => {
      renderMessage(msg);
      updateTokenBar(msg.tokens, sess.tokenMax);
      currentMsgIdx++;
      isTyping = false;
      sendBtn.disabled = false;
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
          sendBtn.disabled = true;
          setTimeout(triggerChapterEnd, T.lastMsgPause);
        } else {
          sendBtn.disabled = false;
          if (isAutoPlay) autoTimer = setTimeout(sendNext, T.readAgent);
        }
      }, thinkTime);
    }, 200);
  }
}

// ══════════════════════════════════════════════════════════
// CHAPTER END — elegant transition overlay
// ══════════════════════════════════════════════════════════
function triggerChapterEnd() {
  const sess = SESSIONS[currentSession];
  const isFinalChapter = (currentSession === SESSIONS.length - 1);

  if (isFinalChapter && sess.messages.slice(-1)[0]?.isFinal) {
    showPortfolioEnd();
    return;
  }

  // Progress bar to 100%
  updateTokenBar(sess.tokenMax, sess.tokenMax);

  const transition = CHAPTER_TRANSITIONS[currentSession];
  const nextIdx = currentSession + 1;

  if (exceededIcon)  exceededIcon.innerHTML    = transition.icon;
  if (exceededTitle) exceededTitle.textContent = transition.title;
  if (exceededSub)   exceededSub.textContent   = transition.sub;
  if (exceededNote)  exceededNote.textContent  = '';
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
          if (isAutoPlay) autoTimer = setTimeout(sendNext, 1200);
        }, T.sessLoadGap);
      }, 550);
    };
    btn.addEventListener('click', _nextBtnHandler);
  }

  exceededEl.style.display = 'flex';
  setTimeout(() => { exceededFill.style.width = '100%'; }, 100);
  setTimeout(() => {
    if (btn) {
      btn.style.display = 'inline-flex';
      btn.style.animation = 'fadeInUp 0.45s ease forwards';
    }
  }, 1900);
}

function showPortfolioEnd() {
  isAutoPlay = false;
  clearTimeout(autoTimer);
  sendBtn.disabled = true;
  autoBtn.disabled = true;
  hintBar.innerHTML = `<span style="color:#10B981;font-style:normal;">✦ Portfolio complete — thank you for exploring. I would love to connect.</span>`;
  document.querySelectorAll('.sess-btn').forEach(btn => {
    const s = btn.querySelector('.sess-status');
    s.textContent = '✓'; s.className = 'sess-status done';
  });
}

// ══════════════════════════════════════════════════════════
// AUTO PLAY
// ══════════════════════════════════════════════════════════
autoBtn.addEventListener('click', () => {
  isAutoPlay = !isAutoPlay;
  autoBtn.classList.toggle('playing', isAutoPlay);
  if (isAutoPlay) {
    autoBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg><span>Pause</span>`;
    autoTimer = setTimeout(sendNext, 800);
  } else {
    autoBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Auto Play</span>`;
    clearTimeout(autoTimer);
  }
});

sendBtn.addEventListener('click', () => { if (!isAutoPlay) sendNext(); });

// ══════════════════════════════════════════════════════════
// SIDEBAR NAV — all chapters freely accessible
// ══════════════════════════════════════════════════════════
document.querySelectorAll('.sess-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    clearTimeout(autoTimer);
    isAutoPlay = false;
    isTyping = false;
    if (exceededEl.style.display !== 'none') {
      exceededEl.style.display = 'none';
      exceededFill.style.width = '0%';
      const b = document.getElementById('next-sess-btn');
      if (b) b.style.display = 'none';
    }
    autoBtn.classList.remove('playing');
    autoBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Auto Play</span>`;
    loadSession(i);
  });
});

// ══════════════════════════════════════════════════════════
// KEYBOARD
// ══════════════════════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey && !isTyping && !isAutoPlay) { e.preventDefault(); sendNext(); }
  if (e.key === ' ' && e.target.tagName !== 'INPUT') { e.preventDefault(); autoBtn.click(); }
});

// ══════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════
loadSession(0);
