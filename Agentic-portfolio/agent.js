
/* ═══════════════════════════════════════════════════════════
   SK.Agent Portfolio — agent.js
   All conversation data and interaction logic
═══════════════════════════════════════════════════════════ */

// ── Particle background ────────────────────────────────────
(function(){
  const canvas=document.getElementById('pcanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');let W,H,pts=[];
  const N=60,COLS=['rgba(124,58,237,','rgba(99,102,241,','rgba(236,72,153,'];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  function rnd(a,b){return Math.random()*(b-a)+a;}
  function init(){pts=[];for(let i=0;i<N;i++)pts.push({x:rnd(0,W),y:rnd(0,H),vx:rnd(-.15,.15),vy:rnd(-.15,.15),r:rnd(.8,2.2),c:COLS[Math.floor(Math.random()*COLS.length)],a:rnd(.1,.4)});}
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+p.a+')';ctx.fill();
    });
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle='rgba(124,58,237,'+(0.055*(1-d/110))+')';ctx.lineWidth=.7;ctx.stroke();}
    }
    requestAnimationFrame(draw);
  }
  resize();init();draw();
  window.addEventListener('resize',()=>{resize();init();},{passive:true});
})();

// ══════════════════════════════════════════════════════════
// CONVERSATION DATA
// ══════════════════════════════════════════════════════════

