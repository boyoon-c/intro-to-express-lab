export { 
	find
}

const racers = [
  {name: 'Lewis Hamilton', team: 'Mercedes', pos: 2, _id: 44},
  {name: 'Max Verstappen', team: 'Red Bull', pos: 1, _id: 33},
  {name: 'Sergio Perez', team: 'Red Bull', pos: 3, _id: 11},
  {name: 'Daniel Ricciardo', team: 'McLaren', pos: 8, _id: 3},
  {name: 'Pierre Gasly', team: 'AlphaTauri', pos: 9, _id:10}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the racers
    if (Object.keys(conditions).length === 0) return callback(null, racers)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}