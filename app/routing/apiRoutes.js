

let friends = require("../data/friends");


//Get route displays updated friends array after newFriend added

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);

    })


    app.post("/api/friends", function (req, res) {
        //new friend from user input
        newFriend = req.body;
        // console.log("Post | newFriend, next step to is to compare...: " + newFriend);

        //---------------------------------


        //File is read and data is processed and compared to the user input (newFriend)



        //variables for processing

        let absSum; //the iterated absolute difference per index
        let friendResultsArr = [];
        let chosen;


        // console.log("Testing presence of friends" + friends);

        //push existing file into friendsArr
        console.log("friends withou JSON formatting: " + friends.name);
        console.log("newfriend without JSON formatting: " + newFriend.name);

        //user Input:
        //check to see what file looks like at this point and current length
        console.log("friends stringified inside Post: " + JSON.stringify(friends) + " || friends.length: " + friends.length)

        for (let i = 0; i < friends.length; i++) {
            console.log("Read File inside Post: " + friends[i].name);
        }

        //establish array to push difference at each index
        let sumArr = [];
        //for the length of the file objects
        for (let i = 0; i < friends.length; i++) {
            //for length of scores
            for (let j = 0; j < newFriend.scores.length; j++) {
                //for each newFriend score, get abs difference of each score per object in file
                absSum = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                console.log("NewFriend and Score: " + newFriend.name + " | " + newFriend.scores[i])
                console.log("Comparison Friend and Score" + friends[i].name + " | " + friends[i].scores[j]);
                console.log("AbsSum: " + absSum);
                sumArr.push(absSum);
            }
            //push difference to array
            
            console.log("SumArr inside for Loop: " + sumArr);

            //sum all differences to get total difference
            let totalDifference = sumArr.reduce(function (acc, score) {
                return acc + score;
            }, 0);

            console.log("SumArr: " + sumArr);
            console.log("TotalDifference: " + totalDifference);
            //TODO - push object name and total difference to comparison array
            friendResultsArr.push(totalDifference);
            absum = 0;
            sumArr = [];

            //get min total difference
            //1


        }


        chosen = friendResultsArr.indexOf(Math.min(...friendResultsArr));
        console.log("Here is the comparison array: " + friendResultsArr);
        console.log("The index of the lowest number" + chosen);

        //---------------We just need to take the friend that has the lowest difference------------------******************************



        //friend match pushed to modal

        res.json(friends[chosen]);

        //----------------------------------

        writeToFile()

        friends.push(newFriend);



        console.log("compareFriends function ended!!!")
        //-------------------compareFriend Function ended---------------------//




        //newFriend Added to Array

        function writeToFile() {



            //---------------------------------

            //friend stringified and written to file


        }

        //---------------------------------




    })
    //exported to routehandler
    //---------------------------------

}