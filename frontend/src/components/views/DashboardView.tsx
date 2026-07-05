import { STATUS_META, TYPE_META } from '../../data';
import type { Dashboard } from '../../useDashboard';

export function DashboardView({ dash }: { dash: Dashboard }) {
    const { userName, pending, setView, chat, chatBoxRef, chatRef, chatSend, chatKey } = dash;

    const dashQueue = pending.slice(0, 3);

    return (
        <div className="ry-page">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 22 }}>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 30, color: '#F2F4FA' }}>
                    Good afternoon, {userName}.
                </div>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11.5, color: '#5D6678', letterSpacing: 0.6 }}>
                    SUN · JUL 5 · 2026
                </div>
                <div style={{ flex: 1 }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 20 }}>
                <button
                    onClick={() => setView('jobs')}
                    className="ry-hover-blue-border"
                    style={{
                        textAlign: 'left',
                        cursor: 'pointer',
                        background: 'rgba(255,255,255,0.028)',
                        border: '1px solid rgba(255,255,255,0.055)',
                        borderRadius: 20,
                        padding: '16px 18px',
                    }}
                >
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#98A2B8', letterSpacing: 1, marginBottom: 10 }}>
                        APPLICATIONS · THIS WK
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                        <span style={{ fontSize: 26, fontWeight: 600 }}>7</span>
                        <span style={{ fontSize: 12, color: '#7DA2FF' }}>▲ 3 new</span>
                    </div>
                </button>
                <button
                    onClick={() => setView('inbox')}
                    style={{
                        textAlign: 'left',
                        cursor: 'pointer',
                        background: 'rgba(232,164,76,0.05)',
                        border: '1px solid rgba(232,164,76,0.2)',
                        borderRadius: 20,
                        padding: '16px 18px',
                    }}
                >
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#E8A44C', letterSpacing: 1, marginBottom: 10 }}>
                        PENDING APPROVALS
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                        <span style={{ fontSize: 26, fontWeight: 600, color: '#F0C88A' }}>{pending.length}</span>
                        <span style={{ fontSize: 12, color: '#98A2B8' }}>need sign-off</span>
                    </div>
                </button>
                <button
                    onClick={() => setView('news')}
                    className="ry-hover-blue-border"
                    style={{
                        textAlign: 'left',
                        cursor: 'pointer',
                        background: 'rgba(255,255,255,0.028)',
                        border: '1px solid rgba(255,255,255,0.055)',
                        borderRadius: 20,
                        padding: '16px 18px',
                    }}
                >
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#98A2B8', letterSpacing: 1, marginBottom: 10 }}>
                        UNREAD DIGEST
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                        <span style={{ fontSize: 26, fontWeight: 600 }}>12</span>
                        <span style={{ fontSize: 12, color: '#98A2B8' }}>stories · 4 watchlist</span>
                    </div>
                </button>
                <button
                    onClick={() => setView('budget')}
                    className="ry-hover-blue-border"
                    style={{
                        textAlign: 'left',
                        cursor: 'pointer',
                        background: 'rgba(255,255,255,0.028)',
                        border: '1px solid rgba(255,255,255,0.055)',
                        borderRadius: 20,
                        padding: '16px 18px',
                    }}
                >
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#98A2B8', letterSpacing: 1, marginBottom: 10 }}>
                        SPEND · JULY
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                        <span style={{ fontSize: 26, fontWeight: 600 }}>$3,800</span>
                        <span style={{ fontSize: 12, color: '#E5D06B' }}>◆ 68% of budget</span>
                    </div>
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 18, alignItems: 'start' }}>
                <div
                    style={{
                        background: 'linear-gradient(170deg,rgba(125,162,255,0.06),rgba(255,255,255,0.02) 40%)',
                        border: '1px solid rgba(125,162,255,0.16)',
                        borderRadius: 20,
                        padding: 24,
                        backdropFilter: 'blur(20px)',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
                        <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 23, color: '#DCE5FA' }}>
                            Daily Briefing
                        </div>
                        <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#5D6678', letterSpacing: 1 }}>
                            COMPILED 07:00 · 4 AGENTS
                        </div>
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.75, color: '#C4CBDA' }}>
                        <p style={{ margin: '0 0 12px' }}>
                            <span style={{ color: '#E5D06B' }}>◆ Meridian Labs</span> moved you to the interview stage — Sofia
                            proposed <span style={{ color: '#F2F4FA', fontWeight: 500 }}>Tuesday 11:30</span>, and a draft
                            confirmation is waiting in your queue. Two other applications are quiet; Halide usually replies within
                            a week.
                        </p>
                        <p style={{ margin: '0 0 12px' }}>
                            Spending is on pace: <span style={{ color: '#F2F4FA', fontWeight: 500 }}>$3,800 of $5,600</span> with
                            rent cleared. One anomaly — Figma renewed at the annual rate; I filed the receipt.
                        </p>
                        <p style={{ margin: 0 }}>
                            Your watchlist caught <span style={{ color: '#AFC5FF' }}>4 new pieces on "rydberg computing."</span>{' '}
                            The Nature summary is the one worth your time — it is in today's digest, saved section.
                        </p>
                    </div>

                    <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '18px 0 14px' }} />

                    <div
                        ref={chatBoxRef}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                            maxHeight: 230,
                            overflowY: 'auto',
                            paddingRight: 4,
                            marginBottom: 12,
                        }}
                    >
                        {chat.map((m, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                                <div
                                    style={{
                                        maxWidth: '78%',
                                        padding: '10px 14px',
                                        borderRadius: m.role === 'user' ? '13px 13px 4px 13px' : '13px 13px 13px 4px',
                                        background: m.role === 'user' ? 'rgba(125,162,255,0.14)' : 'rgba(255,255,255,0.04)',
                                        border: `1px solid ${m.role === 'user' ? 'rgba(125,162,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
                                        fontSize: 13.5,
                                        lineHeight: 1.6,
                                        color: m.role === 'user' ? '#E9ECF4' : '#C4CBDA',
                                        animation: 'ryUp 0.3s ease',
                                    }}
                                >
                                    {m.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: 9 }}>
                        <input
                            ref={chatRef}
                            onKeyDown={chatKey}
                            placeholder='Ask about today — "what should I prep for Meridian?"'
                            style={{
                                flex: 1,
                                background: 'rgba(10,12,18,0.6)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 11,
                                padding: '11px 14px',
                                color: '#E9ECF4',
                                fontSize: 13.5,
                                outline: 'none',
                            }}
                        />
                        <button
                            onClick={chatSend}
                            style={{
                                padding: '0 18px',
                                borderRadius: 11,
                                border: '1px solid rgba(125,162,255,0.4)',
                                background: 'rgba(125,162,255,0.14)',
                                color: '#AFC5FF',
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}
                        >
                            Ask
                        </button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div
                        style={{
                            background: 'rgba(255,255,255,0.028)',
                            border: '1px solid rgba(255,255,255,0.055)',
                            borderRadius: 20,
                            padding: '16px 18px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>Approval queue</div>
                            <button
                                onClick={() => setView('inbox')}
                                style={{ background: 'none', border: 'none', color: '#7DA2FF', fontSize: 12, cursor: 'pointer', fontWeight: 500, padding: 0 }}
                            >
                                View all →
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {dashQueue.map((q) => {
                                const tp = TYPE_META[q.type];
                                return (
                                    <div
                                        key={q.id}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 10,
                                            padding: '9px 10px',
                                            borderRadius: 12,
                                            background: 'rgba(255,255,255,0.025)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Geist Mono',monospace",
                                                fontSize: 9,
                                                letterSpacing: 0.8,
                                                color: tp.c,
                                                border: `1px solid ${tp.c}55`,
                                                padding: '2px 6px',
                                                borderRadius: 5,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {tp.label}
                                        </span>
                                        <div style={{ flex: 1, minWidth: 0, fontSize: 12.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {q.title}
                                        </div>
                                        <button
                                            onClick={() => dash.handleItem(q.id, 'Approved & sent')}
                                            title="Approve"
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 8,
                                                border: '1px solid rgba(125,162,255,0.35)',
                                                background: 'rgba(125,162,255,0.1)',
                                                color: '#AFC5FF',
                                                cursor: 'pointer',
                                                fontSize: 12,
                                                flexShrink: 0,
                                            }}
                                        >
                                            ✓
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        onClick={() => setView('jobs')}
                        className="ry-hover-blue-border"
                        style={{
                            textAlign: 'left',
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.028)',
                            border: '1px solid rgba(255,255,255,0.055)',
                            borderRadius: 20,
                            padding: '15px 18px',
                        }}
                    >
                        <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8', letterSpacing: 1, marginBottom: 8 }}>
                            JOBS
                        </div>
                        <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                            <span style={{ color: STATUS_META.Interview.c }}>◆ 2 interviews</span> this week ·{' '}
                            <span style={{ color: STATUS_META.Offer.c }}>★ 1 offer</span> on the table (North &amp; Co, reply by
                            Jul 10)
                        </div>
                    </button>
                    <button
                        onClick={() => setView('news')}
                        className="ry-hover-blue-border"
                        style={{
                            textAlign: 'left',
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.028)',
                            border: '1px solid rgba(255,255,255,0.055)',
                            borderRadius: 20,
                            padding: '15px 18px',
                        }}
                    >
                        <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8', letterSpacing: 1, marginBottom: 8 }}>
                            NEWS
                        </div>
                        <div style={{ fontSize: 13, lineHeight: 1.5, color: '#C4CBDA' }}>
                            Top: <span style={{ color: '#F2F4FA' }}>"Room-temperature Rydberg arrays hit 99.9% fidelity"</span> ·
                            Nature, 2h ago
                        </div>
                    </button>
                    <button
                        onClick={() => setView('budget')}
                        className="ry-hover-blue-border"
                        style={{
                            textAlign: 'left',
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.028)',
                            border: '1px solid rgba(255,255,255,0.055)',
                            borderRadius: 20,
                            padding: '15px 18px',
                        }}
                    >
                        <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8', letterSpacing: 1, marginBottom: 10 }}>
                            SPENDING · LAST 7 DAYS
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 36, marginBottom: 8 }}>
                            {[30, 85, 20, 45, 12, 58, 26].map((h, i) => (
                                <div
                                    key={i}
                                    style={{
                                        flex: 1,
                                        height: `${h}%`,
                                        background: i === 6 ? 'rgba(232,164,76,0.6)' : `rgba(125,162,255,${0.3 + h / 250})`,
                                        borderRadius: '3px 3px 0 0',
                                    }}
                                />
                            ))}
                        </div>
                        <div style={{ fontSize: 12.5, color: '#98A2B8' }}>$412 this week · groceries led</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
