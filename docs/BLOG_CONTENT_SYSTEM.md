# Growth Escalators Blog Content System

This is the default structure for every new Growth Escalators article. The goal is not to make every post sound identical; the goal is to make every post **useful, scannable, evidence-led, internally connected and conversion-aware**.

Supported content types: `playbook`, `guide`, `framework`, `comparison`, `case-study`, `opinion`, `list`, `research`.

## 1. Frontmatter

```yaml
---
title: "Specific outcome-led headline"
description: "One clear paragraph explaining the problem, who this is for, and what the reader will learn."
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD" # only when materially refreshed
author: "Growth Escalators Team"
reviewedBy: "Name" # only when a real reviewer approved it
category: "Performance"
contentType: "playbook"
tags: ["primary-topic", "secondary-topic", "buyer-context"]
primaryKeyword: "main search phrase"
keyTakeaways:
  - "The first conclusion the reader should remember."
  - "The second conclusion."
  - "The third decision rule."
featured: false
ctaHref: "/relevant-money-page"
ctaLabel: "Get your account audited"
gradient: "violet" # orange | violet | teal | mixed
heroImage: "/blog/example.webp" # optional real local image
---
```

Primary categories: `Performance`, `Commerce & CRO`, `Creative`, `AI & Automation`, `SEO & Organic`, `Growth Strategy`.

## 2. Universal article spine

1. **Opening (80–160 words):** what is happening, who it matters to, why it matters commercially, and what the reader will learn.
2. **Key takeaways (3–5 bullets):** conclusions first; avoid generic filler.
3. **Diagnose the real problem:** explain why the obvious interpretation is incomplete.
4. **Model / framework / answer:** use descriptive H2s, tables, examples, calculations and decision rules.
5. **Evidence or applied example:** approved GE proof, anonymised patterns, calculations, real screenshots/diagrams or authoritative sources.
6. **Action section:** what to audit, change, measure, postpone or escalate.
7. **Conversion handoff:** one relevant GE next step, not every service.

## 3. Structures by content type

### Playbook
Problem → why the usual fix fails → preconditions → steps → measurement → failure modes → what to do this week.

### Guide
Direct answer → what it means → when it matters → components → examples → mistakes → decision checklist → next step.

### Framework
Recurring problem → framework in one paragraph → components → worked example → when it does not apply → implementation checklist.

### Comparison
Short verdict → decision table → options with strengths/limits/economics → fit by company stage → hidden costs → recommendation by scenario.

### Case study
Context → starting constraint → diagnosis → what changed → timeline → approved results → why it worked → next phase. Separate correlation from causation.

### Point of view
Thesis → common belief → why incomplete → evidence → counterargument → limits → practical implication.

### List
Audience → selection criteria → items grouped by use case → best pick by scenario → limitations/cost → shortlist.

### Research
Question → method/source set → executive findings → data/evidence → interpretation → limitations → implications → recommended action.

## 4. Writing rules

- One idea per paragraph; plain English before marketing vocabulary.
- Explain acronyms the first time.
- Use commercial variables such as CAC, contribution margin, qualified leads, show-up rate, conversion rate, AOV, retention and payback period.
- Do not call something proven unless proof is supplied.
- Avoid inflated or generic AI language.
- Verify claims that may have changed recently before publishing.
- Never manufacture client figures, testimonials, rankings or benchmarks.

## 5. SEO + AI-search rules

Every article should answer the core query in the first 120 words, use one H1, descriptive H2s, useful internal links, original examples/calculations where possible, unique metadata, and honest update/reviewer fields.

The site automatically handles canonical URLs, Article JSON-LD, Breadcrumb JSON-LD, related-post matching, reading time, H2 anchors, sitemap inclusion, lead capture and the final growth-audit CTA.

## 6. Universal Markdown skeleton

```markdown
---
title: ""
description: ""
date: "YYYY-MM-DD"
author: "Growth Escalators Team"
category: "Performance"
contentType: "playbook"
tags: []
keyTakeaways:
  - ""
  - ""
  - ""
featured: false
ctaHref: "/contact"
ctaLabel: "Get a free growth audit"
gradient: "violet"
---

Open with the problem, who it affects, why it matters, and the answer direction.

## Why the obvious fix is not enough

Diagnose the real constraint.

## The model / framework / answer

Explain the core system.

## What this looks like in practice

Use a real example, calculation, table, screenshot or clearly labelled hypothetical.

## What usually goes wrong

Show failure modes and trade-offs.

## What to do next

Give the reader an ordered action plan and decision criteria.
```

## 7. Publishing checklist

- [ ] Frontmatter follows the schema.
- [ ] Category and content type are correct.
- [ ] First 120 words answer the query.
- [ ] Time-sensitive claims are verified.
- [ ] No unapproved client claims are included.
- [ ] A useful example, calculation, table or framework is present.
- [ ] The article links to the most relevant GE commercial page.
- [ ] CTA matches the article intent.
- [ ] H2s are descriptive and scannable.
- [ ] Title and description are unique.
- [ ] Mobile tables/code remain readable.
- [ ] Related articles make sense after build.
- [ ] Build/lint checks pass.
