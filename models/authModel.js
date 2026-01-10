const db = require("../config/db")

var User = function (data) {

}
User.signupDetails = async function (postdata) {
    return new Promise(async function (resolve, reject) {
        var insertData = {
            name: postdata.name ? postdata.name : "",
            email: postdata.email ? postdata.email : "",
            password: postdata.password ? postdata.password : "",
            address: postdata.address ? postdata.address : "",
        }
        var queryinsert = "INSERT INTO student_details set ?";
        db.query(queryinsert, insertData, function (err, res) {
            if (err) {
                return reject(err)
            } else {
                return resolve(res)
            }
        });
    });
}

User.deleteStudentData = async function (postdata) {
    return new Promise((resolve, reject) => {
        const userId = postdata;
        const queryinsert = "DELETE FROM student_details WHERE id = ?";
        const filter = [userId];
        db.query(queryinsert, filter, function (err, res) {
            if (err) {
                return reject(err)
            } else {
                if (res.affectedRows === 0) {
                    return reject("Data was not found")
                }
                return resolve(res)
            }
        });
    });
}

User.changeStudentData = async function (postdata) {

    return new Promise((resolve, reject) => {
        var updatedValue =  {
            name: postdata.name,
            email: postdata.email,
            password: postdata.password,
            address: postdata.address,
        };
        var queryinsert = "UPDATE student_details SET ? WHERE id = ?";
        var filter = [updatedValue, postdata.id];
        db.query(queryinsert, filter, function (err, res) {
            if (err) {
                return reject(err)
            } else {
                return resolve(res)
            }
        });
    })
}
module.exports = User;
