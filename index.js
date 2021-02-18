const rpc = require("discord-rpc")
const config = require("./config.json")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	console.log("[+] Loading...")
	console.log("[+] Your RPC is now displaying with buttons!")
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : config.details,
assets : {
large_image : config.largeimage,
large_text : config.largetext
},
buttons : [{label : config.button1 , url : config.url1},{label : config.button2,url : config.url2}]
}
})
})
client.login({ clientId : config.clientid }).catch(console.error);