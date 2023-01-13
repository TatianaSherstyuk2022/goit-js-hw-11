'use strict';

// export class PixabayApi {
//   static BASE_URL = 'https://pixabay.com/api/';
// static KAY = '32822107-27ee419a7500914fb13297221';

//   constructor() {
//     this.page = 1;
//   }

//   fetchPosts() {
//     const searchParams = new URLSearchParams({
//       per_page: '40',
//       page: this.page,
//     });

//     return fetch(`${PixabayApi.BASE_URL}?key=${KAY}&${searchParams}`).then(
//       response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }

//         return response.json();
//       }
//     );
//   }
// }
