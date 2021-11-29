const servo = formatMessage => ({
    name: formatMessage({
        id: 'servo.name',
        default: 'Servo',
        description: 'Name of servo'
    }),
    extensionId: 'servo',
    version: '1.0.0',
    type: 'maixduino',
    supportDevice: ['maixduino'],
    author: 'iRobochakra',
    iconURL: `asset/servo.png`,
    description: formatMessage({
        id: 'servo.description',
        default: 'Classic servo support for maixduino.',
        description: 'Description of servo'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: ''
});

module.exports = servo;