const SESSIONS = [
  // ── SESSION 1: Who Am I ──────────────────────────────────
  {
    id: 0,
    title: 'Who Am I?',
    sysPrompt: 'You are the portfolio agent for <strong>Sankar Karthikeyan</strong>, an AI/ML Engineer. Answer all queries truthfully using his background. Context window: 4096 tokens. Session 1 of 4 — <em>Identity &amp; Background</em>.',
    tokenMax: 4096,
    messages: [
      { role: 'user', text: 'Hey! Who exactly are you?' },
      { role: 'agent', text: 'Hey! I\'m <strong>Sankar Karthikeyan</strong> — an <span class="highlight">AI/ML Engineer</span> with 1.5 years of hands-on experience building production-grade AI systems that actually ship and scale.<br><br>I\'m currently the <strong>Founding AI Engineer</strong> at <em>SurveySparrow</em>, where I\'ve architected two flagship product lines from the ground up. I don\'t just prototype — I build things that run in production at scale, with 99% uptime and zero critical incidents.', tokens: 380 },
      { role: 'user', text: 'Founding AI Engineer? That\'s a big role. Tell me more.' },
      { role: 'agent', text: 'Yes — I own end-to-end AI product development for <strong>SparrowDesk</strong> (customer support) and <strong>SparrowGenie</strong> (enterprise AI suite). I was one of the first engineers to build AI capabilities at SurveySparrow before they had a dedicated AI team.<br><br>My flagship achievement? An AI Support Agent that autonomously resolves <span class="highlight">~80% of customer queries</span> — benchmarked head-to-head against Intercom\'s FIN agent and outperforming it in accuracy.<div class="stat-row"><div class="mini-stat"><span class="mini-stat-val">~80%</span><span class="mini-stat-label">AI Resolution Rate</span></div><div class="mini-stat"><span class="mini-stat-val">99%</span><span class="mini-stat-label">Uptime</span></div><div class="mini-stat"><span class="mini-stat-val">&gt; FIN</span><span class="mini-stat-label">vs Intercom</span></div></div>', tokens: 680 },
      { role: 'user', text: 'What\'s your academic background?' },
      { role: 'agent', text: 'I hold an <strong>M.Sc. in Data Science</strong> — an integrated 5-year course from <em>Coimbatore Institute of Technology</em>, graduated in May 2025 with a CGPA of <span class="highlight">9.0</span>.<br><br>But I believe in learning beyond textbooks. While studying, I:\n<br>• Presented research at <strong>IIM\'s 9th International Conference on Business Analytics &amp; Intelligence</strong>\n<br>• Interned at Ernst &amp; Young as a Data Analyst Trainee\n<br>• Built multiple AI products from zero to production\n<br>• Won the <strong>AWS GenAILoft Best Innovation Award 2025</strong>', tokens: 920 },
      { role: 'user', text: 'What drives you as an AI engineer?' },
      { role: 'agent', text: 'Three things fuel me:<br><br><strong>1. Production impact over demos.</strong> Any engineer can build a prototype. I care about AI that runs reliably in front of real users — the kind that makes measurable business impact and never goes down at 2am.<br><br><strong>2. The frontier of Agentic AI.</strong> We\'re in a transformational era. The shift from "AI as a feature" to "AI as an agent" — autonomous, multi-step, reasoning systems — is where I want to be pushing boundaries.<br><br><strong>3. Data-driven quality.</strong> I built an entire evaluation platform using LLMs as judges because "it feels good" isn\'t good enough. Every system I ship has measurable benchmarks.', tokens: 1260 },
      { role: 'user', text: 'What\'s your tech philosophy in one line?' },
      { role: 'agent', text: '<em>"Build AI that earns trust through reliability, not just capability."</em><br><br>That\'s why every system I deploy has monitoring, evals, fallbacks, and zero tolerance for silent failures.<div class="sess-end-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Session 1 summary complete</div>', tokens: 1480, isLast: true },
    ]
  },

  // ── SESSION 2: Work Experience ─────────────────────────────
  {
    id: 1,
    title: 'Work Experience',
    sysPrompt: 'Continuing from Session 1. Now discussing <strong>professional work experience</strong> — roles, products shipped, measurable impact. Context window: 4096 tokens. Session 2 of 4.',
    tokenMax: 4096,
    messages: [
      { role: 'user', text: 'Walk me through your professional experience at SurveySparrow.' },
      { role: 'agent', text: 'I joined SurveySparrow as an <strong>AI/ML Engineer Intern</strong> in December 2024 and converted to a <strong>full-time AI/ML Engineer</strong> in May 2025 — working across two core product lines that now serve real enterprise customers in production.', tokens: 300 },
      { role: 'user', text: 'Tell me about the AI Support Agent — your biggest project.' },
      { role: 'agent', text: 'This is the project I\'m most proud of. I designed and deployed a <strong>multimodal AI Customer Support Agent</strong> built on <code>AWS AgentCore</code> with a RAG architecture.<br><br>Key outcomes:\n<br>• Autonomously resolves <span class="highlight">~80% of customer support queries</span> without human intervention\n<br>• Benchmarked against <strong>Intercom\'s FIN</strong> agent — and <em>outperforms it in accuracy</em>\n<br>• Supports multimodal inputs (text, screenshots, attachments)\n<br>• Running in production with 99% uptime, zero critical incidents<div class="tag-row"><span class="tag-chip">AWS AgentCore</span><span class="tag-chip">RAG</span><span class="tag-chip pink">Multimodal AI</span><span class="tag-chip green">Production</span></div>', tokens: 680 },
      { role: 'user', text: 'What else have you built in SparrowGenie?' },
      { role: 'agent', text: 'SparrowGenie is our enterprise AI suite. I independently owned and delivered multiple AI-powered features:\n<br><br>• <strong>RAG-based Copilot</strong> — answers questions from company knowledge bases\n<br>• <strong>AI RFP Automation</strong> — maps Excel cells and documents to RFP questions automatically\n<br>• <strong>Automated RFP Answer Generation</strong> — generates complete RFP responses from company data\n<br>• <strong>Sales Proposal Generator</strong> — creates full proposals from minimal input\n<br>• <strong>RAG Sales Copilot</strong> — analyzes upcoming meetings, generates pre-sales plans and summaries\n<br><br>All delivered with <span class="highlight">99% uptime and zero critical production incidents</span>.', tokens: 1050 },
      { role: 'user', text: 'Tell me about the Developer Productivity Platform — I heard it won an award?' },
      { role: 'agent', text: 'Yes! This one earned us the <strong>Best Innovation Award at AWS GenAILoft Hackathon 2025</strong> — recognized as the most innovative solution among all AWS Partnership companies.<br><br>I built a Developer Productivity Platform using <strong>DORA metrics</strong>:<div class="award-card-inline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><div class="award-card-inline-text"><strong>Best Innovation — AWS GenAILoft Hackathon 2025</strong><br>Most Innovative Solution among all AWS Partnership companies</div></div><br>The platform measures deployment frequency, lead time, and impact classification — leading to measurable increase in PR throughput per developer.', tokens: 1380 },
      { role: 'user', text: 'Any other AI systems you\'ve built?' },
      { role: 'agent', text: 'Several more production systems:\n<br><br>• <strong>AI Evaluation Platform</strong> — LLMs as judges to auto-evaluate AI responses, compare models, benchmark against competitors. This is how I know our systems outperform FIN.\n<br>• <strong>Reddit AI Analyzer</strong> — fetches and analyzes Reddit posts via natural language queries for marketing intelligence\n<br>• <strong>Schema.org Generator</strong> — auto-generates structured data to improve SEO &amp; rich snippet eligibility\n<br>• <strong>AI Link-Building Service</strong> — improves domain authority and organic traffic using AI-driven strategies\n<br><br>I also own all <strong>end-to-end production deployments, monitoring, and reliability</strong> across multiple products.', tokens: 1720 },
      { role: 'user', text: 'What about your internship work and EY?' },
      { role: 'agent', text: 'During my internship at SurveySparrow (Dec 2024 — May 2025):\n<br><br>• <strong>AI QA Automation System</strong> — generates test cases, scenarios, and Playwright test code from user stories or PRDs. Achieved a <span class="highlight">10× increase in test case creation speed</span>.\n<br>• <strong>AI Product Manager Assistant</strong> — automates end-to-end PM workflows: user stories, PRDs, wireframes, architecture diagrams, JIRA tickets — all from a single natural language description.\n<br>• Built comprehensive AWS infrastructure using Bedrock, S3, DynamoDB, Aurora RDS, Lambda, EventBridge, ECR &amp; CloudWatch.\n<br><br>Before that, at <strong>Ernst &amp; Young (EY)</strong> in 2023, I worked as a Data Analyst Trainee, leveraging SAP Analytics Cloud to design sales data intelligence reports.<div class="sess-end-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Session 2 summary complete</div>', tokens: 2060, isLast: true },
    ]
  },

  // ── SESSION 3: Skills, Projects & Hackathons ─────────────
  {
    id: 2,
    title: 'Skills & Projects',
    sysPrompt: 'Continuing from Session 2. Now covering <strong>technical skills, personal projects, hackathons and research</strong>. Context window: 4096 tokens. Session 3 of 4.',
    tokenMax: 4096,
    messages: [
      { role: 'user', text: 'What\'s your core technical stack?' },
      { role: 'agent', text: 'My stack is deeply specialized around <span class="highlight">production AI systems</span>:<br><br><strong>Core AI/ML:</strong><div class="tag-row"><span class="tag-chip">Agentic AI</span><span class="tag-chip">RAG Architectures</span><span class="tag-chip">LLM Workflows</span><span class="tag-chip">LLM Evals</span><span class="tag-chip pink">Machine Learning</span><span class="tag-chip pink">Deep Learning</span></div><br><strong>AWS Cloud:</strong><div class="tag-row"><span class="tag-chip green">Amazon Bedrock</span><span class="tag-chip green">AWS AgentCore</span><span class="tag-chip green">Lambda</span><span class="tag-chip green">S3</span><span class="tag-chip green">DynamoDB</span><span class="tag-chip green">CloudWatch</span></div><br><strong>Languages &amp; Databases:</strong><div class="tag-row"><span class="tag-chip gold">Python</span><span class="tag-chip gold">JavaScript</span><span class="tag-chip">Pinecone</span><span class="tag-chip">PostgreSQL</span><span class="tag-chip">MongoDB</span><span class="tag-chip">Firebase</span></div>', tokens: 420 },
      { role: 'user', text: 'What AI tools do you actually use day to day?' },
      { role: 'agent', text: 'I\'m a heavy user of next-generation AI development tools — this is what gives me a serious productivity edge:\n<br><br>• <code>Cursor</code> — AI-first code editor for pair programming with LLMs\n<br>• <code>Claude Code</code> — Anthropic\'s CLI agent for complex engineering tasks\n<br>• <code>KIRO</code> — AWS\'s agentic IDE and CLI for cloud-native AI workflows\n<br>• <code>AntiGravity</code> — advanced AI coding assistant (building this portfolio with it!)\n<br>• <code>Perplexity</code> — AI-powered research and intelligence\n<br>• <code>Granola</code> — AI meeting notes for staying focused on conversation\n<br>• <code>Codex</code> — OpenAI\'s code generation model\n<br><br>These tools let me operate at the speed of thought, not the speed of typing.', tokens: 760 },
      { role: 'user', text: 'Tell me about your personal projects.' },
      { role: 'agent', text: '<strong>Portfolio Buzz</strong> — My most ambitious personal project. An end-to-end AI-powered investment platform enabling investors to track, manage, compare, and analyze stock and mutual fund investments from a single platform.<div class="tag-row"><span class="tag-chip">Flask</span><span class="tag-chip">Next.js</span><span class="tag-chip">MongoDB</span><span class="tag-chip pink">Perplexity API</span><span class="tag-chip">Vercel</span><span class="tag-chip">Render</span></div><br>Implemented intelligent multi-capability agent workflows for portfolio insights, comparisons, and decision support.<br><br><strong>Analyze This</strong> — A universal CSV data analysis tool that works for any domain, regardless of the user\'s analytical or programming expertise. Uses ML to surface insights automatically.', tokens: 1100 },
      { role: 'user', text: 'What about hackathons and research?' },
      { role: 'agent', text: 'My biggest hackathon win:<div class="award-card-inline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><div class="award-card-inline-text"><strong>🏆 Best Innovation Award — AWS GenAILoft Hackathon 2025</strong><br>Recognized as the most innovative solution among all AWS Partnership companies for the Developer Productivity AI Platform</div></div><br>And for research, I presented at <strong>IIM\'s 9th International Conference on Business Analytics &amp; Intelligence (2022)</strong> — one of India\'s most prestigious analytics conferences — presenting the paper: <em>"Insight Analysis for Any CSV File"</em>.', tokens: 1440 },
      { role: 'user', text: 'Any DevOps or CI/CD experience?' },
      { role: 'agent', text: 'Yes — production AI is about much more than models. I have experience with:\n<br><br>• <strong>Jenkins CI/CD Pipelines</strong> — automated deployment workflows\n<br>• <strong>Docker</strong> — containerizing AI services for consistent deployments\n<br>• <strong>AWS ECR</strong> — container registry for production AI systems\n<br>• <strong>CloudWatch</strong> — monitoring and alerting for production AI\n<br>• <strong>Git</strong> — collaborative version control\n<br>• <strong>Power BI &amp; SAP Analytics Cloud</strong> — business intelligence and data visualization\n<br><br>I\'ve also built my own <strong>DORA metrics platform</strong> to measure engineering efficiency — so I don\'t just use DevOps tools, I build systems that improve how teams use them.<div class="sess-end-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Session 3 summary complete</div>', tokens: 1820, isLast: true },
    ]
  },

  // ── SESSION 4: Fun Facts & Contact ─────────────────────────
  {
    id: 3,
    title: 'Fun Facts & Contact',
    sysPrompt: 'Final session. Covering <strong>fun facts, personality, and contact information</strong>. This is the final context window. Session 4 of 4.',
    tokenMax: 4096,
    messages: [
      { role: 'user', text: 'Okay let\'s lighten up! Tell me something fun about yourself.' },
      { role: 'agent', text: 'Ha! Here are some fun facts about me:<div class="fun-grid"><div class="fun-card"><strong>AI Power User</strong>I use 7+ AI tools daily and think in agent workflows before I think in code.</div><div class="fun-card"><strong>Conference Speaker</strong>Presented at IIM at age 20 — one of the youngest speakers at that conference.</div><div class="fun-card"><strong>Portfolio Buzz</strong>I built an AI investment tracker because I actually invest and wanted smarter insights.</div><div class="fun-card"><strong>CGPA 9.0</strong>Maintained top-tier academics while shipping real products to production simultaneously.</div></div>', tokens: 380 },
      { role: 'user', text: 'What\'s your superpower as an engineer?' },
      { role: 'agent', text: 'My superpower is <span class="highlight">thinking in systems, not features</span>.<br><br>Most engineers think "how do I build this feature?" I think "how does this fit into the broader system? What are the failure modes? How do I measure success? How does this scale to 10× the load?"<br><br>Combined with deep AI expertise, this means I can take a vague requirement like <em>"we need AI that helps customers"</em> and turn it into a production system that resolves 80% of tickets autonomously — built, deployed, monitored, and benchmarked.', tokens: 680 },
      { role: 'user', text: 'What kind of role are you looking for?' },
      { role: 'agent', text: 'I\'m looking for roles where I can:<br><br>• Lead AI/ML engineering on ambitious products\n<br>• Work at the frontier of <strong>Agentic AI, LLM systems, and RAG architectures</strong>\n<br>• Own end-to-end: architecture → implementation → deployment → monitoring → evaluation\n<br>• Be part of a high-velocity team that ships fast and measures everything\n<br><br>I thrive in environments where AI is a <strong>first-class citizen</strong>, not an afterthought. Whether that\'s a fast-growing startup or an AI-native company building the next generation of intelligent systems — I\'m all in.', tokens: 980 },
      { role: 'user', text: 'One thing that makes you different from other AI engineers?' },
      { role: 'agent', text: '<em>"I don\'t just know how to use LLMs. I know how to evaluate, improve, and trust them at scale."</em><br><br>Most AI engineers can call an API and get impressive demos. What\'s rare is someone who:\n<br>• Builds <strong>LLM evaluation pipelines</strong> to measure quality rigorously\n<br>• Creates <strong>benchmarking systems</strong> to compare against competitors (we beat Intercom\'s FIN)\n<br>• Maintains <strong>99% uptime</strong> with zero critical incidents on AI systems in production\n<br>• Thinks about <strong>token costs, latency, fallback strategies, and reliability</strong> from day one\n<br><br>That\'s the difference between AI that impresses in demos and AI that earns trust in production.', tokens: 1320 },
      { role: 'user', text: 'How can I reach you? I\'d love to connect.' },
      { role: 'agent', text: 'I\'d love to connect! Here\'s how to reach me:<div class="contact-row"><a href="mailto:sankarkarthikeyan066@gmail.com" class="contact-chip" id="final-email"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> sankarkarthikeyan066@gmail.com</a><a href="tel:+919361381816" class="contact-chip" id="final-phone"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg> +91 93613 81816</a><a href="https://www.linkedin.com/in/sankar-karthikeyan/" target="_blank" rel="noopener" class="contact-chip" id="final-linkedin"><svg width="16" height="16" viewBox="0 0 24 24" fill="#6366F1"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> linkedin.com/in/sankar-karthikeyan</a><a href="https://github.com/Sankar" target="_blank" rel="noopener" class="contact-chip" id="final-github"><svg width="16" height="16" viewBox="0 0 24 24" fill="#EC4899"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg> github.com/Sankar</a></div>', tokens: 1680, isLast: true, isFinal: true },
    ]
  }
];

