# GitHub PR Guide: Next.js Migration Branch → main

This guide walks through creating a pull request for the Next.js App Router migration, validating it, merging it into `main`, and deleting the side branch.

## 1) Prep and Sync

Make sure your working tree is clean and `main` is up to date.

```bash
git status
git fetch origin
git checkout main
git pull origin main
```

Switch back to your migration branch and rebase (or merge) the latest `main`.

```bash
git checkout <migration-branch>
git rebase main
```

If you prefer a merge instead of rebase:
```bash
git checkout <migration-branch>
git merge main
```

## 2) Update Lockfile (if needed)

If `package-lock.json` is out of date after dependency changes:

```bash
npm install
git status
```

## 3) Verify Locally

Recommended checks before opening the PR:

```bash
npm run dev
npm run test
npm run build
```

If `npm run build` fails, fix issues before opening the PR.

## 4) Create the Pull Request

Push the migration branch:

```bash
git push -u origin <migration-branch>
```

Open a PR from `<migration-branch>` → `main`.

### Suggested PR Title

```
Migrate app to Next.js App Router
```

### Suggested PR Description

```
## Summary
- Migrated routing and layout to Next.js App Router
- Replaced react-router-dom with next/link + usePathname
- Added Tailwind/PostCSS config and global styles
- Updated docs and README for Next.js workflow
- Added Vitest + RTL and a Header active-route test

## Testing
- npm run dev
- npm run test
- npm run build

## Notes
- Vite entrypoints removed; Next.js is now the primary runtime
- package-lock.json updated after dependency changes
```

## 5) Review Checklist

- Routes: `/`, `/projects`, `/archive`
- Navigation: active link styling works
- Client behavior: Counter + Framer Motion animations work
- No runtime errors in console
- Tests pass
- `npm run build` succeeds

## 6) Merge the PR

Use **Squash and merge** unless the team prefers merge commits.

After merge, verify `main` is green (CI/tests).

## 7) Close and Delete the Branch

Delete the remote branch:

```bash
git push origin --delete <migration-branch>
```

Delete the local branch:

```bash
git branch -d <migration-branch>
```

If the local branch has unmerged commits and you are sure:
```bash
git branch -D <migration-branch>
```

## 8) Post-Merge Cleanup

Update local `main`:

```bash
git checkout main
git pull origin main
```

## 9) Optional: Release Note

If you maintain a changelog or release notes, document:
- Framework migration to Next.js App Router
- Any known follow-up tasks (e.g., perf tuning, analytics)
