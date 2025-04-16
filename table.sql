CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  organization TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Create a policy to allow inserts
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts to waitlist" ON waitlist FOR INSERT WITH CHECK (true);