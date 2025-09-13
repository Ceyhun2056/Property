# adawnik

AzProperty Intel 🏠📊

AI-powered Real Estate Intelligence Platform for Azerbaijan

AzProperty Intel is a SaaS platform that helps investors, agencies, and individuals discover undervalued properties, predict ROI, and make smarter real estate decisions in Azerbaijan.
It integrates real estate listings, government open data, and local market factors into a single intelligence system.


---

🚀 Features

Real-time Data Collection

Scrapes from bina.az, yeniemlak.az, mertebe.az.

Integrates government data from opendata.az and stat.gov.az.

Updates property data every 6 hours.


Property Valuation Engine

Uses the 12-zone Baku appraisal system.

Factors in size, condition, infrastructure, and market trends.

ROI calculator with yield, break-even, and value gain analysis.


Personalized Financial Advisor

Matches properties to users’ budget & risk tolerance.

Mortgage-aware recommendations (4% rates, 20-year terms).

Conservative, Moderate, Aggressive investment strategies.


Interactive Frontend (Next.js)

Map-based property search.

Investment analytics dashboard.

ROI simulator with scenario testing.




---

🏗 Architecture

1. Backend

Supabase: real-time property database + authentication.

Edge Functions: scheduled scraping + valuation engine.



2. Frontend

Next.js on Vercel: SEO-optimized, fast rendering.

Mapbox: interactive property maps.



3. Data Sources

bina.az, yeniemlak.az, mertebe.az → property listings.

opendata.az, stat.gov.az → infrastructure & demographics.

Azerbaijan Appraisers Society → official valuation zones.





---

🔄 Data Flow

Input → Processing → Output

Input: property listings, government open data, user filters/financial profile.

Processing: normalization, zone-based valuation, infrastructure scoring, ROI calculation.

Output: interactive dashboards, valuation reports, personalized investment strategies.
