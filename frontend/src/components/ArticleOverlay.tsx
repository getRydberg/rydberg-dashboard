import type { Dashboard } from '../useDashboard';

export function ArticleOverlay({ dash }: { dash: Dashboard }) {
    const { art, setArticleId } = dash;
    if (!art) return null;

    return (
        <div
            onClick={() => setArticleId(null)}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(6,8,12,0.72)',
                backdropFilter: 'blur(8px)',
                zIndex: 50,
                display: 'grid',
                placeItems: 'center',
                padding: 40,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: 700,
                    maxHeight: '82vh',
                    overflowY: 'auto',
                    background: '#12151F',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 20,
                    padding: '30px 34px',
                    animation: 'ryUp 0.3s ease',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#7DA2FF' }}>{art.src}</span>
                        <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#5D6678' }}>{art.time}</span>
                    </div>
                    <button
                        onClick={() => setArticleId(null)}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 9,
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.04)',
                            color: '#98A2B8',
                            cursor: 'pointer',
                            fontSize: 12,
                        }}
                    >
                        ✕
                    </button>
                </div>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 27, lineHeight: 1.25, marginBottom: 16, color: '#F2F4FA' }}>
                    {art.title}
                </div>
                <div
                    style={{
                        height: 170,
                        borderRadius: 13,
                        background: 'repeating-linear-gradient(135deg,rgba(255,255,255,0.05) 0 10px,rgba(255,255,255,0.018) 10px 20px)',
                        border: '1px solid rgba(255,255,255,0.055)',
                        display: 'grid',
                        placeItems: 'center',
                        marginBottom: 20,
                    }}
                >
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#5D6678', letterSpacing: 1 }}>
                        HERO IMG · {art.imgTag}
                    </span>
                </div>
                <div style={{ fontSize: 14.5, lineHeight: 1.8, color: '#C4CBDA' }}>
                    {art.body.map((p, i) => (
                        <p key={i} style={{ margin: '0 0 14px' }}>
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
