import { CATS, HOLDINGS, TXNS } from '../../data';
import type { Dashboard } from '../../useDashboard';
import type { BudgetTab } from '../../types';

const TABS: { key: BudgetTab; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'flow', label: 'Cash flow' },
    { key: 'receipts', label: 'Receipts' },
    { key: 'portfolio', label: 'Portfolio' },
];

function TxnRow({
    m,
    cat,
    amt,
    date,
    color,
    active,
    onSelect,
}: {
    m: string;
    cat: string;
    amt: string;
    date: string;
    color: string;
    active?: boolean;
    onSelect?: () => void;
}) {
    const content = (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <span style={{ width: 8, height: 8, borderRadius: 3, background: color, flexShrink: 0 }} />
                <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{m}</div>
                    <div style={{ fontSize: 11.5, color: '#5D6678' }}>{cat}</div>
                </div>
            </div>
            <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#5D6678' }}>{date}</span>
            <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 12.5, fontWeight: 500 }}>{amt}</span>
        </>
    );
    const rowStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr auto auto',
        alignItems: 'center',
        gap: 14,
        padding: '12px 18px',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
    };
    if (!onSelect) {
        return <div style={rowStyle}>{content}</div>;
    }
    return (
        <button
            onClick={onSelect}
            className="ry-hover-white"
            style={{
                ...rowStyle,
                width: '100%',
                textAlign: 'left',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                cursor: 'pointer',
                background: active ? 'rgba(125,162,255,0.07)' : 'transparent',
            }}
        >
            {content}
        </button>
    );
}

function BudgetTabBar({ dash }: { dash: Dashboard }) {
    return (
        <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 4 }}>
            {TABS.map((t) => {
                const active = dash.budgetTab === t.key;
                return (
                    <button
                        key={t.key}
                        onClick={() => dash.setBudgetTab(t.key)}
                        style={{
                            padding: '6px 15px',
                            borderRadius: 9,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 12.5,
                            fontWeight: 600,
                            background: active ? 'rgba(125,162,255,0.15)' : 'transparent',
                            color: active ? '#AFC5FF' : '#98A2B8',
                        }}
                    >
                        {t.label}
                    </button>
                );
            })}
        </div>
    );
}

function OverviewTab() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 18, alignItems: 'start' }}>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Category breakdown</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <div style={{ position: 'relative', width: 158, height: 158, flexShrink: 0 }}>
                        <div
                            style={{
                                width: 158,
                                height: 158,
                                borderRadius: 99,
                                background:
                                    'conic-gradient(#7DA2FF 0deg 137deg,#E8A44C 137deg 194deg,#E5D06B 194deg 227deg,#6FD4D4 227deg 252deg,#B8C4DC 252deg 274deg,#4E6FBF 274deg 360deg)',
                            }}
                        />
                        <div style={{ position: 'absolute', inset: 26, borderRadius: 99, background: '#11141D', display: 'grid', placeItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: 19, fontWeight: 600 }}>$3,800</div>
                                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 9.5, color: '#5D6678', letterSpacing: 0.8 }}>JULY SPEND</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                        {CATS.map((c) => (
                            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12.5 }}>
                                <span style={{ width: 9, height: 9, borderRadius: 3, background: c.color, flexShrink: 0 }} />
                                <span style={{ flex: 1, color: '#C4CBDA' }}>{c.name}</span>
                                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#98A2B8' }}>{c.amt}</span>
                                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#5D6678', width: 34, textAlign: 'right' }}>{c.pct}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Recent transactions</span>
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 9.5, color: '#5D6678', letterSpacing: 0.8 }}>
                        RECEIPTS &amp; CARDS → RECEIPTS TAB
                    </span>
                </div>
                {TXNS.map((tx) => (
                    <TxnRow key={tx.id} m={tx.m} cat={tx.cat} amt={tx.amt} date={tx.date} color={tx.color} />
                ))}
            </div>
        </div>
    );
}

