/**
 * This file does not need to be imported to use nodecg/NodeCG,
 * but seems to at least need to exist for VSCode IntelliSense to work?
 */

// Using the alias form here seems to make other files not find the type correctly.
import { NodeCGBrowser, NodeCGStaticBrowser } from '../../../../types/browser';

export const { nodecg, NodeCG }: { nodecg: NodeCGBrowser; NodeCG: NodeCGStaticBrowser } = window;
