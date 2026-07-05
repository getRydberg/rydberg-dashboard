import { DOW_LIST, MONTH_EVENTS } from '../../data';
import type { Dashboard } from '../../useDashboard';

function DayTimeline() {
    const marks = [
        { top: 0, label: '08:00' },
        { top: 110, label: '10:00' },
        { top: 220, label: '12:00' },
        { top: 330, label: '14:00' },
        { top: 440, label: '16:00' },
        { top: 550, label: '18:00' },
        { top: 659, label: '20:00' },
    ];
    const events = [
        { top: 83, minHeight: 50, title: 'Weekly review & plan', time: '09:30 – 10:15', bg: 'rgba(125,162,255,0.1)', border: 'rgba(125,162,255,0.28)', accent: '#7DA2FF' },
        { top: 193, minHeight: 44, title: '◆ Mock interview — Meridian prep', time: '11:30 – 12:15', bg: 'rgba(229,208,107,0.08)', border: 'rgba(229,208,107,0.3)', accent: '#E5D06B' },
        { top: 330, minHeight: 82, title: 'Deep work — portfolio case study', time: '14:00 – 15:30', bg: 'rgba(125,162,255,0.1)', border: 'rgba(125,162,255,0.28)', accent: '#7DA2FF' },
        { top: 550, minHeight: 50, title: 'Evening run', time: '18:00 – 19:00', bg: 'rgba(111,212,212,0.07)', border: 'rgba(111,212,212,0.26)', accent: '#6FD4D4' },
    ];

    return (
        <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: '18px 18px 10px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Today's timeline</div>
            <div style={{ position: 'relative', height: 660 }}>
                {marks.map((m) => (
                    <div key={m.label} style={{ position: 'absolute', left: 0, top: m.top, width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678' }}>{m.label}</span>
                    </div>
                ))}
                <div style={{ position: 'absolute', left: 44, right: 0, top: 293, borderTop: '1.5px solid #E8A44C', zIndex: 3 }}>
                    <span
                        style={{
                            position: 'absolute',
                            left: -44,
                            top: -8,
                            fontFamily: "'Geist Mono',monospace",
                            fontSize: 9.5,
                            color: '#E8A44C',
                            background: '#0F1119',
                            padding: '1px 4px',
                            borderRadius: 4,
                        }}
                    >
                        NOW
                    </span>
                </div>
                {events.map((ev) => (
                    <div
                        key={ev.title}
                        style={{
                            position: 'absolute',
                            left: 52,
                            right: 6,
                            top: ev.top,
                            minHeight: ev.minHeight,
                            overflow: 'hidden',
                            borderRadius: 12,
                            background: ev.bg,
                            border: `1px solid ${ev.border}`,
                            borderLeft: `3px solid ${ev.accent}`,
                            padding: '7px 12px',
                        }}
                    >
                        <div style={{ fontSize: 12.5, fontWeight: 600 }}>{ev.title}</div>
                        <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8' }}>{ev.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DueToday({ dash }: { dash: Dashboard }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'rgba(232,164,76,0.05)', border: '1px solid rgba(232,164,76,0.18)', borderRadius: 20, padding: 18 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, color: '#F0C88A' }}>Due today</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {dash.tasks.map((tk) => (
                        <button
                            key={tk.id}
                            onClick={() => dash.toggleTask(tk.id)}
                            className="ry-hover-blue-border"
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 11,
                                width: '100%',
                                textAlign: 'left',
                                padding: '10px 12px',
                                borderRadius: 12,
                                border: '1px solid rgba(255,255,255,0.06)',
                                background: 'rgba(10,12,18,0.4)',
                                cursor: 'pointer',
                            }}
                        >
                            <span
                                style={{
                                    width: 17,
                                    height: 17,
                                    borderRadius: 6,
                                    border: `1.5px solid ${tk.done ? '#7DA2FF' : 'rgba(255,255,255,0.3)'}`,
                                    background: tk.done ? '#7DA2FF' : 'transparent',
                                    display: 'grid',
                                    placeItems: 'center',
                                    fontSize: 10,
                                    color: '#0A0C12',
                                    flexShrink: 0,
                                    marginTop: 1,
                                }}
                            >
                                {tk.done ? '✓' : ''}
                            </span>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 13, fontWeight: 500, textDecoration: tk.done ? 'line-through' : 'none', color: tk.done ? '#5D6678' : '#E9ECF4' }}>
                                    {tk.label}
                                </div>
                                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678', marginTop: 3 }}>{tk.due}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: '16px 18px' }}>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: 1, color: '#5D6678', marginBottom: 10 }}>
                    UP NEXT · THIS WEEK
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.9, color: '#98A2B8' }}>
                    <div>
                        <span style={{ color: '#E5D06B' }}>◆</span> Tue — Meridian Labs interview, 11:30
                    </div>
                    <div>
                        <span style={{ color: '#7DA2FF' }}>●</span> Wed — Portfolio review with Dana
                    </div>
                    <div>
                        <span style={{ color: '#E8A44C' }}>★</span> Fri — Reply to North &amp; Co offer
                    </div>
                </div>
            </div>
        </div>
    );
}

