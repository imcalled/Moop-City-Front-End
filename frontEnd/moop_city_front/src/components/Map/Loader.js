//  class Loader {
    
//     constructor() {
//         this.images = {};
//     }

//     //wait for image to load (.onLoad)
//     loadImage = (key, src) => {
//         const image = new Image();
//         const promise = new Promise((resolve, reject) => {
//             image.onload = () => {
//                 this.images[key] = image;
//                 resolve(image);
//             };

//             image.onerror = () => {
//                 reject("Could not load image: " + src);
//             };
//         });
        
//         //image source path
//         image.src = src;
//         return promise;
//     }

//     //passes image key (tile number?)
//     getImage = (key) => {
//         return key in this.images ? this.images[key] : null;
//     }
// }

// export default Loader;

export default class Loader {
    constructor() {
      this.images = {};
    }
  
    loadImage = (key, src) => {
      const image = new Image();
      const promise = new Promise((resolve, reject) => {
        image.onload = () => {
          this.images[key] = image;
          resolve(image);
        };
  
        image.onerror = () => {
          reject("Could not load image: " + src);
        };
      });
  
      image.src = src;
      return promise;
    };
  
    getImage = key => {
      return key in this.images ? this.images[key] : null;
    };
}