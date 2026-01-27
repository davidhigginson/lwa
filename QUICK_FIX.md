# Quick Fix: TinaCloud Branch Won't Index

## Immediate Actions to Try (in order)

### 1. Run Diagnostic Script
```bash
npm run check:tinacloud
```
This will show you what's configured and what might be wrong.

### 2. Push an Empty Commit to Trigger Indexing
```bash
git commit --allow-empty -m "Trigger TinaCloud indexing"
git push origin main
```
Wait 10-15 minutes, then check TinaCloud again.

### 3. Disconnect and Reconnect Repository in TinaCloud
1. Go to: https://app.tina.io/projects/cdd00442-9e62-469b-9608-6695495f5a12/configuration
2. Find the repository connection section
3. Click "Disconnect" (if available)
4. Wait 2 minutes
5. Click "Connect Repository"
6. Select `davidhigginson/lwa`
7. Select branch `main`
8. Wait 10-15 minutes

### 4. Check GitHub OAuth Permissions
1. Go to: https://github.com/settings/applications
2. Find "Tina Cloud" in authorized OAuth apps
3. Click on it
4. Make sure it has access to your `lwa` repository
5. If not, revoke access and re-authorize through TinaCloud

### 5. Try Using a Different Branch Name
Sometimes 'main' has issues. Try creating a 'production' branch:

```bash
git checkout -b production
git push origin production
```

Then in TinaCloud, configure the 'production' branch instead of 'main'.

### 6. Contact TinaCloud Support

**TinaCMS Discord (fastest):**
- Join: https://discord.com/invite/zumN63Ybpf
- Go to #tinacloud channel
- Mention:
  - Project ID: `cdd00442-9e62-469b-9608-6695495f5a12`
  - Repository: `davidhigginson/lwa`
  - Branch: `main`
  - Issue: Branch shows as "unindexed" and clicking doesn't trigger indexing

**GitHub Discussions:**
- https://github.com/tinacms/tinacms/discussions
- Search for "branch unindexed" or "indexing issues"
- Create a new discussion if needed

## Important Notes

✅ **Your site works fine without the admin interface!**
- Your content is file-based (JSON files)
- You can edit locally with `npm run dev`
- The site deploys and works perfectly

⚠️ **The admin interface is optional**
- It's just a convenience for editing content
- Your site doesn't need it to function
- Once indexing works, it will automatically be available

## What's Already Working

- ✅ Build script handles unindexed branches gracefully
- ✅ Site deploys successfully to Vercel
- ✅ Admin route shows helpful message instead of 404
- ✅ Local development works perfectly (`npm run dev`)

## Full Troubleshooting Guide

See `TINACLOUD_TROUBLESHOOTING.md` for comprehensive troubleshooting steps.
