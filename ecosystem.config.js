module.exports = {
    apps: [{
        name: 'logistic-auth',
        script: 'dist/main.js',
        instances: 1,
        autorestart: true,
        exec_mode: 'cluster',
    }]
}