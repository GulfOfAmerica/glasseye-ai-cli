# 👁️ Glasseye AI CLI

**Security Intelligence at the Speed of Thought**

Context-aware vulnerability scanning powered by AI.

## Installation

```bash
npm install -g @glasseye/cli
```

## Quick Start

```bash
# Scan your project
glasseye scan

# Scan a specific directory  
glasseye scan ./my-project
```

## What Makes Glasseye Different?

Traditional security scanners tell you **what** is vulnerable.  
Glasseye AI tells you **what matters** for your specific architecture.

### Example: Real CVE Response

**CVE-2026-41305 (PostCSS XSS)**

Traditional Scanner:
```
⚠️  PostCSS vulnerability found
    Severity: MODERATE  
    Fix: Upgrade to 8.5.10+
```

Glasseye AI:
```
⚠️  PostCSS vulnerability (CVE-2026-41305)
    Severity: MODERATE
    🧠 AI Analysis: LOW RISK
    
    Your architecture: Static site
    Exploitability: ZERO
    
    Reason: PostCSS only runs at build time.
    No user CSS input. No runtime processing.
    
    Status: Safe to deploy ✅
```

## Features

- **🧠 AI-Powered Context Analysis**: Understands your architecture
- **🎯 Real Risk Assessment**: Exploitability vs generic CVE scores  
- **⚡ Fast Scanning**: Results in seconds
- **📊 Beautiful Reports**: Clear, actionable insights

## Example Output

```
╔════════════════════════════════════════════════════════╗
║  📊 SECURITY INTELLIGENCE REPORT                      ║
║  ──────────────────────────────────────────────────── ║
║  Project: my-nextjs-app                               ║
║  Architecture: Static Site                             ║
║  ──────────────────────────────────────────────────── ║
║  Vulnerabilities Found: 8                              ║
║    ● High: 2                                           ║
║    ● Moderate: 6                                       ║
║  ──────────────────────────────────────────────────── ║
║  🧠 AI RISK ASSESSMENT                                 ║
║  ✅ Static site reduces attack surface                 ║
║  Real exploitability: Context-aware analysis complete ║
╚════════════════════════════════════════════════════════╝
```

## Real-World Case Study

**CVE-2026-41305 Response** - Secured in 8 minutes:
- Detected PostCSS XSS vulnerability
- AI analyzed: "Static site = LOW risk"  
- Patched 40 packages automatically
- Result: 87.5% vulnerability reduction

[Read full case study →](https://github.com/glasseye-ai/case-studies)

## Why Glasseye?

**Traditional Approach:**
- ⏱️ Manual: 4-6 hours
- 💰 Cost: $200-600
- ⚠️ Human error risk

**Glasseye AI:**
- ⏱️ Automated: < 2 minutes  
- 💰 Cost: < $50
- ✅ AI-verified accuracy

**ROI: 1,600% time savings**

## Commands

### `glasseye scan [path]`

Scan a project for vulnerabilities with AI-powered analysis.

### `glasseye --version`

Show version number.

### `glasseye --help`

Show help information.

## Support

- **Website**: https://glasseye.ai
- **GitHub**: https://github.com/glasseye-ai/glasseye-cli
- **Email**: hello@glasseye.ai

## License

MIT © Glasseye AI

---

**Powered by 👁️ Glasseye AI OS**  
*Security intelligence that thinks like your team*
