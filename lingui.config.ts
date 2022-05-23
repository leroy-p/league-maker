module.exports = {
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**', '<rootDir>/src/locales', '**/*.d.ts'],
    },
  ],
  compileNamespace: 'ts',
  fallbackLocales: {
    default: 'fr',
  },
  format: 'minimal',
  locales: ['fr', 'en'],
}
