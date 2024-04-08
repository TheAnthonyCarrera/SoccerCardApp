@echo off

tasklist /FI "IMAGENAME eq pgAdmin4.exe" 2>NUL | find /I /N "pgAdmin4.exe">NUL
if "%ERRORLEVEL%"=="0" (
    REM run the backend
    start mvn clean package
) else (
    echo "database is not running, run it first then try again."
    pause
    exit /B
)