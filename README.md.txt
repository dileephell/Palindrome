1) Open prob.js and edit the line 38 with the path of the palindrome text file.
2) Open the cmd and type the command “ node prob.js “ and then you will able to see the count of palindrome occurances in each line  output.

Ways to Implement---> 
Since my solution need as to  count the total number of lines and parsing through each line to get ocurances of palindromes so  I chose to use the  method: fs.createReadStream(). And now  
Node can hold up to 1.5GB in memory at one time, but no more. 

Improvements  : Can use EventStream to make it faster/ without crash with the large amount of data size.

