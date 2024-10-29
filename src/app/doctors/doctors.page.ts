import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  doctors = [
    {
      name: 'Dr. kapil Badmos',
      specialty: 'Oncologists',
      rating: 4.3,
      reviews: 130,
      photoUrl: 'assets/images/doctor1.png'
    },
    {
      name: 'Dr. Rahul Singh',
      specialty: 'Pediatrician',
      rating: 4.3,
      reviews: 280,
      photoUrl: 'assets/images/doctor2.jpg'
    },
    {
      name: 'Dr. Rajeev Anjum',
      specialty: 'Psychologist',
      rating: 4.3,
      reviews: 130,
      photoUrl: 'assets/images/doctor3.jpg'
    },
    {
      name: 'Dr. Rajat Arora',
      specialty: 'Neuro Surgeon',
      rating: 4.3,
      reviews: 280,
      photoUrl: 'assets/images/doctor4.jpg'
    },
    {
      name: 'Dr. Hardik Ojha',
      specialty: 'Virologist',
      rating: 4.3,
      reviews: 130,
      photoUrl: 'assets/images/doctor5.jpg'
    },
    {
      name: 'Dr. Rampal Deval',
      specialty: 'Radiologist',
      rating: 4.3,
      reviews: 280,
      photoUrl: 'assets/images/doctor6.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}

  viewDoctorDetails(doctor: any) {
    console.log('Doctor details:', doctor);
    // Navigate to doctor details if necessary
  }
}
