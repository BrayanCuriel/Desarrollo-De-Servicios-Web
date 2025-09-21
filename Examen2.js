const a=[1,2,3,4,5,6,7,8,9,10];
console.log('start');
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

a.forEach(num => {
	console.log('forEach:', num);
});

queueMicrotask(() => console.log('microtask: queueMicrotask'));
Promise.resolve().then(() => console.log('microtask: Promise.then'));
setTimeout(() => console.log('macrotask: setTimeout 0ms'), 0);
console.log('end');