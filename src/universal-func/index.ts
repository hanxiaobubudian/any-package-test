import { deleteSpaceP } from "./typing";

/**
 * 去除里面的空格
 * @param value 需要去除的数据
 * @returns 去除空格后的值
 * 例如：
 * ' 123 123 ** ' ==> '123123**'
 * ['123, 1 88', 2, '3'] ==> ['123,188', 2, '3']
 * [{a: '123 1', b: '   '}, {c: 'cd   '}] ==> [{a: '1231', b: ''}, {c: 'cd'}]
 * '123' ==> '123'
 * undefined => undefined
 */
export const deleteSpace = (value?: deleteSpaceP) => {
  if (typeof value === 'string') {
    return value?.replace(/\s/g, '');
  }
  if (value && Object.prototype.toString.call(value) === '[object Object]') {
    const newValue = {};
    Object.entries(value).forEach(item => {
      newValue[item[0]] = deleteSpace(item[1]);
    });
    return newValue;
  }
  if (value && Array.isArray(value) && value?.length > 0) {
    return value.map(item => deleteSpace(item));
  }
  return value;
}

export function a() {
  
}
