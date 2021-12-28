/**
 * The RootLocationContextFromURL Plugin factors a RootLocationContext out of the first slug of the current URL.
 */
import {
  ContextsConfig,
  makeRootLocationContext,
  TrackerConsole,
  TrackerPluginConfig,
  TrackerPluginInterface
} from "@objectiv/tracker-browser";

export class RootLocationContextFromURLPlugin implements TrackerPluginInterface {
  readonly console?: TrackerConsole;
  readonly pluginName = `RootLocationContextFromURLPlugin`;

  /**
   * The constructor is merely responsible for processing the given TrackerPluginConfiguration `console` parameter.
   */
  constructor(config?: TrackerPluginConfig) {
    this.console = config?.console;

    if (this.console) {
      this.console.log(`%c｢objectiv:${this.pluginName}｣ Initialized`, 'font-weight: bold');
    }
  }

  /**
   * Generate a fresh RootLocationContext before each TrackerEvent is handed over to the TrackerTransport.
   */
  beforeTransport(contexts: Required<ContextsConfig>): void {
    const pathname = location.pathname;
    const rootLocationContextId = pathname === '/' ? 'introduction' : pathname.split('/')[1].trim().toLowerCase();
    if(rootLocationContextId){
      contexts.location_stack.unshift(makeRootLocationContext({ id: rootLocationContextId }));
    } else {
      this.console.error(`%c｢objectiv:${this.pluginName}｣ Could not generate a RootLocationContext from ${location.pathname}`, 'font-weight: bold')
    }
  }

  /**
   * Make this plugin usable only on web, eg: Document and Location APIs are both available
   */
  isUsable(): boolean {
    return typeof document !== 'undefined' && typeof document.location !== 'undefined';
  }
}