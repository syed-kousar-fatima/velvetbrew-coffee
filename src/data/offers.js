export const offers = [
  {
    id: 1,
    title: 'Morning Golden Hour',
    description: 'Start your day with our signature Gold Brew and any artisan pastry for a special price.',
    discount: '20% OFF',
    image: '/assets/offers/offer-1.jpg',
    endTime: new Date().getTime() + 1000 * 60 * 60 * 5,
    tag: 'Limited Time'
  },
  {
    id: 2,
    title: 'Espresso Martini Nights',
    description: 'Join us every Friday evening for our handcrafted espresso martinis and live jazz music.',
    discount: 'BUY 1 GET 1',
    image: '/assets/offers/offer-2.jpg',
    endTime: new Date().getTime() + 1000 * 60 * 60 * 12,
    tag: 'Weekend Special'
  }
];
