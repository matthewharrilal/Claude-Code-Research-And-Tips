# Claude Code Security and Permissions - Exhaustive Research Compilation

A comprehensive reference for Claude Code security, permissions, sandboxing, and safe operation patterns. This document synthesizes official documentation, community best practices, enterprise configurations, and real-world security implementations.

**Research Date:** 2026-01-09
**Research Method:** Knowledge-based synthesis
**Status:** Complete

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md [Security & Permissions, YOLO Mode Safety, Enterprise Configuration sections]
**Journey references:** journey-implementation.md [Security as cross-cutting concern at all complexity levels]
**Last enhanced:** 2026-01-18 (Phase 2B)
---

## Table of Contents

1. [YOLO Mode (Dangerously Skip Permissions)](#yolo-mode-dangerously-skip-permissions)
2. [Permission System Deep Dive](#permission-system-deep-dive)
3. [Tool Restrictions and Gating](#tool-restrictions-and-gating)
4. [Sandboxing Strategies](#sandboxing-strategies)
5. [Docker Containerization](#docker-containerization)
6. [Network Isolation](#network-isolation)
7. [File System Restrictions](#file-system-restrictions)
8. [Secrets and API Key Management](#secrets-and-api-key-management)
9. [Git Credential Safety](#git-credential-safety)
10. [Audit Logging](#audit-logging)
11. [Recovery Strategies After Incidents](#recovery-strategies-after-incidents)
12. [Permission Prompts and Auto-Approval](#permission-prompts-and-auto-approval)
13. [Enterprise Security Configurations](#enterprise-security-configurations)
14. [Security Checklists and Templates](#security-checklists-and-templates)

---

## YOLO Mode (Dangerously Skip Permissions)

### What YOLO Mode Is

**Definition:** The `--dangerously-skip-permissions` flag (colloquially "YOLO mode") disables all permission prompts, allowing Claude to execute any command without user confirmation.

**CLI Usage:**
```bash
claude --dangerously-skip-permissions
```

**Alternative Names:**
- Permissive mode
- Auto-approve mode
- Dangerous mode
- Unattended mode

### How It Works

When enabled:
1. All tool permission checks are bypassed
2. Claude can execute Bash commands without confirmation
3. File operations (Read, Write, Edit) proceed automatically
4. Web operations (WebFetch, WebSearch) execute without prompts
5. No interactive approval dialogs appear

### When YOLO Mode Is Appropriate

| Use Case | Appropriate | Notes |
|----------|-------------|-------|
| Isolated VM/container | Yes | No risk to host system |
| Disposable cloud instance | Yes | Can be terminated/rebuilt |
| CI/CD pipelines | Conditional | Only in sandboxed runners |
| Local development machine | **No** | Risk of destructive commands |
| Production systems | **Never** | Potential for catastrophic damage |
| Shared/team machines | **No** | Risk to others' work |

### Safe YOLO Mode Patterns

**Pattern 1: Disposable VM Setup**
```bash
# On cloud VM (AWS, GCP, Azure)
# - No public SSH (Tailscale only)
# - Cloud firewall + nftables + fail2ban
# - Separate VM per project

claude --dangerously-skip-permissions
```

**Pattern 2: Docker Container Isolation**
```dockerfile
FROM node:20-alpine
RUN npm install -g @anthropic-ai/claude-code
WORKDIR /workspace
# No network access, read-only mounts
CMD ["claude", "--dangerously-skip-permissions"]
```

**Pattern 3: Ralph Loop on Isolated System**
```bash
# In isolated container/VM only
while :; do cat PROMPT.md | claude --dangerously-skip-permissions ; done
```

### Dangers and Risk Mitigation

**Actual Risks:**
| Risk | Example | Mitigation |
|------|---------|------------|
| File deletion | `rm -rf /` | Container isolation |
| Credential exposure | Reading .env files | No secrets in environment |
| Network attacks | Port scanning | Network isolation |
| Resource exhaustion | Fork bombs | Resource limits (cgroups) |
| Data exfiltration | Sending data to external URLs | Egress firewall |
| Git history destruction | `git push --force`, `git reset --hard` | Protected branches |

**Risk Mitigation Stack:**
1. **Virtualization:** Run in VM or container
2. **Network isolation:** No internet or restricted egress
3. **File system limits:** Read-only mounts where possible
4. **Resource limits:** CPU, memory, process limits
5. **No persistent credentials:** Ephemeral API keys
6. **Snapshot/rollback:** Easy recovery from bad states

### Community Quotes on YOLO Mode

> "Permissive mode safe ONLY on isolated VM" - @dabit3 (Nader Dabit)

> "Never use dangerously-skip-permissions on your main machine. Ever." - Community consensus

> "The name is there for a reason - it's dangerous." - Multiple users

---

## Permission System Deep Dive

### Permission Architecture

Claude Code uses a tiered permission system:

```
┌─────────────────────────────────────────┐
│           Permission Request            │
├─────────────────────────────────────────┤
│  1. Check tool-level permissions        │
│  2. Check command-level permissions     │
│  3. Check path-level permissions        │
│  4. Check session-level overrides       │
│  5. Check global settings               │
│  6. Prompt user if needed               │
└─────────────────────────────────────────┘
```

### Permission Levels

| Level | Description | Persistence |
|-------|-------------|-------------|
| `ask` | Prompt for permission each time | Session only |
| `allow` | Allow for this session | Session only |
| `allow-always` | Allow permanently | Persisted to settings |
| `deny` | Deny for this session | Session only |
| `deny-always` | Deny permanently | Persisted to settings |

### Permission Configuration Files

**Location Priority (highest to lowest):**
1. Command-line flags
2. Project: `.claude/settings.json`
3. User global: `~/.claude/settings.json`
4. System: `/etc/claude/settings.json` (enterprise)

### Permission Settings Schema

```json
{
  "permissions": {
    "tools": {
      "Bash": "ask",
      "Read": "allow",
      "Edit": "allow",
      "Write": "ask",
      "Glob": "allow",
      "Grep": "allow",
      "WebFetch": "ask",
      "WebSearch": "ask",
      "Task": "allow",
      "NotebookEdit": "ask"
    },
    "commands": {
      "git status": "allow-always",
      "git diff": "allow-always",
      "git log": "allow-always",
      "npm test": "allow-always",
      "npm run build": "allow-always",
      "npm run lint": "allow-always",
      "npm run dev": "allow-always",
      "pytest": "allow-always",
      "cargo test": "allow-always",
      "go test": "allow-always"
    },
    "commandPatterns": {
      "git (status|diff|log|branch|show).*": "allow-always",
      "npm (test|run|ci).*": "allow-always",
      "ls.*": "allow-always",
      "cat.*": "ask",
      "rm.*": "deny",
      "sudo.*": "deny-always"
    },
    "paths": {
      "read": ["**/*"],
      "write": ["src/**/*", "tests/**/*", "docs/**/*"],
      "deny": [
        "node_modules/**",
        ".env*",
        "*.pem",
        "*.key",
        "**/secrets/**",
        ".git/config",
        "~/.ssh/**"
      ]
    }
  }
}
```

### Managing Permissions via CLI

```bash
# Open permissions UI
/permissions

# View current permissions
/permissions list

# Reset to defaults
/permissions reset

# Grant permission to command
/permissions allow "npm test"

# Deny command permanently
/permissions deny-always "rm -rf"

# Allow tool for session
/permissions allow-tool Bash
```

### Permission Prompt Behavior

When a permission check triggers:

1. **Prompt displays:**
   - Tool name
   - Command or file path
   - Options: Allow once, Allow always, Deny, Deny always

2. **User selects:**
   - Choice is recorded
   - Action proceeds or aborts based on choice

3. **Persistence:**
   - `allow` and `deny` last until session ends
   - `allow-always` and `deny-always` written to settings.json

### Best Practices for Permissions

**DO Whitelist:**
```json
{
  "commands": {
    "git status": "allow-always",
    "git diff": "allow-always",
    "git log": "allow-always",
    "npm test": "allow-always",
    "npm run build": "allow-always",
    "npm run lint": "allow-always",
    "ls": "allow-always",
    "pwd": "allow-always",
    "echo": "allow-always"
  }
}
```

**NEVER Whitelist:**
```json
{
  "commands": {
    "rm -rf": "deny-always",
    "rm -r": "deny-always",
    "git push --force": "deny-always",
    "git reset --hard": "deny-always",
    "sudo": "deny-always",
    "chmod 777": "deny-always",
    "curl | bash": "deny-always",
    "wget | sh": "deny-always",
    "eval": "deny-always"
  }
}
```

---

## Tool Restrictions and Gating

### Available Tools and Their Risks

| Tool | Risk Level | Default Permission | Common Restrictions |
|------|------------|-------------------|---------------------|
| `Read` | Low | allow | Path restrictions |
| `Glob` | Low | allow | Path restrictions |
| `Grep` | Low | allow | Path restrictions |
| `Edit` | Medium | allow | Path restrictions |
| `Write` | Medium-High | ask | Path restrictions, extension limits |
| `Bash` | High | ask | Command whitelisting |
| `WebFetch` | Medium | ask | Domain restrictions |
| `WebSearch` | Medium | ask | Query logging |
| `Task` | Medium | allow | Subagent restrictions |
| `NotebookEdit` | Medium | ask | Path restrictions |

### Tool-Level Gating Configuration

```json
{
  "tools": {
    "Bash": {
      "permission": "ask",
      "restrictions": {
        "allowedCommands": [
          "git",
          "npm",
          "node",
          "python",
          "pytest",
          "cargo",
          "go"
        ],
        "deniedCommands": [
          "rm",
          "sudo",
          "chmod",
          "chown",
          "mkfs",
          "dd"
        ],
        "maxExecutionTime": 120000,
        "requireStdoutCapture": true
      }
    },
    "Write": {
      "permission": "ask",
      "restrictions": {
        "allowedPaths": ["src/**", "tests/**", "docs/**"],
        "deniedPaths": ["node_modules/**", ".git/**"],
        "allowedExtensions": [".ts", ".js", ".py", ".md", ".json"],
        "deniedExtensions": [".exe", ".sh", ".pem", ".key"]
      }
    },
    "WebFetch": {
      "permission": "ask",
      "restrictions": {
        "allowedDomains": [
          "github.com",
          "stackoverflow.com",
          "docs.anthropic.com"
        ],
        "deniedDomains": ["*"],
        "maxResponseSize": 1048576
      }
    }
  }
}
```

### PreToolUse Hook for Custom Gating

Create custom tool gates with PreToolUse hooks:

**File: `~/.claude/hooks/gate-bash.sh`**
```bash
#!/bin/bash
set -euo pipefail

# Parse the command from EVENT_DATA
COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command // empty')

# Define dangerous patterns
DANGEROUS_PATTERNS=(
    "rm -rf"
    "rm -r /"
    "git push.*--force"
    "git reset --hard"
    "DROP TABLE"
    "DELETE FROM.*WHERE 1"
    "sudo"
    "chmod 777"
    "curl.*| bash"
    "wget.*| sh"
)

# Check each pattern
for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if [[ "$COMMAND" =~ $pattern ]]; then
        echo "BLOCKED: Dangerous command pattern detected: $pattern" >&2
        exit 1  # Non-zero exit blocks the tool
    fi
done

# Allow the command
exit 0
```

**Configuration:**
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/gate-bash.sh"
      }]
    }]
  }
}
```

### Subagent Restrictions

Control what subagents can access:

```json
{
  "subagents": {
    "defaultPermissions": {
      "tools": {
        "Bash": "deny",
        "WebFetch": "deny",
        "Write": "deny"
      }
    },
    "namedAgents": {
      "researcher": {
        "tools": {
          "Read": "allow",
          "Glob": "allow",
          "Grep": "allow",
          "WebFetch": "allow"
        }
      },
      "editor": {
        "tools": {
          "Read": "allow",
          "Edit": "allow",
          "Write": "allow"
        }
      }
    }
  }
}
```

---

## Sandboxing Strategies

### Sandboxing Levels

| Level | Isolation | Performance | Use Case |
|-------|-----------|-------------|----------|
| None | No isolation | Full speed | Trusted, supervised work |
| Process | Limited | Good | Basic separation |
| Container | Strong | Good | Development, CI/CD |
| VM | Maximum | Overhead | Untrusted, autonomous |

### macOS Sandbox (App Sandbox)

Claude Code can run within macOS App Sandbox for basic isolation:

```bash
# Run with restricted sandbox profile
sandbox-exec -f ~/.claude/sandbox.sb claude
```

**Example sandbox profile (`~/.claude/sandbox.sb`):**
```lisp
(version 1)
(deny default)

; Allow reading from project directory
(allow file-read*
    (subpath "/Users/username/projects"))

; Allow writing only to specific paths
(allow file-write*
    (subpath "/Users/username/projects/current")
    (subpath "/tmp"))

; Allow network for API calls
(allow network-outbound
    (remote host "api.anthropic.com"))

; Allow executing node
(allow process-exec
    (literal "/usr/local/bin/node"))
```

### Linux Sandboxing Options

**Option 1: Firejail**
```bash
# Install firejail
sudo apt install firejail

# Run Claude with firejail
firejail --private=~/claude-sandbox \
         --net=none \
         --nosound \
         claude
```

**Option 2: Bubblewrap (bwrap)**
```bash
bwrap \
    --ro-bind /usr /usr \
    --ro-bind /lib /lib \
    --ro-bind /lib64 /lib64 \
    --bind ~/project /workspace \
    --unshare-net \
    --die-with-parent \
    claude
```

**Option 3: Systemd Sandboxing**
```ini
# ~/.config/systemd/user/claude-sandboxed.service
[Unit]
Description=Sandboxed Claude Code

[Service]
ExecStart=/usr/local/bin/claude
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
NoNewPrivileges=true
ReadWritePaths=/home/user/project
PrivateNetwork=false
```

### Windows Sandboxing

**Windows Sandbox (Windows 10 Pro+):**
```xml
<!-- claude-sandbox.wsb -->
<Configuration>
  <MappedFolders>
    <MappedFolder>
      <HostFolder>C:\Projects\current</HostFolder>
      <SandboxFolder>C:\workspace</SandboxFolder>
      <ReadOnly>false</ReadOnly>
    </MappedFolder>
  </MappedFolders>
  <Networking>Disable</Networking>
  <LogonCommand>
    <Command>cmd /c "claude"</Command>
  </LogonCommand>
</Configuration>
```

### Sandboxing Best Practices

1. **Principle of Least Privilege:** Only grant access to what's needed
2. **Read-Only by Default:** Make file systems read-only, whitelist write paths
3. **Network Isolation:** Deny network unless specifically required
4. **Process Limits:** Restrict ability to spawn processes
5. **Resource Limits:** Cap CPU, memory, disk usage
6. **Logging:** Log all sandbox violations for audit

---

## Docker Containerization

### Basic Docker Setup for Claude Code

**Dockerfile:**
```dockerfile
FROM node:20-alpine

# Install Claude Code
RUN npm install -g @anthropic-ai/claude-code

# Create non-root user
RUN adduser -D claude
USER claude

# Set working directory
WORKDIR /workspace

# Default command
CMD ["claude"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  claude:
    build: .
    volumes:
      - ./project:/workspace
      - claude-cache:/home/claude/.claude
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    read_only: true
    tmpfs:
      - /tmp:size=100M,mode=1777
```

### Secure Docker Configuration

**High-Security Dockerfile:**
```dockerfile
FROM node:20-alpine AS base

# Security hardening
RUN apk add --no-cache \
    dumb-init \
    && rm -rf /var/cache/apk/*

# Install Claude Code
RUN npm install -g @anthropic-ai/claude-code \
    && npm cache clean --force

# Create restricted user
RUN addgroup -g 1000 claude \
    && adduser -u 1000 -G claude -D claude

# Remove unnecessary tools
RUN apk del --purge \
    wget \
    curl \
    2>/dev/null || true

# Set ownership
RUN chown -R claude:claude /home/claude

# Switch to non-root user
USER claude
WORKDIR /workspace

# Use dumb-init for proper signal handling
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["claude"]
```

### Network Isolation in Docker

**No network access:**
```yaml
services:
  claude:
    network_mode: none
```

**Limited egress:**
```yaml
networks:
  claude-net:
    driver: bridge
    internal: true  # No internet access

services:
  claude:
    networks:
      - claude-net
    dns: []  # No DNS resolution
```

**Egress firewall with iptables:**
```bash
# Only allow Anthropic API
docker network create claude-restricted
docker run -d --name egress-filter \
    --network claude-restricted \
    --cap-add NET_ADMIN \
    alpine sh -c "
        apk add iptables
        iptables -A OUTPUT -d api.anthropic.com -j ACCEPT
        iptables -A OUTPUT -j DROP
        sleep infinity
    "
```

### Resource Limits in Docker

```yaml
services:
  claude:
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G
          pids: 100
        reservations:
          cpus: '1'
          memory: 2G
    ulimits:
      nofile:
        soft: 1024
        hard: 2048
      nproc: 100
```

### Docker Volume Security

```yaml
volumes:
  # Read-only project mount
  project:
    driver: local
    driver_opts:
      type: none
      o: bind,ro
      device: /path/to/project

  # Writable output directory
  output:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /path/to/output
```

### Multi-Container Security Architecture

```yaml
version: '3.8'

services:
  # Main Claude instance
  claude-main:
    build: .
    volumes:
      - project:/workspace:ro
      - output:/output
    networks:
      - internal
    depends_on:
      - proxy

  # API proxy for egress control
  proxy:
    image: nginx:alpine
    networks:
      - internal
      - external
    volumes:
      - ./nginx-egress.conf:/etc/nginx/nginx.conf:ro

  # Audit logger
  logger:
    image: fluent/fluent-bit
    networks:
      - internal
    volumes:
      - logs:/logs

networks:
  internal:
    internal: true
  external:
    driver: bridge

volumes:
  project:
  output:
  logs:
```

---

## Network Isolation

### Why Network Isolation Matters

| Risk | Attack Vector | Mitigation |
|------|---------------|------------|
| Data exfiltration | HTTP POST to attacker server | Egress firewall |
| Prompt injection | Fetch malicious content | URL allowlisting |
| API key theft | Send keys to external server | No network access |
| Remote code execution | Download and execute payload | Block binary downloads |
| Lateral movement | Scan internal network | No network or restricted |

### Network Isolation Strategies

**Level 1: No Network Access**
```bash
# Docker
docker run --network none claude

# Firejail
firejail --net=none claude

# macOS sandbox
(deny network*)
```

**Level 2: API-Only Access**
```bash
# Only allow Anthropic API
iptables -A OUTPUT -d api.anthropic.com -p tcp --dport 443 -j ACCEPT
iptables -A OUTPUT -j DROP
```

**Level 3: Allowlisted Domains**
```json
{
  "network": {
    "allowedDomains": [
      "api.anthropic.com",
      "github.com",
      "raw.githubusercontent.com",
      "registry.npmjs.org"
    ],
    "mode": "allowlist"
  }
}
```

### DNS-Level Filtering

**Pi-hole or AdGuard setup:**
```yaml
# docker-compose.yml
services:
  pihole:
    image: pihole/pihole
    environment:
      - WEBPASSWORD=secret
    volumes:
      - ./custom.list:/etc/pihole/custom.list
    networks:
      - dns-net

  claude:
    dns: pihole
    networks:
      - dns-net
```

**custom.list:**
```
# Block all except allowlisted
*.* 0.0.0.0
api.anthropic.com api.anthropic.com
github.com github.com
```

### Tailscale/VPN Isolation

For remote access to isolated environments:

```bash
# On isolated VM
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up --authkey=tskey-xxx

# Access only through Tailscale
ufw default deny incoming
ufw allow from 100.64.0.0/10  # Tailscale CGNAT range
ufw enable
```

### Monitoring Network Activity

**tcpdump logging:**
```bash
tcpdump -i any -w /logs/claude-network.pcap &
claude
```

**nftables logging:**
```nft
table inet filter {
    chain output {
        type filter hook output priority 0;
        log prefix "CLAUDE_OUT: " flags all
    }
}
```

---

## File System Restrictions

### Path-Based Restrictions

**settings.json configuration:**
```json
{
  "permissions": {
    "paths": {
      "read": [
        "src/**/*",
        "tests/**/*",
        "docs/**/*",
        "package.json",
        "tsconfig.json",
        "README.md"
      ],
      "write": [
        "src/**/*",
        "tests/**/*"
      ],
      "deny": [
        ".git/config",
        ".env*",
        "*.pem",
        "*.key",
        "*.p12",
        "**/secrets/**",
        "**/credentials/**",
        "~/.ssh/**",
        "~/.aws/**",
        "~/.config/**",
        "/etc/**",
        "/var/**"
      ]
    }
  }
}
```

### Extension-Based Restrictions

```json
{
  "permissions": {
    "fileExtensions": {
      "write": {
        "allowed": [
          ".ts", ".tsx", ".js", ".jsx",
          ".py", ".rs", ".go",
          ".md", ".json", ".yaml", ".yml",
          ".css", ".scss", ".html"
        ],
        "denied": [
          ".exe", ".dll", ".so", ".dylib",
          ".sh", ".bash", ".zsh",
          ".pem", ".key", ".p12", ".pfx",
          ".env", ".secret"
        ]
      }
    }
  }
}
```

### Read-Only File System Patterns

**Docker read-only with exceptions:**
```yaml
services:
  claude:
    read_only: true
    tmpfs:
      - /tmp:size=100M,mode=1777
      - /home/claude/.cache:size=500M
    volumes:
      - ./project:/workspace:ro
      - ./output:/workspace/output:rw
```

**Linux bind mounts:**
```bash
# Mount project read-only
mount --bind -o ro /source/project /sandbox/project

# Mount output writable
mount --bind /source/output /sandbox/output
```

### Chroot Jails

```bash
# Create minimal chroot
mkdir -p /jail/{bin,lib,workspace}
cp /usr/local/bin/claude /jail/bin/
cp -r /path/to/project /jail/workspace

# Copy required libraries
ldd /usr/local/bin/claude | grep -o '/[^ ]*' | xargs -I{} cp {} /jail/lib/

# Run in chroot
chroot /jail /bin/claude
```

### File System Monitoring

**inotifywait for real-time monitoring:**
```bash
inotifywait -m -r \
    -e modify,create,delete,move \
    --format '%w%f %e' \
    /workspace | while read file event; do
    echo "$(date): $file $event" >> /logs/fs-audit.log
done
```

**auditd rules:**
```bash
# /etc/audit/rules.d/claude.rules
-w /etc -p wa -k claude_etc_access
-w /home -p wa -k claude_home_access
-w /workspace -p wa -k claude_workspace
```

---

## Secrets and API Key Management

### Never Do This

```bash
# DANGEROUS - API key in environment
export ANTHROPIC_API_KEY="sk-ant-api03-..."
claude --dangerously-skip-permissions  # Key visible to Claude

# DANGEROUS - Secrets in CLAUDE.md
# CLAUDE.md:
# Database password: supersecret123
```

### Safe Secret Handling

**Pattern 1: Ephemeral injection**
```bash
# Read secret at runtime, don't persist
claude <<EOF
Use environment variable for API calls
EOF
```

**Pattern 2: Secrets manager integration**
```bash
# Fetch secret from vault
API_KEY=$(vault kv get -field=key secret/anthropic)
ANTHROPIC_API_KEY="$API_KEY" claude
```

**Pattern 3: Docker secrets**
```yaml
services:
  claude:
    secrets:
      - anthropic_key
    environment:
      - ANTHROPIC_API_KEY_FILE=/run/secrets/anthropic_key

secrets:
  anthropic_key:
    external: true
```

### Path Exclusions for Secrets

```json
{
  "permissions": {
    "paths": {
      "deny": [
        ".env",
        ".env.*",
        "*.pem",
        "*.key",
        "*.p12",
        "*.pfx",
        "*.jks",
        "*.keystore",
        "**/secrets/**",
        "**/credentials/**",
        "**/private/**",
        "~/.ssh/**",
        "~/.aws/**",
        "~/.config/gcloud/**",
        "~/.kube/config",
        "~/.docker/config.json"
      ]
    }
  }
}
```

### Secret Scanning

**PreToolUse hook for secret detection:**
```bash
#!/bin/bash
# ~/.claude/hooks/scan-secrets.sh

FILE=$(echo "$EVENT_DATA" | jq -r '.tool_input.file_path // empty')
CONTENT=$(echo "$EVENT_DATA" | jq -r '.tool_input.content // empty')

# Patterns to detect
PATTERNS=(
    'sk-ant-api[0-9a-zA-Z-]{40,}'
    'AKIA[0-9A-Z]{16}'
    'ghp_[0-9a-zA-Z]{36}'
    '-----BEGIN.*PRIVATE KEY-----'
    'password\s*[:=]\s*["\047][^"\047]+'
)

for pattern in "${PATTERNS[@]}"; do
    if echo "$CONTENT" | grep -qE "$pattern"; then
        echo "ERROR: Potential secret detected in content" >&2
        exit 1
    fi
done

exit 0
```

### git-secrets Integration

```bash
# Install git-secrets
brew install git-secrets

# Configure for project
cd project
git secrets --install
git secrets --register-aws

# Add custom patterns
git secrets --add 'sk-ant-api[0-9a-zA-Z-]+'
git secrets --add 'password\s*[:=]\s*'
```

---

## Git Credential Safety

### Git Configuration for Claude

```gitconfig
# ~/.gitconfig additions for Claude Code
[credential]
    helper = cache --timeout=300  # Short-lived cache

[safe]
    # Only allow these directories
    directory = /home/user/projects
```

### Protecting Git Credentials

**Never allow:**
```json
{
  "permissions": {
    "paths": {
      "deny": [
        ".git/config",
        "~/.gitconfig",
        "~/.git-credentials",
        "~/.netrc"
      ]
    },
    "commands": {
      "git config.*credential": "deny-always",
      "git config.*user.email": "deny-always",
      "git config.*user.name": "deny-always"
    }
  }
}
```

### Git Safety Rules

```json
{
  "permissions": {
    "commands": {
      "git status": "allow-always",
      "git diff": "allow-always",
      "git log": "allow-always",
      "git branch": "allow-always",
      "git show": "allow-always",
      "git add": "allow",
      "git commit": "allow",
      "git push": "ask",
      "git push --force": "deny-always",
      "git push -f": "deny-always",
      "git reset --hard": "deny-always",
      "git clean -fd": "deny-always",
      "git checkout -f": "ask"
    }
  }
}
```

### Protected Branch Enforcement

```bash
# PreToolUse hook for protected branches
#!/bin/bash

COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command')
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)

PROTECTED_BRANCHES=("main" "master" "production" "release")

if [[ "$COMMAND" == git\ push* ]]; then
    for protected in "${PROTECTED_BRANCHES[@]}"; do
        if [[ "$BRANCH" == "$protected" ]]; then
            echo "ERROR: Direct push to $protected is not allowed" >&2
            exit 1
        fi
    done
fi

exit 0
```

---

## Audit Logging

### Basic Logging Setup

**settings.json:**
```json
{
  "logging": {
    "enabled": true,
    "level": "info",
    "destination": "~/.claude/logs/",
    "format": "jsonl",
    "rotate": {
      "maxSize": "100M",
      "maxFiles": 10
    }
  }
}
```

### Comprehensive Audit Hook

**File: `~/.claude/hooks/audit-log.sh`**
```bash
#!/bin/bash

LOG_DIR="$HOME/.claude/audit"
mkdir -p "$LOG_DIR"

TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
LOG_FILE="$LOG_DIR/$(date +%Y-%m-%d).jsonl"

# Parse event data
EVENT_TYPE="$1"
TOOL_NAME="${TOOL_NAME:-unknown}"
SESSION_ID="${SESSION_ID:-unknown}"

# Create log entry
jq -nc \
    --arg ts "$TIMESTAMP" \
    --arg event "$EVENT_TYPE" \
    --arg tool "$TOOL_NAME" \
    --arg session "$SESSION_ID" \
    --arg pwd "$PWD" \
    --argjson data "${EVENT_DATA:-{}}" \
    '{
        timestamp: $ts,
        event: $event,
        tool: $tool,
        session: $session,
        cwd: $pwd,
        data: $data
    }' >> "$LOG_FILE"
```

**Configuration:**
```json
{
  "hooks": {
    "PreToolUse": [{
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/audit-log.sh PreToolUse"
      }]
    }],
    "PostToolUse": [{
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/audit-log.sh PostToolUse"
      }]
    }],
    "SessionStart": [{
      "type": "command",
      "command": "~/.claude/hooks/audit-log.sh SessionStart"
    }],
    "SessionEnd": [{
      "type": "command",
      "command": "~/.claude/hooks/audit-log.sh SessionEnd"
    }]
  }
}
```

### Log Analysis

**Query logs with jq:**
```bash
# All Bash commands today
cat ~/.claude/audit/$(date +%Y-%m-%d).jsonl | \
    jq 'select(.tool == "Bash")'