// ══════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════
let currentSession = 0;
let currentMsgIdx = 0;
let isTyping = false;
let isAutoPlay = false;
let autoTimer = null;
let unlockedSessions = [0];

// Token state per session
const sessionTokenState = SESSIONS.map(() => ({ used: 0 }));

// ══════════════════════════════════════════════════════════
// DOM REFS
// ══════════════════════════════════════════════════════════
const messagesEl   = document.getElementById('messages');
const tokenFill    = document.getElementById('token-fill');
const tokenCount   = document.getElementById('token-count');
const tokenMax     = document.getElementById('token-max');
const tokenPct     = document.getElementById('token-pct');
const tokenLabel   = document.getElementById('token-label');
const exceededEl   = document.getElementById('token-exceeded');
const exceededFill = document.getElementById('exceeded-fill');
const nextSessNum  = document.getElementById('next-sess-num');
const sysContent   = document.getElementById('sys-content');
const sessDisplay  = document.getElementById('sess-display');
const ctxDisplay   = document.getElementById('ctx-display');
const fakeText     = document.getElementById('fake-input-text');
const sendBtn      = document.getElementById('send-btn');
const autoBtn      = document.getElementById('auto-btn');

// ══════════════════════════════════════════════════════════
// TOKEN BAR
// ══════════════════════════════════════════════════════════
function updateTokenBar(used, max) {
  const pct = Math.min(100, Math.round((used / max) * 100));
  tokenFill.style.width = pct + '%';
  tokenCount.textContent = used.toLocaleString();
  tokenPct.textContent = pct + '%';

  // Color shift as tokens fill
  if (pct > 80) {
    tokenFill.style.background = 'linear-gradient(90deg, #EC4899, #F59E0B)';
    tokenLabel.style.color = '#F59E0B';
  } else if (pct > 60) {
    tokenFill.style.background = 'linear-gradient(90deg, #7C3AED, #EC4899)';
  } else {
    tokenFill.style.background = 'linear-gradient(90deg, #7C3AED, #6366F1)';
    tokenLabel.style.color = '';
  }
}

