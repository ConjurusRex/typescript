interface Goal {
  title: string;
  desc: string;
}

function createGoal(title: string, desc: string): Goal {
  // generic util type: Partial -> sets all props of Goal to optional
  let courseGoal: Partial<Goal> = {};
  courseGoal.title = 'my goal';
  courseGoal.desc = 'achieving my goal';
  // Partial<Goal> != Goal -> must typecast
  return courseGoal as Goal;
}

// generic util type: Readonly -> does not allow mutation
const names: Readonly<string[]> = ['rex', 'conjurus'];
// names.push() 
// names.pop()