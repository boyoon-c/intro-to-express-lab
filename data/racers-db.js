export { 
	find
}

const racers = [
  {name: 'Lewis', team: 'Mercedes', _id: 125223},
  {name: 'Max', team: 'Red Bull', _id: 127904},
  {name: 'Sergio', team: 'Red Bull', _id: 139608},
  {name: 'Daniel', team: 'McLaren', _id: 123456}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, racers)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}