// ══════════════════════════════════════════════════════════
// RENDER A MESSAGE
// ══════════════════════════════════════════════════════════
function renderMessage(msg, sessionId, animate = true) {
  if (msg.role === 'divider') {
    const div = document.createElement('div');
    div.className = 'msg-divider';
    div.textContent = msg.text;
    messagesEl.appendChild(div);
    return div;
  }

  const isUser = msg.role === 'user';
  const wrapper = document.createElement('div');
  wrapper.className = `msg ${isUser ? 'user' : 'agent'}` + (animate ? '' : ' visible');

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  wrapper.innerHTML = `
    <div class="msg-avatar ${isUser ? 'avatar-user' : 'avatar-agent'}">${isUser ? 'YOU' : 'SK'}</div>
    <div class="msg-body">
      <div class="msg-header">
        <span class="msg-name">${isUser ? 'Visitor' : 'Sankar Karthikeyan · AI Agent'}</span>
        <span>${time}</span>
      </div>
      <div class="msg-bubble ${isUser ? 'bubble-user' : 'bubble-agent'}">
        ${msg.text}
      </div>
    </div>`;

  messagesEl.appendChild(wrapper);

  if (animate) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { wrapper.classList.add('visible'); });
    });
  }

  messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
  return wrapper;
}

