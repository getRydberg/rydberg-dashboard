import type { Dashboard } from '../useDashboard';

export function TopBar({ dash }: { dash: Dashboard }) {
    const { agentOnline, userName, setView } = dash;
    const userInitial = userName[0] ?? 'A';

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                height: 60,
                padding: '0 24px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(10,12,18,0.6)',
                backdropFilter: 'blur(20px)',
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                    flex: 1,
                    maxWidth: 420,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.055)',
                    borderRadius: 12,
                    padding: '7px 12px',
                }}
            >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#5D6678" strokeWidth="1.4">
                    <circle cx="5.5" cy="5.5" r="4" />
                    <line x1="8.5" y1="8.5" x2="12" y2="12" />
                </svg>
                <input
                    placeholder="Search jobs, articles, transactions…"
                    style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#E9ECF4', fontSize: 13 }}
                />
                <span
                    style={{
                        fontFamily: "'Geist Mono',monospace",
                        fontSize: 10.5,
                        color: '#5D6678',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: 5,
                        padding: '1px 5px',
                    }}
                >
                    ⌘K
                </span>
            </div>
            <div style={{ flex: 1 }} />
            {agentOnline ? (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 13px',
                        borderRadius: 99,
                        background: 'rgba(125,162,255,0.08)',
                        border: '1px solid rgba(125,162,255,0.22)',
                    }}
                >
                    <span style={{ width: 7, height: 7, borderRadius: 99, background: '#7DA2FF', animation: 'ryPulse 2.4s ease-in-out infinite' }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#AFC5FF' }}>Agents online</span>
                </div>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 13px',
                        borderRadius: 99,
                        background: 'rgba(232,164,76,0.08)',
                        border: '1px solid rgba(232,164,76,0.28)',
                    }}
                >
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#E8A44C' }}>⏸</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#E8A44C' }}>Agents paused</span>
                </div>
            )}
            <button
                onClick={() => setView('inbox')}
                title="Notifications"
                className="ry-hover-white"
                style={{
                    position: 'relative',
                    display: 'grid',
                    placeItems: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.055)',
                    background: 'rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    color: '#98A2B8',
                }}
            >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M 3 11 L 3 7 A 4.5 4.5 0 0 1 12 7 L 12 11 L 13.5 12.5 L 1.5 12.5 Z" />
                    <line x1="6.3" y1="14" x2="8.7" y2="14" />
                </svg>
                <span
                    style={{
                        position: 'absolute',
                        top: 6,
                        right: 7,
                        width: 7,
                        height: 7,
                        borderRadius: 99,
                        background: '#E8A44C',
                        border: '2px solid #0A0C12',
                    }}
                />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <div
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: 99,
                        background: 'linear-gradient(150deg,#3A4B78,#22283C)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#C7D2EC',
                    }}
                >
                    {userInitial}
                </div>
                <div style={{ fontSize: 12.5, fontWeight: 500 }}>{userName}</div>
            </div>
        </div>
    );
}
