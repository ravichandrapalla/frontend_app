const config = {
  apiBaseUrl: () => {
    const env = import.meta.env.MODE;
    switch (env) {
      case "development": {
        return import.meta.env.VITE_API_DEVELOPMENT;
      }
      default: {
        return null;
      }
    }
  },
};
export default config;
