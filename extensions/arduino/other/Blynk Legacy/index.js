const Blynk = formatMessage => ({
    name: formatMessage({
        id: 'Blynk.name',
        default: 'Blynk Legacy',
        description: 'Name of Blynk legacy'
    }),
    extensionId: 'Blynk',
    version: '1.0.0',
    supportDevice: 'arduinoEsp8266',
    author: 'iRobochakra',
    iconURL: `asset/Blynk.png`,
    description: formatMessage({
        id: 'Blynk.description',
        default: 'Blynk platform powers low-batch manufacturers of smart home products, complex HVAC systems, agricultural equipment, and everyone in between',
        description: 'Description of Blynk legacy'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
	library: 'lib',
    tags: ['other'],
    helpLink: 'https://blynk.io/'
});

module.exports = Blynk;