function FlowTab() {
    return (
        <div style={{ maxWidth: 880 }}>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Income → category flow</div>
                <div style={{ fontSize: 11.5, color: '#5D6678', marginBottom: 8 }}>
                    Salary $5,200 + freelance $800 · $2,200 unallocated stays in checking
                </div>
                <svg viewBox="0 0 460 250" style={{ width: '100%', flex: 1 }} preserveAspectRatio="xMidYMid meet">
                    <rect x="20" y="40" width="13" height="170" rx="4" fill="rgba(255,255,255,0.14)" />
                    <path d="M 33 70 C 190 70, 250 42, 414 42" stroke="#7DA2FF" strokeWidth="42" fill="none" opacity="0.34" />
                    <path d="M 33 110 C 190 110, 250 88, 414 88" stroke="#E8A44C" strokeWidth="19" fill="none" opacity="0.4" />
                    <path d="M 33 128 C 190 128, 250 120, 414 120" stroke="#E5D06B" strokeWidth="11" fill="none" opacity="0.4" />
                    <path d="M 33 142 C 190 142, 250 145, 414 145" stroke="#6FD4D4" strokeWidth="9" fill="none" opacity="0.42" />
                    <path d="M 33 154 C 190 154, 250 168, 414 168" stroke="#B8C4DC" strokeWidth="8" fill="none" opacity="0.35" />
                    <path d="M 33 178 C 190 178, 250 205, 414 205" stroke="#4E6FBF" strokeWidth="27" fill="none" opacity="0.42" />
                    <rect x="414" y="24" width="13" height="38" rx="4" fill="#7DA2FF" />
                    <rect x="414" y="76" width="13" height="22" rx="4" fill="#E8A44C" />
                    <rect x="414" y="110" width="13" height="16" rx="4" fill="#E5D06B" />
                    <rect x="414" y="136" width="13" height="15" rx="4" fill="#6FD4D4" />
                    <rect x="414" y="160" width="13" height="14" rx="4" fill="#B8C4DC" />
                    <rect x="414" y="188" width="13" height="32" rx="4" fill="#4E6FBF" />
                    <text x="14" y="30" fill="#98A2B8" fontSize="11" fontFamily="Geist Mono">INCOME $6,000</text>
                    <text x="406" y="46" fill="#C4CBDA" fontSize="10.5" fontFamily="Geist" textAnchor="end">Housing</text>
                    <text x="406" y="90" fill="#C4CBDA" fontSize="10.5" fontFamily="Geist" textAnchor="end">Food</text>
                    <text x="406" y="121" fill="#C4CBDA" fontSize="10.5" fontFamily="Geist" textAnchor="end">Transport</text>
                    <text x="406" y="147" fill="#C4CBDA" fontSize="10.5" fontFamily="Geist" textAnchor="end">Health</text>
                    <text x="406" y="170" fill="#C4CBDA" fontSize="10.5" fontFamily="Geist" textAnchor="end">Subscriptions</text>
                    <text x="406" y="207" fill="#C4CBDA" fontSize="10.5" fontFamily="Geist" textAnchor="end">Savings</text>
                </svg>
                <div style={{ fontSize: 11.5, color: '#5D6678', marginTop: 10, lineHeight: 1.6 }}>
                    Ribbon width is proportional to dollars. The agent re-derives this map nightly from categorized transactions.
                </div>
            </div>
        </div>
    );
}

function ReceiptsTab({ dash }: { dash: Dashboard }) {
    const { selTxn, activeCardIdx, setCardForTxn, cards } = dash;
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, alignItems: 'start' }}>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, overflow: 'hidden' }}>
                <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: 13, fontWeight: 600 }}>
                    Recent transactions
                </div>
                {TXNS.map((tx) => (
                    <TxnRow
                        key={tx.id}
                        m={tx.m}
                        cat={tx.cat}
                        amt={tx.amt}
                        date={tx.date}
                        color={tx.color}
                        active={dash.selectedTxn === tx.id}
                        onSelect={() => dash.setSelectedTxn(tx.id)}
                    />
                ))}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 18 }}>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: 1, color: '#5D6678', marginBottom: 12 }}>
                    RECEIPT · FILED BY FILES AGENT
                </div>
                <div
                    style={{
                        height: 180,
                        borderRadius: 11,
                        background: 'repeating-linear-gradient(135deg,rgba(255,255,255,0.05) 0 10px,rgba(255,255,255,0.018) 10px 20px)',
                        border: '1px solid rgba(255,255,255,0.055)',
                        display: 'grid',
                        placeItems: 'center',
                        marginBottom: 14,
                    }}
                >
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10.5, color: '#5D6678', letterSpacing: 1 }}>
                        RECEIPT SCAN · {selTxn.file}
                    </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                    <span style={{ color: '#98A2B8' }}>Merchant</span>
                    <span style={{ fontWeight: 500 }}>{selTxn.m}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                    <span style={{ color: '#98A2B8' }}>Category</span>
                    <span style={{ fontWeight: 500 }}>{selTxn.cat}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                    <span style={{ color: '#98A2B8' }}>Date</span>
                    <span style={{ fontFamily: "'Geist Mono',monospace" }}>{selTxn.date} · 2026</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: '#98A2B8' }}>Amount</span>
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontWeight: 600 }}>{selTxn.amt}</span>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '14px 0' }} />
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: 1, color: '#5D6678', marginBottom: 10 }}>
                    CARD USED · SAVED TO THIS TRANSACTION
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cards.map((cd, i) => {
                        const active = activeCardIdx === i;
                        return (
                            <button
                                key={cd.label}
                                onClick={() => setCardForTxn(selTxn.id, i)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '7px 12px',
                                    borderRadius: 12,
                                    fontSize: 12,
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    border: `1px solid ${active ? 'rgba(125,162,255,0.45)' : 'rgba(255,255,255,0.08)'}`,
                                    background: active ? 'rgba(125,162,255,0.13)' : 'rgba(255,255,255,0.03)',
                                    color: active ? '#E9ECF4' : '#98A2B8',
                                }}
                            >
                                <span style={{ width: 22, height: 15, borderRadius: 4, background: cd.chip, border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }} />
                                <span>{cd.label}</span>
                                {active && <span style={{ fontSize: 10, color: '#AFC5FF' }}>✓</span>}
                            </button>
                        );
                    })}
                </div>
                <div style={{ fontSize: 11, color: '#5D6678', marginTop: 10, lineHeight: 1.5 }}>
                    Card tags feed the per-card totals the agent uses for credit-cycle tracking.
                </div>
            </div>
        </div>
    );
}

