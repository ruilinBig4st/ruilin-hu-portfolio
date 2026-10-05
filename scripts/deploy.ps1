$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath (Split-Path -Parent $PSScriptRoot)

$pnpmCommand = Get-Command pnpm.cmd -ErrorAction SilentlyContinue
if (-not $pnpmCommand) {
    throw 'Install Node.js and pnpm before deploying.'
}

Write-Host 'Checking Vercel login...'
& $pnpmCommand.Source dlx vercel@latest whoami
if ($LASTEXITCODE -ne 0) {
    & $pnpmCommand.Source dlx vercel@latest login
    if ($LASTEXITCODE -ne 0) { throw 'Vercel login did not complete.' }
}

Write-Host 'Deploying the portfolio to Vercel production...'
& $pnpmCommand.Source dlx vercel@latest --prod
if ($LASTEXITCODE -ne 0) { throw 'Deployment failed. See the Vercel output above.' }
