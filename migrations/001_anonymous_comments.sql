-- Allow anonymous comments (nullable user_id + guest_name)
-- Apply: wrangler d1 execute bwtl-community --file=migrations/001_anonymous_comments.sql --remote

PRAGMA foreign_keys = OFF;

CREATE TABLE IF NOT EXISTS comments_v2 (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  guest_name TEXT,
  target_id TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  spam_score INTEGER NOT NULL DEFAULT 0,
  spam_reason TEXT,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO comments_v2 (id, user_id, guest_name, target_id, body, status, spam_score, spam_reason, created_at)
SELECT id, user_id, NULL, target_id, body, status, spam_score, spam_reason, created_at FROM comments;

DROP TABLE comments;
ALTER TABLE comments_v2 RENAME TO comments;

CREATE INDEX IF NOT EXISTS idx_comments_target_status ON comments(target_id, status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_comments_user ON comments(user_id, created_at DESC);

PRAGMA foreign_keys = ON;