function RawNotes({ dash }: { dash: Dashboard }) {
    return (
        <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Raw notes</div>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 9.5, color: '#5D6678', letterSpacing: 0.8 }}>NOTES AGENT ON CALL</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {dash.notes.map((n) => (
                    <div key={n.id} style={{ border: '1px solid rgba(255,255,255,0.055)', borderRadius: 12, padding: '13px 14px', background: 'rgba(10,12,18,0.4)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                            <span style={{ fontSize: 13, fontWeight: 600 }}>{n.title}</span>
                            <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678' }}>{n.time}</span>
                        </div>
                        <div style={{ fontSize: 12.5, color: '#98A2B8', lineHeight: 1.6, marginBottom: 9 }}>{n.body}</div>
                        {n.status === 'idle' && (
                            <button
                                onClick={() => dash.reviseNote(n.id)}
                                style={{
                                    padding: '5px 12px',
                                    borderRadius: 8,
                                    border: '1px solid rgba(125,162,255,0.3)',
                                    background: 'rgba(125,162,255,0.08)',
                                    color: '#AFC5FF',
                                    fontSize: 11.5,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                }}
                            >
                                ↻ Ask agent to revise
                            </button>
                        )}
                        {n.status !== 'idle' && (
                            <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: n.status === 'queued' ? '#E5D06B' : '#7DA2FF' }}>
                                {n.status === 'queued' ? '↻ QUEUED · AGENT REVISING…' : '✓ REVISED DRAFT READY — IN YOUR APPROVAL QUEUE'}
                            </div>
                        )}
                    </div>
                ))}
                <textarea
                    placeholder="Jot a raw idea — the agent will tidy it later…"
                    style={{
                        background: 'rgba(10,12,18,0.5)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: 12,
                        padding: '11px 13px',
                        color: '#E9ECF4',
                        fontSize: 12.5,
                        minHeight: 64,
                        resize: 'vertical',
                        outline: 'none',
                        lineHeight: 1.6,
                    }}
                />
            </div>
        </div>
    );
}

function MonthView() {
    const cells: { n: number; cur: boolean }[] = [];
    for (let i = 0; i < 35; i++) {
        if (i < 3) cells.push({ n: 28 + i, cur: false });
        else if (i > 33) cells.push({ n: i - 33, cur: false });
        else cells.push({ n: i - 2, cur: true });
    }

    return (
        <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 20, maxWidth: 980 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 19 }}>July 2026</div>
                <div style={{ fontSize: 11.5, color: '#5D6678' }}>key events only — day detail lives in Today view</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, marginBottom: 6 }}>
                {DOW_LIST.map((d) => (
                    <div key={d} style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678', letterSpacing: 1, textAlign: 'center', padding: '4px 0' }}>
                        {d}
                    </div>
                ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
                {cells.map((c, i) => {
                    const ev = c.cur ? MONTH_EVENTS[c.n] : undefined;
                    const isToday = c.cur && c.n === 5;
                    return (
                        <div
                            key={i}
                            style={{
                                minHeight: 78,
                                borderRadius: 12,
                                padding: '8px 9px',
                                background: isToday ? 'rgba(232,164,76,0.09)' : c.cur ? 'rgba(255,255,255,0.02)' : 'transparent',
                                border: `1px solid ${isToday ? 'rgba(232,164,76,0.4)' : 'rgba(255,255,255,0.05)'}`,
                            }}
                        >
                            <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: isToday ? '#F0C88A' : c.cur ? '#98A2B8' : '#3A4050', marginBottom: 5 }}>
                                {c.n}
                            </div>
                            {ev && !isToday && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10.5, color: '#C4CBDA', lineHeight: 1.3 }}>
                                    <span style={{ width: 6, height: 6, borderRadius: 2, background: ev.color, flexShrink: 0 }} />
                                    <span>{ev.label}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function TasksView({ dash }: { dash: Dashboard }) {
    const { taskView, setTaskView } = dash;
    return (
        <div className="ry-page">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 26 }}>Tasks &amp; Notes</div>
                    <div style={{ fontSize: 12.5, color: '#98A2B8' }}>Sunday, July 5 · 3 tasks due · Notes Agent can revise drafts</div>
                </div>
                <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 11, padding: 4 }}>
                    <button
                        onClick={() => setTaskView('day')}
                        style={{
                            padding: '6px 16px',
                            borderRadius: 8,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 12.5,
                            fontWeight: 600,
                            background: taskView === 'day' ? 'rgba(125,162,255,0.15)' : 'transparent',
                            color: taskView === 'day' ? '#AFC5FF' : '#98A2B8',
                        }}
                    >
                        Today
                    </button>
                    <button
                        onClick={() => setTaskView('month')}
                        style={{
                            padding: '6px 16px',
                            borderRadius: 8,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 12.5,
                            fontWeight: 600,
                            background: taskView === 'month' ? 'rgba(125,162,255,0.15)' : 'transparent',
                            color: taskView === 'month' ? '#AFC5FF' : '#98A2B8',
                        }}
                    >
                        Month
                    </button>
                </div>
            </div>

            {taskView === 'day' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.9fr 1fr', gap: 18, alignItems: 'start' }}>
                    <DayTimeline />
                    <DueToday dash={dash} />
                    <RawNotes dash={dash} />
                </div>
            )}

            {taskView === 'month' && <MonthView />}
        </div>
    );
}