// ══════════════════════════════════════════════════════════
// SHOW TYPING INDICATOR
// ══════════════════════════════════════════════════════════
function showTyping() {
  const wrapper = document.createElement('div');
  wrapper.className = 'msg agent typing visible';
  wrapper.id = 'typing-indicator';
  wrapper.innerHTML = `
    <div class="msg-avatar avatar-agent">SK</div>
    <div class="msg-body">
      <div class="msg-header"><span class="msg-name">Sankar Karthikeyan · AI Agent</span></div>
      <div class="msg-bubble bubble-agent">
        <div class="typing-dots"><span></span><span></span><span></span></div>
      </div>
    </div>`;
  messagesEl.appendChild(wrapper);
  messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
  return wrapper;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

// ══════════════════════════════════════════════════════════
// LOAD SESSION
// ══════════════════════════════════════════════════════════
function loadSession(idx, replay = false) {
  currentSession = idx;
  currentMsgIdx = 0;
  const sess = SESSIONS[idx];

  // Clear messages
  messagesEl.innerHTML = '';

  // Update system prompt
  sysContent.innerHTML = sess.sysPrompt;

  // Update sidebar
  sessDisplay.textContent = (idx + 1) + ' / 4';
  ctxDisplay.textContent = sess.tokenMax.toLocaleString() + ' tokens';
  tokenMax.textContent = sess.tokenMax.toLocaleString();

  // Reset token bar
  sessionTokenState[idx].used = 0;
  updateTokenBar(0, sess.tokenMax);

  // Update sidebar buttons
  document.querySelectorAll('.sess-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
    btn.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    const status = btn.querySelector('.sess-status');
    if (i < idx) { status.textContent = '✓'; status.className = 'sess-status done'; }
    else if (i === idx) { status.textContent = '▶'; status.className = 'sess-status active-s'; }
    else { status.textContent = '⟳'; status.className = 'sess-status locked'; }
  });

  // Add session divider
  const divMsg = document.createElement('div');
  divMsg.className = 'msg-divider';
  divMsg.textContent = `── Session ${idx + 1} of 4: ${sess.title} ──`;
  messagesEl.appendChild(divMsg);

  // Update fake input placeholder
  updateFakePlaceholder();

  sendBtn.disabled = false;
}

