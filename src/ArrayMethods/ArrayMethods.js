import React from "react";

const ArrayMethods = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const mappedArr = arr.map((element) => {
    return element * 5;
  });

  const filteredArr = arr.filter((element) => {
    return element % 2 !== 0;
  });

  const list = filteredArr.map((element, index) => (
    <li key={index} style={{ color: 'red', backgroundColor: 'lightgray', margin: 10 }}>
      {element}
    </li>
  ));

  return (
    <div>
      Array Methods
      <br />
      <button
        onClick={() => {
          console.log(arr);
          console.log(mappedArr);
        }}
      >
        Map method
      </button>
      <br />
      <button
        onClick={() => {
          console.log(arr);
          console.log(filteredArr);
        }}
      >
        Filter method
      </button>
      <br />
      <ul style={{ listStyle: 'none' }}>{list}</ul>
    </div>
  );
};

export default ArrayMethods;

// map, filter
