# MCP Server Inventory

**Generated:** 2026-02-02
**Sub-Agent:** 0B - MCP Server Inventory
**Purpose:** Gate Phase 1 of design system audit

---

## Summary

| MCP Server | Status | Tools Available | Design System Relevance |
|------------|--------|-----------------|------------------------|
| **Playwright** | ACTIVE | 22 tools | HIGH - Browser testing, visual audits |
| Figma | NOT FOUND | 0 | N/A |
| GitHub | NOT FOUND | 0 | Use `gh` CLI instead |
| Browser/Fetch | NOT FOUND | 0 | Use WebFetch tool instead |

---

## Playwright MCP (ACTIVE)

**Server Status:** Connected and operational
**Tool Prefix:** `mcp__playwright__`
**Total Tools:** 22

### Navigation & Page Control

| Tool | Description | Key Parameters | Design Audit Use |
|------|-------------|----------------|------------------|
| `browser_navigate` | Navigate to a URL | `url` (required) | Load design system pages |
| `browser_navigate_back` | Go back in history | None | Navigate between pages |
| `browser_close` | Close the page | None | Cleanup after testing |
| `browser_resize` | Resize browser window | `width`, `height` | Test responsive breakpoints |
| `browser_tabs` | List/create/close/select tabs | `action`, `index` | Multi-page comparison |

### Snapshot & Screenshot

| Tool | Description | Key Parameters | Design Audit Use |
|------|-------------|----------------|------------------|
| `browser_snapshot` | Capture accessibility snapshot | `filename` (optional) | **PRIMARY** - Get page structure, ARIA, text content |
| `browser_take_screenshot` | Take visual screenshot | `type`, `filename`, `fullPage`, `element`, `ref` | Visual documentation, before/after |

### Interaction Tools

| Tool | Description | Key Parameters | Design Audit Use |
|------|-------------|----------------|------------------|
| `browser_click` | Click on element | `ref`, `element`, `button`, `modifiers` | Test interactive components |
| `browser_type` | Type into editable element | `ref`, `text`, `submit`, `slowly` | Test form inputs |
| `browser_fill_form` | Fill multiple form fields | `fields[]` with name/type/ref/value | Batch form testing |
| `browser_press_key` | Press keyboard key | `key` | Test keyboard navigation |
| `browser_hover` | Hover over element | `ref`, `element` | Test hover states |
| `browser_drag` | Drag and drop | `startRef`, `endRef` | Test drag interactions |
| `browser_select_option` | Select dropdown option | `ref`, `values[]` | Test select components |
| `browser_file_upload` | Upload files | `paths[]` | Test file inputs |

### Dialogs & Evaluation

| Tool | Description | Key Parameters | Design Audit Use |
|------|-------------|----------------|------------------|
| `browser_handle_dialog` | Handle alert/confirm/prompt | `accept`, `promptText` | Handle modals |
| `browser_evaluate` | Execute JavaScript | `function`, `ref`, `element` | Extract computed styles, measure elements |

### Debugging & Monitoring

| Tool | Description | Key Parameters | Design Audit Use |
|------|-------------|----------------|------------------|
| `browser_console_messages` | Get console logs | `level`, `filename` | Catch errors, warnings |
| `browser_network_requests` | Get network requests | `includeStatic`, `filename` | Monitor asset loading |
| `browser_wait_for` | Wait for text/time | `text`, `textGone`, `time` | Ensure page loaded |

### Advanced

| Tool | Description | Key Parameters | Design Audit Use |
|------|-------------|----------------|------------------|
| `browser_install` | Install browser | None | Setup if browser missing |
| `browser_run_code` | Run Playwright code snippet | `code` | Complex multi-step operations |

---

## Playwright MCP Workflow for Design Audits

### Basic Audit Flow

```
1. browser_navigate -> Load target page
2. browser_snapshot -> Get accessibility tree (structure, ARIA)
3. browser_evaluate -> Extract computed styles
4. browser_take_screenshot -> Visual documentation
5. browser_resize -> Test responsive breakpoints
6. browser_snapshot (again) -> Verify responsive changes
```

### Recommended Audit Checks

#### Typography Audit
```javascript
// Use browser_evaluate with:
async (page) => {
  const headings = await page.evaluate(() => {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
    return Array.from(elements).map(el => ({
      tag: el.tagName,
      text: el.textContent.slice(0, 50),
      fontSize: getComputedStyle(el).fontSize,
      fontWeight: getComputedStyle(el).fontWeight,
      lineHeight: getComputedStyle(el).lineHeight,
      fontFamily: getComputedStyle(el).fontFamily
    }));
  });
  return headings;
}
```

