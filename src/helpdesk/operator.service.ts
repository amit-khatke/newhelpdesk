import { Injectable } from '@angular/core';
import { Information } from './dashborad/information';

@Injectable()
export class OperatorService {
  information: Information[] = [
    {
      id: 1,
      name: 'amit khatke',
      gender: 'male',
      dob: 21 / 3 / 2003,
      phone: '8080613413',
    },
    {
      id: 2,
      name: 'nikhil kulburgi',
      gender: 'male',
      dob: 21 / 3 / 2003,
      phone: '9090613413',
    },
    {
      id: 3,
      name: 'sushant kalamani',
      gender: 'male',
      dob: 21 / 3 / 2003,
      phone: '9974838382',
    },
    {
      id: 4,
      name: 'rajeev aken',
      gender: 'male',
      dob: 21 / 3 / 2003,
      phone: '9975373638',
    },
    {
      id: 5,
      name: 'tanishka jabade',
      gender: 'female',
      dob: 1 / 9 / 2003,
      phone: '8029384756',
    },
  ];
  getAllinformatiion(): Information[] {
    return this.information;
  }

  getinformationById(id: number): Information | undefined {
    return this.information.find((information) => information.id === id);
  }
}
