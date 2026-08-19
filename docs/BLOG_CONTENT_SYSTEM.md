# Growth Escalators Blog Content System

This is the default structure for every new Growth Escalators article. The goal is not to make every post sound identical; the goal is to make every post **useful, scannable, evidence-led, internally connected and conversion-aware**.

The website supports these content types:

- `playbook` — a practical way to execute or fix something.
- `guide` — a complete explanation of a topic or decision.
- `framework` — a repeatable model, operating system or method.
- `comparison` — a decision between two or more viable options.
- `case-study` — a problem, intervention and measurable outcome.
- `opinion` — a defensible point of view based on experience/evidence.
- `list` — tools, examples, ideas, mistakes or patterns where the list itself is useful.
- `research` — data, benchmark or evidence-led analysis.

## 1. Frontmatter: required structure

Every new Markdown file in `content/blog/` should start with this structure:

```yaml
---
title: "Specific outcome-led headline"
description: "One clear paragraph explaining the problem, who this is for, and what the reader will learn."
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD" # only when the article is materially refreshed
author: "Growth Escalators Team"
reviewedBy: "Name" # optional; use only when a real reviewer approved it
category: "Performance" # use one of the editorial categories below
contentType: "playbook" # allowed values listed above
tags: ["primary-topic", "secondary-topic", "buyer-context"]
primaryKeyword: "main search phrase" # optional workflow metadata
keyTakeaways:
  - "The first conclusion the reader should remember."
  - "The second conclusion, preferably specific."
  - "The third conclusion or decision rule."
featured: false
ctaHref: "/relevant-money-page"
ctaLabel: "Get your account audited"
gradient: "violet" # orange | violet | teal | mixed
heroImage: "/blog/example.webp" # optional local /public image path
---
```

### Editorial categories

Use one primary category per article:

1. `Performance`
2. `Commerce & CRO`
3. `Creative`
4. `AI & Automation`
5. `SEO & Organic`
6. `Growth Strategy`

Use tags for narrower topics such as Meta Ads, Google Ads, Shopify, healthcare, D2C, Jaipur, lead generation, CRO, automation, retention, etc.

## 2. The universal article spine

Every article should follow this order unless there is a strong editorial reason not to.

### A. Opening: 80–160 words

The opening must answer four things quickly:

1. What is happening?
2. Who is this relevant to?
3. Why does it matter commercially?
4. What will the reader understand or be able to do after reading?

Do not begin with dictionary definitions, generic market size statistics or long scene-setting.

### B. Key takeaways: 3–5 bullets

Put the conclusions near the top. The website renders `keyTakeaways` automatically.

A good takeaway is a decision rule, number, trade-off or clear conclusion. Avoid bullets like “marketing is important.”

### C. Diagnose the real problem

The first H2 should usually explain **why the obvious interpretation is incomplete**.

Useful patterns:

- “Why increasing budget makes the problem worse”
- “The hidden constraint is conversion, not traffic”
- “Why this looks like a creative problem but is actually an offer problem”
- “Where most teams misread the data”

### D. Explain the model / answer

Use H2 sections for the main ideas. Each H2 should be understandable on its own and answer a real reader question.

Prefer:

- frameworks,
- decision trees,
- tables,
- examples,
- before/after comparisons,
- checklists inside the prose,
- numbers with context.

Avoid eight paragraphs of uninterrupted explanation.

### E. Show evidence or an applied example

Whenever possible include at least one of:

- a real GE client result that is approved for use,
- an anonymised account pattern,
- a calculation,
- a screenshot or diagram,
- a source from a primary/authoritative publication,
- a concrete hypothetical with realistic numbers.

Never manufacture client figures, testimonials or “industry benchmarks.”

### F. Tell the reader what to do next

The last substantive H2 should turn the article into action:

- what to audit,
- what to change first,
- what to measure,
- what not to change yet,
- when to escalate to a specialist.

### G. Conversion handoff

Every article should point to **one relevant next step**, not every service.

Examples:

- Meta/D2C article → `/d2c` or `/meta-ads-agency-for-ecommerce`
- CRO/website article → `/website-development-company-jaipur`
- Doctor acquisition article → `/doctors`
- AI workflow article → `/software-development-company-jaipur`
- Broad growth strategy article → `/contact`

The shared article template automatically adds the low-friction audit capture and end-of-article growth audit block.

## 3. Structure by content type

### Playbook

Use when the reader needs to execute.

