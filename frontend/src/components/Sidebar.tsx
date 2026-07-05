import type { Dashboard } from '../useDashboard';
import type { ViewKey } from '../types';

interface NavItem {
    key: ViewKey;
    label: string;
    icon: React.ReactNode;
    badge?: React.ReactNode;
}

function navButtonStyle(active: boolean, collapsed: boolean): React.CSSProperties {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        gap: 11,
        padding: collapsed ? '9px 0' : '9px 12px',
        border: 'none',
        borderRadius: 12,
        cursor: 'pointer',
        fontSize: 13.5,
        textAlign: 'left',
        background: active ? 'rgba(125,162,255,0.11)' : 'transparent',
        color: active ? '#E9ECF4' : '#98A2B8',
        fontWeight: 500,
        width: '100%',
    };
}

export function Sidebar({ dash }: { dash: Dashboard }) {
    const { view, setView, pending, sidebarOpen, setSidebarOpen } = dash;
    const collapsed = !sidebarOpen;

    const items: NavItem[] = [
        {
            key: 'dash',
            label: 'Dashboard',
            icon: (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="1" y="1" width="5.4" height="5.4" rx="1.4" />
                    <rect x="8.6" y="1" width="5.4" height="5.4" rx="1.4" />
                    <rect x="1" y="8.6" width="5.4" height="5.4" rx="1.4" />
                    <rect x="8.6" y="8.6" width="5.4" height="5.4" rx="1.4" />
                </svg>
            ),
        },
        {
            key: 'jobs',
            label: 'Job Tracker',
            icon: (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="1" y="4" width="13" height="9.5" rx="1.6" />
                    <line x1="5" y1="4" x2="5" y2="2" />
                    <line x1="10" y1="4" x2="10" y2="2" />
                    <line x1="5" y1="2" x2="10" y2="2" />
                </svg>
            ),
            badge: <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#E5D06B' }}>2◆</span>,
        },
        {
            key: 'inbox',
            label: 'Inbox & Approvals',
            icon: (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="1" y="2" width="13" height="11" rx="1.6" />
                    <line x1="1" y1="8.5" x2="4.5" y2="8.5" />
                    <line x1="10.5" y1="8.5" x2="14" y2="8.5" />
                    <rect x="4.5" y="8.5" width="6" height="2.6" rx="1.3" />
                </svg>
            ),
            badge: (
                <span
                    style={{
                        fontFamily: "'Geist Mono',monospace",
                        fontSize: 11,
                        background: 'rgba(232,164,76,0.15)',
                        color: '#E8A44C',
                        border: '1px solid rgba(232,164,76,0.3)',
                        padding: '1px 7px',
                        borderRadius: 99,
                    }}
                >
                    {pending.length}
                </span>
            ),
        },
        {
            key: 'news',
            label: 'News Digest',
            icon: (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="1" y="2" width="13" height="11" rx="1.6" />
                    <line x1="3.5" y1="5" x2="8" y2="5" />
                    <line x1="3.5" y1="7.5" x2="11.5" y2="7.5" />
                    <line x1="3.5" y1="10" x2="11.5" y2="10" />
                </svg>
            ),
        },
        {
            key: 'budget',
            label: 'Budget',
            icon: (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <line x1="2.5" y1="13" x2="2.5" y2="8" />
                    <line x1="7.5" y1="13" x2="7.5" y2="3" />
                    <line x1="12.5" y1="13" x2="12.5" y2="6" />
                </svg>
            ),
        },
        {
            key: 'tasks',
            label: 'Tasks & Notes',
            icon: (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="1.5" y="2.5" width="12" height="11" rx="1.6" />
                    <line x1="1.5" y1="6" x2="13.5" y2="6" />
                    <circle cx="5" cy="9.5" r="0.8" fill="currentColor" />
                    <line x1="7.5" y1="9.5" x2="11" y2="9.5" />
                </svg>
            ),
        },
    ];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.015)',
                backdropFilter: 'blur(24px)',
                padding: collapsed ? '20px 8px 14px' : '20px 12px 14px',
                position: 'relative',
                zIndex: 5,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: collapsed ? '0 0 22px' : '0 10px 22px',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                }}
            >
                <div
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 9,
                        background: 'linear-gradient(160deg,rgba(125,162,255,0.25),rgba(125,162,255,0.08))',
                        border: '1px solid rgba(125,162,255,0.35)',
                        display: 'grid',
                        placeItems: 'center',
                        fontFamily: "'Geist Mono',monospace",
                        fontWeight: 500,
                        color: '#AFC5FF',
                        fontSize: 14,
                        flexShrink: 0,
                    }}
                >
                    R
                </div>
                {!collapsed && (
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, letterSpacing: 0.2, fontSize: 15 }}>Rydberg</div>
                        <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678', letterSpacing: 0.8 }}>
                            CONTROL CENTER
                        </div>
                    </div>
                )}
                {!collapsed && (
                    <button
                        onClick={() => setSidebarOpen(false)}
                        title="Collapse sidebar"
                        className="ry-hover-white"
                        style={{
                            display: 'grid',
                            placeItems: 'center',
                            width: 26,
                            height: 26,
                            borderRadius: 8,
                            border: '1px solid rgba(255,255,255,0.08)',
                            background: 'transparent',
                            color: '#98A2B8',
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                    >
                        <svg width="13" height="13" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                            <rect x="1.5" y="2" width="12" height="11" rx="1.6" />
                            <line x1="5.5" y1="2" x2="5.5" y2="13" />
                        </svg>
                    </button>
                )}
            </div>

            {collapsed && (
                <button
                    onClick={() => setSidebarOpen(true)}
                    title="Expand sidebar"
                    className="ry-hover-white"
                    style={{
                        display: 'grid',
                        placeItems: 'center',
                        width: '100%',
                        padding: '7px 0',
                        marginBottom: 10,
                        borderRadius: 10,
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: 'transparent',
                        color: '#98A2B8',
                        cursor: 'pointer',
                    }}
                >
                    <svg width="13" height="13" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                        <rect x="1.5" y="2" width="12" height="11" rx="1.6" />
                        <line x1="5.5" y1="2" x2="5.5" y2="13" />
                    </svg>
                </button>
            )}

            {!collapsed && (
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678', letterSpacing: 1.2, padding: '0 12px 8px' }}>
                    WORKSPACE
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {items.map((it) => (
                    <button
                        key={it.key}
                        onClick={() => setView(it.key)}
                        title={collapsed ? it.label : undefined}
                        className="ry-hover-white"
                        style={navButtonStyle(view === it.key, collapsed)}
                    >
                        {it.icon}
                        {!collapsed && <span style={{ flex: 1 }}>{it.label}</span>}
                        {!collapsed && it.badge}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1 }} />

            {!collapsed && (
                <div
                    style={{
                        margin: '0 4px 12px',
                        padding: 12,
                        borderRadius: 12,
                        background: 'rgba(125,162,255,0.05)',
                        border: '1px solid rgba(125,162,255,0.12)',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        {dash.agentOnline ? (
                            <>
                                <span
                                    style={{
                                        width: 7,
                                        height: 7,
                                        borderRadius: 99,
                                        background: '#7DA2FF',
                                        animation: 'ryPulse 2.4s ease-in-out infinite',
                                    }}
                                />
                                <span style={{ fontSize: 12, fontWeight: 600, color: '#AFC5FF' }}>4 agents active</span>
                            </>
                        ) : (
                            <>
                                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#E8A44C' }}>⏸</span>
                                <span style={{ fontSize: 12, fontWeight: 600, color: '#E8A44C' }}>Agents paused</span>
                            </>
                        )}
                    </div>
                    <div style={{ fontSize: 11.5, color: '#98A2B8', lineHeight: 1.5 }}>
                        Mail · Calendar · News · Files. Nothing sends without you.
                    </div>
                </div>
            )}

            {collapsed && (
                <div
                    title={dash.agentOnline ? '4 agents active' : 'Agents paused'}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 12,
                    }}
                >
                    <span
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 99,
                            background: dash.agentOnline ? '#7DA2FF' : '#E8A44C',
                            animation: dash.agentOnline ? 'ryPulse 2.4s ease-in-out infinite' : 'none',
                        }}
                    />
                </div>
            )}

            <div
                style={{
                    display: 'flex',
                    flexDirection: collapsed ? 'column' : 'row',
                    alignItems: 'center',
                    gap: 6,
                    padding: '10px 4px 0',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
            >
                <button
                    onClick={() => setView('log')}
                    title="Agent Activity Log"
                    className="ry-hover-white"
                    style={{
                        flex: collapsed ? 'none' : 1,
                        width: collapsed ? '100%' : undefined,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '9px 0',
                        border: 'none',
                        borderRadius: 12,
                        cursor: 'pointer',
                        background: view === 'log' ? 'rgba(125,162,255,0.11)' : 'transparent',
                        color: view === 'log' ? '#E9ECF4' : '#98A2B8',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                        <rect x="2.5" y="1.5" width="10" height="12" rx="1.6" />
                        <line x1="5" y1="4.5" x2="10" y2="4.5" />
                        <line x1="5" y1="7" x2="10" y2="7" />
                        <line x1="5" y1="9.5" x2="8" y2="9.5" />
                    </svg>
                </button>
                <button
                    onClick={() => setView('settings')}
                    title="Settings"
                    className="ry-hover-white"
                    style={{
                        flex: collapsed ? 'none' : 1,
                        width: collapsed ? '100%' : undefined,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '9px 0',
                        border: 'none',
                        borderRadius: 12,
                        cursor: 'pointer',
                        background: view === 'settings' ? 'rgba(125,162,255,0.11)' : 'transparent',
                        color: view === 'settings' ? '#E9ECF4' : '#98A2B8',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                        <circle cx="7.5" cy="7.5" r="2.4" />
                        <line x1="7.5" y1="0.8" x2="7.5" y2="3" />
                        <line x1="7.5" y1="12" x2="7.5" y2="14.2" />
                        <line x1="0.8" y1="7.5" x2="3" y2="7.5" />
                        <line x1="12" y1="7.5" x2="14.2" y2="7.5" />
                        <line x1="2.8" y1="2.8" x2="4.3" y2="4.3" />
                        <line x1="10.7" y1="10.7" x2="12.2" y2="12.2" />
                        <line x1="12.2" y1="2.8" x2="10.7" y2="4.3" />
                        <line x1="4.3" y1="10.7" x2="2.8" y2="12.2" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
