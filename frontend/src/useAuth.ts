import { useCallback, useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080';

export type AuthUser = {
    email: string;
    name: string | null;
    picture: string | null;
    role: 'owner' | 'guest';
};

export function useAuth() {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    const refresh = useCallback(async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/me`, { credentials: 'include' });
            setUser(res.ok ? ((await res.json()) as AuthUser) : null);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refresh();
    }, [refresh]);

    const login = useCallback(() => {
        window.location.href = `${API_BASE_URL}/auth/login`;
    }, []);

    const logout = useCallback(async () => {
        await fetch(`${API_BASE_URL}/auth/logout`, { method: 'POST', credentials: 'include' });
        setUser(null);
    }, []);

    return { user, loading, login, logout };
}
