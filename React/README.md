- Dev server is inside ./confusion
- Deployment server and database is inside ./json-server
- For dev mode: run 2 servers concurrently
- cd into confusion
```
yarn start # default port is 3000
```
- cd into json-server
```
json-server --watch db.json -p 3001 -d 2000
````
