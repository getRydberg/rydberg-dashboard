import type {
    CardInfo,
    CategoryBreakdown,
    ChatMsg,
    Holding,
    InboxItem,
    Job,
    JobStatus,
    LogEntry,
    NewsArticle,
    Note,
    Task,
    Txn,
} from './types';

export const COLORS = {
    blue: '#7DA2FF',
    amber: '#E8A44C',
    yellow: '#E5D06B',
    teal: '#6FD4D4',
    slate: '#B8C4DC',
    deep: '#4E6FBF',
    gray: '#8891A5',
};

export const STATUS_META: Record<JobStatus, { c: string; g: string }> = {
    Applied: { c: '#7DA2FF', g: '●' },
    Interview: { c: '#E5D06B', g: '◆' },
    Offer: { c: '#E8A44C', g: '★' },
    Closed: { c: '#8891A5', g: '✕' },
};

export const TYPE_META = {
    email: { label: 'EMAIL', c: '#7DA2FF' },
    task: { label: 'TASK', c: '#E8A44C' },
    file: { label: 'FILE', c: '#6FD4D4' },
    keyword: { label: 'KEYWORD', c: '#E5D06B' },
} as const;

export const AGENT_COLORS: Record<string, string> = {
    MAIL: '#7DA2FF',
    NEWS: '#E5D06B',
    CALENDAR: '#E8A44C',
    FILES: '#6FD4D4',
};

export const INITIAL_INBOX: InboxItem[] = [
    { id: 1, type: 'email', title: 'Reply to Meridian Labs recruiter', agent: 'Mail Agent', time: '12m ago', preview: '“Thanks Sofia — Tuesday 11:30 works well. I’ve attached the updated portfolio with the control-center case study up front…”', handled: null },
    { id: 2, type: 'task', title: 'Reschedule dentist to July 21', agent: 'Calendar Agent', time: '34m ago', preview: 'Found a conflict with the Meridian interview block. Proposed Tue Jul 21, 9:00 — the clinic has availability.', handled: null },
    { id: 3, type: 'file', title: 'Rename & file 3 receipt scans', agent: 'Files Agent', time: '1h ago', preview: 'receipts/2026-07/ ← IMG_2214.jpg → “wholefoods_07-03_84.12.pdf” (+2 more)', handled: null },
    { id: 4, type: 'keyword', title: 'Watchlist hit: “rydberg computing”', agent: 'News Agent', time: '2h ago', preview: '4 new articles match. Digest section drafted — include in tomorrow’s 07:00 briefing?', handled: null },
    { id: 5, type: 'email', title: 'Decline cold outreach — “growth tools”', agent: 'Mail Agent', time: '3h ago', preview: '“Appreciate the note — not exploring new tooling this quarter. Best of luck with the launch.”', handled: null },
];

export const JOBS: Job[] = [
    {
        id: 1, company: 'Meridian Labs', role: 'Senior Product Designer', status: 'Interview', updated: '2h ago', note: 'Agent note: Sofia proposed Tue Jul 7, 11:30 — panel with the design lead. Confirmation draft is in your approval queue.', timeline: [
            { d: 'Jul 4', t: 'Moved to interview', n: 'Recruiter proposed Tue Jul 7, 11:30 — 60 min panel with design lead + PM.' },
            { d: 'Jul 1', t: 'Recruiter screen', n: '30 min call. Positive signal — they asked about systems and multi-agent UI work.' },
            { d: 'Jun 26', t: 'Applied', n: 'Tailored portfolio: control-center case study first, referral from Dana.' },
        ]
    },
    {
        id: 2, company: 'Halide Systems', role: 'Design Engineer', status: 'Applied', updated: '1d ago', note: 'Agent note: no reply yet — Halide’s median response time is 6 days. Follow-up drafted for Jul 9 if still quiet.', timeline: [
            { d: 'Jul 4', t: 'Status check', n: 'Mail Agent scanned inbox — no response yet. Follow-up scheduled for Jul 9.' },
            { d: 'Jun 30', t: 'Applied', n: 'Submitted via careers page with prototype reel link.' },
        ]
    },
    {
        id: 3, company: 'North & Co', role: 'Staff Product Designer', status: 'Offer', updated: '3d ago', note: 'Agent note: offer expires Jul 10. Comp summary filed under jobs/north-co/. Reminder set for Fri morning.', timeline: [
            { d: 'Jul 2', t: 'Offer received', n: '$168k base + equity. Reply requested by Jul 10. PDF filed automatically.' },
            { d: 'Jun 24', t: 'Final round', n: 'Portfolio deep-dive went long — good sign. Team of 4 designers.' },
            { d: 'Jun 12', t: 'Interview loop', n: 'Three rounds scheduled across one week.' },
            { d: 'Jun 3', t: 'Applied', n: 'Warm intro via former manager.' },
        ]
    },
    {
        id: 4, company: 'Cobalt Health', role: 'Product Designer', status: 'Closed', updated: '5d ago', note: 'Agent note: position filled internally. Recruiter suggested re-applying for the platform team in Q4.', timeline: [
            { d: 'Jun 30', t: 'Closed', n: 'Role filled internally. Polite decline received and archived.' },
            { d: 'Jun 18', t: 'Applied', n: 'Standard application, no referral.' },
        ]
    },
    {
        id: 5, company: 'Arcline', role: 'Founding Designer', status: 'Interview', updated: '6d ago', note: 'Agent note: founder chat scheduled Wed Jul 8, 15:00. They liked the agent-dashboard concept.', timeline: [
            { d: 'Jun 29', t: 'Moved to interview', n: 'Founder wants a working-session style chat, Wed Jul 8.' },
            { d: 'Jun 22', t: 'Applied', n: 'Reached out directly after their HN launch.' },
        ]
    },
];

