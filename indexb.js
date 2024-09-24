const generator = function* generator() {
    const a = yield Promise.resolve(2);
    const b = yield Promise.resolve(1);
    console.log(a + b);
    return a + b;
}

const itr = generator();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);