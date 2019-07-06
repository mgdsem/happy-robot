export const run = () => {
  const functionA = callback => {
    console.log('i am before callback');
    callback();
    console.log('I am after callback');
  };
  // functionA(() => console.log('I am callback'));

  const functionB = (callback, someNumber) => {
    // someNumber > 5 ? callback() : console.log('something');

    if (someNumber > 5) {
      callback();
    } else {
      console.log('something');
    }
  };
  // functionB(() => console.log('I am callback1'), 2);

  const functionC = (callback, someNumber) => {
    if (someNumber > 5) {
      return callback();
    }
    console.log('something');
  };
  // functionC(() => console.log('I am callback2'), 8);

  const functionD = (callback, someNumber) => {
    const someNumberPlus = someNumber + 3;
    callback(someNumberPlus);
  };
  // functionD(someNumberPlus => console.log(someNumberPlus), 4);

  // const myMap = (someArr, callback) => {
  //   const resultArray = [];
  //   for (let i = 0; i < someArr.length; i++) {
  //     const actualElement = someArr[i];
  //     const result = callback(actualElement);
  //     resultArray.push(result);
  //   }
  //   return resultArray;
  // };

  // const numbers = [1, 2, 3, 4, 5];
  // const newNumbers = myMap(numbers, number => number + 1);
  // console.log(newNumbers);

  // const arr = [1, 2];
  // const arr1 = arr.map(a => a + 2);

  // const myFilter = (someArr, callback) => {
  //   const resultArray = [];
  //   for (let i = 0; i < someArr.length; i++) {
  //     const actualElement = someArr[i];
  //     const result = callback(actualElement);
  //     if (result) {
  //       resultArray.push(actualElement);
  //     }
  //   }
  //   return resultArray;
  // };

  // const numbers = [1, 2, 3, 4, 5];
  // const newNumbers = myFilter(numbers, number => number < 3);
  // console.log(newNumbers);

  const someObj = {
    name: 'Magda',
    sayHello() {
      console.log('Hello');
    },
    sayHello2: () => console.log('hello'),
    sayHello3: function() {
      console.log('hello');
    },
  };

  const useObj = ({ name: superName, sayHello }) => {
    // const { name, sayHello } = obj;

    // const name = obj.name;
    // const sayHello = obj.sayHello;

    console.log(superName);
  };
  useObj(someObj);
};
