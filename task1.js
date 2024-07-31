//Taking i/p from user using cli
const process=require('process')
const input=process.argv

//storing sentence using rest operator on input array so it will break the inputs into three parts
const [first,second, ...rest]=input

//Creating a string str 
let str=''
for(var i=0; i<rest.length; i++)
    {
        str=str+rest[i]
    }


let letters='' //to store string without punctuation and numbers

str=str.toLowerCase()

len=str.length

//Loop to remove punctuation and numbers
for(var i=0; i<len; i++)
    {
        let ch=str.charAt(i)

        if(!(ch >= 'a' && ch<= 'z'))
            letters=letters
        else
         letters=letters+ch
    }

//Using Set to remove all repeated letters from letters 
//stores all diff letters in distinctLetters object

let distinctLetters=new Set(letters)


//converts obj to array then stores in str2
let str2=Array.from(distinctLetters)

let distinctCount=str2.length
//disp count of distinct letters
console.log(distinctCount)

//freq stores the count of each letter in thr sentence
let freq=''
for(var i=0; i<distinctCount; i++)
{
    let cnt=0 //stores freq of each letter
    let ch=str2[i]
    for(var j=0; j<len; j++)
    {
        //compares characters from str2 with ALL characters str
        if(ch === str.charAt(j))
            cnt++
    }
    //to store the counts of each character together in one line acc to given o/p
    freq=freq+cnt+' '
}
console.log(freq)

//Bonus Task
let freqLetter=''
for(var i=0; i<distinctCount; i++)
{
    let cnt=0
    let ch=str2[i]
    for(var j=0; j<len; j++)
    {
        if(ch === str.charAt(j))
            cnt++
    }
    //string to store the counts and letters of each character together in one line
    freqLetter=freqLetter+ch+':'+cnt+' '
}
console.log(freqLetter)


