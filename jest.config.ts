import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    // TypeScriptでテストを記述するため
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};
export default config;

// Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };
