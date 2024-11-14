import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  category: any;
  categoryName: string | undefined;
  categoryData: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Current route:', this.route.snapshot.url);
    console.log('Router config:', this.router.config);

    this.route.paramMap.subscribe((params) => {
      const categoryName = params.get('category');
      console.log('Category:', categoryName);
      this.loadCategoryData(categoryName);
    });
  }

  loadCategoryData(categoryName: string | null): void {
    const categories = [
      {
        id: 1,
        categoryName: 'Radha Krishna',
        navigationName: 'krishna',
        data: [
          {
            id: 1,
            productName: 'Radha Krishna',
            title: 'Radha Krishna',
            image: 'assets/giftersHub/radhaKrishnaFrame_3.png',
            hoverImage: 'assets/giftersHub/radhaKrishnaFrame_4.png',
            originalPrice: 599,
            sellingPrice: 499,
            rating: 5.0,
          },
          {
            id: 2,
            productName: 'Lord Krishna',
            title: 'Lord Krishna',
            image: 'assets/giftersHub/radhaKrishnaFrame_1.png',
            hoverImage: 'assets/giftersHub/radhaKrishnaFrame_2.png',
            originalPrice: 1499,
            sellingPrice: 999,
            rating: 5.0,
          },
          {
            id: 3,
            productName: 'Ganesha',
            title: 'Krishna Frame',
            image: 'assets/giftersHub/radhaKrishnaFrame_16.png',
            hoverImage: 'assets/giftersHub/radhaKrishnaFrame_15.png',
            originalPrice: 799,
            sellingPrice: 599,
            rating: 5.0,
          },
          {
            id: 4,
            productName: 'Radha Krishna',
            title: 'Shri Krishna Govind',
            image: 'assets/giftersHub/radhaKrishnaMurti_5.png',
            hoverImage: 'assets/giftersHub/radhaKrishnaMurti_6.png',
            originalPrice: 1499,
            sellingPrice: 999,
            rating: 5.0,
          },
          {
            id: 5,
            productName: 'Radha Krishna',
            title: 'Radhe Govinda',
            image: 'assets/giftersHub/radhaKrishnaMurti_9.png',
            hoverImage: 'assets/giftersHub/radhaKrishnaMurti_10.png',
            originalPrice: 699,
            sellingPrice: 499,
            rating: 5.0,
          },
        ],
      },
      {
        id: 2,
        categoryName: 'Shiv Parvati',
        navigationName: 'shiv',
        data: [
          {
            id: 1,
            productName: 'Shiv Parvati',
            title: 'Shiv Parvati',
            image: 'assets/giftersHub/shivParvatiMurti_1.png',
            hoverImage: 'assets/giftersHub/shivParvatiMurti_2.png',
            originalPrice: 999,
            sellingPrice: 799,
            rating: 5.0,
          },
        ],
      },
      { id: 3, categoryName: 'Lord Hanuman', navigationName: 'hanuman' },
      {
        id: 4,
        categoryName: 'Lord Ganesha',
        navigationName: 'ganesha',
        data: [
          {
            id: 1,
            productName: 'Lord Ganesha',
            title: 'Lord Ganesha',
            image: 'assets/giftersHub/ganeshaMurti_7.png',
            hoverImage: 'assets/giftersHub/ganeshaMurti_8.png',
            originalPrice: 1499,
            sellingPrice: 999,
            rating: 5.0,
          },
          {
            id: 2,
            productName: 'Ganesha',
            title: 'Shree Ganesha Frame',
            image: 'assets/giftersHub/ganeshaFrame_5.png',
            hoverImage: 'assets/giftersHub/ganeshaFrame_6.png',
            originalPrice: 799,
            sellingPrice: 599,
            rating: 5.0,
          },
          {
            id: 3,
            productName: 'Ganesha',
            title: 'Shri Ganesha',
            image: 'assets/giftersHub/ganeshaFrame_3.png',
            hoverImage: 'assets/giftersHub/ganeshaFrame_4.png',
            originalPrice: 2499,
            sellingPrice: 1890,
            rating: 5.0,
          },
        ],
      },
      {
        id: 5,
        categoryName: 'Ram Darbar',
        navigationName: 'ram',
        data: [
          {
            id: 1,
            productName: 'Ram Shita',
            title: 'Shree Ram Shita',
            image: 'assets/giftersHub/ramFrame_5.png',
            hoverImage: 'assets/giftersHub/ramFrame_6.png',
            originalPrice: 1499,
            sellingPrice: 999,
            rating: 5.0,
          },
          {
            id: 2,
            productName: 'Ram Darbar',
            title: 'Shri Rama',
            image: 'assets/giftersHub/ramMurti_3.png',
            hoverImage: 'assets/giftersHub/ramMurti_4.png',
            originalPrice: 959,
            sellingPrice: 599,
            rating: 5.0,
          },
        ],
      },
      {
        id: 6,
        categoryName: 'Handicrafts God Photo frames',
        navigationName: 'handicrafts',
        data: [
          {
            id: 1,
            productName: 'Ganesha',
            title: 'Krishna Frame',
            image: 'assets/giftersHub/radhaKrishnaFrame_16.png',
            hoverImage: 'assets/giftersHub/radhaKrishnaFrame_15.png',
            originalPrice: 799,
            sellingPrice: 599,
            rating: 5.0,
          },
        ],
      },
      { id: 7, categoryName: 'Customer Review', navigationName: 'review' },
      { id: 8, categoryName: 'About Us', navigationName: 'about' },
      { id: 9, categoryName: 'Contact Us', navigationName: 'contact' },
    ];

    this.category = categories.find(
      (cat) => cat.navigationName === categoryName
    );

    if (this.category) {
      this.categoryName = this.category.categoryName;
      this.categoryData = this.category.data || [];
    } else {
      this.categoryName = categoryName;
      this.categoryData = [];
    }
  }
}
