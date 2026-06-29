import { defineConfig, createLogger } from 'vite';
import util from 'util';

// 1. Create a custom logger
const logger = createLogger();
const originalError = logger.error;

// 2. Override the error function to force-inspect hidden objects
logger.error = (msg, options) => {
  if (typeof msg === 'object' && msg !== null) {
    // This forces Node to evaluate the [Getter/Setter] and print the full internal Rust/Rolldown errors
    console.error('🚨 DETAILED BUILD ERROR DETECTED:');
    console.error(util.inspect(msg, { showHidden: true, depth: null, colors: true }));
  }
  originalError(msg, options);
};

export default defineConfig({
  // 3. Pass the custom logger to Vite
  customLogger: logger,
  // ... rest of your config (plugins, etc.)
});