export const NEWS: NewsArticle[] = [
    {
        id: 1, src: 'Nature', time: '2h ago', watch: true, imgTag: 'atom array', title: 'Room-temperature Rydberg arrays hit 99.9% gate fidelity', desc: 'A Boulder team demonstrates stable neutral-atom entanglement without cryogenics — a milestone for scalable quantum hardware.', saved: { at: '09:12 today', summary: 'The Boulder group held 99.9% two-qubit gate fidelity across a 256-atom array at room temperature by swapping cryogenic isolation for dynamic optical-tweezer error correction. If it replicates, it removes the largest cost barrier to scaling neutral-atom machines — and it directly matches your “rydberg computing” watchlist. Worth 10 minutes before Tuesday’s interview; Meridian’s CTO cited this lab twice last year.' }, body: [
            'The result, published this morning, comes from a 256-atom neutral array held in optical tweezers. Where previous systems drifted out of coherence within milliseconds at ambient temperature, the Boulder team layered a dynamic recalibration loop on top of the trap lasers, correcting positional error faster than it accumulates.',
            'The practical upshot is cost. Cryogenic isolation is the single largest line item in scaling today’s machines; removing it changes the capital math for every lab building on neutral atoms.',
            'Independent replication is underway at two European groups. If the fidelity figure holds, expect the roadmap conversations at the fall conferences to reorganize around ambient-temperature arrays.',
        ]
    },
    {
        id: 2, src: 'The Information', time: '4h ago', watch: false, imgTag: 'office towers', title: 'Series B fintech rounds quietly reprice toward 2021 levels', desc: 'Term sheets seen this quarter show valuations creeping back up — but with structure attached that founders may regret.', saved: { at: '08:40 today', summary: 'Median Series B fintech valuations are up 38% year over year, but two-thirds of the sampled term sheets carry participating preferred or ratchet clauses — structure that shifts downside risk back onto founders and employees. The piece argues the headline numbers are cosmetic; effective dilution is flat. Relevant to your “series B fintech” watchlist and to reading North & Co’s equity offer skeptically.' }, body: [
            'On paper, the market looks warm again: median Series B pre-money valuations in fintech are up 38% year over year according to the data reviewed for this piece.',
            'The catch is in the structure. Two-thirds of sampled term sheets carried participating preferred stock, ratchets, or both — clauses that transfer downside risk to common shareholders.',
            'For operators evaluating equity offers, the takeaway is blunt: the headline valuation matters less than the preference stack sitting above your shares.',
        ]
    },
    {
        id: 3, src: 'Ars Technica', time: '5h ago', watch: false, imgTag: 'circuit board', title: 'The quiet rise of approval-first agent design', desc: 'A pattern survey of 40 personal-agent products finds the winners share one trait: nothing ships without a human tap.', saved: { at: 'yesterday 21:03', summary: 'A survey of 40 consumer agent products finds retention correlates strongly with explicit approval gates — users trust agents that show their drafts and wait. Products that auto-send on the user’s behalf saw 3× higher churn after a single visible mistake. The article names the pattern “approval-first design” and predicts it becomes table stakes. Directly relevant to your interview story about trust UI.' }, body: [
            'The survey looked at forty shipping products that let an AI act on a user’s behalf — mail, scheduling, shopping, finance — and traced six-month retention against interaction patterns.',
            'The single strongest correlate of retention was an explicit approval gate: the agent drafts, the human taps. Products that skipped the gate churned three times faster after their first visible mistake.',
            'The authors frame it as a trust ledger: every approved draft is a small deposit, every silent auto-send a withdrawal you can’t see until it bounces.',
        ]
    },
    {
        id: 4, src: 'Bloomberg', time: '7h ago', watch: false, imgTag: 'trading floor', title: 'Retail brokerages open read-only APIs to personal finance agents', desc: 'Robinhood and two rivals will let vetted third-party agents read transactions — but not trade — starting this fall.', saved: null, body: [
            'The program grants OAuth-scoped, read-only access to balances and transaction history for approved personal-finance applications, with trading endpoints explicitly excluded.',
            'The brokerages describe it as meeting customers where they already are: inside personal dashboards and agent tools rather than the brokerage’s own app.',
            'Consumer advocates cautiously approved, noting the read-only scope avoids the automation risks that plagued earlier open-banking experiments.',
        ]
    },
    {
        id: 5, src: 'MIT Tech Review', time: '9h ago', watch: true, imgTag: 'laser lab', title: 'What Rydberg sensors mean for GPS-free navigation', desc: 'Atom-based RF sensing is leaving the lab. The first field units are smaller than a shoebox.', saved: null, body: [
            'Rydberg-state atoms are exquisitely sensitive to electric fields, which makes them nearly ideal wideband RF receivers — no antenna resonance, no calibration drift.',
            'The field units demonstrated this spring fit in fourteen liters and ran for six hours on battery, detecting signals across a frequency span that would normally require a rack of equipment.',
            'Navigation is the headline application: cross-referencing ambient broadcast signals against known towers gives position fixes without GPS, a capability with obvious defense interest.',
        ]
    },
    {
        id: 6, src: 'The Verge', time: '11h ago', watch: false, imgTag: 'home office', title: 'PWAs are eating the personal-software niche', desc: 'Installable web apps now cover the “software for one” use case that native apps priced out.', saved: null, body: [
            'The pattern repeats across communities: one person, one problem, one installable web app — no store review, no subscription infrastructure, no platform tax.',
            'Modern PWA capabilities — offline caching, notifications, file handling — cover most of what personal tools need, and the single-codebase economics make solo maintenance viable.',
            'The result is a quiet renaissance of software built for an audience of exactly one.',
        ]
    },
];

