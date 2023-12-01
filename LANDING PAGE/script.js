$(document).ready(function() {
    $(".gallery img").on("click", function() {
      const imgSrc = $(this).attr("src");
      $("#lightboxModal img").attr("src", imgSrc);
      $("#lightboxModal").modal("show");
    });
  });