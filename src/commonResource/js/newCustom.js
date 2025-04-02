$(".col h3").on("click", function () {
  const $clickedHeader = $(this); // Cache the clicked <h3> element
  // Collapse all other expanded headers
  $(".col h3")
    .not($clickedHeader) // Select all <h3> elements except the clicked one
    .removeClass("expanded") // Remove the 'expanded' class
    .next("ul") // Target the <ul> immediately following the <h3>
    .slideUp(); // Collapse the <ul>
  // Toggle the clicked header
  $clickedHeader
    .toggleClass("expanded") // Add/remove the 'expanded' class on the clicked <h3>
    .next("ul") // Select the <ul> following the clicked <h3>
    .slideToggle(); // Expand/collapse the <ul>
});
