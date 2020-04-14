# MORS
Android Open Source Old School RuneScape Helper

This is not a client, it draws on top of the original OSRS client.

Your device needs to be rooted to use this application.

Only works for Android

Uses Frida.js to instrument the client, you will need to download the frida-server (https://github.com/frida/frida/releases) and put it at /data/local/tmp/ on your phone filesystem

# Whats working?
* At the moment nothing!
  * hpbubble.js will show your current HP on top of the client
  * hookfun.js will hook a class.function() (has 2 parameters, 1: class, 2: function)
  * Still not implemented integer deobfuscation (harder than pc deobfuscation)

# How to use
* Complete the first time setup (root phone and add frida-server).
* Download and install the apk.
* Open client and log in
* Open the app.
* All the plugins are in javascript (you can test hpbubble.js)
* Once a plugin is running you can switch back to client and play.

# Contributing
* Make a fork
* Test all changes before submitting
* Submit a pull request with details on the changes and why it should be submitted.
* By submitting you are agreeing that you are legally allowed to contribute the code provided and are not under any arbitration agreements.


All images used are copyright of their respective owners.
Runescape related images are copyright of Jagex Ltd.
