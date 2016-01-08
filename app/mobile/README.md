#ISSUE 4422

##Introduction

cd app/mobile
cp package.dist.json package.json
vim package.json and set 
    config.rooturl : http://ServerIp:Port
    config.port : same port than in config.rootUrl
    config.mobileserver: the same value than in config.rootUrl
npm run-script build
npm run-script sign-apk // you need to define config.javakeystore* in package.json, but you can also sign manually your apk

##Reproduction

Run the server on the same server than http://ServerIp, and with the same package.json
Install the apk to an emaulator and an android smartphone

###Open a browser and go to http://ServerIp:Port
Expected : you should see a page with 
    isServer: true
    isClient: false
    isCordova: false
    rootUrl: http://ServerIP:Port/
    ddpUrl: http://ServerIP:Port/
    mobileRootUrl: http://ServerIP:Port
    mobileDdpUrl: http://ServerIP:Port
    
    And also on cite at bottom

###Open the application in the emulator
Expected : the same thing that previously
Real : It begins with the right datas, then after the app get the cache refreshed, it refresh the app and nothing appear, or with wrong values

###Open the application in the smartphone
Expected : the same thing that in first test
Real : the same thing thant in emulator