1. Problem / trigger
2. Why the usual fix fails
3. Preconditions
4. Step 1
5. Step 2
6. Step 3…
7. Measurement / kill criteria
8. Common failure modes
9. What to do this week

Best headline pattern:

`How to [achieve outcome] without [common downside]`

### Guide

Use for durable, complete explanations.

1. Direct answer
2. What the concept means in practice
3. When it matters
4. Main components
5. Examples
6. Mistakes
7. Decision checklist
8. Next step

Best headline pattern:

`[Topic]: The practical guide for [specific audience]`

### Framework

Use when GE has a repeatable way of thinking.

1. The recurring problem
2. The framework in one paragraph
3. Component 1
4. Component 2
5. Component 3…
6. Worked example
7. When the framework does **not** apply
8. Implementation checklist

Name frameworks only when the name helps people remember or use the model. Do not create jargon for its own sake.

### Comparison

Use when the search/user intent is a decision.

1. Short verdict
2. Decision table
3. Option A: strengths / limits / economics
4. Option B: strengths / limits / economics
5. Option C if relevant
6. Which option fits which company stage
7. Hidden costs / switching costs
8. Recommendation by scenario

The article must be willing to say when GE is **not** the best option.

### Case study

Use only approved facts.

1. Client / context
2. Starting constraint
3. Diagnosis
4. What changed
5. Timeline
6. Results
7. Why it worked
8. What we would do differently / next phase

Separate correlation from causation. If multiple interventions happened at once, do not pretend one tactic caused the whole result.

### Point of view

Use when the insight is a defensible argument.

1. Thesis in the first 100 words
2. What most people believe
3. Why that view is incomplete
4. Evidence / observations
5. Counterargument
6. Where the thesis does not apply
7. Practical implication

A point of view should be capable of being disagreed with.

### List

Use only when each item earns its place.

1. Who the list is for
2. Selection criteria
3. Items grouped by use case — not one undifferentiated list
4. Best pick by scenario
5. Limitations / cost / implementation note
6. Final shortlist

For software/tool articles, re-check pricing and product details before publishing because they change.

### Research

1. Question
2. Method / source set
3. Executive findings
4. Data / evidence
5. Interpretation
6. Limitations
7. Implications
8. Recommended action

Always make the methodology visible enough that a reader can judge the conclusion.

## 4. Writing rules

- Aim for one idea per paragraph.
- Prefer short paragraphs; use longer paragraphs only when the thought genuinely needs them.
- Use plain English before marketing vocabulary.
- Explain acronyms the first time.
- Use Indian business context when relevant, but do not force Jaipur/India references into globally oriented articles.
- Do not call something “proven” unless the article supplies proof.
- Avoid inflated language: “revolutionary,” “game-changing,” “guaranteed,” “secret,” etc.
- Do not write generic AI filler such as “in today’s fast-paced digital landscape.”
- Use the reader’s actual commercial variables: CAC, contribution margin, qualified leads, show-up rate, conversion rate, AOV, retention, payback period.
- When a claim may have changed recently, verify it before publishing and cite a current authoritative source.
- Do not publish fabricated case-study numbers to make a point.

## 5. SEO + AI-search rules

Every article should:

- answer the core query directly in the first 120 words;
- have one clear H1 (the title);
- use descriptive H2s that can stand alone as questions/answers;
- include internal links to related insights and the one most relevant commercial page;
- use tables when comparing structured information;
- include original examples or calculations where possible;
- avoid keyword-stuffed headings;
- have a unique title and description;
- use the `updated` field only for a real material refresh;
- use `reviewedBy` only when a real person reviewed the article.

The site automatically handles:

- canonical URLs,
- Article JSON-LD,
- Breadcrumb JSON-LD,
- related-post matching,
- reading time,
- H2 anchor navigation,
- sitemap inclusion,
- lead capture,
- the final growth-audit CTA.

## 6. Ready-to-copy universal Markdown skeleton

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

Before merging a new post:

- [ ] Frontmatter follows the schema.
- [ ] Category and content type are correct.
- [ ] The first 120 words answer the query.
- [ ] Every important factual/time-sensitive claim is verified.
- [ ] No unapproved client claims are included.
- [ ] At least one genuinely useful example, calculation, table or framework is present.
- [ ] The article links to the most relevant GE commercial page.
- [ ] The CTA matches the article’s intent.
- [ ] H2s are descriptive and scannable.
- [ ] Title and description are unique.
- [ ] Mobile tables/code blocks remain readable.
- [ ] Related articles make sense after build.
- [ ] Build/lint checks pass.
