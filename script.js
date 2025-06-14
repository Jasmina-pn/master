// Page (DOM) has finished loading:
$(function () {
  /* 1. API-KEY: START ----------------------------------------
  - Purpose: Send the API key to authenticate with the Server
      - Remark: Do not touch this
  ------------------------------------------------------------- */

  // 1.1. Send the API key with every jQuery AJAX-call:
  $.ajaxSetup({ headers: { "X-Auth-Token": "a534e63a0d68ad8ec00d" } });

  /* API-KEY: END --------------------------------------------- */

  /* 2. FETCH TWEETS: START ------------------------------------
      - Purpose: Fetch and display all posts from the server
  - Task: Assignment #22 - Minimal requirements: Task #3
  ------------------------------------------------------------- */

  // 2.1. Fetch the data from the server
  // Hint: Within this task, you can easyly handle the task #1 of the challenge requirements by dynamically updating the filter parameter
  // Hint: See the referencing example from our lecture: https://codesandbox.io/p/sandbox/referencing-4z7ltd/
  var sort = "popular"; // Update this to "popular" to sort by popularity
  $.getJSON(
    "https://www.nafra.at/adad_st2025/project/?sort=" + sort,
    function (data) {
      // 2.2. Display the received data
      // Hint: Iterate over the "data" object (using a loop - try the forEach) and return the posts back to the page
      // Hint: See the templating example from our lecture: https://codesandbox.io/p/sandbox/templating-hn76s4/

      // 2.3. Display the date in a different format (Challenge requirements: Task #3)
      // Hint: You're allowed to use a plugin for this task

      // This returns all posts as an object within the console - replace it with the logic to display the data (nicely) on the page
      console.log(data);
      // Example: Contains the user of the first entry
      document.querySelector("#posts-container").textContent = data[0]["user"];
      // data[0]['text'] contains the text of the first entry
    }
  );

  /* FETCH TWEETS: END ----------------------------------------- */

  /* 3. VOTE TWEETS: START ------------------------------------
      - Purpose: Vote on a note
  - Task: Assignment #22 - Minimal requirements: Task #4
  ------------------------------------------------------------ */

  // 3.1. Vote button was pressed:
  // Hint: Execute the (folowing) "vote on a note" functionality whenever a "vote"-button is pressed

  // 3.2. Increase the "vote"-counter on the server
  // Hint: You need to replace the contents of the variable "tweetID" with the ID of the note on which the button was pressed
  // Hint: See the referencing example from our lecture: https://codesandbox.io/p/sandbox/referencing-4z7ltd/
  // var tweetID = pressedelement.target.dataset.tweetID; // Example on how to get an ID (depending on your code)
  var tweetID = 1; // Example on how to get an ID (depending on your code)
  var voteType = "upvote"; // Update this to "downvote" to downvote the post
  $.get(
    "https://www.nafra.at/adad_st2025/project/" + tweetID + "?type=" + voteType,
    function (data) {
      // 3.3. Return and display the new amount of votes
    }
  );

  /* VOTE TWEETS: END ----------------------------------------- */

  /* 4. CREATE TWEETS: START ------------------------------------
      - Purpose: Create a note
  - Task: Assignment #22 - Minimal requirements: Task #5
  -------------------------------------------------------------- */

  // 4.1. The "create note"-form was submitted
  // Hint: Execute the "create a note" logic (below) whenever the "create note"-form was submitted
  // Hint: Don't forget to prevent the form from submitting (forcing a refresh) - event.preventDefault();
  // Hint: Check if the form was completed (no fields are empty)

  // 4.2. Send a note (completed form) to the server
  // Hint: You need to replace the contents of the variable "formData" with the data of the form
  var formData = $("#create-note-form").serialize(); // Example on how to get the form data using jQuery (depending on your code)
  $.post(
    "https://www.nafra.at/adad_st2025/project/",
    formData,
    function (response) {
      // 4.3. Return and display the new note
    }
  );

  /* CREATE TWEETS: END ----------------------------------------- */

  /* 5. CREATE COMMENTS: START ------------------------------------
      - Purpose: Comment on a note
  - Task: Assignment #22 - Challenge requirements: Task #2
  ----------------------------------------------------------------- */

  // 5.1. The "create comment"-form was submitted
  // Hint: Execute the "create a comment" logic (below) whenever the "create comment"-form was submitted
  // Hint: Don't forget to prevent the form from submitting (forcing a refresh) - event.preventDefault();
  // Hint: Check if the form was completed (no fields are empty)

  // 5.2. Send a comment (completed form) to the server
  // Hint: You need to replace the variable "tweetID" with the ID of the note that should be commented
  // var tweetID = pressedelement.target.dataset.tweetID; // Example on how to get an ID (depending on your code)
  var tweetID = 1; // Example on how to get an ID (depending on your code)
  // Hint: You need to replace the contents of the variable "formData" with the data of the form
  var formData = $(".create-comment-form").serialize(); // Example on how to get the form data using jQuery (depending on your code)
  $.post(
    "https://www.nafra.at/adad_st2025/project/" + tweetID,
    formData,
    function (response) {
      // 5.3. Return and display the new comment
    }
  );

  /* CREATE COMMENTS: END ----------------------------------------- */

  /* 6. YOUR OWN IDEAS: START ------------------------------------
      - Purpose: Your own purpose
  - Task: Assignment #22 - Challenge requirements: Task #4
  ---------------------------------------------------------------- */

  // Hint: Be creative :-)

  /* YOUR OWN IDEAS: END ----------------------------------------- */
});
