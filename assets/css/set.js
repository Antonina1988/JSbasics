const s1 = new Set([1, 2, 3])
console.log('s1.has(3) :>> ', s1.has(3));
console.log('s1.has(4) :>> ', s1.has(4));
s1.add(1) .add(2) .add(5);
console.log('s1 :>> ', s1);
for(const item of s1) {
console.log('item :>> ', item);
}
const sum = new Set([1+2+3+5])
console.log(sum);
s1.delete(2)
console.log('s1 :>> ', s1);
s1.clear()
console.log('s1 :>> ', s1);


const s2 = new Set([1, 6, 9, 4, 9, 1, 5, 6])
console.log('s2 :>> ', s2);
s2.add(5) .add(10) .add(11)
console.log('s2 :>> ', s2);


