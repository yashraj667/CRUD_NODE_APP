'use strict';

var dbConn = require('/Projects/EmpMngSysNode/config/db.config');

var Employee = function(employee){

    this.empid = employee.empid;
    this.fname = employee.fname;
    this.lname = employee.lname;
    this.email = employee.email;
    this.contact = employee.contact;
    this.city = employee.city;

};

//API to create new employee
Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employee set ?", newEmp, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
    });
    };

//API to find all employees
    Employee.findAll = function (result) {
        dbConn.query("Select * from employee", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
         // console.log('employees : ', res);
          result(null, res);
        }
        });
        };


        //API to find by id

        Employee.findById = function (id, result) {
            dbConn.query("Select * from employee where empid = ? ", id, function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);
            }
            });
            };




        //API to Update employee
        Employee.update = function(id, employee, result){
            dbConn.query("UPDATE employee SET fname=?,lname=?,email=?,contact=?,city=? WHERE empid = ?", [employee.fname,employee.lname,employee.email,employee.contact,employee.city, id], function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }else{
              result(null, res);
            }
            });
            };



            //API for delete by empid
            Employee.delete = function(id, result){
                dbConn.query("DELETE FROM employee WHERE empid = ?", [id], function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  result(null, res);
                }
                });
                };

    module.exports= Employee;