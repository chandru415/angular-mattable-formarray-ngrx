import { Employee } from './employee';
import { FormGroup, FormControl } from '@angular/forms';

export const employeeList: Employee[] = [
  {
    id: `1589736379061`,
    firstName: `John`,
    lastName: `Smith`,
    age: 30,
    phoneNumber: `1234567890`,
    email: `john.smith@xxx.com`,
  },
  {
    id: `1589736386881`,
    firstName: `Samantha`,
    lastName: `Ruth`,
    age: 30,
    phoneNumber: `0987654321`,
    email: `samantha.ruth@xxx.com`,
  },
  {
    id: `1589736393128`,
    firstName: `Abbey`,
    lastName: `Garner`,
    age: 25,
    phoneNumber: `7539517410`,
    email: `abbey.garner@xxx.com`,
  },
  {
    id: `1589736400472`,
    firstName: `Marcel`,
    lastName: `Gardner`,
    age: 26,
    phoneNumber: `9513697412`,
    email: `marcel.gardner@xxx.com`,
  },
  {
    id: `1589736406979`,
    firstName: `Louise `,
    lastName: `Smith`,
    age: 27,
    phoneNumber: `0974362010`,
    email: `Louise.smith@xxx.com`,
  },
];

export const buildFormGroup = (emp: Employee): FormGroup => {
    console.log(emp);
    
  const fg = new FormGroup({
    firstName: new FormControl(emp.firstName),
    lastName: new FormControl(emp.lastName),
    age: new FormControl(emp.age),
    email: new FormControl(emp.email),
    phoneNumber: new FormControl(emp.phoneNumber),
  });

  return fg;
};
