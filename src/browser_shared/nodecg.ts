// Using the alias form here seems to make other files not find the type correctly.
import { NodeCGBrowser, NodeCGStaticBrowser } from '../../../../types/browser';

export const { nodecg, NodeCG }: { nodecg: NodeCGBrowser; NodeCG: NodeCGStaticBrowser } = window;
