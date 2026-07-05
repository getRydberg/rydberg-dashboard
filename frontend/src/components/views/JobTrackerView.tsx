import { JOBS, STATUS_META } from '../../data';
import type { Dashboard } from '../../useDashboard';

export function JobTrackerView({ dash }: { dash: Dashboard }) {
    const { selectedJob, setSelectedJob, selJob } = dash;
    const sjSt = STATUS_META[selJob.status];

    return (
        <div className="ry-page">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 20 }}>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 26 }}>Job Tracker</div>
                <div style={{ fontSize: 12.5, color: '#98A2B8' }}>5 active applications · agent checks inboxes hourly</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 18, alignItems: 'start' }}>
                <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, overflow: 'hidden' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1.4fr 1fr 0.8fr',
                            padding: '11px 18px',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            fontFamily: "'Geist Mono',monospace",
                            fontSize: 10,
                            letterSpacing: 1,
                            color: '#5D6678',
                        }}
                    >
                        <span>COMPANY / ROLE</span>
                        <span>STATUS</span>
                        <span style={{ textAlign: 'right' }}>UPDATED</span>
                    </div>
                    {JOBS.map((j) => {
                        const st = STATUS_META[j.status];
                        return (
                            <button
                                key={j.id}
                                onClick={() => setSelectedJob(j.id)}
                                className="ry-hover-white"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1.4fr 1fr 0.8fr',
                                    alignItems: 'center',
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '13px 18px',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                                    cursor: 'pointer',
                                    background: selectedJob === j.id ? 'rgba(125,162,255,0.07)' : 'transparent',
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: 13.5, fontWeight: 600 }}>{j.company}</div>
                                    <div style={{ fontSize: 12, color: '#98A2B8', marginTop: 2 }}>{j.role}</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                                    <span style={{ fontSize: 11, color: st.c }}>{st.g}</span>
                                    <span style={{ fontSize: 12, fontWeight: 500, color: st.c }}>{j.status}</span>
                                </div>
                                <div style={{ textAlign: 'right', fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#5D6678' }}>{j.updated}</div>
                            </button>
                        );
                    })}
                </div>
                <div
                    style={{
                        background: 'rgba(255,255,255,0.028)',
                        border: '1px solid rgba(255,255,255,0.055)',
                        borderRadius: 20,
                        padding: 20,
                        position: 'sticky',
                        top: 0,
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                        <div style={{ fontSize: 17, fontWeight: 600 }}>{selJob.company}</div>
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 11.5,
                                fontWeight: 600,
                                color: sjSt.c,
                                border: `1px solid ${sjSt.c}55`,
                                padding: '3px 10px',
                                borderRadius: 99,
                            }}
                        >
                            {sjSt.g} {selJob.status}
                        </span>
                    </div>
                    <div style={{ fontSize: 12.5, color: '#98A2B8', marginBottom: 6 }}>{selJob.role}</div>
                    <div
                        style={{
                            fontSize: 12.5,
                            color: '#C4CBDA',
                            background: 'rgba(125,162,255,0.06)',
                            border: '1px solid rgba(125,162,255,0.14)',
                            borderRadius: 9,
                            padding: '8px 11px',
                            marginBottom: 18,
                        }}
                    >
                        {selJob.note}
                    </div>
                    <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: 1, color: '#5D6678', marginBottom: 12 }}>
                        STATUS TIMELINE
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {selJob.timeline.map((t, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 12 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span
                                        style={{
                                            width: 9,
                                            height: 9,
                                            borderRadius: 99,
                                            background: i === 0 ? sjSt.c : 'rgba(255,255,255,0.25)',
                                            border: '2px solid rgba(10,12,18,1)',
                                            boxShadow: `0 0 0 1px ${i === 0 ? sjSt.c : 'rgba(255,255,255,0.25)'}`,
                                            marginTop: 4,
                                        }}
                                    />
                                    <span style={{ flex: 1, width: 1, background: 'rgba(255,255,255,0.1)', margin: '4px 0 2px' }} />
                                </div>
                                <div style={{ paddingBottom: 16 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                                        <span style={{ fontSize: 13, fontWeight: 600 }}>{t.t}</span>
                                        <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#5D6678' }}>{t.d}</span>
                                    </div>
                                    <div style={{ fontSize: 12.5, color: '#98A2B8', lineHeight: 1.55, marginTop: 3 }}>{t.n}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
