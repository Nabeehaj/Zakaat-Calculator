# Zakat Calculator

Zakat is an annual charitable obligation in Islam, requiring Muslims whose wealth exceeds a minimum threshold (nisab) to give 2.5% of it to those in need.

Calculate your Zakat in seconds. 100% client-side Python (PyScript) — your financial data never touches a server. Supports live gold/silver pricing and both nisab standards. A browser-based tool that calculates zakat owed based on cash, gold/silver, investments, and business assets, checked against the nisab threshold (gold or silver standard).

## How it works

1. Enter your assets (cash, gold/silver value, investments, business assets) and any debts owed.
2. Choose a nisab standard — gold (85g) or silver (595g) — and enter today's price per gram for that metal.
3. Click **Calculate zakat** to see:
   - Whether your net wealth is above the nisab threshold
   - Your total zakat owed (2.5% of net zakatable wealth, if above nisab)
   - A full breakdown of assets, debts, and the threshold used

## Built with

HTML, CSS, and JavaScript — no frameworks or dependencies.

## Run it locally

Clone the repo and open `index.html` in any browser. No build step needed.
LINK: https://nabeehaj.github.io/Zakaat-Calculator/

## Notes

Nisab values are based on current gold/silver market prices, which change daily — the calculator asks you to enter the current price per gram rather than hardcoding a value that would go stale. This tool is meant as a starting point for estimating zakat, not a religious ruling — check with a knowledgeable source for guidance specific to your situation.
