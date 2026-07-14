-- Learning progress sync + anonymous analytics
-- Apply: wrangler d1 execute bwtl-community --file=migrations/003_learning_progress.sql

CREATE TABLE IF NOT EXISTS user_progress (
  user_id TEXT PRIMARY KEY,
  data TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS analytics_events (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  session_id TEXT NOT NULL,
  event_name TEXT NOT NULL,
  payload TEXT,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_analytics_event_time ON analytics_events(event_name, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_session ON analytics_events(session_id, created_at DESC);