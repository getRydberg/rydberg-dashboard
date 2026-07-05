import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { ArticleOverlay } from './components/ArticleOverlay';
import { DashboardView } from './components/views/DashboardView';
import { JobTrackerView } from './components/views/JobTrackerView';
import { InboxView } from './components/views/InboxView';
import { NewsView } from './components/views/NewsView';
import { BudgetView } from './components/views/BudgetView';
import { TasksView } from './components/views/TasksView';
import { LogView } from './components/views/LogView';
import { SettingsView } from './components/views/SettingsView';
import { useDashboard } from './useDashboard';

function App() {
  const dash = useDashboard();
  const sidebarWidth = dash.sidebarOpen ? 236 : 64;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `${sidebarWidth}px 1fr`,
        transition: 'grid-template-columns 0.2s ease',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: '#0A0C12',
        color: '#E9ECF4',
        fontFamily: "'Geist',sans-serif",
        fontSize: 14,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(900px 500px at 75% -10%, rgba(125,162,255,0.09), transparent 65%), radial-gradient(700px 420px at -5% 100%, rgba(232,164,76,0.05), transparent 60%)',
        }}
      />

      <div style={{ overflow: 'hidden' }}>
        <Sidebar dash={dash} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 2 }}>
        <TopBar dash={dash} />

        <div style={{ flex: 1, overflowY: 'auto', padding: '26px 28px 40px' }}>
          {dash.view === 'dash' && <DashboardView dash={dash} />}
          {dash.view === 'jobs' && <JobTrackerView dash={dash} />}
          {dash.view === 'inbox' && <InboxView dash={dash} />}
          {dash.view === 'news' && <NewsView dash={dash} />}
          {dash.view === 'budget' && <BudgetView dash={dash} />}
          {dash.view === 'tasks' && <TasksView dash={dash} />}
          {dash.view === 'log' && <LogView />}
          {dash.view === 'settings' && <SettingsView dash={dash} />}
        </div>
      </div>

      <ArticleOverlay dash={dash} />
    </div>
  );
}

export default App;
