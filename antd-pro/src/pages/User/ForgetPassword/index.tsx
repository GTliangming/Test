import {
  MailOutlined,
} from '@ant-design/icons';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import { useIntl, connect, FormattedMessage } from 'umi';
import { AccountForgetPassword, ForgetPasswordParamsType, getFakeCaptcha } from '@/services/login';
import type { Dispatch } from 'umi';
import type { StateType } from '@/models/login';
import type { ConnectState } from '@/models/connect';
import { history } from 'umi';
import styles from './index.less';
import { getRedirectPath, redirectPath } from '@/utils/utils';

export type ForgetPasswordProps = {
  dispatch: Dispatch;
  userLogin: StateType;
  submitting?: boolean;
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const ForgetPassword: React.FC<ForgetPasswordProps> = (props) => {
  const { submitting } = props;
  const intl = useIntl();
  const [errmsg, setErrMsg] = useState<string>("")
  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={async (values) => {
          const { username, email, confirmPassword, newpassword } = values;
          if (confirmPassword !== newpassword) {
            setErrMsg("两次密码不一致")
          } else {
            const params: ForgetPasswordParamsType = {
              username,
              email,
              newPassword: newpassword
            }
            const result = await AccountForgetPassword(params)
            if (result.data.code === 200) {
              const { username } = result.data.data;
              window.localStorage.setItem("username", username)
              message.success('🎉 🎉 🎉        修改成功！');
              redirectPath()
            } else {
              message.error(` 🤷‍♂️ 🤷‍♂️ 🤷‍♂️        ${result.data.message}`);
            }
          }
        }}
      >
        <ProFormText
          name="username"
          fieldProps={{
            prefix: <span className={styles.label}>用户名：</span>,
          }}
          // placeholder={intl.formatMessage({
          //   id: 'pages.login.username.placeholder'
          // })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.username.required"
                  defaultMessage="请输入用户名!"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="email"
          fieldProps={{
            prefix: <span className={styles.label}>邮箱：</span>,
          }}
          // placeholder={intl.formatMessage({
          //   id: 'pages.login.username.placeholdexr'
          // })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.username.requixred"
                  defaultMessage="请输入用户名!"
                />
              ),
            },
          ]}
        />
        <ProFormText.Password
          name="newpassword"
          fieldProps={{
            prefix: <span className={styles.label}>新密码：</span>,
          }}
          // placeholder={intl.formatMessage({
          //   id: 'pages.login.password.placeholder'
          // })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.password.required"
                  defaultMessage="请输入密码！"
                />
              ),
            },
          ]}
        />
        <ProFormText.Password
          name="confirmPassword"
          fieldProps={{
            prefix: <span className={styles.label}>确认密码：</span>,
          }}
          // placeholder={intl.formatMessage({
          //   id: 'pages.login.password.placeholder'
          // })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.password.required"
                  defaultMessage="请输入密码！"
                />
              ),
            },
          ]}
        />
        {errmsg !== "" && (
          <LoginMessage content={errmsg} />
        )}
        <ProFormCaptcha
          fieldProps={{
            prefix: <MailOutlined className={styles.prefixIcon} />,
          }}
          placeholder={intl.formatMessage({
            id: 'pages.login.captcha.placeholder',
            defaultMessage: '请输入验证码',
          })}
          captchaTextRender={(timing, count) => {
            if (timing) {
              return `${count} ${intl.formatMessage({
                id: 'pages.getCaptchaSecondText',
                defaultMessage: '获取验证码',
              })}`; 2
            }
            return intl.formatMessage({
              id: 'pages.login.phoneLogin.getVerificationCode',
              defaultMessage: '获取验证码',
            });
          }}
          name="captcha"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.captcha.required"
                  defaultMessage="请输入验证码！"
                />
              ),
            },
          ]}
          onGetCaptcha={async (mobile) => {
            const result = await getFakeCaptcha(mobile);
            if (result === false) {
              return;
            }
            message.success('获取验证码成功！验证码为：1234');
          }}
        />

        <a
          style={{
            textAlign: 'right', display: "block", width: "100%", marginBottom: "24px"
          }}
          onClick={() => {
            let redirect = getRedirectPath();
            const path = redirect ? `?redirect=${redirect}` : '';
            history.replace(`/user/login${path}`);
          }}
        >
          <FormattedMessage id="pages.login.login" defaultMessage="已有账号去登录" />
        </a>


      </ProForm>
    </div>
  );
};

export default connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(ForgetPassword);
