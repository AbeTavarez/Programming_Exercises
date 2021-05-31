
// The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. 
//The deepest arrays are 4 levels, and the deepest-est? is 5.

let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

  console.log(nestedArray[2][1][0][0][0]);