# Replit + Claude Code - Mobile Vibe Coding Guide

## Source
- **Author:** @itsPaulAi (Paul Couvert)
- **Date:** 2026-01-08/09
- **URL:** Post ID 2009392663213035788
- **Article:** https://x.com/i/article/2009372765992689665
- **Video:** 52-minute tutorial
- **Engagement:** 744+ likes, 1.7K+ bookmarks, 95K+ views

---

## Core Insight

> "Replit + Claude Code = best current setup for mobile vibe coding"

Full-stack development from your phone with instant preview, sandbox, deployment, and no local setup.

---

## What is Vibe Coding?

Loose, iterative, voice/prompt-driven creation where:
- AI does 90%+ of the heavy lifting
- You steer direction + review previews
- Minimal friction, maximum feedback
- Works from bed, couch, travel - anywhere

---

## Key Benefits

| Feature | Benefit |
|---------|---------|
| Full IDE in pocket | Cloud-based, no laptop needed |
| Instant preview | See changes live in Replit web view |
| No Replit credits consumed | Claude Code usage is separate |
| Full Linux shell | grep, git, custom scripts work |
| Instant deploy | Ship from your phone |

---

## Setup Guide

### 1. Install Replit Mobile App
- iOS or Android

### 2. Create New Repl/Project
- Any language/framework

### 3. Open Terminal
- Access shell in Replit

### 4. Install Claude Code CLI
```bash
npm install -g @anthropic/claude-code-cli   ← Run in Replit terminal
```

### 5. Authenticate
- Use Anthropic API key (set as environment variable or prompted on first run)

### 6. Start Coding
```bash
claude                                       ← Starts interactive session
```

---

## The Stack

```
Replit Mobile App     ← Your phone interface
        ↓
    Terminal          ← Access via Shell icon
        ↓
 Claude Code CLI      ← AI coding assistant
        ↓
   Anthropic API      ← Powers the intelligence
        ↓
  Live Preview        ← See changes instantly
```

---

## Power Combo: Replit Agent + Claude Code

| Tool | Use For |
|------|---------|
| Replit Agent | Big structural changes, scaffolding |
| Claude Code | Detailed/iterative work, fine-grained edits |

Combine both for optimal workflow.

---

## Demo Example

Building a dentist-chair booking app:
1. Prompt Claude Code with feature request
2. Code changes automatically
3. See UI update in Replit preview
4. Iterate while lying in bed

---

## Mental Model

> Treat your phone as a full development workstation.

### Key Principles

1. **Minimize friction** - no local env, no laptop
2. **Maximize feedback loop** - prompt → code → preview in seconds
3. **Stack tools intelligently** - Replit Agent (structure) + Claude Code (details)
4. **Embrace mobility** - code from anywhere

---

## Pro Tips

### Voice Dictation
- Typing long prompts on mobile is painful
- Use voice dictation + meta-prompting to clean up input

### Preview Awareness
- Mobile responsive preview can be misleading
- Test in multiple views when possible

---

## Caveats & Gotchas

| Issue | Notes |
|-------|-------|
| **Extremely addictive** | Risk of too much phone time |
| Mobile typing pain | Use voice dictation |
| Preview limitations | Mobile view ≠ full desktop |
| API costs | Paid Anthropic usage |

### Counter to "Replit is expensive"
Claude Code usage doesn't consume Replit credits - only Replit Agent does.

---

## Related Concepts

**Builds on:**
- Claude Code CLI basics
- Terminal usage
- Replit fundamentals

**Enables:**
- "Build from bed/beach/travel" workflows
- Rapid full-stack prototyping
- Hybrid agentic coding
- Easy free/cheap deployment

**Similar to:**
- Codex CLI in Replit
- ManusAI
- Gemini Canvas
- Google Jules
- Lovable.dev + agentic tools

---

## The Larger Pattern

> The emerging "personal software era"

- Anyone can clone SaaS features in minutes
- Mobile agentic coding
- Zero-setup full-stack dev anywhere
- Death of many $10-300/mo tools

---

## Follow-Up Questions

1. Best Anthropic models for this workflow (Opus 4? Sonnet 4.5)?
2. Voice dictation + meta-prompting reliability for complex instructions?
3. Best free/cheap alternative stack without Replit (GitHub Codespaces + Claude Code)?

