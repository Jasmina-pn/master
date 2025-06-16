$(function () {
  $.ajaxSetup({ headers: { "X-Auth-Token": "a534e63a0d68ad8ec00d" } });

  // Fetch + Display Tweets
  function fetchTweets(sort = "popular") {
    $.getJSON(
      `https://www.nafra.at/adad_st2025/project/?sort=${sort}`,
      function (data) {
        const container = $("#posts-container");
        container.empty();

        data.forEach((tweet) => {
          const timeAgo = moment(tweet.created).fromNow();

          const tweetHTML = `
          <div class="col-12 col-md-6">
            <div class="tweet-card" data-id="${tweet.id}">
              <h5>${tweet.user}</h5>
              <p>${tweet.text}</p>
              <div class="timestamp">Tweeted ${timeAgo}</div>
              <div class="tweet-footer">
                <button class="btn btn-outline-success vote-btn" data-type="upvote">👍 ${tweet.upvotes}</button>
                <button class="btn btn-outline-danger vote-btn" data-type="downvote">👎 ${tweet.downvotes}</button>
                <button class="btn btn-outline-primary comment-toggle">💬 Comment</button>
              </div>
              <form class="create-comment-form mt-2 d-none">
                <input type="text" name="user" placeholder="Your name" class="form-control mb-1" required />
                <input type="text" name="text" placeholder="Write a comment..." class="form-control mb-1" required />
                <button type="submit" class="btn btn-sm btn-dark">Submit Comment</button>
              </form>
            </div>
          </div>
        `;
          container.append(tweetHTML);
        });
      }
    );
  }

  fetchTweets();

  // Handle Sort Selection
  $("#sort-select").change(function () {
    const sort = $(this).val();
    fetchTweets(sort);
  });

  // Handle Create Tweet
  $("#create-note-form").submit(function (e) {
    e.preventDefault();
    const formData = $(this).serialize();

    $.post("https://www.nafra.at/adad_st2025/project/", formData, function () {
      fetchTweets();
      $("#create-note-form")[0].reset();
    });
  });

  // Handle Voting
  $(document).on("click", ".vote-btn", function () {
    const tweetID = $(this).closest(".tweet-card").data("id");
    const voteType = $(this).data("type");

    $.get(
      `https://www.nafra.at/adad_st2025/project/${tweetID}?type=${voteType}`,
      function () {
        fetchTweets(); // or update only that tweet
      }
    );
  });

  // Toggle comment form
  $(document).on("click", ".comment-toggle", function () {
    $(this).siblings(".create-comment-form").toggleClass("d-none");
  });

  // Handle Comment Submission
  $(document).on("submit", ".create-comment-form", function (e) {
    e.preventDefault();
    const form = $(this);
    const tweetID = form.closest(".tweet-card").data("id");
    const formData = form.serialize();

    $.post(
      `https://www.nafra.at/adad_st2025/project/${tweetID}`,
      formData,
      function () {
        fetchTweets(); // reload after comment
      }
    );
  });
});