export const TXNS: Txn[] = [
    { id: 1, m: 'Whole Foods Market', cat: 'Food', amt: '−$84.12', date: 'Jul 3', color: '#E8A44C', file: 'wholefoods_07-03.pdf' },
    { id: 2, m: 'Landlord — July rent', cat: 'Housing', amt: '−$1,450.00', date: 'Jul 1', color: '#7DA2FF', file: 'rent_july.pdf' },
    { id: 3, m: 'Clipper transit reload', cat: 'Transport', amt: '−$40.00', date: 'Jul 1', color: '#E5D06B', file: 'clipper_07-01.pdf' },
    { id: 4, m: 'Figma annual renewal', cat: 'Subscriptions', amt: '−$144.00', date: 'Jun 30', color: '#B8C4DC', file: 'figma_annual.pdf' },
    { id: 5, m: 'Vanguard auto-transfer', cat: 'Savings', amt: '−$900.00', date: 'Jun 28', color: '#4E6FBF', file: 'vanguard_06-28.pdf' },
    { id: 6, m: 'One Medical copay', cat: 'Health', amt: '−$45.00', date: 'Jun 27', color: '#6FD4D4', file: 'onemedical_06-27.pdf' },
];

export const CARDS: CardInfo[] = [
    { label: 'Amex Gold ··3009', chip: 'linear-gradient(135deg,#C9A84C,#8A7030)' },
    { label: 'Sapphire ··1127', chip: 'linear-gradient(135deg,#3A5FA8,#22335C)' },
    { label: 'Debit ··4410', chip: 'linear-gradient(135deg,#6B7488,#3C4252)' },
];

export const HOLDINGS: Holding[] = [
    { ticker: 'VTI', name: 'Vanguard Total Market', shares: '42', price: '$302.40', value: '$12,701', day: '+0.8%', up: true },
    { ticker: 'AAPL', name: 'Apple', shares: '18', price: '$246.10', value: '$4,430', day: '−0.4%', up: false },
    { ticker: 'IONQ', name: 'IonQ Inc', shares: '120', price: '$28.90', value: '$3,468', day: '+4.6%', up: true },
    { ticker: 'NVDA', name: 'NVIDIA', shares: '14', price: '$188.75', value: '$2,642', day: '+2.1%', up: true },
    { ticker: 'SCHD', name: 'Schwab US Dividend', shares: '18', price: '$29.35', value: '$528', day: '−0.2%', up: false },
];

