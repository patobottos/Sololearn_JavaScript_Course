/* Excercise for Sololearn - JavaScript
PROBLEM: "The Snail in the Well"
The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?
*/

function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    let up = 7;
    let down = 2;
    let netDistance = up - down;
     let days = 0;
    if (depth % netDistance <= down) {
        days = parseInt(depth/netDistance, 10);
    } else {
        days = parseInt(depth/netDistance, 10) + 1;
    }
console.log(days);
}