import {settingsCookie} from "../0globals";
import BDV2 from "./v2";
import webpackModules from "./webpackModules";
import Utils from "./utils";
import DOM from "./domtools";

import V2C_PublicServers from "../ui/publicservers/publicServers";
import Layer from "../ui/publicservers/layer";

export default new class V2_PublicServers {

    constructor() {
        this._appendButton = this._appendButton.bind(this);
        window.Lightcord.BetterDiscord.V2_PublicServers = this
    }

    get component() {
        return BDV2.react.createElement(Layer, {rootId: "pubslayerroot", id: "pubslayer"}, BDV2.react.createElement(V2C_PublicServers, {rootId: "pubslayerroot"}));
    }

    get root() {
        const _root = document.getElementById("pubslayerroot");
        if (!_root) {
            if (!this.injectRoot()) return null;
            return this.root;
        }
        return _root;
    }

    injectRoot() {
        let [
            classNameLayers
        ] = [
            BDModules.get(e => e.layers && e.layer)[0].layers.split(" ")[0]
        ]
        const layers = DOM.query(".layers, ."+classNameLayers);
        if (!layers) return false;
        layers.append(DOM.createElement("<div id='pubslayerroot'>"));
        return true;
    }

    render() {
        const root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: .layers");
            return;
        }
        BDV2.reactDom.render(this.component, root);
    }

    get button() {
        const btn = DOM.createElement(`<div id="bd-pub-li" class="${BDV2.guildClasses.listItem}">`);
        if (!settingsCookie["bda-gs-1"]) btn.style.display = "none";
        const label = DOM.createElement(`<div id="bd-pub-button" class="${"wrapper-25eVIn " + BDV2.guildClasses.circleButtonMask}">public</div>`);
        label.addEventListener("click", () => {this.render();});
        btn.append(label);
        return btn;
    }

    _appendButton() {
        let [
            classNametutorialContainer
        ] = [
            Utils.removeDa(BDModules.get(e => e.downloadProgress && e.tutorialContainer)[0].tutorialContainer)
        ]
        if (DOM.query("#bd-pub-li")) return;
        const guilds = DOM.query(`div.${classNametutorialContainer} > div`);
        DOM.after(guilds, this.button);
    }

    addButton() {
        if (this.guildPatch) return;
        const GuildList = webpackModules.find(m => m.default && m.default.displayName == "NavigableGuilds");
        const GuildListOld = webpackModules.findByDisplayName("Guilds");
        if (!GuildList && !GuildListOld) Utils.warn("PublicServer", "Can't find GuildList component");
        this.guildPatch = Utils.monkeyPatch(GuildList ? GuildList : GuildListOld.prototype, GuildList ? "default" : "render", {after: this._appendButton});
        this._appendButton();
    }

    removeButton() {
        this.guildPatch();
        delete this.guildPatch;
        DOM.query("#bd-pub-li").remove();
    }
};