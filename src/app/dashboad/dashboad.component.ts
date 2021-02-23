import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {
dateTime:any;

// hard coded values for charts
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  
  colorScheme = {
    domain: ['#08DDC1', '#FFDC1B', '#FF5E3A']
  };

  data = [
  {
    name: "green",
    series: [
      {
        "name": "Aug",
        "value": 14
      },
      {
        "name": "Sep",
        "value": 35
      },
      {
        "name": "Oct",
        "value": 4
      },
      {
        "name": "Nov",
        "value": 17
      },
      {
        "name": "Dec",
        "value": 14
      },
      {
        "name": "Jan",
        "value": 35
      }
    ]
  },

  {
    name: "yellow",
    "series": [
      {
        "name": "Aug",
        "value": 364
      },
      {
        "name": "Sep",
        "value": 412
      },
      {
        "name": "Oct",
        "value": 437
      },
      {
        "name": "Nov",
        "value": 437
      },
      {
        "name": "Dec",
        "value": 364
      },
      {
        "name": "Jan",
        "value": 412
      }
    ]
  },
  {
    name: "red",
    series: [
      {
        "name": "Aug",
        "value": 168
      },
      {
        "name": "Sep",
        "value": 343
      },
      {
        "name": "Oct",
        "value": 512
      },
      {
        "name": "Nov",
        "value": 291
      },
      {
        "name": "Dec",
        "value": 168
      },
      {
        "name": "Jan",
        "value": 343
      },
    ]
  }
]
  constructor() { }

  ngOnInit(): void {

    // to get current date and time
    this.dateTime = new Date()
  
  }

}