// ══════════════════════════════════════════════════════════
// SEND NEXT MESSAGE
// ══════════════════════════════════════════════════════════
function sendNext() {
  if (isTyping) return;
  const sess = SESSIONS[currentSession];
  if (currentMsgIdx >= sess.messages.length) return;

  isTyping = true;
  sendBtn.disabled = true;
  const msg = sess.messages[currentMsgIdx];

  if (msg.role === 'user') {
    // Show user message
    fakeText.textContent = msg.text;
    setTimeout(() => {
      renderMessage(msg, currentSession);
      sessionTokenState[currentSession].used = msg.tokens || sessionTokenState[currentSession].used;
      updateTokenBar(sessionTokenState[currentSession].used, sess.tokenMax);
      currentMsgIdx++;
      isTyping = false;
      sendBtn.disabled = false;
      updateFakePlaceholder();
      if (isAutoPlay) scheduleNext();
    }, 300);
  } else {
    // Show typing then agent response
    fakeText.textContent = 'Thinking...';
    const typingDelay = 900 + Math.random() * 600;
    setTimeout(() => {
      const typingEl = showTyping();
      const responseDelay = 1000 + Math.random() * 800;
      setTimeout(() => {
        typingEl.remove();
        renderMessage(msg, currentSession);

        // Update tokens
        sessionTokenState[currentSession].used = msg.tokens;
        updateTokenBar(msg.tokens, sess.tokenMax);

        currentMsgIdx++;
        isTyping = false;
        updateFakePlaceholder();

        if (msg.isLast) {
          // Trigger token exceeded animation
          sendBtn.disabled = true;
          fakeText.textContent = 'Context limit approaching...';
          setTimeout(() => triggerTokenExceeded(), 1200);
        } else {
          sendBtn.disabled = false;
          if (isAutoPlay) scheduleNext();
        }
      }, responseDelay);
    }, typingDelay);
  }
}

