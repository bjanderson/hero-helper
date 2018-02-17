declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var APP_METADATA: any;

interface APP_METADATA {
  ENV: string;
  VERSION: string;
}

interface GlobalEnvironment {
  APP_METADATA;
}

declare var System: SystemJS;
interface SystemJS {
  import: (path?: string) => Promise<any>;
}