export const CATS: CategoryBreakdown[] = [
    { name: 'Housing', amt: '$1,450', pct: '38%', color: '#7DA2FF' },
    { name: 'Food', amt: '$620', pct: '16%', color: '#E8A44C' },
    { name: 'Transport', amt: '$340', pct: '9%', color: '#E5D06B' },
    { name: 'Health', amt: '$280', pct: '7%', color: '#6FD4D4' },
    { name: 'Subscriptions', amt: '$210', pct: '6%', color: '#B8C4DC' },
    { name: 'Savings', amt: '$900', pct: '24%', color: '#4E6FBF' },
];

export const LOG: LogEntry[] = [
    { t: '13:42', a: 'Drafted reply to Meridian Labs recruiter', agent: 'MAIL', d: 'Confirmation for Tue 11:30 panel · queued for your approval', dot: '#E8A44C' },
    { t: '12:15', a: 'Filed 3 receipts from photo roll', agent: 'FILES', d: 'Renamed and sorted into receipts/2026-07/ · linked to Budget transactions', dot: '#6FD4D4' },
    { t: '11:03', a: 'Watchlist scan — 4 matches', agent: 'NEWS', d: '“rydberg computing” hit in Nature, MIT TR, 2 others · digest section drafted', dot: '#E5D06B' },
    { t: '09:47', a: 'Detected calendar conflict', agent: 'CALENDAR', d: 'Dentist Jul 7 overlaps Meridian panel · reschedule proposal queued', dot: '#E8A44C' },
    { t: '08:30', a: 'Categorized 6 new transactions', agent: 'FILES', d: 'Auto-matched against receipt scans · 1 anomaly flagged (Figma annual rate)', dot: '#6FD4D4' },
    { t: '07:00', a: 'Compiled daily briefing', agent: 'NEWS', d: '4 agents contributed · 12 stories triaged to 6 · delivered to Dashboard', dot: '#7DA2FF' },
];

export const REPLIES: string[] = [
    'For Meridian: re-read the trust-UI note you wrote Thursday, skim the Ars piece on approval-first design (it’s in your saved digest), and have the control-center case study open. Sofia’s panel includes a PM, so expect one metrics question.',
    'Budget-wise you’re fine — $1,800 of headroom left in July, and nothing unusual besides the Figma annual renewal I already flagged.',
    'Two things need you before 5pm: the Meridian confirmation email and the dentist reschedule. Both are one tap in the queue.',
    'I’ll fold that into tomorrow’s 07:00 briefing and flag anything new that matches.',
];

export const INITIAL_TASKS: Task[] = [
    { id: 1, label: 'Send follow-up to Meridian Labs', due: 'Today · 16:00', done: false },
    { id: 2, label: 'Review agent-drafted digest for Monday', due: 'Today · 18:00', done: false },
    { id: 3, label: 'Pay July internet bill', due: 'Today · 20:00', done: true },
];

export const INITIAL_NOTES: Note[] = [
    { id: 1, title: 'Agent memory idea', body: 'What if the briefing kept a rolling “things I said I’d do” list and gently resurfaced them after 3 days of silence?', time: 'yesterday', status: 'idle' },
    { id: 2, title: 'Interview story — trust UI', body: 'Approval-first design as a feature, not friction. The queue IS the product. Frame demo around one morning of decisions.', time: '2d ago', status: 'idle' },
];

export const INITIAL_WATCHLIST: string[] = ['rydberg computing', 'series B fintech', 'claude api pricing', 'oakland studio rents'];

export const INITIAL_CHAT: ChatMsg[] = [
    { role: 'agent', text: 'Morning. Quiet Sunday so far — 5 items are waiting for your sign-off, and Meridian Labs moved you to the interview stage. Ask me anything about today.' },
];

export const DOW_LIST = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const MONTH_EVENTS: Record<number, { label: string; color: string }> = {
    5: { label: 'Today', color: '#E8A44C' },
    7: { label: 'Meridian panel', color: '#E5D06B' },
    8: { label: 'Arcline chat', color: '#E5D06B' },
    10: { label: 'North&Co reply due', color: '#E8A44C' },
    21: { label: 'Dentist 9:00', color: '#6FD4D4' },
    24: { label: 'Rent autopay set', color: '#7DA2FF' },
    31: { label: 'Month close', color: '#B8C4DC' },
};
