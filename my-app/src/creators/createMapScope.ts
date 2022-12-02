import { createContext } from "react";
import { MapScopeShape } from "@sshah83/components"

/**
 * Create a map instance scope to use with {@link MapInstanceScope}, such as:
 *
 *    export const myScope = createMapScope();
 *
 * That is then provided to the application as:
 *
 *    <MapInstanceScope scope={myScope}>
 *
 * And rendered into an active part of DOM as:
 *
 *    <Map scope={myScope}>
 *
 * See {@link MapInstanceScope} and {@link Map} for more details.
 */
export const createMapScope = () => createContext({} as MapScopeShape);
