var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var a=[1, 2, 3, 4, 5, 6, 2, 4];
  var b=[3,4,5,6,7,8,9,4,3,8,9];
  var c=[];
  var d=[];
  var e=[];
var t0 = performance.now();
  for(i=0;i<a.length;i++)
  {
  if(a.indexOf(a[i]) == i)
    {
     c.push(a[i])
    }
  }
  for(j=0;j<b.length;j++)
  {
  if(b.indexOf(b[j]) == j)
    {
     d.push(b[j])
    }
   }

for(k=0;k<c.length;k++)
{
  if(d.indexOf(c[k]) == -1)
  {
   d.push(c[k])
  }
}


d.sort();
console.log(d);
document.write("Sorting after elimininating duplicates " + d)
document.write('<br/>');

for(l=d.length-1;l>=0;--l)

{
 
e.push(d[l]);
}
document.write("reversing elements in array " + e);
 
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
});

module.exports = router;