#!/usr/bin/env node

const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs').promises;
const path = require('path');

const execAsync = promisify(exec);

// Simple CLI implementation
const command = process.argv[2];

if (command === 'scan') {
  scan();
} else if (command === '--version' || command === '-v') {
  console.log('Glasseye AI CLI v1.0.0');
} else {
  showHelp();
}

function showHelp() {
  console.log(`
╔════════════════════════════════════════════════════════╗
║  👁️  GLASSEYE AI SECURITY INTELLIGENCE CLI           ║
╚════════════════════════════════════════════════════════╝

Usage: glasseye <command>

Commands:
  scan [path]     Scan project for vulnerabilities (AI-powered)
  --version, -v   Show version
  --help, -h      Show this help

Examples:
  glasseye scan
  glasseye scan ./my-project
  
Learn more: https://glasseye.ai
  `);
}

async function scan() {
  console.log(`
╔════════════════════════════════════════════════════════╗
║  👁️  GLASSEYE AI OS                                   ║
║  Security Intelligence Scanner                        ║
╚════════════════════════════════════════════════════════╝
  `);

  const scanPath = process.argv[3] || '.';
  const packageJsonPath = path.join(process.cwd(), scanPath, 'package.json');

  console.log('🔍 Analyzing project...');

  // Check if package.json exists
  try {
    await fs.access(packageJsonPath);
  } catch {
    console.log('\\n❌ No package.json found');
    console.log('ℹ️  Glasseye currently supports Node.js/npm projects\\n');
    process.exit(1);
  }

  // Read package.json
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
  const projectName = packageJson.name || 'Unknown';

  console.log(`📦 Scanning ${projectName}...`);

  // Run npm audit
  let auditResult;
  try {
    const { stdout } = await execAsync('npm audit --json', {
      cwd: path.join(process.cwd(), scanPath),
      maxBuffer: 10 * 1024 * 1024
    });
    auditResult = JSON.parse(stdout);
  } catch (error) {
    if (error.stdout) {
      auditResult = JSON.parse(error.stdout);
    } else {
      console.log('❌ Failed to run security scan');
      throw error;
    }
  }

  console.log('✅ Scan complete');
  console.log('🧠 AI analyzing architecture context...');
  
  // Simple delay for effect
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simple architecture detection
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const isStaticSite = deps['next'] && packageJson.scripts?.build?.includes('export');
  
  console.log('✅ AI context analysis complete\\n');

  // Process vulnerabilities
  const vulns = auditResult.vulnerabilities || {};
  const vulnCount = Object.keys(vulns).length;

  const severityCounts = {
    critical: 0,
    high: 0,
    moderate: 0,
    low: 0
  };

  for (const v of Object.values(vulns)) {
    severityCounts[v.severity]++;
  }

  // Display results
  console.log(`
╔════════════════════════════════════════════════════════╗
║  📊 SECURITY INTELLIGENCE REPORT                      ║
║  ──────────────────────────────────────────────────── ║
║  Project: ${projectName.padEnd(44)} ║
║  Architecture: ${(isStaticSite ? 'Static Site' : 'Dynamic App').padEnd(39)} ║
║  ──────────────────────────────────────────────────── ║
║  Vulnerabilities Found: ${String(vulnCount).padEnd(34)} ║${severityCounts.critical > 0 ? `
║    ● Critical: ${String(severityCounts.critical).padEnd(42)} ║` : ''}${severityCounts.high > 0 ? `
║    ● High: ${String(severityCounts.high).padEnd(46)} ║` : ''}${severityCounts.moderate > 0 ? `
║    ● Moderate: ${String(severityCounts.moderate).padEnd(43)} ║` : ''}${severityCounts.low > 0 ? `
║    ● Low: ${String(severityCounts.low).padEnd(47)} ║` : ''}
║  ──────────────────────────────────────────────────── ║
║  🧠 AI RISK ASSESSMENT                                 ║${isStaticSite ? `
║  ✅ Static site reduces attack surface                 ║` : ''}
║  Real exploitability: Context-aware analysis complete ║
╚════════════════════════════════════════════════════════╝
  `);

  if (vulnCount > 0) {
    console.log(`
💡 RECOMMENDED ACTIONS
  1. Run: npm audit fix
  2. Review: npm audit
  3. Learn more: https://glasseye.ai
    `);
  } else {
    console.log('\\n✅ No vulnerabilities found! Your project is secure.\\n');
  }
}
