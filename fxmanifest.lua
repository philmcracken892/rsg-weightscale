fx_version 'cerulean'
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'
game 'rdr3'

description 'RSG-WeightScale - Weight Scale System'
version '1.0.0'

client_scripts {
    'config.lua',
    'client/client.lua'
}

server_scripts {
    'config.lua',
    'server/server.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html'
   
}

dependencies {
    'rsg-core',
    'ox_target'
}

lua54 'yes'
