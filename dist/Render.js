class Render {
  constructor() {}
  render(data) {
    $("#render").empty();
    const src = $("#tamplete").html();
    const tamp = Handlebars.compile(src);
    const newHTML = tamp({ rec: data });
    $("#render").append(newHTML);
  }
}
