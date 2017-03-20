export function resolve(...args:any[]) {
  return new Promise((resolve, reject) => {
    resolve(args);
  });
}

export function reject(...args:any[]) {
  return new Promise((resolve, reject) => {
    reject(args);
  });
}
