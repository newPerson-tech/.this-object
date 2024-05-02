let ladder = {
    step: 0,
    up: function () {
        this.step++; // Increment the step
        return this; // Return the ladder object
    },
    down: function () {
        this.step--; // Decrement the step
        return this; // Return the ladder object
    },
    showStep: function () {
        console.log(this.step); // Log the current step
        return this; // Return the ladder object
    }
};

// Chained method calls
console.log(ladder.up().up().down().showStep());