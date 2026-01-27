# TinaCloud Branch Indexing Troubleshooting Guide

## Current Issue
Your 'main' branch shows as "1 branch unindexed" in TinaCloud and clicking on it doesn't trigger indexing.

## Step-by-Step Troubleshooting

### 1. Verify Repository Connection

**Check in TinaCloud:**
- Go to: https://app.tina.io/projects/cdd00442-9e62-469b-9608-6695495f5a12/configuration
- Verify your GitHub repository is connected: `davidhigginson/lwa`
- Check that the repository URL matches exactly

**If repository is not connected or wrong:**
1. Disconnect the repository
2. Reconnect it
3. Make sure you authorize TinaCloud to access your repositories
4. Wait 5-10 minutes for sync

### 2. Verify Branch Exists in GitHub

**Check your repository:**
```bash
# Your branch should exist and be pushed
git branch -a  # Should show 'main' and 'remotes/origin/main'
git log --oneline -5  # Should show recent commits
```

**If branch doesn't exist remotely:**
```bash
git push origin main
```

### 3. Check GitHub Permissions

**In GitHub:**
1. Go to: https://github.com/settings/applications
2. Find "Tina Cloud" in authorized OAuth apps
3. Make sure it has access to your `lwa` repository
4. If not, revoke and re-authorize

**In TinaCloud:**
1. Go to project settings
2. Check repository permissions
3. Re-authorize if needed

### 4. Try Manual Indexing Triggers

**Option A: Push a new commit**
```bash
# Make a small change
echo "# Index trigger" >> README.md
git add README.md
git commit -m "Trigger TinaCloud indexing"
git push origin main
```
Wait 10-15 minutes and check TinaCloud again.

**Option B: Create a new branch**
```bash
git checkout -b production
git push origin production
```
Then configure this branch in TinaCloud instead of 'main'.

**Option C: Disconnect and reconnect repository**
1. In TinaCloud configuration, disconnect the repository
2. Wait 2 minutes
3. Reconnect the repository
4. Select 'main' branch
5. Wait 10-15 minutes

### 5. Check Repository Size and Structure

TinaCloud may have issues with:
- Very large repositories (>1GB)
- Many binary files
- Deep directory structures

**Your repository looks fine**, but if indexing still fails:
- Check repository size: `du -sh .git`
- Consider using `.tinaignore` to exclude unnecessary files

### 6. Contact TinaCloud Support

**If nothing works:**

1. **TinaCMS Discord:**
   - Join: https://discord.com/invite/zumN63Ybpf
   - Ask in #tinacloud channel
   - Mention your project ID: `cdd00442-9e62-469b-9608-6695495f5a12`

2. **GitHub Discussions:**
   - https://github.com/tinacms/tinacms/discussions
   - Search for similar issues
   - Create a new discussion if needed

3. **Email Support:**
   - Check TinaCloud dashboard for support email
   - Include your project ID and repository URL

### 7. Alternative: Use a Different Branch

If 'main' won't index, try:

1. **Create a 'production' branch:**
   ```bash
   git checkout -b production
   git push origin production
   ```

2. **In TinaCloud:**
   - Configure the 'production' branch instead
   - Update `NEXT_PUBLIC_TINA_BRANCH=production` in Vercel

3. **This might trigger indexing** since it's a fresh branch

### 8. Check TinaCloud Status

**Known Issues:**
- TinaCloud had indexing issues in the past
- They've improved with native Git CLI and sparse-checkout
- Some repositories still experience delays

**Check status:**
- TinaCMS Status: https://status.tina.io (if available)
- TinaCMS Blog for updates: https://tina.io/blog

## Quick Checklist

- [ ] Repository is connected in TinaCloud
- [ ] Branch 'main' exists in GitHub (both local and remote)
- [ ] GitHub OAuth permissions are correct
- [ ] Tried pushing a new commit
- [ ] Tried disconnecting/reconnecting repository
- [ ] Waited at least 15 minutes after changes
- [ ] Checked TinaCMS Discord/forums for known issues
- [ ] Considered using a different branch name

## Workaround: Skip Admin Interface for Now

**Your site works fine without the admin interface!**

Since your content is file-based (JSON files), you can:
1. Edit content locally using `npm run dev`
2. Commit changes to git
3. Deploy to Vercel
4. The site will work perfectly

The admin interface is just a convenience - your site doesn't need it to function.

## Next Steps

1. Try the troubleshooting steps above in order
2. If indexing still doesn't work after 24 hours, contact TinaCloud support
3. Consider using local editing for now (it works great!)
4. Once indexing works, the admin interface will automatically be available
