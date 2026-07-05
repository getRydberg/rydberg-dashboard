export function LoginScreen({ login, error }: { login: () => void; error?: string | null }) {
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'grid',
                placeItems: 'center',
                background: '#0A0C12',
                color: '#E9ECF4',
                fontFamily: "'Geist',sans-serif",
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 18,
                    padding: '40px 36px',
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    minWidth: 320,
                }}
            >
                <div style={{ fontSize: 20, fontWeight: 700 }}>Rydberg</div>
                <div style={{ fontSize: 13, color: '#98A2B8', textAlign: 'center' }}>
                    Sign in with an approved Google account to continue.
                </div>
                {error === 'not_allowed' && (
                    <div style={{ fontSize: 12.5, color: '#E8A44C', textAlign: 'center' }}>
                        That Google account isn't on the allowlist for this dashboard.
                    </div>
                )}
                <button
                    onClick={login}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 18px',
                        borderRadius: 10,
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.06)',
                        color: '#E9ECF4',
                        fontSize: 13.5,
                        fontWeight: 600,
                        cursor: 'pointer',
                    }}
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}
