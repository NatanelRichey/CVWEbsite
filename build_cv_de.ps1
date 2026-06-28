# Standalone build script for Data Engineering CV only.
# Does NOT touch cv.tex, generate_cv_pdf.py, or public/CV.pdf.
# Output: CV_DE.pdf in project root (temporary, local use).

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$pdflatex = Get-Command pdflatex -ErrorAction SilentlyContinue
if (-not $pdflatex) {
    $miktex = Join-Path $env:LOCALAPPDATA "Programs\MiKTeX\miktex\bin\x64\pdflatex.exe"
    if (Test-Path $miktex) { $pdflatex = $miktex } else { Write-Error "pdflatex not found" }
} else { $pdflatex = $pdflatex.Source }

Write-Host "Building Data Engineering CV (cv-de.tex -> CV_DE.pdf)..."
& $pdflatex -interaction=nonstopmode -jobname=CV_DE "cv-de.tex" | Out-Null
& $pdflatex -interaction=nonstopmode -jobname=CV_DE "cv-de.tex" | Out-Null

$out = Join-Path $root "CV_DE.pdf"
if (Test-Path $out) {
    Write-Host "Done. Output: $out"
} else {
    Write-Error "CV_DE.pdf was not created."
}

# Optional: remove aux files produced by cv-de (keep repo clean)
Remove-Item "CV_DE.aux", "CV_DE.log", "CV_DE.out" -ErrorAction SilentlyContinue
