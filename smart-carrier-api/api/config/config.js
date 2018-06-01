const config = {
    default: {
        nodeApiRoot:'/',
        host :'http://localhost:8080'
    },
    test: {
        nodeApiRoot:'/*',
        host :'http://test.smartcarrier.redbee.io/api'
    },
    production: {
        nodeApiRoot:'/*',
        host :'http://smartcarrier.redbee.io/api'
    }
    
};

exports.get = function get(env) {
    console.log('node env:' + env);
    return config[env] || config.default;
};

