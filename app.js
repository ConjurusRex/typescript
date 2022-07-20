"use strict";
function createGoal(title, desc) {
    // generic util type: Partial -> sets all props of Goal to optional
    let courseGoal = {};
    courseGoal.title = 'my goal';
    courseGoal.desc = 'achieving my goal';
    // Partial<Goal> != Goal -> must typecast
    return courseGoal;
}
// generic util type: Readonly -> does not allow mutation
const names = ['rex', 'conjurus'];
// names.push() 
// names.pop()
