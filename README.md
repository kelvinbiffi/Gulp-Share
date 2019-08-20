# Gulp Share

Quick gulp configuration to share your local project with your team

## Install

```
npm install
```

## Share

```
npm run share -- --server <URL>
```
Where:
- \<URL\> is the localhost project you want share. Ex.: http://localhost:PORT/

## OUTPUT

The console output will display the Local and External host

```
[13:55:48] Using gulpfile ..\Gulp Share\gulpfile.js
[13:55:48] Starting 'proxy'...
[Browsersync] Proxying: http://localhost:PORT
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
    External: http://172.18.148.113:3000 <- (Use this link to share)
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ---------------------------------------
```