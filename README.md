# bun_18preact

 Version: 0.9.1

 Author  :

 date    : 2024/09/01 

 update :

***

Bun + htmx + Preact.js + shadcn/ui

***
### Example

***
### build

* build, dev-start

```
bun run build
bun run dev

```

***
* vercel.json

```
{
    "version": 2,
    "public": true,
    "builds": [
      {
        "src": "public/**/*",
        "use": "@vercel/static"
      },        
      {
        "src": "dist/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      { "handle": "filesystem" },
      {
        "src": "/.*",
        "dest": "/dist/index.js"
      }
    ]
}
```
***
### blog


***
# License

* MIT

***

