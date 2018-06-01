const config = {
    default: {
        nodeApiRoot:'/',
        host :'http://localhost:8080',
        headers: {
            consumerName: '1',
        }
    },
    test: {
        nodeApiRoot:'/',
        host :'http://localhost:3001',
        headers: {
            apiKey: '5Dgvqqmxtp4B9KzUu1dgfVkGq7RfAPBx',
        }
    },
    production: {
        nodeApiRoot:'/',
        host :'http://smartcarrier.redbee.io/api',
        headers: {
            apiKey: 'EdrMEMWeLaNozKqxyc96U1UU7XYrH62W',
        }
    }
    
};

exports.get = function get(env) {
    console.log('node env:' + env);
    return config[env] || config.default;
};

