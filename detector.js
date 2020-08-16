const path = require("path")

const basePath = path.resolve(process.env.BASE_PATH || __dirname) // extnameで取るべき？

const stats = JSON.parse(path.resolve(basePath, process.argv[0] || "stats.json"));

// moduleからusedExportsの配列を取り出す

// usedとprovidedの差分からunusedなものを取り出す

// unusedなものを削除する(ast使ってexportされている一覧から安全に削除。それに依存している関数等々も一緒に削除が必要そう)
