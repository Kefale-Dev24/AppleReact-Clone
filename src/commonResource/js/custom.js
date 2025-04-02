// let footerH3 = $(".footer-links-wrapper h3"); // get all h3 tags in a footer
// console.log(footerH3);

// // let uls = footerH3.next(); // getting items which are next to h3, the uls based on our structure
// // consle.log(uls);

// footerH3.on("click", (ev) => {
//   let windowWidth = $(window).width(); // jquery
//   //   let windowWidth = window.outerWidth; // vanilla js -- notice innerWidth VS outerWidth
//   console.log(windowWidth);
//   if (windowWidth <= 768) {
//     // check if the window width is for small screens (small devices...)
//     $(ev.target).toggleClass("expanded"); // make the + icon changed to X when the lists expand
//     $(ev.target).next().slideToggle("slow"); // MAKE THE UL VISIBLE AND HIDDEN ON CLICK
//   }
// });

// // manage the hidden parts after click
// $(window).resize(() => {
//   let windowWidth = $(window).width(); // jquery
//   if (windowWidth > 768) {
//     $(".footer-links-wrapper ul").css("display", "block"); //MAKE THE UL VISIBLE AND HIDDEN ON CLICK
//   } else {
//     $(".footer-links-wrapper ul").css({ display: "none" });
//   }
// });
//
//Amare Getie
// $(".col h3").on("click", function () {
//   const $clickedHeader = $(this); // Cache the clicked <h3> element
//   // Collapse all other expanded headers
//   $(".col h3")
//     .not($clickedHeader) // Select all <h3> elements except the clicked one
//     .removeClass("expanded") // Remove the 'expanded' class
//     .next("ul") // Target the <ul> immediately following the <h3>
//     .slideUp(); // Collapse the <ul>
//   // Toggle the clicked header
//   $clickedHeader
//     .toggleClass("expanded") // Add/remove the 'expanded' class on the clicked <h3>
//     .next("ul") // Select the <ul> following the clicked <h3>
//     .slideToggle(); // Expand/collapse the <ul>
// });
//
//Eyasu
//
// $(document).on("click", ".footer-links-wrapper h3", function () {
//   $(this).next("ul").slideToggle();
//   $(this).toggleClass("expanded");
// });

// function togglerActiveClass() {
//     $(window).on('resize', function () {
//       if ($(window).width() <= 768) {
//           $(".footer-links-wrapper h3").removeClass("expanded");
//     }
//     else {
//       $('.footer-links-wrapper ul').show()
//     }
//   })
// }
// $(function () {
//   togglerActiveClass();
// });
//
//
// Add `open` class CSS for `:after` dynamically
// $("head").append(
//   '<style>.footer-links-wrapper h3.open:after { content: "\\f00d"; }</style>'
// );

// function showAndHide() {
//   const isMobile = $(window).width() <= 768; //599/782
//   $(".footer-links-wrapper h3").off("click"); // resetting to the original
//   if (isMobile) {
//     $(".footer-links-wrapper h3").on("click", function () {
//       $(".footer-links-wrapper ul").hide();
//       $(this).toggleClass("open").next("ul").slideToggle(); //event.target
//     });
//   } else {
//     $(".footer-links-wrapper h3").removeClass("open");
//     $(".footer-links-wrapper ul").removeAttr("style");
//   }
// }

// showAndHide();
// $(window).on("resize", showAndHide);

//
// ################## Question 5=4 Shorter  ###########################
// $(".footer-links-wrapper h3").on("click", function () {
//   $(this).toggleClass("expanded");
//   $(this).next("ul").slideToggle();
// });

// $(window).resize(() => {
//   let windowWidth = $(window).width(); // jquery
//   if (windowWidth > 768) {
//     $(".footer-links-wrapper ul").css("display", "block"); //MAKE THE UL VISIBLE AND HIDDEN ON CLICK
//   } else {
//     $(".footer-links-wrapper ul").css({ display: "none" });
//   }
// });

//
// $(".footer-links-wrapper h3").on("click", function () {
//   $(this).toggleClass("expanded");
//   $(this).next("ul").slideToggle();
// });

// $(window).resize(() => {
//   let windowWidth = $(window).width(); // jquery
//   if (windowWidth > 768) {
//     $(".footer-links-wrapper ul").css("display", "block"); //MAKE THE UL VISIBLE AND HIDDEN ON CLICK
//   } else {
//     $(".footer-links-wrapper ul").css({ display: "none" });
//   }
// });
//
//
$("head").append(
  '<style>.footer-links-wrapper h3.open:after { content: "\\f00d"; }</style>'
);
function showAndHide() {
  const isMobile = $(window).width() <= 768; //741//819
  $(".footer-links-wrapper h3").off("click");
  if (isMobile) {
    $(".footer-links-wrapper h3").on("click", function () {
      $(this).toggleClass("open").next("ul").slideToggle(); //event.target x
    });
  } else {
    $(".footer-links-wrapper h3").removeClass("open"); //x
    $(".footer-links-wrapper ul").removeAttr("style");
  }
}
showAndHide();
$(window).on("resize", showAndHide);
