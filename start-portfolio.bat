@echo off
title Adepu Koushal - Cinematic Portfolio Server
echo ========================================================
echo   ADEPU KOUSHAL - CINEMATIC FILMMAKER PORTFOLIO
echo   Starting local preview server...
echo ========================================================
echo.
cd /d "%~dp0"
echo Serving from %CD%
echo Open your browser at: http://localhost:3000
echo.
start http://localhost:3000
npx -y serve -l 3000
pause
