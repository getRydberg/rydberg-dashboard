import { useCallback, useEffect, useRef, useState } from 'react';
import {
    CARDS,
    INITIAL_CHAT,
    INITIAL_INBOX,
    INITIAL_NOTES,
    INITIAL_TASKS,
    INITIAL_WATCHLIST,
    JOBS,
    NEWS,
    REPLIES,
    TXNS,
} from './data';
import type {
    BudgetTab,
    ChatMsg,
    InboxFilter,
    NewsTab,
    Note,
    TaskViewTab,
    ViewKey,
} from './types';

export function useDashboard(userName = 'Adri', agentOnline = true) {
    const [view, setView] = useState<ViewKey>('dash');
    const [inboxFilter, setInboxFilter] = useState<InboxFilter>('all');
    const [inbox, setInbox] = useState(INITIAL_INBOX);
    const [selectedJob, setSelectedJob] = useState(1);
    const [newsTab, setNewsTab] = useState<NewsTab>('all');
    const [articleId, setArticleId] = useState<number | null>(null);
    const [selectedTxn, setSelectedTxn] = useState(1);
    const [taskView, setTaskView] = useState<TaskViewTab>('day');
    const [budgetTab, setBudgetTab] = useState<BudgetTab>('overview');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [txnCards, setTxnCards] = useState<Record<number, number>>({ 1: 0, 2: 2, 3: 1, 4: 0, 5: 2, 6: 0 });
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [notes, setNotes] = useState(INITIAL_NOTES);
    const [watchlist, setWatchlist] = useState(INITIAL_WATCHLIST);
    const [chat, setChat] = useState<ChatMsg[]>(INITIAL_CHAT);

    const chatRef = useRef<HTMLInputElement>(null);
    const chatBoxRef = useRef<HTMLDivElement>(null);
    const kwRef = useRef<HTMLInputElement>(null);
    const replyIdx = useRef(0);
    const chatLen = useRef(chat.length);

    useEffect(() => {
        if (chatLen.current !== chat.length) {
            chatLen.current = chat.length;
            const box = chatBoxRef.current;
            if (box) box.scrollTop = box.scrollHeight;
        }
    }, [chat.length]);

    const handleItem = useCallback((id: number, verdict: string) => {
        setInbox((s) => s.map((x) => (x.id === id ? { ...x, handled: verdict } : x)));
    }, []);

    const chatSend = useCallback(() => {
        const el = chatRef.current;
        if (!el) return;
        const v = el.value.trim();
        if (!v) return;
        el.value = '';
        setChat((s) => [...s, { role: 'user', text: v }]);
        const idx = replyIdx.current;
        replyIdx.current = idx + 1;
        setTimeout(() => {
            setChat((s) => [...s, { role: 'agent', text: REPLIES[idx % REPLIES.length] }]);
        }, 850);
    }, []);

    const chatKey = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') chatSend();
        },
        [chatSend],
    );

    const kwAdd = useCallback(() => {
        const el = kwRef.current;
        if (!el) return;
        const v = el.value.trim().toLowerCase();
        if (!v) return;
        el.value = '';
        setWatchlist((s) => (s.includes(v) ? s : [...s, v]));
    }, []);

    const kwKey = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') kwAdd();
        },
        [kwAdd],
    );

    const kwRemove = useCallback((w: string) => {
        setWatchlist((s) => s.filter((x) => x !== w));
    }, []);

    const reviseNote = useCallback((id: number) => {
        setNotes((s) => s.map((n) => (n.id === id ? { ...n, status: 'queued' as Note['status'] } : n)));
        setTimeout(() => {
            setNotes((s) => s.map((n) => (n.id === id ? { ...n, status: 'done' as Note['status'] } : n)));
        }, 1800);
    }, []);

    const toggleTask = useCallback((id: number) => {
        setTasks((s) => s.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    }, []);

    const setCardForTxn = useCallback((txnId: number, cardIdx: number) => {
        setTxnCards((s) => ({ ...s, [txnId]: cardIdx }));
    }, []);

    const pending = inbox.filter((x) => !x.handled);
    const sj = JOBS.find((j) => j.id === selectedJob) ?? JOBS[0];
    const selTxn = TXNS.find((t) => t.id === selectedTxn) ?? TXNS[0];
    const art = NEWS.find((a) => a.id === articleId) ?? null;
    const activeCardIdx = txnCards[selectedTxn] ?? 0;

    return {
        userName,
        agentOnline,
        view,
        setView,
        inboxFilter,
        setInboxFilter,
        inbox,
        pending,
        handleItem,
        selectedJob,
        setSelectedJob,
        selJob: sj,
        newsTab,
        setNewsTab,
        articleId,
        setArticleId,
        art,
        selectedTxn,
        setSelectedTxn,
        selTxn,
        taskView,
        setTaskView,
        budgetTab,
        setBudgetTab,
        sidebarOpen,
        setSidebarOpen,
        activeCardIdx,
        setCardForTxn,
        cards: CARDS,
        tasks,
        toggleTask,
        notes,
        reviseNote,
        watchlist,
        kwRemove,
        kwAdd,
        kwKey,
        kwRef,
        chat,
        chatRef,
        chatBoxRef,
        chatSend,
        chatKey,
    };
}

export type Dashboard = ReturnType<typeof useDashboard>;
