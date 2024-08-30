// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const cats2 = cats.slice();
    cats2.push("Broom");
    return cats2;
}

function prependCat(name) {
    const cats3 = cats.slice();
    cats3.unshift("Arnold");
    return cats3;
}

function removeLastCat(name) {
    const cats4 = cats.slice();
    cats4.pop();
    return cats4;
}

function removeFirstCat(name) {
    const cats5 = cats.slice();
    cats5.shift();
    return cats5
}