# All file writes
cat ~/.claude/audit/*.jsonl | \
    jq 'select(.tool == "Write" or .tool == "Edit")'

# Failed operations
cat ~/.claude/audit/*.jsonl | \
    jq 'select(.data.success == false)'
```

### Enterprise Audit Integration

**Send to SIEM:**
```bash
#!/bin/bash
# Send audit logs to Splunk

SPLUNK_HEC="https://splunk.company.com:8088/services/collector"
SPLUNK_TOKEN="xxx"

while read -r line; do
    curl -k -s \
        "$SPLUNK_HEC" \
        -H "Authorization: Splunk $SPLUNK_TOKEN" \
        -d "{\"event\": $line}"
done < ~/.claude/audit/$(date +%Y-%m-%d).jsonl
```

---

## Recovery Strategies After Incidents

### Incident Types and Recovery

| Incident | Detection | Recovery |
|----------|-----------|----------|
| Unwanted file deletion | Audit logs, git status | Git restore, backups |
| Credential exposure | Secret scanning | Rotate credentials |
| Malicious code injection | Code review, tests | Git revert, rebuild |
| Configuration damage | Config validation | Restore from backup |
| Git history corruption | Git status, reflog | Git reflog recovery |

### Git Recovery Commands

```bash
# Recover deleted files
git checkout HEAD -- deleted-file.ts

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Recover from reflog
git reflog
git reset --hard HEAD@{1}

# Restore specific file from history
git checkout <commit-hash> -- path/to/file

# Recover deleted branch
git reflog | grep branch-name
git checkout -b recovered-branch HEAD@{n}
```

### Backup Strategies

**Pre-session backup hook:**
```bash
#!/bin/bash
# ~/.claude/hooks/pre-session-backup.sh

BACKUP_DIR="$HOME/.claude/backups/$(date +%Y-%m-%d)"
mkdir -p "$BACKUP_DIR"

# Create tarball of project
tar -czf "$BACKUP_DIR/$(date +%H%M%S)-$PROJECT_NAME.tar.gz" \
    --exclude='node_modules' \
    --exclude='.git' \
    "$PWD"

# Keep only last 10 backups
ls -t "$HOME/.claude/backups/"*/*.tar.gz | tail -n +11 | xargs rm -f 2>/dev/null
```

### Recovery Playbooks

**Playbook 1: Unwanted File Changes**
```bash
# 1. Stop Claude session
# 2. Review changes
git diff
git status

