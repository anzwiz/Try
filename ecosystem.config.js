module.exports = {
  apps: [
    {
      name: "nextrade-api",
      script: "artifacts/api-server/dist/index.mjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 8080,
      },
    },
  ],
};
