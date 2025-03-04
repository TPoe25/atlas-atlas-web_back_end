// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        console.log(`Number of students: ${lines.length - 1}`);

        const students = {};
        for (let i = 0; i < lines.length; i++) {
            const [firstname, , , field] = lines[i].split(',');

            if (!students[field]) {
                students[field] = [];
            }
            students[field].push(firstname);
        }

        for (const field in students) {
            console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
        
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
