function helloBasic<T, U>(message: T, comment: U): T {
  return message
}

helloBasic<string, number>('Mark', 39);
helloBasic(25 , 44);