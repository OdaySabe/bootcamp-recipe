const rendering = new Render();
$("#getRecipes").on("click", function () {
  $.get(`/recipes/${$("#recipes").val()}`, function (response) {
    console.log(response);
    rendering.render(response);
  });
});
function alerting(image) {
  const val = $(image).next().next().children();
  alert($(val[0]).text());
}
