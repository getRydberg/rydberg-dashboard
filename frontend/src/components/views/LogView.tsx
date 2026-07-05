import { AGENT_COLORS, LOG } from '../../data';

export function LogView() {
    return (
        <div className="ry-page">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 20 }}>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 26 }}>Agent Activity</div>
                <div style={{ fontSize: 12.5, color: '#98A2B8' }}>every autonomous action, logged · nothing hidden</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 18 }}>
                <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: '16px 18px' }}>
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8', letterSpacing: 1, marginBottom: 8 }}>
                        TOKENS · THIS WEEK
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                        <span style={{ fontSize: 24, fontWeight: 600 }}>1.24M</span>
                        <span style={{ fontSize: 12, color: '#98A2B8' }}>≈ $9.40</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 34 }}>
                        {[40, 62, 55, 78, 88, 38, 30].map((h, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: 1,
                                    height: `${h}%`,
                                    background: i === 6 ? 'rgba(232,164,76,0.6)' : `rgba(125,162,255,${0.4 + h / 300})`,
                                    borderRadius: '3px 3px 0 0',
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: '16px 18px' }}>
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8', letterSpacing: 1, marginBottom: 8 }}>
                        REQUESTS · TODAY
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                        <span style={{ fontSize: 24, fontWeight: 600 }}>29</span>
                        <span style={{ fontSize: 12, color: '#7DA2FF' }}>▼ quiet Sunday</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 11.5 }}>
                        {[
                            { label: 'Mail', pct: 72, n: 12, color: '#7DA2FF' },
                            { label: 'News', pct: 55, n: 9, color: '#E5D06B' },
                            { label: 'Calendar', pct: 30, n: 5, color: '#E8A44C' },
                            { label: 'Files', pct: 18, n: 3, color: '#6FD4D4' },
                        ].map((r) => (
                            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ width: 70, color: '#98A2B8' }}>{r.label}</span>
                                <div style={{ flex: 1, height: 6, borderRadius: 99, background: 'rgba(255,255,255,0.06)' }}>
                                    <div style={{ width: `${r.pct}%`, height: '100%', borderRadius: 99, background: r.color }} />
                                </div>
                                <span style={{ fontFamily: "'Geist Mono',monospace", color: '#5D6678' }}>{r.n}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: '16px 18px' }}>
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8', letterSpacing: 1, marginBottom: 8 }}>
                        MODEL LATENCY · P50
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontSize: 24, fontWeight: 600 }}>640ms</span>
                        <span style={{ fontSize: 12, color: '#98A2B8' }}>p95 1.9s</span>
                    </div>
                    <svg viewBox="0 0 220 44" style={{ width: '100%', height: 40 }} preserveAspectRatio="none">
                        <polyline
                            points="0,30 20,26 40,28 60,20 80,23 100,15 120,19 140,14 160,17 180,10 200,13 220,11"
                            fill="none"
                            stroke="#7DA2FF"
                            strokeWidth="1.8"
                        />
                        <line x1="0" y1="38" x2="220" y2="38" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    </svg>
                </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 20, maxWidth: 860 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Today's log</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {LOG.map((lg, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '52px 16px 1fr', gap: 10 }}>
                            <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#5D6678', paddingTop: 2, textAlign: 'right' }}>{lg.t}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ width: 8, height: 8, borderRadius: 99, background: lg.dot, marginTop: 5 }} />
                                <span style={{ flex: 1, width: 1, background: 'rgba(255,255,255,0.08)', marginTop: 4 }} />
                            </div>
                            <div style={{ paddingBottom: 16 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                                    <span style={{ fontSize: 13, fontWeight: 600 }}>{lg.a}</span>
                                    <span
                                        style={{
                                            fontFamily: "'Geist Mono',monospace",
                                            fontSize: 9.5,
                                            letterSpacing: 0.7,
                                            color: AGENT_COLORS[lg.agent],
                                            border: `1px solid ${AGENT_COLORS[lg.agent]}55`,
                                            padding: '1.5px 7px',
                                            borderRadius: 5,
                                        }}
                                    >
                                        {lg.agent}
                                    </span>
                                </div>
                                <div style={{ fontSize: 12.5, color: '#98A2B8', marginTop: 3, lineHeight: 1.55 }}>{lg.d}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
