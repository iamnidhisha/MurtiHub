import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categoryList: any = [
    {
      id: 1,
      categoryName: 'Radha Krishna',
      isCategory: true,
      navigationName: 'krishna',
    },
    {
      id: 2,
      categoryName: 'Shiv Parvati',
      isCategory: true,
      navigationName: 'shiv',
    },
    {
      id: 3,
      categoryName: 'Lord Hanuman',
      isCategory: true,
      navigationName: 'hanuman',
    },
    {
      id: 4,
      categoryName: 'Lord Ganesha',
      isCategory: true,
      navigationName: 'ganesha',
    },
    {
      id: 5,
      categoryName: 'Ram Darbar',
      isCategory: true,
      navigationName: 'ram',
    },
    {
      id: 6,
      categoryName: 'Handicrafts God Photo frames',
      isCategory: true,
      navigationName: 'handicrafts',
    },
    {
      id: 7,
      categoryName: 'Customer Review',
      isCategory: true,
      navigationName: 'review',
    },
    {
      id: 8,
      categoryName: 'About Us',
      isCategory: false,
      navigationName: 'about',
    },
    {
      id: 9,
      categoryName: 'Contact Us',
      isCategory: false,
      navigationName: 'contact',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
