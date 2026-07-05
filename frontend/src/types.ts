export type ViewKey =
    | 'dash'
    | 'jobs'
    | 'inbox'
    | 'news'
    | 'budget'
    | 'tasks'
    | 'log'
    | 'settings';

export type InboxType = 'email' | 'task' | 'file' | 'keyword';

export interface InboxItem {
    id: number;
    type: InboxType;
    title: string;
    agent: string;
    time: string;
    preview: string;
    handled: string | null;
}

export interface JobTimelineEntry {
    d: string;
    t: string;
    n: string;
}

export type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Closed';

export interface Job {
    id: number;
    company: string;
    role: string;
    status: JobStatus;
    updated: string;
    note: string;
    timeline: JobTimelineEntry[];
}

export interface SavedArticle {
    at: string;
    summary: string;
}

export interface NewsArticle {
    id: number;
    src: string;
    time: string;
    watch: boolean;
    imgTag: string;
    title: string;
    desc: string;
    saved: SavedArticle | null;
    body: string[];
}

export interface Txn {
    id: number;
    m: string;
    cat: string;
    amt: string;
    date: string;
    color: string;
    file: string;
}

export interface CardInfo {
    label: string;
    chip: string;
}

export interface Holding {
    ticker: string;
    name: string;
    shares: string;
    price: string;
    value: string;
    day: string;
    up: boolean;
}

export interface CategoryBreakdown {
    name: string;
    amt: string;
    pct: string;
    color: string;
}

export interface LogEntry {
    t: string;
    a: string;
    agent: string;
    d: string;
    dot: string;
}

export interface Task {
    id: number;
    label: string;
    due: string;
    done: boolean;
}

export type NoteStatus = 'idle' | 'queued' | 'done';

export interface Note {
    id: number;
    title: string;
    body: string;
    time: string;
    status: NoteStatus;
}

export type ChatRole = 'agent' | 'user';

export interface ChatMsg {
    role: ChatRole;
    text: string;
}

export type BudgetTab = 'overview' | 'flow' | 'receipts' | 'portfolio';
export type NewsTab = 'all' | 'saved';
export type TaskViewTab = 'day' | 'month';
export type InboxFilter = 'all' | InboxType;
