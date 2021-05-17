@echo off
cd /d "%~dp0"


attrib . | find "R"
if errorlevel 1 goto:r+
if errorlevel 0 goto:r-

:r+
echo +r
attrib +r .
attrib +h desktop.ini
attrib +h %~nx0
attrib +h folder.*
goto:refresh

:r-
echo -r
attrib -r .
attrib -h -s desktop.ini
attrib -h %~nx0
attrib -h folder.*
goto:refresh

:refresh
call ie4uinit -show
@REM pause

