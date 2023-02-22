// 배열 형태
function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['Hello','World'])
helloArray(['Hello',5])

// 튜플 형태
function helloTuple<T, K>(message: [T, K]): T {
  return message[0]
}

helloTuple(['Hello', 45])