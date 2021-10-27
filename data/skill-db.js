const skills = [
    { text: 'Patience', need_to_work_on: true, _id: 8675309 },
    { text: 'Persistance', need_to_work_on: false, _id: 1445685 },
    { text: 'Planning', need_to_work_on: true, _id: 2410199 },
]

const find = (conditions, callback) => {
    // see if this works, if not, execute the code in the catch block
    try {
        // make sure that conditions is an object - if not throw a TypeError
        if (!(conditions instanceof Object)) {
            throw new TypeError('Please pass in an object')
        }
        // If the object is empty, return all the todos
        if (Object.keys(conditions).length === 0) return callback(null, todos)
        // deal with errors
    } catch (error) {
        console.log(error)
        callback(error, [])
    }
}