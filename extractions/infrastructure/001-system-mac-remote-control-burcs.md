# System - Remote Mac Control via Claude AI

---
## D-FINAL Connection

**This content contributed to:**
- D-FINAL-implementation.md: Section 3 (Complete Ralph Implementation - remote execution contexts), Section 4 (Hook Templates - infrastructure patterns)
- D-FINAL-operations.md: Section 1.3 (Enterprise Monitoring Architecture - remote agent patterns), Section 3 (Security Operations - tunnel security)

**GAP STATUS:** Unique infrastructure pattern - Mac-as-API via Cloudflare tunnels not explicitly covered in D-FINAL

**Platform-specific considerations:**
- macOS-only (AppleScript, Raycast integration)
- Requires Cloudflare Workers infrastructure
- Zero-trust security model via tunnels
- Brain/Body split architecture for security isolation

**Journey references:**
- [journey-implementation.md - Infrastructure deployment contexts]
- [journey-operations.md - Remote agent security patterns]

**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Source
- **Author:** @burcs (Brandon) - PM at Cloudflare, founder of Outerbase (YC W23, acquired)
- **Date:** 2026-01-05
- **URL:** https://x.com/burcs/status/2008205188113518659
- **Engagement:** 1.7K likes, 138K views, 1.5K bookmarks
- **Docs:** system.surf
- **Repo:** github.com/ygwyg/system

---

## Core Insight

**One-liner:** Open-source agent that turns your Mac into an API—chat from your phone, Claude executes commands on your machine via secure Cloudflare tunnel.

> "Your mac becomes an api"

---

## Architecture

```
┌─────────────────────────────────────┐
│  BRAIN (Cloudflare Worker)          │
│  ├─ Claude AI for NLP               │
│  ├─ State in Durable Objects        │
│  ├─ Scheduling (cron/natural lang)  │
│  └─ Tool orchestration              │
└─────────────────────────────────────┘
              │
     Cloudflare Tunnel (secure, no ports exposed)
              │
              ▼
┌─────────────────────────────────────┐
│  BODY (Local Mac Bridge)            │
│  ├─ Express server                  │
│  ├─ AppleScript execution           │
│  ├─ Safe shell commands (allowlist) │
│  └─ Raycast extension deep links    │
└─────────────────────────────────────┘
```

**Key security:** No ports exposed, no open endpoints—just a secure pipe only the agent can use.

---

## What It Can Do

- Play music (Apple Music/Spotify)
- Send texts (iMessages)
- Create Linear issues
- Run Shortcuts
- Open apps
- Execute AppleScript
- Trigger Raycast extensions
- Schedule recurring tasks

All via natural language from anywhere.

---

## Setup

```bash
git clone https://github.com/ygwyg/system
cd system
npm install
npm run setup  # Interactive wizard
npm start      # Launch bridge + tunnel
```

Setup wizard:
- Scans Raycast extensions
- Configures Anthropic API key
- Chooses UI/API mode
- Sets local/remote access

---

## API Examples

### Chat Request
```bash
POST /chat
{
  "message": "Play some jazz music"
}
```

### Response
```json
{
  "message": "Playing jazz on Apple Music",
  "actions": [
    {
      "tool": "music_play",
      "args": { "query": "jazz" },
      "success": true,
      "result": "Now playing: Jazz Vibes"
    }
  ]
}
```

### WebSocket for Real-time
```javascript
const ws = new WebSocket('wss://your-agent.workers.dev/ws?token=...');
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data.type, data.payload);
};
```

---

## Configuration

**bridge.config.json:**
```json
{
  "authToken": "your-secure-token",
  "anthropicKey": "sk-ant-...",
  "mode": "ui",
  "access": "remote",
  "extensions": [...]
}
```

**Cloudflare Secrets:**
```bash
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put BRIDGE_URL
npx wrangler secret put BRIDGE_AUTH_TOKEN
npx wrangler secret put API_SECRET
```

---

## Security Features

- **No exposed ports** - Tunnel only
- **Shell allowlist** - Dangerous commands blocked (rm -rf, sudo)
- **Human confirmation** - Sensitive actions prompt user
- **Zero Trust ready** - Terraform configs for Cloudflare Access

---

## Thread Gold

**@anshnanda:** "This is very cool but my mac isn't always online"

**@burcs response:** "Sounds like it's time to grab a Mac Mini that's always online running all your automations"

**@steipete:** Compared to ClawDBot/Peekaboo Agent - suggests potential for accessibility backend integration

**@__morse:** Shares alternative approach - github.com/remorses/kimaki (Discord bot for local Mac control)

---

## Prerequisites

- macOS
- Node.js 18+
- Anthropic API key
- Raycast (optional, for extensions)
- cloudflared (`brew install cloudflared`)

---

## Caveats

- **Mac must be online** for remote access
- Raycast extensions with UI/forms may not work perfectly
- OAuth-based extensions need one manual Raycast run first
- Quick mode tunnel is ephemeral; permanent needs Workers deploy

---

## Mental Model

> "Think of your Mac as a programmable API body controlled by a remote Claude-powered brain—split for security, where natural language becomes the interface for orchestration."

---

## Actionability

🟡 **Medium Lift** - Need Cloudflare account, API keys, setup wizard

### Best For
- Always-on Mac Mini setups
- Personal automation infrastructure
- Remote control while mobile

---

## Tags
`#infrastructure` `#remote-control` `#cloudflare` `#applescript` `#raycast` `#mac-automation` `#natural-language-api`