---

## Synthesis Hooks

**Combines well with:**
- Voice-to-text apps
- Replit Agent for scaffolding
- Cloudflare for hosting
- Parallel Claude sessions
- Open-source models (Qwen3 Coder - cheaper)

**Part of larger pattern:**
Mobile-first development becoming viable for serious work, not just prototyping.

---

## Actionability

🟢 **Quick Win** - Core setup < 5 minutes once you have Replit app + Anthropic key

🟡 **Medium Lift** - Mastering voice workflow + combining with Replit Agent takes practice

---

## What You'll See When You Run This

**Before running:** You have the Replit mobile app installed and an Anthropic API key.

### Opening Replit on Phone

```
╔═══════════════════════════════════════╗
║  📱 Replit Mobile App                  ║  ← Main screen after launch
╠═══════════════════════════════════════╣
║                                        ║
║  My Repls:                             ║  ← Your existing projects
║                                        ║
║  📁 dentist-booking-app                ║  ← Tap to open
║  📁 portfolio-site                     ║
║  📁 api-backend                        ║
║                                        ║
║  [+ Create Repl]                       ║  ← TAP THIS FOR NEW PROJECT
║                                        ║
╚═══════════════════════════════════════╝
```

### Creating a New Project

Tap [+ Create Repl]:

```
╔═══════════════════════════════════════╗
║  New Repl                              ║
╠═══════════════════════════════════════╣
║                                        ║
║  Template: [Next.js ▼]                 ║  ← Pick your framework
║                                        ║
║  Name: dentist-booking                 ║  ← Name your project
║                                        ║
║  [Create Repl]                         ║  ← TAP THIS TO START
║                                        ║
╚═══════════════════════════════════════╝

[Creating...]                              ← Wait 30-60 seconds
  ✓ Setting up Next.js project             ← Framework scaffolded
  ✓ Installing dependencies                ← node_modules ready
  ✓ Starting dev server                    ← Dev server spinning up

Your Repl is ready!                        ← SUCCESS! YOU CAN NOW CODE
```

### Opening Terminal and Installing Claude Code

Tap the Shell icon:

```
~/dentist-booking$ npm install -g @anthropic/claude-code-cli   ← Run this command
```

**What you'll see:**
```
added 47 packages in 12s           ← Dependencies installed (10-20 sec)

✅ Claude Code CLI installed       ← SUCCESS! CLI READY TO USE

~/dentist-booking$ _               ← Cursor ready for next command
```

### Starting Claude Code

```
~/dentist-booking$ claude                 ← Start Claude Code
```

**What you'll see:**
```
╔═══════════════════════════════════════════════════════════════╗
║                      CLAUDE CODE                               ║
║                   Replit Environment                           ║  ← Detected you're in Replit
╚═══════════════════════════════════════════════════════════════╝

Model: claude-sonnet-4.5                   ← AI model powering your session
Project: /home/runner/dentist-booking      ← Your project directory
Preview: https://dentist-booking.username.repl.co  ← YOUR LIVE PREVIEW URL

claude> _                                  ← YOU CAN START PROMPTING NOW
```

### Vibe Coding from Your Phone

Use voice dictation to type (easier on mobile):

```
claude> [🎤 Voice: "Create a booking form with date picker,
        time slots, and dentist selection. Use a clean
        minimal style with rounded corners."]        ← Speak your prompt

[Claude working...]                                  ← AI processing (30-90 sec)

Reading project structure...                         ← Claude scans your project
  Found: Next.js 14 with App Router                  ← Framework detected

Creating components...                               ← Files being created
  ✓ components/BookingForm.tsx                       ← Main form component
  ✓ components/DatePicker.tsx                        ← Date selection
  ✓ components/TimeSlotGrid.tsx                      ← Time slots
  ✓ components/DentistSelector.tsx                   ← Dentist dropdown

Installing dependencies...                           ← Auto-installing packages
  ✓ react-datepicker                                 ← Date library added
  ✓ date-fns                                         ← Date utilities added

Updating app/page.tsx...                             ← Wiring it all together
  ✓ Added BookingForm to main page                   ← DONE! CHECK YOUR PREVIEW
```

