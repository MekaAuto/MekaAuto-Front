
import { type CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.auto.meka',
  appName: 'Meka Auto',
  webDir: 'dist',
  server: {
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "520770098242-hqplt1fvubopdp5o6csev8es3iu08l3o.apps.googleusercontent.com",
      forceCodeForRefreshToken: false,
      clientId: "520770098242-hqplt1fvubopdp5o6csev8es3iu08l3o.apps.googleusercontent.com"
    },
  },
};

export default config;