# 3. Discard unwanted changes
git checkout -- path/to/file

# 4. Or selective staging
git add -p

# 5. Commit good changes only
git commit -m "Selective recovery"
```

**Playbook 2: Credential Exposure**
```bash
# 1. Revoke exposed credentials immediately
# 2. Check audit logs for exfiltration
grep -r "curl\|wget\|fetch" ~/.claude/audit/

# 3. Generate new credentials
# 4. Update secret storage
# 5. Review and clean git history if committed
git filter-branch --force --tree-filter \
    'git rm --cached --ignore-unmatch .env' HEAD
```

**Playbook 3: System Compromise**
```bash
# 1. Isolate system (network disconnect)
# 2. Capture forensic image
# 3. Review all Claude session logs
# 4. Check for persistence mechanisms
crontab -l
launchctl list | grep -i claude
# 5. Rebuild from known-good state
```

---

## Permission Prompts and Auto-Approval

### Permission Prompt Flow

```
┌──────────────────────────────────────────┐
│           Tool Request                   │
├──────────────────────────────────────────┤
│ Tool: Bash                               │
│ Command: rm -rf node_modules             │
│                                          │
│ [Allow Once] [Allow Always]              │
│ [Deny Once]  [Deny Always]               │
│                                          │
│ Details: Removes node_modules directory  │
└──────────────────────────────────────────┘
```

### Auto-Approval Strategies

**Strategy 1: Conservative (Recommended)**
```json
{
  "autoApprove": {
    "tools": {
      "Read": true,
      "Glob": true,
      "Grep": true
    },
    "commands": {
      "exact": [
        "git status",
        "git diff",
        "npm test"
      ]
    }
  }
}
```

**Strategy 2: Development Mode**
```json
{
  "autoApprove": {
    "tools": {
      "Read": true,
      "Glob": true,
      "Grep": true,
      "Edit": true
    },
    "commands": {
      "patterns": [
        "git (status|diff|log|branch|show).*",
        "npm (test|run|ci|install).*",
        "ls.*",
        "pwd"
      ]
    },
    "paths": {
      "write": ["src/**", "tests/**"]
    }
  }
}
```

**Strategy 3: CI/CD Pipeline**
```json
{
  "autoApprove": {
    "mode": "all",
    "except": {
      "commands": [
        "rm -rf",
        "git push --force",
        "sudo"
      ],
      "paths": [
        ".env*",
        "*.pem"
      ]
    }
  }
}
```

### Conditional Auto-Approval

**Based on context:**
```bash
#!/bin/bash
# ~/.claude/hooks/conditional-approve.sh

TOOL=$(echo "$EVENT_DATA" | jq -r '.tool')
COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command // empty')

# Auto-approve in CI
if [[ -n "$CI" ]]; then
    exit 0
fi

# Auto-approve read operations
if [[ "$TOOL" == "Read" || "$TOOL" == "Glob" || "$TOOL" == "Grep" ]]; then
    exit 0
fi

# Auto-approve safe git commands
if [[ "$COMMAND" =~ ^git\ (status|diff|log|branch|show) ]]; then
    exit 0
fi

# Require approval for everything else
exit 2  # Special exit code to trigger prompt
```

---

## Enterprise Security Configurations

### Enterprise Settings Template

```json
{
  "enterprise": {
    "organization": "acme-corp",
    "enforceSettings": true,
    "allowUserOverride": false
  },
  "authentication": {
    "method": "sso",
    "provider": "okta",
    "domain": "acme-corp.okta.com",
    "mfa": "required"
  },
  "permissions": {
    "default": "deny",
    "tools": {
      "Bash": "ask",
      "Read": "allow",
      "Edit": "allow",
      "Write": "ask",
      "WebFetch": "deny",
      "WebSearch": "deny"
    },
    "paths": {
      "read": ["**/*"],
      "write": ["src/**", "tests/**"],
      "deny": [
        ".env*",
        "**/secrets/**",
        "**/credentials/**"
      ]
    }
  },
  "audit": {
    "enabled": true,
    "destination": "s3://acme-audit-logs/claude-code/",
    "retention": "7y",
    "includeContent": false,
    "realtime": true
  },
  "network": {
    "mode": "allowlist",
    "allowedDomains": [
      "api.anthropic.com",
      "github.acme-corp.com"
    ],
    "proxy": "http://egress-proxy.acme-corp.com:8080"
  },
  "dataResidency": {
    "region": "us-east-1",
    "encryption": "aes-256-gcm",
    "keyManagement": "aws-kms"
  },
  "compliance": {
    "frameworks": ["SOC2", "HIPAA", "GDPR"],
    "dataClassification": "confidential",
    "piiDetection": true
  }
}
```

### SSO Integration

**SAML Configuration:**
```json
{
  "sso": {
    "type": "saml",
    "entityId": "claude-code-acme",
    "ssoUrl": "https://acme-corp.okta.com/app/saml/xxx/sso",
    "certificate": "/etc/claude/saml-cert.pem",
    "attributeMapping": {
      "email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
      "groups": "http://schemas.xmlsoap.org/claims/Group"
    }
  }
}
```

**OIDC Configuration:**
```json
{
  "sso": {
    "type": "oidc",
    "issuer": "https://acme-corp.okta.com",
    "clientId": "claude-code-client",
    "clientSecret": "${OIDC_CLIENT_SECRET}",
    "scopes": ["openid", "profile", "email", "groups"]
  }
}
```

### Role-Based Access Control

```json
{
  "rbac": {
    "roles": {
      "developer": {
        "tools": {
          "Read": "allow",
          "Edit": "allow",
          "Write": "allow",
          "Bash": "ask"
        },
        "paths": {
          "write": ["src/**", "tests/**"]
        }
      },
      "readonly": {
        "tools": {
          "Read": "allow",
          "Glob": "allow",
          "Grep": "allow"
        }
      },
      "admin": {
        "tools": "*",
        "paths": "*"
      }
    },
    "groupMapping": {
      "engineering": "developer",
      "security": "admin",
      "contractors": "readonly"
    }
  }
}
```

### Compliance Controls

**HIPAA Configuration:**
```json
{
  "compliance": {
    "hipaa": {
      "enabled": true,
      "auditAllAccess": true,
      "encryptAtRest": true,
      "encryptInTransit": true,
      "accessControls": true,
      "dataMinimization": true,
      "retentionPolicy": "6y",
      "incidentResponse": {
        "notifyWithin": "24h",
        "contacts": ["security@acme-corp.com"]
      }
    }
  }
}
```

**SOC2 Configuration:**
```json
{
  "compliance": {
    "soc2": {
      "enabled": true,
      "trustPrinciples": [
        "security",
        "availability",
        "confidentiality"
      ],
      "controls": {
        "accessManagement": true,
        "changeManagement": true,
        "riskAssessment": true,
        "incidentManagement": true
      },
      "evidenceCollection": {
        "destination": "s3://compliance-evidence/",
        "automated": true
      }
    }
  }
}
```

---

## Security Checklists and Templates

### Pre-Deployment Security Checklist

- [ ] **Permissions configured**
  - [ ] Tool permissions set appropriately
  - [ ] Command allowlists/denylists defined
  - [ ] Path restrictions configured
  - [ ] No dangerous commands whitelisted

- [ ] **Secrets protected**
  - [ ] API keys not in environment visible to Claude
  - [ ] .env files in deny list
  - [ ] No credentials in CLAUDE.md
  - [ ] Secret scanning hooks enabled

- [ ] **Network secured**
  - [ ] Egress restricted if autonomous
  - [ ] Only necessary domains allowed
  - [ ] Proxy configured if required

- [ ] **Audit enabled**
  - [ ] Logging hooks configured
  - [ ] Log rotation set up
  - [ ] SIEM integration if enterprise

- [ ] **Sandboxing appropriate**
  - [ ] Container or VM for autonomous use
  - [ ] Resource limits configured
  - [ ] Read-only file systems where possible

- [ ] **Recovery prepared**
  - [ ] Backup hooks enabled
  - [ ] Git reflog understood
  - [ ] Recovery playbooks documented

### Secure settings.json Template

```json
{
  "$schema": "https://claude.ai/schemas/settings.json",
  "version": "1.0",

  "permissions": {
    "default": "ask",

    "tools": {
      "Read": "allow",
      "Glob": "allow",
      "Grep": "allow",
      "Edit": "allow",
      "Write": "ask",
      "Bash": "ask",
      "WebFetch": "ask",
      "WebSearch": "ask",
      "Task": "allow"
    },

    "commands": {
      "allow-always": [
        "git status",
        "git diff",
        "git log",
        "git branch",
        "git show",
        "npm test",
        "npm run lint",
        "npm run build",
        "ls",
        "pwd",
        "echo"
      ],
      "deny-always": [
        "rm -rf",
        "git push --force",
        "git reset --hard",
        "sudo",
        "chmod 777",
        "eval",
        "curl | bash",
        "wget | sh"
      ]
    },

    "paths": {
      "read": ["**/*"],
      "write": ["src/**", "tests/**", "docs/**"],
      "deny": [
        ".env*",
        "*.pem",
        "*.key",
        "**/secrets/**",
        "node_modules/**",
        ".git/config"
      ]
    }
  },

  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{
          "type": "command",
          "command": "~/.claude/hooks/gate-bash.sh"
        }]
      },
      {
        "matcher": "Write",
        "hooks": [{
          "type": "command",
          "command": "~/.claude/hooks/scan-secrets.sh"
        }]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE 2>/dev/null || true"
      }
    ],
    "SessionStart": [{
      "type": "command",
      "command": "~/.claude/hooks/audit-log.sh SessionStart"
    }],
    "SessionEnd": [{
      "type": "command",
      "command": "~/.claude/hooks/audit-log.sh SessionEnd"
    }]
  },

  "logging": {
    "enabled": true,
    "level": "info",
    "destination": "~/.claude/logs/",
    "format": "jsonl"
  }
}
```

### Security Scripts Collection

**gate-bash.sh:**
```bash
#!/bin/bash
set -euo pipefail

COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command // empty')

DANGEROUS=(
    "rm -rf"
    "rm -r /"
    "git push.*--force"
    "git reset --hard"
    "sudo"
    "chmod 777"
    "> /dev/"
    "mkfs"
    "dd if="
)

for pattern in "${DANGEROUS[@]}"; do
    if [[ "$COMMAND" =~ $pattern ]]; then
        echo "BLOCKED: $pattern" >&2
        exit 1
    fi
done

exit 0
```

**scan-secrets.sh:**
```bash
#!/bin/bash
set -euo pipefail

CONTENT=$(echo "$EVENT_DATA" | jq -r '.tool_input.content // empty')

SECRETS=(
    'sk-ant-api[0-9a-zA-Z-]{40,}'
    'AKIA[0-9A-Z]{16}'
    'ghp_[0-9a-zA-Z]{36}'
    'gho_[0-9a-zA-Z]{36}'
    '-----BEGIN.*PRIVATE KEY-----'
    'xox[baprs]-[0-9a-zA-Z-]+'
)

for pattern in "${SECRETS[@]}"; do
    if echo "$CONTENT" | grep -qE "$pattern"; then
        echo "BLOCKED: Secret detected" >&2
        exit 1
    fi
done

exit 0
```

**audit-log.sh:**
```bash
#!/bin/bash

