# Efada Tour & Travel - Official Umrah Agency Website

Official web application for **Efada (Ifada) Tour and Travel**, a premier Umrah and pilgrimage agency based in Addis Ababa, Ethiopia.

## Features
- **Bilingual Interface**: Full Amharic (አማርኛ) and English localization.
- **Featured 10-Day Umrah Package**: 130,000 ETB package with 1-Year Saudi Umrah Visa, 7 days in Makkah, 3 days in Madinah, led by Sheikh Seid Al Habeb (ሼይክ ሰኢድ አል ሀበበ).
- **Interactive Umrah Cost Calculator**: Real-time pricing estimation based on group size, occupancy, and hotel tier with direct Telegram dispatch.
- **Integrated Direct Channels**:
  - TikTok: [https://www.tiktok.com/@ifadatravelorg](https://www.tiktok.com/@ifadatravelorg?_r=1&_t=ZN-9AnXZpJrhKg)
  - Telegram Channel: [https://t.me/ifadatravelorg](https://t.me/ifadatravelorg)
  - Telegram Direct Agent: [@FuadMuna](https://t.me/FuadMuna)
  - Phones: `0949337778` / `0945771112`
  - Office: Bethel Mina Shopping Center, 2nd Floor, Addis Ababa

## Deployment on Vercel

### Step 1: Push Code to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g. `efada-umrah-travel`).
2. Run the following commands in this directory:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/efada-umrah-travel.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** > **Project**.
3. Select your GitHub repository (`efada-umrah-travel`) and click **Import**.
4. Vercel automatically detects the Vite configuration:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on your custom `.vercel.app` domain in seconds!

## Local Development
```bash
npm install
npm run dev
```
Build for production:
```bash
npm run build
```
