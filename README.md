**The project is written in typescript and you need to run `npm run build` before you can execute the code in JS files.**

Here are the steps to test code:

Run `npm install`

Run `npm run build`

Run `node dist/cli.js input.csv > output.csv`. where input.csv is the file that contains the data.

An example of input.csv


```id,json
1,"[1, 2, 3, 4, 5, 6, 7, 8, 9]"
2,"[40, 20, 90, 10]"
3,"[-5]"
9,"[2, -0]"
5,"[2, -5, -5]"
8,"[1, 1, 1, 1, 1]"
```

Output for above file is:

```
id, json, is_valid
1, "[2,3,6,1,5,9,4,7,8]", true
2, "[20,10,40,90]", true
3, "[-5]", true
9, "[]", false
5, "[]", false
8, "[]", false
```