var Template = require('./../js/template.js').templateModule;

$(document).ready(function(){
  $("#getName").click(function(){
    var name = $("#name").val();
    var newTemplate = Template(name);
    $("#output-name").text(newTemplate.getName());
  })
})
