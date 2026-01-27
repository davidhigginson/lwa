# Sanity Studio Troubleshooting

## "Tool not found: studio" Error

If you see this error along with WebSocket connection failures, try these steps:

### 1. Verify Environment Variables in Vercel

**Critical:** Make sure these are set in Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify these exist:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `ppuccmhi`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
3. **Important:** Set them for Production, Preview, AND Development environments
4. After adding/updating, **redeploy** your site

### 2. Verify Sanity Project Setup

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project (`ppuccmhi`)
3. Check that:
   - Project exists and is active
   - Dataset "production" exists
   - You have access to the project

### 3. Check Dataset Name

The default dataset is "production". If you created a different dataset name:
- Update `NEXT_PUBLIC_SANITY_DATASET` in Vercel
- Or change it in `sanity.config.ts`

### 4. Verify Project ID

Double-check your project ID:
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to Settings → API
4. Verify the Project ID matches `ppuccmhi`

### 5. Create Initial Content

The Studio might show errors if no content exists yet:

1. Go to `/studio` (after fixing environment variables)
2. Log in with your Sanity account
3. Create your first documents:
   - Site Configuration (one document)
   - Project Categories (one for each category)
   - Projects (one for each project)
   - About Page (one document)

### 6. WebSocket Connection Issues

If you see WebSocket errors:

1. **Clear browser cache** and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
2. **Check browser console** for specific error messages
3. **Verify network connectivity** - ensure you can access sanity.io
4. **Try incognito/private mode** to rule out browser extensions

### 7. Local Development

If it works locally but not in production:

1. Check that `.env.local` has the correct values
2. Restart your dev server: `npm run dev`
3. Clear `.next` folder: `rm -rf .next` then rebuild

### 8. Still Not Working?

1. **Check Vercel build logs** - look for any errors during build
2. **Verify environment variables are actually set** - check Vercel dashboard
3. **Try accessing Studio directly**: `https://yourdomain.com/studio`
4. **Check Sanity status**: [status.sanity.io](https://status.sanity.io)

## Common Issues

### Environment Variables Not Loading

If environment variables aren't being read:
- Make sure they start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding variables
- Check Vercel build logs to confirm variables are available

### Authentication Issues

If you can't log in:
- Make sure you're using the correct Sanity account
- Verify you have access to the project in Sanity dashboard
- Try logging out and back in

### Dataset Not Found

If you see dataset errors:
- Verify the dataset name matches exactly (case-sensitive)
- Default dataset is usually "production"
- Check in Sanity dashboard → API → Datasets

## Getting Help

- Sanity Documentation: [sanity.io/docs](https://www.sanity.io/docs)
- Sanity Community: [slack.sanity.io](https://slack.sanity.io)
- GitHub Issues: [github.com/sanity-io/sanity](https://github.com/sanity-io/sanity)
