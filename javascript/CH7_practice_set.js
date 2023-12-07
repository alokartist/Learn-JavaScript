/*
1)Create a navbar and change the color of its first element to red.
2)Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.
3)Create an element with 3 children. Now change the color of first and last element to green.
4)Write a js code to change background of all <li> tags to cyan.
5)which of the following is used to look for the farthest ancestor that matches a given css selector 
(A)matches (B)closest (C)contains (D)None of these
*/


//Q1
let q1=document.getElementById("id1");
q1.style.color="red"


//Q2
/*
    <table>
        <td>Start</td>
        <tr>Number 1</tr>
        <tr>Number 2</tr>
        <tr>Number 3</tr>
        <tr>Number 4</tr>
    </table>

No <tbody> is being created "The view page source defines the raw source"
*/ 

//Q3
document.getElementsByTagName("li")[0].firstElementChild.style.color="Green"
document.getElementsByTagName("li")[0].lastElementChild.style.color="Green"

//Q4
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background="cyan"
});

//Q5
/*
(D)None of these, because from all there is not a method for the farthest ancestor that matches a given css selector 

For mearest ancestor we have closest()
*/