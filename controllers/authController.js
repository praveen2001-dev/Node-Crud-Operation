const db = require("../config/db")
const authModel = require("../models/authModel");
// const { param } = require("../routes");

exports.signupDetails = async function (req, res) {
    try {
        db.beginTransaction();
        var details = await authModel.signupDetails(req.body);
        if (details) {
            db.commit();
            res.status(200).json({ message: "Data insert successfull..", Data: req.body })
        } else {
            db.rollback();
            res.status(404).json({ message: "Error in insert details" })
        }
    } catch (error) {
        db.rollback();
        res.status(500).json({ message: "rollback error" })
    }
}

exports.getAllStudentData = async (req, res) => {
    try {
        const queryget = "SELECT * FROM student_details";
        db.query(queryget, function (err, data) {
                if (err) {
                    res.status(401).send({ error: "Data not found" })
                } else {
                    res.status(201).send({ message: "Student Data", Data: data })
                }
            });
    } catch (error) {
        db.rollback();
        res.status(401).json({ error: "Data error" });
    }
}

exports.getSingleStudentData = async (req, res) => {
    const studentId = req.params.id;
    try {
        db.query("SELECT * FROM student_details WHERE id = ?",
            [studentId], function (err, data) {
                if (err) {
                    res.status(401).send({ error: "Data not found" })
                } else {
                    res.status(201).send({ message: "Student Data", Data: data })
                }
            });
    } catch (error) {
        db.rollback();
        res.status(401).json({ error: "Data error" });
    }
}

exports.deleteStudentData = async (req, res) => {
    const studentId = req.params.id;
    try {
        db.beginTransaction();
        var deleteData = await authModel.deleteStudentData(studentId);

        if (deleteData.affectedRows) {
            db.commit();
            res.status(201).json({ message: "Student Deleted Successfully" });
        } else {
            db.rollback();
            res.status(401).json({ error: "Data error" })
        }
    } catch (error) {
        db.rollback();
        res.status(401).json({ error: error })
    }
}

exports.updateStudentData = async(req, res) => {
    try {
        db.beginTransaction();
        req.body.id = req.params.id;
        var studentData = await authModel.changeStudentData(req.body);
        if (studentData.affectedRows) {
            db.commit();
            res.status(201).json({ message: "Student data has been updated successfully", data: req.body })
        } else {
            db.rollback();
            res.status(401).json({ message: "Student data has not updated." })
        }
    } catch (error) {
        console.log(error, 'asadsads')
        db.rollback();
        res.status(401).json({ error: error })
    }
}
