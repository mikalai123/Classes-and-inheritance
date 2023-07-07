// Классы в ES6
class IntBuilder {
    constructor(min, max) {
      function f() {
          if (max === undefined) {
            max = min;
            min = 0;
          }
           return;
        };
        f(this.min, this.max);

        this.min = min;
        this.max = max;
        console.log(`Минимальное значение ${this.min}`);
        console.log(`Минимальное значение ${this.max}`);
        this.res = function() {
          this.res = Math.floor(Math.random() * (this.max - this.min) + this.min);
          return this.res; 
        }  
    }
}

    class number   extends IntBuilder {
    constructor(min, max, res) {
      super(min, max, res);

      this.plus = function(a, b, c) {
        this.res = this.res + a + b + c;
        return this.res;
      }
      this.minus = function(a, b) {
        this.res = this.res - a - b;
        return this.res;
      }
      this.multiply = function(m) {
        this.res = this.res * m;
        return this.res;
      }
      this.divide = function(d) {
        this.res = this.res / d;
        this.res = Math.trunc(this.res);
        return this.res;
      }
      this.mod = function(z) {
        this.res = this.res % z;
        return this.res;
      }
      this.get = function() {
        return '->' + ' ' + this.res;
      }
    }
  }

const intBuilder = new number(10, 100);
console.log(intBuilder.res());
console.log(intBuilder.plus(2, 3, 2));
console.log(intBuilder.minus(1, 2));
console.log(intBuilder.multiply(2));
console.log(intBuilder.divide(4));
console.log(intBuilder.mod(3));
console.log(intBuilder.get());

// //IntBuilder.random(10, 100);          // 42;

// let intBuilder = new IntBuilder(10); // 10;
// intBuilder
//   .plus(2, 3, 2)                     // 17;
//   .minus(1, 2)                       // 14;
//   .multiply(2)                       // 28;
//   .divide(4)                         // 7;
//   .mod(3)                            // 1;
//   .get();                            // -> 1;

//========================================================================================================

// Классы в ES6

// class StringBuilder {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//     class strBuilder   extends StringBuilder {
//     constructor(name) {
//       super(name);
//       this.res = 0;
//       this.plus = function(a, b) {
//         this.res = this.name + a + b;
//         return this.res;
//       }
//       this.minus = function(a) {
//         let r = this.res.slice(0, -a);
//         this.res = r;
//         return this.res;
//       }
//       this.multiply = function(m) {
//         let mult = this.res.repeat(m);
//         this.res = mult;
//         return this.res;
//       }
//       this.divide = function(a) {
//         let div = this.res.slice(0,a);
//         this.res = div;
//         return this.res;
//       }
//       this.remove = function(a) {
//         let arr = this.res;
//         let rem = function() {
//           for (let index = 0; index < arr.length; index++) {
//             if (arr.includes(a)) {
//               let arr1 = arr.replace(/[l]/gi, '');
//               return arr1;
//             }
//           }
//         };
//         this.res = rem();
//         return this.res;
//       }
//       this.sub = function(a,b) {
//         let sub = this.res.substr(a,b);
//         this.res = sub;
//         return this.res;
//       }
//       this.get = function() {
//         return  '->' + ' ' + this.res;
//       }
//     }
//   }
//   let strBuilder1 = new strBuilder("Hello");
//   console.log(strBuilder1.name);
//   console.log(strBuilder1.plus(' all', '!'));
//   console.log(strBuilder1.minus(4));
//   console.log(strBuilder1.multiply(3));
//   console.log(strBuilder1.divide(4));
//   console.log(strBuilder1.remove('l'));
//   console.log(strBuilder1.sub(1,1));
//   console.log(strBuilder1.get());

//========================================================================================================

// Классы в ES5
function StringBuilder(name) {
  this.name = name;
}

StringBuilder.prototype.getName = function() {
  return this.name;
};

function strBuilder (name, plus, minus) {
  StringBuilder.call(this, name);
  this.plus = plus;
  this.minus = minus;
}

strBuilder.prototype = Object.create(StringBuilder.prototype);

strBuilder.prototype.getPlus = function(a, b) {
        this.res = this.name + a + b;
        return this.res;
      };
strBuilder.prototype.getMinus = function(a) {
        let r = this.res.slice(0, -a);
        this.res = r;
        return this.res;
      };
strBuilder.prototype.getMultiply = function(m) {
        let mult = this.res.repeat(m);
        this.res = mult;
        return this.res;
      }
strBuilder.prototype.getDivide = function(a) {
        let div = this.res.slice(0,a);
        this.res = div;
        return this.res;
      }
strBuilder.prototype.getRemove = function(a) {
        let arr = this.res;
        let rem = function() {
          for (let index = 0; index < arr.length; index++) {
            if (arr.includes(a)) {
              let arr1 = arr.replace(/[l]/gi, '');
              return arr1;
            }
          }
        };
        this.res = rem();
        return this.res;
      }
strBuilder.prototype.getSub = function(a,b) {
        let sub = this.res.substr(a,b);
        this.res = sub;
        return this.res;
      }
strBuilder.prototype.getGet = function() {
        return  '->' + ' ' + this.res;
      }
const str = new strBuilder ('Hello');
console.log(str.getName())
console.log(str.getPlus(' all', '!'))
console.log(str.getMinus(4))
console.log(str.getMultiply(3))
console.log(str.getDivide(4))
console.log(str.getRemove('l'))
console.log(str.getSub(1,1))
console.log(str.getGet())


//   let strBuilder1 = new strBuilder("Hello");
//   console.log(strBuilder1.name);
//   console.log(strBuilder1.plus(' all', '!'));
//   console.log(strBuilder1.minus(4));
//   console.log(strBuilder1.multiply(3));
//   console.log(strBuilder1.divide(4));
//   console.log(strBuilder1.remove('l'));
//   console.log(strBuilder1.sub(1,1));
//   console.log(strBuilder1.get());