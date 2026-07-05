import { TYPE_META } from '../../data';
import type { Dashboard } from '../../useDashboard';
import type { InboxFilter } from '../../types';

const FILTERS: InboxFilter[] = ['all', 'email', 'file', 'task', 'keyword'];

export function InboxView({ dash }: { dash: Dashboard }) {
    const { inbox, pending, inboxFilter, setInboxFilter, handleItem } = dash;

    const filtered = inbox.filter((x) => inboxFilter === 'all' || x.type === inboxFilter);

    return (
        <div className="ry-page" style={{ maxWidth: 860 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 26 }}>Inbox &amp; Approvals</div>
                <div style={{ fontSize: 12.5, color: '#98A2B8' }}>{pending.length} pending — nothing executes until you approve</div>
            </div>
            <div style={{ display: 'flex', gap: 8, margin: '16px 0 18px' }}>
                {FILTERS.map((f) => {
                    const active = inboxFilter === f;
                    return (
                        <button
                            key={f}
                            onClick={() => setInboxFilter(f)}
                            style={{
                                padding: '6px 14px',
                                borderRadius: 99,
                                fontSize: 12.5,
                                fontWeight: 500,
                                cursor: 'pointer',
                                border: `1px solid ${active ? 'rgba(125,162,255,0.45)' : 'rgba(255,255,255,0.08)'}`,
                                background: active ? 'rgba(125,162,255,0.13)' : 'rgba(255,255,255,0.03)',
                                color: active ? '#AFC5FF' : '#98A2B8',
                            }}
                        >
                            {f === 'all' ? 'All' : f[0].toUpperCase() + f.slice(1)}
                        </button>
                    );
                })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {filtered.map((it) => {
                    const tp = TYPE_META[it.type];
                    const isPending = !it.handled;
                    const handledColor = it.handled === 'Approved & sent' ? '#7DA2FF' : '#8891A5';
                    const handledGlyph = it.handled === 'Approved & sent' ? '✓' : '✕';
                    return (
                        <div
                            key={it.id}
                            style={{
                                background: 'rgba(255,255,255,0.028)',
                                border: '1px solid rgba(255,255,255,0.055)',
                                borderRadius: 20,
                                padding: '16px 18px',
                                opacity: it.handled ? 0.5 : 1,
                                transition: 'opacity 0.3s',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
                                <span
                                    style={{
                                        fontFamily: "'Geist Mono',monospace",
                                        fontSize: 9.5,
                                        letterSpacing: 0.8,
                                        color: tp.c,
                                        border: `1px solid ${tp.c}55`,
                                        padding: '2.5px 8px',
                                        borderRadius: 6,
                                    }}
                                >
                                    {tp.label}
                                </span>
                                <span style={{ fontSize: 14, fontWeight: 600, flex: 1 }}>{it.title}</span>
                                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#5D6678' }}>
                                    {it.agent} · {it.time}
                                </span>
                            </div>
                            <div
                                style={{
                                    fontSize: 13,
                                    color: '#98A2B8',
                                    lineHeight: 1.6,
                                    borderLeft: '2px solid rgba(255,255,255,0.1)',
                                    paddingLeft: 12,
                                    marginBottom: 12,
                                }}
                            >
                                {it.preview}
                            </div>
                            {isPending ? (
                                <div style={{ display: 'flex', gap: 9 }}>
                                    <button
                                        onClick={() => handleItem(it.id, 'Approved & sent')}
                                        style={{
                                            padding: '7px 18px',
                                            borderRadius: 9,
                                            border: '1px solid rgba(125,162,255,0.4)',
                                            background: 'rgba(125,162,255,0.13)',
                                            color: '#AFC5FF',
                                            fontSize: 12.5,
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        ✓ Approve &amp; send
                                    </button>
                                    <button
                                        onClick={() => handleItem(it.id, 'Dismissed')}
                                        className="ry-hover-white"
                                        style={{
                                            padding: '7px 16px',
                                            borderRadius: 9,
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            background: 'transparent',
                                            color: '#98A2B8',
                                            fontSize: 12.5,
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        ✕ Dismiss
                                    </button>
                                </div>
                            ) : (
                                <div style={{ fontSize: 12.5, fontWeight: 600, color: handledColor }}>
                                    {handledGlyph} {it.handled}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
