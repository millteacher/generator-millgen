function askType(yo) {

  var prompts=[{
    type: 'input',
    name: 'name',
    message: '变量名称?',
    default: ""
  }];
   yo.prompt(prompts).then(function (props) {
    yo.props.type=props.type;

  }.bind(yo));
}

module.exports=askType;