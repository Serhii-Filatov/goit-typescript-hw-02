/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const string: KeyValuePair<string, string> = { key: "name", value: "Ihor" };
const number: KeyValuePair<string, number> = { key: "age", value: 31 };

export {};