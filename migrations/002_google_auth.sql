-- Google OAuth support
-- Apply: wrangler d1 execute bwtl-community --file=migrations/002_google_auth.sql --remote

ALTER TABLE users ADD COLUMN google_id TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);