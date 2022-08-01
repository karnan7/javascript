



var a = 10
var b = "Hii"
var c = true
typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d = 10.25
undefined
typeof(d)
'number'
var e = '10.25'
undefined
typeof(e)
'string'

// Basic Mathematical operations
var a=10
var b=20
a+b
30
a-b
-10
a*b
200
a/b
0.5

// modulus (a%b) it is the reminder
a%b
10
b%a
0
    //  if you take modulus of smaller to larger it is always larger



var a="hi"
var b="javascript"

// a+b(concat)
a+b
'hijavascript'
a-b
NaN   
// NaN Not a Number
a*b
NaN
a/b
NaN


var a ='hi'
var b=1
a+b
'hi1'

string+string = string
string+number = string
number+string = string
number+number = number

        //   (evaluation start from left)
10+"20"+30
 '102030'
10+20+"30"  (30+"30")
 '3030'
"10"+20+30  ('1020'+30)
 '102030'

 10+"20"+30-1
    '102030'-1
    102029
 10+20+"30"-1
    '3030'-1
    3029
 "10"+20+30-1
    '102030'-1
    102029

 "10"+1
    '101'
"10"-1
    9
"10a"-1  (one character is involved)
    NaN

    // if both the side of your operator is pure number except + everything will work.