LOG_DIR="$HOME/.claude/audit"
mkdir -p "$LOG_DIR"

jq -nc \
    --arg ts "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
    --arg event "$1" \
    --arg tool "${TOOL_NAME:-}" \
    --arg session "${SESSION_ID:-}" \
    --argjson data "${EVENT_DATA:-{}}" \
    '{ts:$ts,event:$event,tool:$tool,session:$session,data:$data}' \
    >> "$LOG_DIR/$(date +%Y-%m-%d).jsonl"
```

---

## Summary Tables

### Security Level Quick Reference

| Risk Tolerance | YOLO Mode | Sandboxing | Network | Recommended For |
|----------------|-----------|------------|---------|-----------------|
| Maximum | Never | VM + container | None | Production, enterprise |
| High | Never | Container | API only | Development, teams |
| Medium | Isolated only | Process | Allowlist | Personal, supervised |
| Low | Never on main | None | Open | Trusted, limited use |

### Tool Risk Matrix

| Tool | Risk | Mitigations |
|------|------|-------------|
| Bash | Critical | Command gates, sandboxing |
| Write | High | Path restrictions, extension limits |
| Edit | Medium | Path restrictions |
| WebFetch | Medium | Domain allowlist |
| Read | Low | Path restrictions |
| Glob/Grep | Low | Path restrictions |

### Permission Decision Tree

```
Is the action read-only?
├── Yes → Generally safe to auto-approve
└── No → Is it a known-safe command?
    ├── Yes → Consider auto-approve
    └── No → Is it potentially destructive?
        ├── Yes → Always require approval or deny
        └── No → Ask per-session
```

---

## Sources

1. Anthropic Official Documentation - Claude Code Security
2. Anthropic Official Documentation - Permissions System
3. Community patterns from claude-code-mastery.md
4. @dabit3 (Nader Dabit) - Mobile Claude Code security setup
5. Community consensus on YOLO mode safety
6. Docker security best practices
7. Linux sandboxing documentation
8. Enterprise security frameworks (SOC2, HIPAA)
9. Git security best practices
10. Secret management patterns

---

## Tags

`#security` `#permissions` `#yolo-mode` `#sandboxing` `#docker` `#network-isolation` `#secrets` `#git-safety` `#audit-logging` `#recovery` `#enterprise` `#compliance`