#### Color Audit
```javascript
// Extract all colors used on page
async (page) => {
  return await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const colors = new Set();
    elements.forEach(el => {
      const style = getComputedStyle(el);
      colors.add(style.color);
      colors.add(style.backgroundColor);
      colors.add(style.borderColor);
    });
    return [...colors].filter(c => c !== 'rgba(0, 0, 0, 0)');
  });
}
```

#### Spacing Audit
```javascript
// Check margin/padding consistency
async (page) => {
  return await page.evaluate(() => {
    const elements = document.querySelectorAll('section, article, div, p, h1, h2, h3');
    return Array.from(elements).slice(0, 20).map(el => {
      const style = getComputedStyle(el);
      return {
        tag: el.tagName,
        class: el.className.slice(0, 30),
        margin: style.margin,
        padding: style.padding
      };
    });
  });
}
```

### Responsive Breakpoint Testing

| Breakpoint | Width | Height | Device Simulation |
|------------|-------|--------|-------------------|
| Mobile S | 320 | 568 | iPhone SE |
| Mobile M | 375 | 667 | iPhone 8 |
| Mobile L | 425 | 812 | iPhone X |
| Tablet | 768 | 1024 | iPad |
| Laptop | 1024 | 768 | Small laptop |
| Desktop | 1440 | 900 | Standard desktop |
| Wide | 1920 | 1080 | Full HD |

---

## MCPs NOT Available

### Figma MCP
- **Status:** Not connected
- **Alternative:** Manual Figma inspection, export design tokens as JSON
- **Workaround:** Use WebFetch to access Figma files if public URL available

### GitHub MCP
- **Status:** Not connected
- **Alternative:** Use `gh` CLI via Bash tool
- **Available commands:** `gh pr`, `gh issue`, `gh api`, etc.

### Browser/Fetch MCP
- **Status:** Not connected
- **Alternative:** Use built-in `WebFetch` tool for URL content extraction

---

## Design System Audit Capabilities

Based on available tools, we CAN:

| Capability | Tool(s) | Confidence |
|------------|---------|------------|
| Load and navigate pages | Playwright | HIGH |
| Capture page structure | browser_snapshot | HIGH |
| Extract computed CSS | browser_evaluate | HIGH |
| Test responsive layouts | browser_resize + snapshot | HIGH |
| Screenshot documentation | browser_take_screenshot | HIGH |
| Test keyboard navigation | browser_press_key | HIGH |
| Check accessibility tree | browser_snapshot | HIGH |
| Monitor console errors | browser_console_messages | HIGH |
| Test form interactions | browser_fill_form, browser_click | HIGH |

Based on available tools, we CANNOT directly:

| Capability | Workaround |
|------------|------------|
| Access Figma designs | Export tokens, use WebFetch for public files |
| Compare to design specs | Manual comparison with screenshots |
| Extract Figma variables | Request design token export from designer |

---

## Recommendations for Phase 1

1. **Primary Tool:** `browser_snapshot` - Provides accessibility tree with element structure
2. **Secondary Tool:** `browser_evaluate` - Extract computed styles programmatically
3. **Documentation:** `browser_take_screenshot` with `fullPage: true` for visual records
4. **Testing Matrix:** Use `browser_resize` to test all 7 breakpoints

### Quick Start Command Sequence

```
1. browser_navigate { url: "http://localhost:3000" }
2. browser_snapshot {} -> Get structure
3. browser_evaluate { function: "async (page) => { ... }" } -> Get styles
4. browser_take_screenshot { type: "png", fullPage: true }
5. browser_resize { width: 375, height: 667 } -> Mobile
6. browser_snapshot {} -> Mobile structure
7. browser_take_screenshot { type: "png", filename: "mobile.png" }
```

---

## Appendix: Full Tool Signatures

### browser_snapshot
```json
{
  "filename": "optional - save to file instead of returning"
}
```

### browser_evaluate
```json
{
  "function": "required - JS function string",
  "ref": "optional - element reference from snapshot",
  "element": "optional - human-readable element description"
}
```

### browser_take_screenshot
```json
{
  "type": "png|jpeg (default: png)",
  "filename": "optional - defaults to page-{timestamp}.png",
  "fullPage": "boolean - capture full scrollable page",
  "element": "optional - human description of element",
  "ref": "optional - element reference for element screenshot"
}
```

### browser_resize
```json
{
  "width": "required - number",
  "height": "required - number"
}
```

---

**Inventory Complete.** Phase 1 is GATED - Playwright MCP is available and operational.
