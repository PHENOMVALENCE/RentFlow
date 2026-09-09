# Supabase

RentFlow will use Supabase for PostgreSQL, authentication, and storage.

This directory is reserved for:

- SQL migrations in `migrations/`
- optional seed data in `seed.sql`

No live credentials belong here. Configure values through `.env.local` using `.env.example` as the template.

Migrations are not required for repository bootstrap. Add them when the first schema is implemented.
