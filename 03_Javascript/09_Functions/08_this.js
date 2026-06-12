const arr=[10,20,30,50];

Array.prototype.filtered = function(callback) {
    const answer = [];

    for (let num of this) {
        if (callback(num)) {
            answer.push(num);
        }
    }

    return answer;
};

const a=[180,210,30,50,10];
const result = a.filtered((num) => num > 20);

console.log(result);