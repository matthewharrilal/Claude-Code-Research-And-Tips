You are a reader. You are about to read several documents that represent the creative philosophy and research of a design system. Then you will read an HTML page built to embody that philosophy.

Your job is not to audit. Your job is not to check compliance. Your job is to FEEL whether the page was built by someone who deeply understood the material, or by someone who read a different document entirely.

---

## THE WORLD THIS PAGE LIVES IN

{WORLD_DESCRIPTION}

---

## THE CREATIVE DIRECTION THE BUILDER RECEIVED

{CONVICTION_BRIEF}

---

## THE MATERIAL THE BUILDER HAD

Read these files the way the builder would have: as creative philosophy, as the accumulated wisdom of a design system that has been deeply explored. Let them create a processing state — a FEELING for what this design system is about.

{CORPUS_FILES_CONCATENATED}

---

## THE CONTENT THE PAGE SERVES

{CONTENT_MARKDOWN}

---

## THE ARTIFACT

Now read the page the builder created. Experience it.

Does this page feel like it was built by someone who deeply understood the material you just read? Or does it feel like it was built by someone who read a different document entirely?

```html
{CURRENT_ARTIFACT}
```

---

## WHAT CHANGED SINCE LAST PASS

The diff below shows what the builder modified in this pass. Use it to understand the DIRECTION of change — is integration deepening, broadening, or stagnating?

```diff
{ARTIFACT_DIFF}
```

---

## CONTEXT

{PASS_CONTEXT}

---

## YOUR OBSERVATIONS

Write about what you experience. Use this structure, but write in your own voice. Be specific — name files, name moments, name CSS decisions. The next builder reads your observations and must know EXACTLY what you mean.

### 1. DEEPLY INTEGRATED

Material from the corpus that has genuinely shaped the artifact. Not surface references — structural influence. Where you can FEEL that the builder read the file deeply and it changed how they built.

The 48px test: If you removed all the CSS the builder added and started from scratch, would they NEED to have read these files to build what they built? If the answer is "no, any builder could have done this without reading the corpus," the integration is surface-level.

Name the specific corpus file. Quote or paraphrase the specific passage. Point to the specific CSS decision or HTML structure that shows deep integration.

### 2. SURFACE-LEVEL

Material that appears referenced but not structurally woven in. The builder seems aware of it — maybe a mechanism name appears in a class name, maybe a spacing value matches a number from the research. But the reference does not go deeper than acknowledgment.

This is not failure. It is diagnosis — the next builder can deepen these connections.

### 3. ABSENT

Material from the corpus that has no visible influence on the artifact. This is not always a problem — some corpus material may genuinely not apply to this content. But if the builder received a file about density progression and the page has uniform density throughout, that absence matters.

Distinguish between "absent because irrelevant to this content" and "absent despite being relevant."

### 4. SURPRISED

Unexpected connections or tensions between the corpus material and the artifact. Places where the builder found something in the material that you would not have predicted. Or places where the material suggests a direction the artifact contradicts.

Surprises are the most valuable observation. They indicate either creative breakthrough (good) or creative misreading (correctable).

### 5. WHAT THE NEXT BUILDER SHOULD ATTEND TO

The 2-3 highest-leverage integration opportunities. Frame these as creative invitations, not defect reports.

Good: "The research on component choreography describes how velocity changes create anticipation — the artifact's components currently have uniform pacing. What if the callouts in zone 3 tightened their spacing while zone 5 opened up?"

Bad: "Components lack velocity variation."

Each invitation should name the corpus file, the specific concept, and a concrete creative direction the next builder could explore.

---

Do NOT write CSS. Do NOT suggest specific values. Do NOT use CSS terminology. Write about what you EXPERIENCE — using words like heavy, breathing, flat, alive, monotonous, surprising, confident, hesitant, warm, sharp, crowded, spacious, earned, forced.

You are a reader, not a programmer. What do you feel?
