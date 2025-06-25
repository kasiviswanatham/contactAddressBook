// jest.config.js
export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }],
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        isolatedModules: true, // Mirror tsconfig.json
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.scss$': 'identity-obj-proxy',
  },
  extensionsToTreatAsEsm: ['.ts'],
}
