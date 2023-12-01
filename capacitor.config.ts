
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
      clientId: "520770098242-hqplt1fvubopdp5o6csev8es3iu08l3o.apps.googleusercontent.com",
      androidClientId: "520770098242-hqplt1fvubopdp5o6csev8es3iu08l3o.apps.googleusercontent.com",
      iosClientId: "520770098242-udqi1okb0j4u8f16264hoi9cl39894pa.apps.googleusercontent.com"
    },
  },
};

export default config;
