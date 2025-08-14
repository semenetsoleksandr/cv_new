import type { Config } from 'jest';

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.spec.ts',
        '!src/main.tsx',
        '!src/server.ts',
        '!src/types/**',
        '!src/vite-env.d.ts',
        '!src/**/StaticJobs.ts'
    ],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
        'json',
        'text',
        'lcov',
    ],

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    // An array of file extensions your modules use
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    preset: 'ts-jest',
    testMatch: ['**/src/**/*.spec.{ts,tsx}'],
    testEnvironment: 'jsdom',
    transform: {
        '\\.tsx?$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' },
        ],
    },

    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],

};

export default config;
