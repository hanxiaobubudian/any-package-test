import { describe, expect, test } from '@jest/globals';

import { deleteSpace } from '../src/universal-func';

describe('deleteSpace删除传入的空格方法测试', () => {
  test('传入undefined或者不传', () => {
    expect(deleteSpace()).toBeUndefined();
  });
  test('传入空串', () => {
    expect(deleteSpace('')).toBe('');
  });
  test('传入null', () => {
    // @ts-ignore
    expect(deleteSpace(null)).toBeNull();
  });
  test('测试传入[]', () => {
    const result = deleteSpace([]);
    expect(result).toEqual([]);
  });
  test('测试传入{}', () => {
    const result = deleteSpace({});
    expect(result).toEqual({});
  });
  test('测试传入需要处理的数组', () => {
    const arr1 = ['123 4 ', '3', 5, '8 '];
    const result1 = deleteSpace(arr1);
    const needResult1 = ['1234', '3', 5, '8'];
    expect(result1).toEqual(needResult1);

    const arr2 = ['123 4 ', '3', 5, '8 ', {a: 'aaa ', 'b ': ' b', c: 3}];
    const result2 = deleteSpace(arr2);
    const needResult2 = ['1234', '3', 5, '8', {a: 'aaa', 'b ': 'b', c: 3}];
    expect(result2).toEqual(needResult2);
  });
  test('测试传入需要处理的对象', () => {
    const obj1 = {
      a: 'aaa a ',
      b: 'bb b',
      c: 'c',
      d: 4,
      e: null,
      f: [
        '1',
        {
          a: 'a  a',
          b: 'bb'
        },
        33,
        undefined
      ]
    };
    const result1 = deleteSpace(obj1);
    const needResult1 = {
      a: 'aaaa',
      b: 'bbb',
      c: 'c',
      d: 4,
      e: null,
      f: [
        '1',
        {
          a: 'aa',
          b: 'bb'
        },
        33,
        undefined
      ]
    };
    expect(result1).toEqual(needResult1);
  });
});


