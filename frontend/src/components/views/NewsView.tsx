import { NEWS } from '../../data';
import type { Dashboard } from '../../useDashboard';

export function NewsView({ dash }: { dash: Dashboard }) {
    const { newsTab, setNewsTab, setArticleId } = dash;
    const savedList = NEWS.filter((a) => a.saved);

    return (
        <div className="ry-page">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 26 }}>News Digest</div>
                    <div style={{ fontSize: 12.5, color: '#98A2B8' }}>curated 07:00 by News Agent · watchlist-aware</div>
                </div>
                <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 11, padding: 4 }}>
                    <button
                        onClick={() => setNewsTab('all')}
                        style={{
                            padding: '6px 16px',
                            borderRadius: 8,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 12.5,
                            fontWeight: 600,
                            background: newsTab === 'all' ? 'rgba(125,162,255,0.15)' : 'transparent',
                            color: newsTab === 'all' ? '#AFC5FF' : '#98A2B8',
                        }}
                    >
                        Today's stories
                    </button>
                    <button
                        onClick={() => setNewsTab('saved')}
                        style={{
                            padding: '6px 16px',
                            borderRadius: 8,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 12.5,
                            fontWeight: 600,
                            background: newsTab === 'saved' ? 'rgba(125,162,255,0.15)' : 'transparent',
                            color: newsTab === 'saved' ? '#AFC5FF' : '#98A2B8',
                        }}
                    >
                        Saved · 3
                    </button>
                </div>
            </div>

            {newsTab === 'all' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
                    {NEWS.map((a) => (
                        <button
                            key={a.id}
                            onClick={() => setArticleId(a.id)}
                            className="ry-hover-blue-border"
                            style={{
                                textAlign: 'left',
                                cursor: 'pointer',
                                background: 'rgba(255,255,255,0.028)',
                                border: '1px solid rgba(255,255,255,0.055)',
                                borderRadius: 20,
                                overflow: 'hidden',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div
                                style={{
                                    height: 110,
                                    background: 'repeating-linear-gradient(135deg,rgba(255,255,255,0.05) 0 10px,rgba(255,255,255,0.018) 10px 20px)',
                                    display: 'grid',
                                    placeItems: 'center',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                }}
                            >
                                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678', letterSpacing: 1 }}>
                                    IMG · {a.imgTag}
                                </span>
                            </div>
                            <div style={{ padding: '14px 16px 16px' }}>
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 7 }}>
                                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#7DA2FF' }}>{a.src}</span>
                                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678' }}>{a.time}</span>
                                    {a.watch && (
                                        <span
                                            style={{
                                                fontFamily: "'Geist Mono',monospace",
                                                fontSize: 9,
                                                color: '#E5D06B',
                                                border: '1px solid rgba(229,208,107,0.3)',
                                                borderRadius: 5,
                                                padding: '1px 6px',
                                                letterSpacing: 0.6,
                                            }}
                                        >
                                            WATCHLIST
                                        </span>
                                    )}
                                </div>
                                <div style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.4, marginBottom: 7 }}>{a.title}</div>
                                <div style={{ fontSize: 12.5, color: '#98A2B8', lineHeight: 1.55 }}>{a.desc}</div>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {newsTab === 'saved' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 820 }}>
                    {savedList.map((a) => (
                        <button
                            key={a.id}
                            onClick={() => setArticleId(a.id)}
                            className="ry-hover-blue-border"
                            style={{
                                textAlign: 'left',
                                cursor: 'pointer',
                                background: 'rgba(255,255,255,0.028)',
                                border: '1px solid rgba(255,255,255,0.055)',
                                borderRadius: 20,
                                padding: '18px 20px',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                                <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{a.title}</div>
                                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#E5D06B', whiteSpace: 'nowrap' }}>
                                    saved {a.saved!.at}
                                </div>
                            </div>
                            <div style={{ fontSize: 13, color: '#98A2B8', lineHeight: 1.65 }}>{a.saved!.summary}</div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
