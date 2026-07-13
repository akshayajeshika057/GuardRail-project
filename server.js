// GuardRail Ultimate Automation Testing File

// 1. Target for Secret-Scan (TruffleHog)
const TEST_GITHUB_SECRET = "ghp_UltimatePipelineVerificationToken99999";

// 2. Target for SAST-Scan (Semgrep)
// 'eval()' is a dangerous function that allows remote code execution vulnerabilities
const userDangerousInput = "console.log('Testing GuardRail')";
eval(userDangerousInput); 

console.log("Multi-stage security gates active...");