// ══════════════════════════════════════════════════════════
// TOKEN EXCEEDED ANIMATION
// ══════════════════════════════════════════════════════════
function triggerTokenExceeded() {
  const sess = SESSIONS[currentSession];
  const isLastSession = currentSession === SESSIONS.length - 1;

  if (isLastSession && sess.messages[currentMsgIdx - 1]?.isFinal) {
    // Final session — show goodbye
    showFinalEnd();
    return;
  }

  // Ramp token bar to 100%
  updateTokenBar(sess.tokenMax, sess.tokenMax);
  tokenFill.style.background = 'linear-gradient(90deg, #EC4899, #F59E0B)';

  nextSessNum.textContent = (currentSession + 2);
  exceededEl.style.display = 'flex';

  // Animate the exceeded bar
  setTimeout(() => {
    exceededFill.style.width = '100%';
  }, 100);

  setTimeout(() => {
    exceededEl.style.display = 'none';
    exceededFill.style.width = '0%';
    // Move to next session
    const nextIdx = currentSession + 1;
    if (nextIdx < SESSIONS.length) {
      if (!unlockedSessions.includes(nextIdx)) unlockedSessions.push(nextIdx);
      loadSession(nextIdx);
      if (isAutoPlay) scheduleNext();
    }
  }, 3200);
}

