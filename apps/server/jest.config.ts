// eslint-disable-next-line import/no-default-export
export default {
  displayName: 'server',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/apps/server-nest',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.module.ts',
    '!src/**/*.entity.ts',
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coveragePathIgnorePatterns: [
    'src/constants',
    'main.ts',
    'ConsoleSpanExporter.ts',
    'prisma.ts',
    'prisma.service.ts',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
        outputName: 'server-report.xml',
        suiteName: 'server',
      },
    ],
  ],
}
