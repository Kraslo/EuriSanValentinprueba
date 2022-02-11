module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/send',  // this path will be redirected to 404 
        destination: '/404',
        // permanent: true,
      },
    ]
  },
}
