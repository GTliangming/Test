import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, message, Tabs } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, connect, FormattedMessage } from 'umi';
import { AccountLogin, getFakeCaptcha } from '@/services/login';
import type { Dispatch } from 'umi';
import type { StateType } from '@/models/login';
import type { ConnectState } from '@/models/connect';
import { history } from 'umi';
import styles from './index.less';
import { getRedirectPath, redirectPath } from '@/utils/utils';
import IconFont from '@/components/IconFont';
import { GitHubInfo_client_id, GitHubInfo_redirect_url } from '@/services/utils';

export type LoginProps = {
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

const Login: React.FC<LoginProps> = (props) => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState<string>('account');
  const intl = useIntl();

  return (
    <div className={styles.main}>
      <Tabs activeKey={type} onChange={setType}>
        <Tabs.TabPane
          key="account"
          tab={intl.formatMessage({
            id: 'pages.login.accountLogin.tab',
            defaultMessage: '账户密码登录',
          })}
        />
        <Tabs.TabPane
          key="Thirdlogin"
          tab={intl.formatMessage({
            id: 'pages.login.Thirdlogin.tab',
            defaultMessage: '第三方登录',
          })}
        />
      </Tabs>

      {type === 'account' && (
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
            const result = await AccountLogin(values)
            if (result.data.code === 200) {
              const { username } = result.data.data;
              window.localStorage.setItem("username", username)
              message.success('🎉 🎉 🎉        登录成功！');
              redirectPath()
            } else {
              message.error(` 🤷‍♂️ 🤷‍♂️ 🤷‍♂️        ${result.data.message}`);
            }
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.username.placeholder',
              defaultMessage: '用户名: admin or user',
            })}
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

          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={styles.prefixIcon} />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.password.placeholder',
              defaultMessage: '密码: ant.design',
            })}
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
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              prefix: <MailOutlined className={styles.prefixIcon} />,
            }}
            captchaProps={{
              size: 'large',
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
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
              onClick={() => {
                let redirect = getRedirectPath();
                const path = redirect ? `?redirect=${redirect}` : '';
                history.replace(`/user/forgetpassword${path}`);
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
            </a>
          </div>
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="验证码错误" />
          )}

        </ProForm>
      )}

      {type === 'Thirdlogin' && (
        <>
          <a
            onClick={() => {
              window.open(`https://github.com/login/oauth/authorize?client_id=${GitHubInfo_client_id}&redirect_url=${GitHubInfo_redirect_url}`)
            }}
            style={{ width: "100%", textAlign: "center", margin: "20px 0 ", display: "block" }}>
            <IconFont type="icongithub" style={{ fontSize: '40px', color: "#333" }} />
          </a>
        </>
      )}
    </div>
  );
};

export default connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
