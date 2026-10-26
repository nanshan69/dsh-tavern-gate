// 门后面真正的酒馆 host。
// 现在先指向一个空壳包（用于验证“打开/关闭/重启”链路），
// 移植完成后把 dsh-tavern-host 的内容换成酒馆真正的 lib/index.js，
// 这个文件不用改。
export * from 'dsh-tavern-host'
