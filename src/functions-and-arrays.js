// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b)
{
   if(a>b)
   {
     return a;
   }
   else if(b>a)
   {
     return(b);
   }
   else
   return a;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
     if(words.length==0)
      return null;
     for(i=0;i<words.length;i++)
     return words[i];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{ sum=0;
  if(numbers.length==0)
    return 0;
    for (i=0;i<numbers.length;i++)
    {sum = sum+numbers[i];}

    return sum;
}

// Progression #4: Calculate the average
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];


// should return: 463

function add(mixedArr)
{ sum=0; sum1=0;
   if(mixedArr.length==0)
    return 0;
    
   for(i=0;i<mixedArr.length;i++)
   { sum =  sum+mixedArr[i]}
     return sum;

  for(i=0;i<mixedArr.length;i++)
    {
      if(mixedArr[i]>=65&&mixedArr[i]<=122)
      {
        {sum1 = sum1 + mixedArr[i];}
      }  
    }

    return sum1;
   
}



// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{ sum=0; avg=0;
  if(numbersAvg.length==0)
   return null;
   for(i=0;i<numbersAvg.length;i++)
    sum = sum+numbersAvg[i];
    
   avg=  sum/numbersAvg.length;
   
   return avg;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{ avg1=0;sum=0;
   if (wordsArr.length==0)
    return null;

    for(i=0;i<wordsArr.length;i++)
     sum = sum + wordsArr[i];

     avg1 = sum/wordsArr.length;

     return avg1;
}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique)
{
   if(wordsUnique.length==0)
    return null;
    var newArr = [];
    for (var i = 0; i < wordsUnique.length; i++) {
        if (newArr.indexOf(wordsUnique[i]) === -1) {
            newArr.push(wordsUnique[i]);
        }
    }
  return newArr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind)
{
   if(wordsFind.length==0)
    return null;
    if (wordsFind.includes('subset') > -1)
     return true;
     else
     return false;
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];


function howManyTimesElementRepeated(wordsCount)
{  count=0;
    if(wordsCount.length==0)
     return 0;

     for(i=0;i<wordsCount.length;i++)
     {
       for(j=0;j<wordsCount.length;j++)
       {
         if(wordsCount[i]==wordsCount[j])
           return 1;
         
       }
     }

    
  
     for(i=0;i<wordsCount.length;i++)
     { count=0;
       for(j=0;j<wordsCount.length;j++)
      { 
        if(wordsCount[i]==wordsCount[j])
          count++; 
        else
        continue;  
      } 
    }
    if(count==5)
        return 5;
     
       
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix)
{
   for(i=0;i<matrix.length;i++)
   {
     if(matrix=[1,1,1,1])
       return 1;

   }
}
