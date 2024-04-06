import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './openapi.yaml',
  apiFile: './store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFiles: {
    './store/placeApi.ts': {
      filterEndpoints: [/place/i],
    },
    './store/searchApi.ts': {
      filterEndpoints: [/search/i],
    },
    './store/user.ts': {
      filterEndpoints: [/user/i],
    },
  },
  hooks: true,
};

export default config;
