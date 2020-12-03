import Utils from "./utils"

const dispatcher = window.Lightcord.DiscordModules.dispatcher
const ChannelModule = BDModules.get(e => e.default && e.default.getChannel && e.default.hasChannel)[0].default
let relationShipModule = BDModules.get(e => e.default && e.default.addRelationship)[0]
let DMModule = BDModules.get(e => e.default && e.default.closePrivateChannel)[0]

const blocked = {}

let userModule = BDModules.get(e => e.default && e.default.getCurrentUser)[0]
function getCurrentUser(){
    if(userModule)return userModule.default.getCurrentUser()
    return null
}

export default new class AntiBotDM {
    constructor(){
        this.antiDM = this.antiDM.bind(this)
        this.enabled = false
    }

    enable(){
        if(this.enabled)return
        this.enabled = true

        dispatcher.subscribe("MESSAGE_CREATE", this.antiDM)
    }

    disable(){
        if(!this.enabled)return
        this.enabled = false

        dispatcher.unsubscribe("MESSAGE_CREATE", this.antiDM)
    }

    antiDM(ev){
        if(!ev.message.author.bot)return
        if(ev.message.author.id === getCurrentUser().id)
        if(ev.message.guild_id)return

        const channel = ChannelModule.getChannel(ev.message.channel_id)
        if(!channel)return // might be broken

        if(channel.type !== 1)return

        if(blocked[ev.message.author.id])return // If the user unblocks the bot, Don't block it again.

        if(scanMessage(ev.message)){
            blocked[ev.message.author.id] = true
            Utils.showToast(`[AdBlock]: Blocked ${ev.message.author.username}#${ev.message.author.discriminator}`, {
                "type": "warning"
            })
            if(!relationShipModule)relationShipModule = BDModules.get(e => e.default && e.default.addRelationship)[0]
            relationShipModule.default.addRelationship(ev.message.author.id, {
                location: "ContextMenu"
            }, 2)
            if(!DMModule)DMModule = BDModules.get(e => e.default && e.default.closePrivateChannel)[0]
            DMModule.default.closePrivateChannel(channel.id, false)
        }
    }
}

function scanMessage(message){
    if(/(discord(?:app\.com|\.(?:com|gg)))/gi.test(message.content))return true
    if(EmbedsContains(message, "discord.gg/") || EmbedsContains(message, "discord.com/invite/") || EmbedsContains(message, "discordapp.com/invite/"))return true

    return false
}
function EmbedsContains(message, search){
    let embeds = message.embeds || []
    if(embeds.length === 0)return false
    return embeds.map(embed => {
        if(embed.type !== "rich")return false
        if((embed.title || "").includes(search))return true
        if((embed.description || "").includes(search))return true
        if(((embed.footer || "") && embed.footer.text || "").includes(search))return true
        if((embed.fields || []).map(e => {
            return e.value.includes(search) || e.name.includes(search)
        }).includes(true))return true
        return false

    }).includes(true)
}