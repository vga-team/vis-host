import type { MapView, PluginContainer } from "./basic";

export type PluginDefinition = {
  import: string;
  container: PluginContainer;
  containerProps?: any;
  props?: any;
};

export interface GWFVisHostConfig {
  favicon?: string;
  pageTitle?: string;
  preferCanvas?: boolean;
  accessLocalFiles?: boolean;
  view?: MapView;
  imports?: { [name: string]: string };
  plugins?: PluginDefinition[];
}
