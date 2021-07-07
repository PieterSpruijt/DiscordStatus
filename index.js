const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
})
let info = [
    {
        details: "Verified Bot",
        state: "250+ guilds",
        largeImageKey: "essentials",
        largeImageText: "250+ guilds",
        buttons: [
            {
            label: "Invite",
            url: "https://dsc.gg/essentials"
        },
        {
            label: "Support Server",
            url: "https://discord.gg/Y8y4qPKNW4"
        }
    ]
    },
    {
        details: "Verified Bot",
        state: "150+ commands",
        largeImageKey: "essentials",
        largeImageText: "150+ commands",
        buttons: [
            {
            label: "Invite",
            url: "https://dsc.gg/essentials"
        },
        {
            label: "Support Server",
            url: "https://discord.gg/Y8y4qPKNW4"
        }
    ]
    },
    {
        details: "Verified Bot",
        state: "250+ guilds",
        largeImageKey: "essentials",
        largeImageText: "250+ guilds",
        buttons: [
            {
            label: "Invite",
            url: "https://dsc.gg/essentials"
        },
        {
            label: "Support Server",
            url: "https://discord.gg/Y8y4qPKNW4"
        }
    ]
    },
    {
        details: "Verified Bot",
        state: "150+ commands",
        largeImageKey: "essentials",
        largeImageText: "150+ commands",
        buttons: [
            {
            label: "Invite",
            url: "https://dsc.gg/essentials"
        },
        {
            label: "Support Server",
            url: "https://discord.gg/Y8y4qPKNW4"
        }
    ]
    }
]

rpc.on('ready', () => {
    let index = Math.floor(Math.random() * (info.length - 1) + 1);
    console.log(`Status ready`)
    rpc.setActivity(info[index]);
    setInterval(() => {
        index = Math.floor(Math.random() * (info.length - 1) + 1);
        rpc.setActivity(info[index]);
    }, 5000);
});

rpc.login({ clientId: "775055776854441985" })