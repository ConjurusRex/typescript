// optional chaining
const fetchedData = {
  id: 'u1',
  name: 'rex',
  job: { title: 'CEO', description: 'my company' }
}
// javascript way of diving deeper if prop exists
// console.log(fetchedData.job && fetchedData.job.title);

// typescript ? chaining to check if props exist
console.log(fetchedData?.job?.title);


const userInput = null;

// const saveInput = userInput || 'default value'; -> if userInput is undefined or '' it will log 'default value'

// typescript nullish coalescing
const saveInput = userInput ?? 'default value'; // -> if userInput is undefined, null, or '' it will log 'default value'
