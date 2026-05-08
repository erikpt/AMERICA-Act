# Microsimulation Results (Co-pays by Income Tier)
Assumptions: ~130M tax units; AGI distribution {60%,30%,8%,2%} with average AGIs {$45k,$120k,$280k,$1.2M}. Utilization and co-pay schedules per Section 4(d); 5% of AGI annual OOP cap applied per unit; partial preventive exemption for primary care and labs.

| AGI Tier    | Tax Units   | Avg AGI    | Gross Co-pays / Unit   | 5% AGI Cap / Unit   | Net Co-pays / Unit   |   Total Co-pays (B) |
|:------------|:------------|:-----------|:-----------------------|:--------------------|:---------------------|--------------------:|
| <= $75k     | 78,000,000  | $45,000    | $228                   | $2,250              | $228                 |                17.8 |
| $75k–$200k  | 39,000,000  | $120,000   | $536                   | $6,000              | $536                 |                20.9 |
| $200k–$500k | 10,400,000  | $280,000   | $1,136                 | $14,000             | $1,136               |                11.8 |
| >$500k      | 2,600,000   | $1,200,000 | $1,822                 | $60,000             | $1,822               |                 4.7 |

**Total net co-pays (microsim): ~$55.2B**

---
# Re-modeled Financials (revised — phased cost controls)
- Indexation updated to **core CPI** with a **phased growth cap** (per Section 5(d)(1) revised): CPI+2.5pp Years 1–2; CPI+1.5pp Years 3–5; CPI+1.0pp Years 6–10; CPI+0.5pp Year 11+ long-run target.
- Added inflows: **Medicare Parts B/D general revenues** (≈$750B), **Medicaid Fed+State MOE** (≈$950B), **Employer MOE** (≈7.5% of payroll ≈ $998B).
- **Reform savings phased in over 5 years** per Section 7(a)(6) milestones. Year 1 achieves ~$130B of eventual $430B/yr in savings. Full savings reached by Year 5.
- Year 1 outlays reflect partial savings realization: **$5,389B** (vs. $5,089B in prior model).

## Inflows vs Outflows (billions) — central employee rate 7%
- **Inflows (mid, MOE at 5%): ~$5,451B**
- **Outlays (Year 1 reformed, phased savings): ~$5,389B**
- **Operating Balance (Year 1): ~$62B**
- **HI Trust Fund opening reserves (§7(f)): ~$225B**
- **Total Year 1 HTF reserves: ~$287B**

> **vs. prior model:** Balance was +$693B assuming Day 1 savings and full MOE from Year 1. The corrected +$62B operating balance reflects (a) partial savings realization and (b) Employer MOE phased in at 5% per the bill's own transition timeline. The HI Trust Fund transfer provides the reserve buffer that makes Year 1 operations viable. This matches how Medicare (1966) and Part D (2006) both launched with thin initial operating margins supported by opening reserves or appropriations.

![Inflows vs Outlays Chart](./images/AMERICA Act_reform_inflows_outflows.png)

### Range with employee rate at 5% and 9.5% (Year 1, MOE at 5%)
- **Inflows (employee 5%): ~$5,185B** → Year 1 Balance **~-$204B** *(HI Trust Fund reserves provide cover)*
- **Inflows (employee 9.5%): ~$5,784B** → Year 1 Balance **~$395B**

### Multi-year trajectory
Operating surpluses grow from $62B (Year 1) to $886B (Year 10) as Employer MOE phases to 7.5%, phased savings fully materialize, and the growth cap steps down. 10-year cumulative HTF surplus: **~$5.1T**. See `Staff Budget Scoring` for full year-by-year table.
