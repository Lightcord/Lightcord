[![Discord](https://img.shields.io/discord/705908350218666117?logo=discord&style=flat-square&color=%237289DA)](https://discord.gg/7eFff2A)
![JS](https://img.shields.io/badge/--yellow?logo=javascript&style=flat-square)
![TS](https://img.shields.io/badge/--blue?logo=typescript&style=flat-square)
[![HitCount](http://hits.dwyl.com/Lightcord/Lightcord.svg)](http://hits.dwyl.com/Lightcord/Lightcord)
<br />
[![PayPal](https://img.shields.io/badge/donate-PayPal-blue?logo=PayPal&style=flat-square)](https://paypal.me/jenwina)
[![BTC](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/bitcoin.json&style=flat-square)](https://unixkeys.github.io/cryptodonate/btc.html?address=14hL2fPS2ASoe8Hcif87EqCS5AGHrepGKp&note=https://github.com/phorcysed)
[![CDN](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/cdn.json&style=flat-square)](https://unixkeys.github.io/cryptodonate/cdn.html?address=CbdW3pR4HBWJ6wyc1JeNXP4L2fh8QiL85v&note=https://github.com/phorcysed)
[![BCH](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/bitcoincash.json&style=flat-square)](https://unixkeys.github.io/cryptodonate/bch.html?address=qzqwhfyvkl324fue86r55q656nftfmxkhsn6qugenq&note=https://github.com/phorcysed)
[![XMR](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/monero.json&style=flat-square)](https://unixkeys.github.io/cryptodonate/xmr.html?address=42pGf1KHHpqaifJd3TtWSdcTmhGVwFp24cGxDoqaYLQJ6rH4pM7KqtUdTpoyxHScDTSJpPA2Bnv19b1bs2uPXgSMH2KYkwj&note=https://github.com/phorcysed)
[![ETH](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/ethereum.json&style=flat-square)](https://unixkeys.github.io/cryptodonate/eth.html?address=0xEFE45F22Ee844bf2Ba0E4d853FA0bC8c028fAfFe&note=https://github.com/phorcysed)
[![LTC](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/litecoin.json&style=flat-square)](https://unixkeys.github.io/cryptodonate/ltc.html?address=LNTmfMjHJgTHaB7rj8ZuWWuU1XkP2YeGCA&note=https://github.com/phorcysed)
---
# Lightcord
A simple - customizable - Discord Client

## What's this ?
[Lightcord](https://lightcord.org) is a simple and customizable client for Discord.
It includes [BandagedBD](https://github.com/rauenzi/BetterDiscordApp), [Glasstron](https://github.com/AryToNeX/Glasstron) and a [discord.js-like api](https://github.com/Lightcord/Lightcord/tree/master/DiscordJS).

## Informations
Lightcord doesn't *patch* Discord with it's content. If it was, Discord could update itself and break the patch. That's why Lightcord is a standalone Discord client. Just grab the latest release version you need, and launch it !

## Installing 
You can download a release from the [releases tab](https://github.com/Lightcord/Lightcord/releases).

## Running from source
Prequeresites: Node.js, NPM
To run from source, follow these instructions:
```sh
git clone https://github.com/Lightcord/Lightcord
cd Lightcord
npm run devInstall # Mac/Linux, run "npm run devInstall:64"
npm test
```
*You will have to do that everytime you pull/clone*
<br/>
Lightcord will launch next. You can see you have done it right by looking at the icon. 
![icon](https://github.com/Lightcord/Lightcord/blob/master/imagery/68747470733a2f2f692e696d6775722e636f6d2f72486e73504e4f2e706e67.png?raw=true)
<br />
Then everytime you want to launch it just type in
```sh
npm run run
```

*You can find an experimental GNU/Linux tutorial in our Discord, or use the AUR*

## AUR (unofficial)
https://aur.archlinux.org/packages/lightcord-bin/
If you don't know how to install from the AUR, you can follow [this](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_and_upgrading_packages) tutorial, but I would recommend using an AUR helper such as ``yay``.

## Other linux distribution
You can also install it via this install script. It will automatically :
- Download the latest Lightcord stable release from the official dev server.
- Extract its file, and rename it to a more conventional ¨Lightcord¨ folder.
- Install the Lightcord files in /opt/.
- Add execution rights to the Lightcord executable to be able to launch it.
- Download an apropriate .desktop file and install it in /usr/share/applications.
- Add executions rights to the .desktop file to be able to launch Lightcord from it.
- Download the Lightcord icon in an .svg format, and will install it in /usr/share/pixmaps.

## Install script

*The script needs to be run as root to install Lightcord.* 
*Please install the "unzip" package before executing this script as this script depends on it.* 
- Run `wget https://raw.githubusercontent.com/Lightcord/Lightcord/master/Lightcord_installer.sh`
- Then 'chmod +x Lightcord_installer.sh' # to make the script executable
- Then: `sudo bash Lightcord_installer.sh`
- To remove it: `rm Lightcord_installer.sh`

## Features
* **BetterDiscord** Themes/Plugins
* **Native** Custom RPC (No ban chance)
* Blocking Discord's **trackers**
* **Free emotes** (normal emotes) to use everywhere for Lightcord users
* **Login with token** (user/bot) [Make **server** calls with bots]
* DM Adverts blocker (**AdBlock**) [Even in embeds]
* File certification/approval (tells you if a **file is safe or not**)
* Prevent **malicious** plugins [File scanner]
* **Always-On-Top** feature (great to chat while coding)
* Hide sensitive informations (blurry e-mail)
* Great scripting API
* Account information section
* Developer mode / experiments (get discord features before anyone else without updating)
* Experimental tabs
* Select your HypeSquad (manually/without doing the quizz)
* Badges (Lightcord owners have badges so you know who to trust)

### Soon
* Username history
* Custom BetterDiscord location (custom themes/plugins location) [more portability]

## BetterDiscord
BetterDiscord (BandagedBD) is already installed (modified version).
You can go into your settings to manage plugins. 

Because it's more painful than anything else, global emotes are not supported on Lightcord. They have been removed. 
The freeze caused by the emotes downloading at startup was annoying. So we removed them.

## Plugins & Themes
Plugins and themes are not in the standard BetterDiscord folder. They have been moved because betterdiscord supports only stable, ptb and canary release. Using the same directory could cause problems with settings.

They are located in `%AppData%/Lightcord_BD`. This is the main folder for BetterDiscord.