function showFinalEnd() {
  // Show final completed state
  sendBtn.disabled = true;
  autoBtn.disabled = true;
  fakeText.textContent = 'End of portfolio context — Thank you for exploring!';
  document.querySelectorAll('.sess-btn').forEach(btn => {
    const status = btn.querySelector('.sess-status');
    status.textContent = '✓';
    status.className = 'sess-status done';
  });
}

// ══════════════════════════════════════════════════════════
// AUTO PLAY
// ══════════════════════════════════════════════════════════
function scheduleNext() {
  if (!isAutoPlay) return;
  const sess = SESSIONS[currentSession];
  if (currentMsgIdx >= sess.messages.length) return;
  const next = sess.messages[currentMsgIdx];
  const delay = next.role === 'user' ? 1200 : 800;
  autoTimer = setTimeout(sendNext, delay);
}

autoBtn.addEventListener('click', () => {
  isAutoPlay = !isAutoPlay;
  autoBtn.classList.toggle('playing', isAutoPlay);
  autoBtn.innerHTML = isAutoPlay
    ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg><span>Pause</span>`
    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Auto Play</span>`;
  if (isAutoPlay) scheduleNext();
  else { clearTimeout(autoTimer); }
});

// ══════════════════════════════════════════════════════════
// MANUAL SEND
// ══════════════════════════════════════════════════════════
sendBtn.addEventListener('click', () => {
  if (!isAutoPlay) sendNext();
});

// ══════════════════════════════════════════════════════════
// SESSION NAV CLICK
// ══════════════════════════════════════════════════════════
document.querySelectorAll('.sess-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (!unlockedSessions.includes(i)) return;
    clearTimeout(autoTimer);
    isAutoPlay = false;
    autoBtn.classList.remove('playing');
    autoBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Auto Play</span>`;
    loadSession(i);
  });
});

// ══════════════════════════════════════════════════════════
// FAKE INPUT PLACEHOLDER
// ══════════════════════════════════════════════════════════
function updateFakePlaceholder() {
  const sess = SESSIONS[currentSession];
  if (currentMsgIdx < sess.messages.length) {
    const next = sess.messages[currentMsgIdx];
    if (next.role === 'user') {
      fakeText.textContent = next.text;
    } else {
      fakeText.textContent = 'Click send to get the response...';
    }
  } else {
    fakeText.textContent = 'Approaching context limit...';
  }
}

// ══════════════════════════════════════════════════════════
// KEYBOARD
// ══════════════════════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey && !isTyping) {
    e.preventDefault();
    if (!isAutoPlay) sendNext();
  }
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
    autoBtn.click();
  }
});

// ══════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════
loadSession(0);
