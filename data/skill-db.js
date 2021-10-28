//This is my Skills Database
const skills = [
    { text: 'Patience', need_to_work_on: true, _id: 867530 },
    { text: 'Persistence', need_to_work_on: false, _id: 144568 },
    { text: 'Planning', need_to_work_on: true, _id: 241019 },
]

const find = (conditions, callback) => {
    // see if this works, if not, execute the code in the catch block
    try {
        // make sure that conditions is an object - if not throw a TypeError
        if (!(conditions instanceof Object)) {
            throw new TypeError('Please pass in an object')
        }
        // If the object is empty, return all the todos
        if (Object.keys(conditions).length === 0) return callback(null, skills)
        // deal with errors
    } catch (error) {
        console.log(error)
        callback(error, [])
    }
}

const findById = (id, callback) => {
    try {
        const skill = skills.find(skill => skill._id === parseInt(id))
        if (!skill) throw new Error('No skill was found')
        return callback(null, skill)
    } catch (error) {
        console.log(error)
        return callback(error, null)
    }
}

function create(skill, callback) {
    // Add the id
    skill._id = Date.now() % 1000000
    // New todos wouldn't be done
    skill.need_to_work_on = true
    skills.push(skill)
    return callback(null, skill)
}

export {
    find,
    findById,
    create
}