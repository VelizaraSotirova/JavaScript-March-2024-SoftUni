function employeeSolve(employeeNames) {
    const employees = {};

    for(const name of employeeNames) {
        employees[name] = name.length;
    }

    for(const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}


employeeSolve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);