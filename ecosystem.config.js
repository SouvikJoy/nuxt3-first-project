module.exports = {
  apps: [
    {
      name: 'Portfolio',
      exec_mode: 'fork',
      instances: 'max',
      script: './.output/server/index.mjs',
      args: 'start',
    },
  ],
}
