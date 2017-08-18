let counter = 0;

class StepsCounter {
    
    static getCounter() {
        return counter;
    }

    static increment() {
        counter = counter + 1;
    }

    static reset() {
        counter = 0;
    }
}

module.exports = StepsCounter;