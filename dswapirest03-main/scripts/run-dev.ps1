<#
Run this script from PowerShell to: 
- start the server (node src/app.js)
- wait until http://localhost:3000 is available
- register a test user (tester-dev) if needed
- login and call GET /api/tasks

Usage:
  powershell -ExecutionPolicy Bypass -File .\scripts\run-dev.ps1
#>

Set-StrictMode -Version Latest

$proj = Split-Path -Parent $PSScriptRoot
Write-Host "Project path: $proj"

# Start the server (node src/app.js) and get its PID so we can stop it later if desired
Write-Host "Starting server..."
$proc = Start-Process -FilePath node -ArgumentList 'src/app.js' -WorkingDirectory $proj -PassThru
Write-Host "Server process started (PID=$($proc.Id)). Waiting for server to be ready..."

$url = 'http://localhost:3000/'
$ready = $false
for ($i = 0; $i -lt 20; $i++) {
    try {
        Invoke-RestMethod -Uri $url -Method Get -TimeoutSec 2 | Out-Null
        $ready = $true
        break
    } catch {
        Start-Sleep -Seconds 1
    }
}

if (-not $ready) {
    Write-Host "Server did not become ready in time. Check logs. PID=$($proc.Id)" -ForegroundColor Red
    exit 1
}

Write-Host "Server ready. Running test flow (register -> login -> GET /api/tasks)"

$username = 'tester-dev'
$password = 'Password123'

# Register (ignore conflict)
try {
    $body = @{ username = $username; password = $password } | ConvertTo-Json
    $reg = Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/auth/register" -Body $body -ContentType 'application/json'
    Write-Host "Register response:"; $reg | ConvertTo-Json -Depth 5 | Write-Host
} catch {
    if ($_.Exception.Response -and $_.Exception.Response.StatusCode.Value__ -eq 409) {
        Write-Host "User already exists, continuing..."
    } else {
        Write-Host "Register error:" $_.Exception.Message -ForegroundColor Red
    }
}

# Login
try {
    $body = @{ username = $username; password = $password } | ConvertTo-Json
    $login = Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/auth/login" -Body $body -ContentType 'application/json'
    Write-Host "Login response:"; $login | ConvertTo-Json -Depth 5 | Write-Host
} catch {
    Write-Host "Login error:" $_.Exception.Message -ForegroundColor Red
    exit 1
}

if (-not $login.token) {
    Write-Host "No token returned from login" -ForegroundColor Red
    exit 1
}

# Call protected endpoint
try {
    $headers = @{ Authorization = "Bearer $($login.token)" }
    $tasks = Invoke-RestMethod -Method Get -Uri "http://localhost:3000/api/tasks" -Headers $headers
    Write-Host "GET /api/tasks response:"; $tasks | ConvertTo-Json -Depth 5 | Write-Host
} catch {
    Write-Host "Error calling /api/tasks:" $_.Exception.Message -ForegroundColor Red
    if ($_.Exception.Response) { $resp = $_.Exception.Response.GetResponseStream(); $reader = New-Object System.IO.StreamReader($resp); $text = $reader.ReadToEnd(); Write-Host $text }
}

Write-Host "Test flow finished. Server is running with PID $($proc.Id). To stop it run: Stop-Process -Id $($proc.Id) -Force"
