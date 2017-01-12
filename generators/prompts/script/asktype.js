function askType(yo) {

  var prompts=[{
    type: 'rawlist',
    name: 'type',
    message: '请选择您问答的类型?',
    choices: [{
      value: 'input',
      name: '输入框',
      checked: true
    },{
      value: 'confirm',
      name: '是否框',
      checked: false
    },
    {
      value: 'list',
      name: '单选框',
      checked: false
    },
    {
      value: 'rawlist',
      name: '快捷单选框',
      checked: false
    },
    {
      value: 'expand',
      name: '英文单选框',
      checked: false
    },
    {
      value: 'checkbox',
      name: '多选框',
      checked: false
    },
    {
      value: 'password',
      name: '密码编辑框',
      checked: false
    },
    {
      value: 'editor',
      name: '编辑框',
      checked: false
    }]
  }];
   yo.prompt(prompts).then(function (props) {
    yo.props.type=props.type;

  }.bind(yo));
}

module.exports=askType;