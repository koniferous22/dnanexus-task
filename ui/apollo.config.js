module.exports = {
  client: {
    service: {
      name: 'api',
      url: 'http://app:3000/graphql',
      skipSSLValidation: true
    }
  },
  tagName: 'gql'
}