### Live Preview Updates

**Split view on phone:**

```
┌─────────────────────────────────────┐
│ Terminal (top half)                  │  ← Your Claude Code session
├─────────────────────────────────────┤
│ claude> ✓ Components created         │  ← Work completed
│                                      │
│ Preview updated! Check the webview.  │  ← LOOK AT BOTTOM HALF NOW
│                                      │
├─────────────────────────────────────┤
│ Preview (bottom half)                │  ← LIVE APP PREVIEW
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │   📅 Book Your Appointment      │ │  ← Your UI is live!
│ │                                 │ │
│ │   Select Date: [Jan 15, 2026]   │ │  ← Interactive date picker
│ │                                 │ │
│ │   Select Time:                  │ │
│ │   [9:00] [10:00] [11:00]       │ │  ← Tappable time slots
│ │   [14:00] [15:00] [16:00]      │ │
│ │                                 │ │
│ │   Select Dentist: [Dr. Smith ▼] │ │  ← Dropdown works
│ │                                 │ │
│ │   [Book Appointment]            │ │  ← Button ready to wire
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Changes appear instantly!** No need to refresh. ← THIS IS THE MAGIC

### Iterating While Lying in Bed

```
claude> [🎤 Voice: "The buttons look too small on mobile.
        Make them bigger with more padding. Also add a
        confirmation modal after booking."]           ← Quick iteration prompt

[Claude working...]                                   ← Processing your request

Updating styles...                                    ← Modifying CSS/Tailwind
  ✓ Increased button padding                          ← Better touch targets
  ✓ Added min-height for touch targets                ← Mobile-friendly sizing
  ✓ Created ConfirmationModal component               ← New feature added

[Preview updates automatically]                       ← REFRESH PREVIEW NOW
```

### Combining Replit Agent + Claude Code

For big structural changes, use Replit Agent first:

```
╔═══════════════════════════════════════╗
║  Replit Agent                          ║  ← Different tool than Claude Code
╠═══════════════════════════════════════╣
║                                        ║
║  "Add user authentication with         ║
║   email/password login, signup,        ║  ← Big structural request
║   and password reset"                  ║
║                                        ║
║  [Generate]                            ║  ← TAP TO SCAFFOLD
╚═══════════════════════════════════════╝

[Replit Agent working...]                   ← Uses Replit credits
  Creating auth pages...                    ← Multiple files created
  Setting up NextAuth...                    ← Auth library configured
  Adding database models...                 ← Schema defined

✓ Authentication scaffolded!                ← STRUCTURE READY - NOW REFINE
```

Then switch to Claude Code for refinements:

```
claude> Improve the login form validation and add
        better error messages                ← Fine-grained detail work

[Claude Code refining...]                    ← Uses Anthropic API (not Replit)
  ✓ Added real-time validation               ← UX polish
  ✓ Improved error messages                  ← Better feedback
  ✓ Added loading states                     ← Professional feel
```

### Deploying from Phone

```
claude> Deploy this to production           ← One command to ship

[Claude running...]                          ← Starting deployment

$ npm run build                              ← Building production bundle
  ✓ Build successful                         ← No errors!

Replit auto-deploys on build!                ← Automatic hosting
  🚀 Live at: https://dentist-booking.username.repl.co  ← YOUR LIVE URL

Share this URL with anyone.                  ← SHIPPED FROM YOUR PHONE!
```

**Timing Expectations:**
- Repl creation: 30-60 seconds
- Claude Code install: 10-20 seconds
- Component creation: 30-90 seconds
- Preview update: 1-3 seconds
- Voice dictation: Real-time

**What to Do While Coding:**
- Use voice dictation for long prompts
- Watch the preview pane for live updates
- Iterate quickly with short prompts
- Switch between Replit Agent (structure) and Claude Code (details)

**If you skip voice dictation:** Typing long prompts on a phone keyboard is painful - voice is much faster.

**This connects to:** The "personal software era" - anyone can build full-stack apps from their phone, killing the need for many $10-300/month SaaS tools.

---

## Tags
`#mobility` `#replit` `#mobile-first` `#vibe-coding` `#cloud-ide` `#phone-development` `#tutorial` `#itspaulai`
