import { merge as lodashMerge } from "lodash";

/* Merge multiple objects into one, without mutating the sources
 *  input: obj<any>[]
 *  output: obj<any>
 */

export const merge = (...objects) => {
  const newObj = {};

  objects.forEach((o) => lodashMerge(newObj, o));

  return newObj;
};
