const localServer = formatMessage => ({
    name: formatMessage({
        id: 'localServer.name',
        default: 'LocalServer',
        description: 'Name of Local Server'
    }),
    extensionId: 'localServer',
    version: '1.0.0',
    supportDevice: 'ironKit_arduinoUno',
    author: 'iRobochakra',
    iconURL: `asset/localServer.png`,
    description: formatMessage({
        id: 'localServer.description',
        default: 'Controlling your Hardware with Local WiFi Server',
        description: 'Description of LocalServer'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['other'],
    helpLink: ''
});

module.exports = localServer;
