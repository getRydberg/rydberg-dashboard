import type { Dashboard } from '../../useDashboard';

export function SettingsView({ dash }: { dash: Dashboard }) {
    const { watchlist, kwRemove, kwAdd, kwKey, kwRef } = dash;

    return (
        <div className="ry-page" style={{ maxWidth: 760 }}>
            <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 26, marginBottom: 20 }}>Settings</div>

            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 20, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Model configuration</div>
                <div style={{ fontSize: 12, color: '#5D6678', marginBottom: 14 }}>Applies to all agents unless overridden per agent</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                    <div style={{ border: '1px solid rgba(125,162,255,0.4)', background: 'rgba(125,162,255,0.08)', borderRadius: 12, padding: '13px 15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                            <span style={{ fontSize: 13, fontWeight: 600 }}>claude-sonnet-4-5</span>
                            <span style={{ fontSize: 11, fontWeight: 600, color: '#AFC5FF' }}>✓ ACTIVE</span>
                        </div>
                        <div style={{ fontSize: 11.5, color: '#98A2B8' }}>Drafting, digest, chat · fast &amp; capable</div>
                    </div>
                    <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '13px 15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                            <span style={{ fontSize: 13, fontWeight: 600 }}>claude-haiku-4</span>
                            <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678' }}>STANDBY</span>
                        </div>
                        <div style={{ fontSize: 11.5, color: '#98A2B8' }}>Classification, keyword scans · cheap triage</div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12.5, color: '#98A2B8' }}>
                    <span style={{ width: 110 }}>Temperature</span>
                    <div style={{ flex: 1, height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.08)', position: 'relative' }}>
                        <div style={{ width: '30%', height: '100%', borderRadius: 99, background: '#7DA2FF' }} />
                        <span
                            style={{
                                position: 'absolute',
                                left: '30%',
                                top: '50%',
                                transform: 'translate(-50%,-50%)',
                                width: 14,
                                height: 14,
                                borderRadius: 99,
                                background: '#E9ECF4',
                                border: '3px solid #7DA2FF',
                            }}
                        />
                    </div>
                    <span style={{ fontFamily: "'Geist Mono',monospace", color: '#E9ECF4' }}>0.3</span>
                </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 20, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Connected accounts</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(10,12,18,0.4)' }}>
                        <div
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: 9,
                                background: 'rgba(125,162,255,0.1)',
                                border: '1px solid rgba(125,162,255,0.2)',
                                display: 'grid',
                                placeItems: 'center',
                                fontFamily: "'Geist Mono',monospace",
                                fontSize: 12,
                                color: '#AFC5FF',
                            }}
                        >
                            G
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>Gmail</div>
                            <div style={{ fontSize: 11.5, color: '#5D6678' }}>adri.v@gmail.com · mail + calendar scopes</div>
                        </div>
                        <span style={{ fontSize: 11.5, fontWeight: 600, color: '#7DA2FF' }}>✓ Connected</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(10,12,18,0.4)' }}>
                        <div
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: 9,
                                background: 'rgba(111,212,212,0.08)',
                                border: '1px solid rgba(111,212,212,0.2)',
                                display: 'grid',
                                placeItems: 'center',
                                fontFamily: "'Geist Mono',monospace",
                                fontSize: 12,
                                color: '#6FD4D4',
                            }}
                        >
                            R
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>Robinhood</div>
                            <div style={{ fontSize: 11.5, color: '#5D6678' }}>read-only · transactions + balances</div>
                        </div>
                        <span style={{ fontSize: 11.5, fontWeight: 600, color: '#7DA2FF' }}>✓ Connected</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(232,164,76,0.22)', background: 'rgba(232,164,76,0.04)' }}>
                        <div
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: 9,
                                background: 'rgba(232,164,76,0.1)',
                                border: '1px solid rgba(232,164,76,0.25)',
                                display: 'grid',
                                placeItems: 'center',
                                fontFamily: "'Geist Mono',monospace",
                                fontSize: 12,
                                color: '#E8A44C',
                            }}
                        >
                            N
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>Notion</div>
                            <div style={{ fontSize: 11.5, color: '#E8A44C' }}>! Token expired 2 days ago — notes sync paused</div>
                        </div>
                        <button
                            style={{
                                padding: '6px 14px',
                                borderRadius: 9,
                                border: '1px solid rgba(232,164,76,0.4)',
                                background: 'rgba(232,164,76,0.1)',
                                color: '#F0C88A',
                                fontSize: 12,
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}
                        >
                            Reconnect
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Keyword watchlist</div>
                <div style={{ fontSize: 12, color: '#5D6678', marginBottom: 14 }}>
                    News Agent flags matching stories; Mail Agent flags matching threads
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                    {watchlist.map((w) => (
                        <span
                            key={w}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '6px 8px 6px 13px',
                                borderRadius: 99,
                                background: 'rgba(229,208,107,0.07)',
                                border: '1px solid rgba(229,208,107,0.25)',
                                fontSize: 12.5,
                                color: '#E9E2B8',
                            }}
                        >
                            {w}
                            <button
                                onClick={() => kwRemove(w)}
                                title="Remove keyword"
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 99,
                                    border: 'none',
                                    background: 'rgba(255,255,255,0.08)',
                                    color: '#98A2B8',
                                    fontSize: 10,
                                    cursor: 'pointer',
                                    display: 'grid',
                                    placeItems: 'center',
                                    padding: 0,
                                }}
                            >
                                ✕
                            </button>
                        </span>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: 9 }}>
                    <input
                        ref={kwRef}
                        onKeyDown={kwKey}
                        placeholder="Add a keyword or phrase…"
                        style={{
                            flex: 1,
                            background: 'rgba(10,12,18,0.5)',
                            border: '1px solid rgba(255,255,255,0.09)',
                            borderRadius: 12,
                            padding: '9px 13px',
                            color: '#E9ECF4',
                            fontSize: 12.5,
                            outline: 'none',
                        }}
                    />
                    <button
                        onClick={kwAdd}
                        style={{
                            padding: '0 16px',
                            borderRadius: 12,
                            border: '1px solid rgba(229,208,107,0.35)',
                            background: 'rgba(229,208,107,0.1)',
                            color: '#E9E2B8',
                            fontSize: 12.5,
                            fontWeight: 600,
                            cursor: 'pointer',
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
