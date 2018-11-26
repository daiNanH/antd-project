import {Form, Icon, Input, Button, Checkbox,message } from 'antd';
import axios from 'axios'
import request from '@/utils/request';
import router from 'umi/router';
import loginCss from './Login.css';
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
        if(values.password&&values.userName){
          var formData = new FormData();

            formData.append('username', values.userName);
            formData.append('password', values.password);

            // fetch('/manage/user/login.do', {
            //   method: 'POST',
            //   body: formData
            // })
            // .then(response => response.json())
            // .catch(error => console.error('Error:', error))
            // .then( response => console.log('Success:', JSON.stringify(response)));
          // var Form=new FormData(JSON.stringify({
          //   "username":values.userName,
          //   "password":values.password
          // }))
          // axios.post('/manage/user/login.do', {
          //   "username":values.userName,
          //   "password":values.password
          // })
          // .then(function (response) {
          //   if(response.data.status==0){
          //         router.push('/index');
          //       }else{
          //         message.error(response.data.msg);
          //       }
          // })
          // .catch(function (error) {
          //   message.error(error.msg);
          // });
          // console.log(Form)
          request("/manage/user/login.do",{
            method: 'POST',
            body:formData,
           
          }).then(function(data){
            if(data.status==0){
              router.push('/index');
            }else{
              message.error(data.msg);
            }
          }).catch(function(obj){
            console.log("内容错误！！！")
          })
        }
      });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div id={loginCss['components-form-demo-normal-login']}>
        <Form onSubmit={this.handleSubmit} className={loginCss['login-form']}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: '请输入用户名!'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                placeholder="用户名"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入密码!'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                type="password"
                placeholder="密码"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className={loginCss['login-form-forgot']} href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className={loginCss['login-form-button']} >
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)
export default WrappedNormalLoginForm;