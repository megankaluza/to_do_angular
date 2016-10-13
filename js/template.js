Template = function(name) {
  this.name = name
}

Template.prototype.getName = function () {
  return this.name
};

exports.templateModule = Template;
