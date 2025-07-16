# reCAPTCHA Setup Guide

## Step 1: Get reCAPTCHA Site Key

1. Go to https://www.google.com/recaptcha/admin
2. Sign in with your Google account
3. Click "Create" to add a new site
4. Fill in the form:
   - **Label:** Summon Experts
   - **reCAPTCHA type:** reCAPTCHA v2
   - **Subtype:** "I'm not a robot" Checkbox
   - **Domains:** Add your domains:
     - `summonexperts.com`
     - `www.summonexperts.com`
     - `summonexperts.netlify.app`
5. Accept the terms and click "Submit"

## Step 2: Get Your Keys

After creating, you'll get:
- **Site Key** (public) - Add this to your form
- **Secret Key** (private) - Add this to Netlify environment variables

## Step 3: Update the Form

Replace the placeholder in `src/App.jsx`:
```jsx
<div className="g-recaptcha" data-sitekey="6Lf0olUrAAAAADMWq6cNmTTThsobiZkPVQOQO4rTgO"></div>
```

**Current Site Key:** `6Lf0olUrAAAAADMWq6cNmTTThsobiZkPVQOQO4rTgO`
**Current Secret Key:** `6Lf0olUrAAAAAPulmBbOZAhXe2vuJptlDnX_7HCd`

## Step 4: Configure Netlify

1. Go to your Netlify dashboard
2. Navigate to Site settings → Environment variables
3. Add a new variable:
   - **Key:** `RECAPTCHA_SECRET_KEY`
   - **Value:** Your secret key from Step 2

## Step 5: Test

The form will now require users to complete the reCAPTCHA before submitting! 