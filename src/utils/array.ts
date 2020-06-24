/**
 * uniq(arr)
 * dedupe arrays
 * 
 * @param arr: string[]
 * @returns arr: string[]
 */
const uniq = (arr: string[]) => arr.filter((a, i) => arr.indexOf(a) === i);

export {
  uniq
};