function PortfolioTab() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 18, alignItems: 'start' }}>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, padding: 20 }}>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#98A2B8', letterSpacing: 1, marginBottom: 10 }}>
                    PORTFOLIO VALUE
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 28, fontWeight: 600 }}>$24,880</span>
                    <span style={{ fontSize: 12.5, color: '#7DA2FF', fontWeight: 600 }}>▲ +$312 today</span>
                </div>
                <div style={{ fontSize: 12, color: '#5D6678', marginBottom: 16 }}>Invested $23,760 · Cash $1,120 · YTD ▲ +8.4%</div>
                <div style={{ display: 'flex', height: 10, borderRadius: 99, overflow: 'hidden', marginBottom: 12 }}>
                    <div style={{ width: '58%', background: '#7DA2FF' }} />
                    <div style={{ width: '22%', background: '#6FD4D4' }} />
                    <div style={{ width: '12%', background: '#E5D06B' }} />
                    <div style={{ width: '8%', background: '#B8C4DC' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 12.5, marginBottom: 16 }}>
                    {[
                        { label: 'Index ETFs', pct: '58%', color: '#7DA2FF' },
                        { label: 'Big tech', pct: '22%', color: '#6FD4D4' },
                        { label: 'Quantum bets', pct: '12%', color: '#E5D06B' },
                        { label: 'Cash', pct: '8%', color: '#B8C4DC' },
                    ].map((r) => (
                        <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                            <span style={{ width: 9, height: 9, borderRadius: 3, background: r.color, flexShrink: 0 }} />
                            <span style={{ flex: 1, color: '#C4CBDA' }}>{r.label}</span>
                            <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: '#98A2B8' }}>{r.pct}</span>
                        </div>
                    ))}
                </div>
                <div style={{ fontSize: 11.5, color: '#5D6678', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 12 }}>
                    Read-only sync from Robinhood. Rydberg never places trades — it watches, tallies, and flags.
                </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 20, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Holdings</span>
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#5D6678', letterSpacing: 0.8 }}>SYNCED 13:05</span>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 0.7fr 0.9fr 0.9fr 0.9fr',
                        padding: '10px 18px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        fontFamily: "'Geist Mono',monospace",
                        fontSize: 10,
                        letterSpacing: 1,
                        color: '#5D6678',
                    }}
                >
                    <span>TICKER</span>
                    <span style={{ textAlign: 'right' }}>SHARES</span>
                    <span style={{ textAlign: 'right' }}>PRICE</span>
                    <span style={{ textAlign: 'right' }}>VALUE</span>
                    <span style={{ textAlign: 'right' }}>TODAY</span>
                </div>
                {HOLDINGS.map((h) => (
                    <div
                        key={h.ticker}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1.5fr 0.7fr 0.9fr 0.9fr 0.9fr',
                            alignItems: 'center',
                            padding: '12px 18px',
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                        }}
                    >
                        <div>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>{h.ticker}</div>
                            <div style={{ fontSize: 11, color: '#5D6678' }}>{h.name}</div>
                        </div>
                        <span style={{ textAlign: 'right', fontFamily: "'Geist Mono',monospace", fontSize: 12, color: '#98A2B8' }}>{h.shares}</span>
                        <span style={{ textAlign: 'right', fontFamily: "'Geist Mono',monospace", fontSize: 12, color: '#98A2B8' }}>{h.price}</span>
                        <span style={{ textAlign: 'right', fontFamily: "'Geist Mono',monospace", fontSize: 12.5, fontWeight: 500 }}>{h.value}</span>
                        <span style={{ textAlign: 'right', fontSize: 12, fontWeight: 600, color: h.up ? '#7DA2FF' : '#E8A44C' }}>
                            {h.up ? '▲' : '▼'} {h.day}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BudgetView({ dash }: { dash: Dashboard }) {
    return (
        <div className="ry-page">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 26 }}>Budget</div>
                    <div style={{ fontSize: 12.5, color: '#98A2B8' }}>July 2026 · synced from Robinhood &amp; checking, 3h ago</div>
                </div>
                <BudgetTabBar dash={dash} />
            </div>
            {dash.budgetTab === 'overview' && <OverviewTab />}
            {dash.budgetTab === 'flow' && <FlowTab />}
            {dash.budgetTab === 'receipts' && <ReceiptsTab dash={dash} />}
            {dash.budgetTab === 'portfolio' && <PortfolioTab />}
        </div>
    );
}
