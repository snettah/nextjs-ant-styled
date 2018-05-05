import { Layout } from 'antd';
import Header from './Header';

export default ({ className, children }) => (
  <Layout>
    <Header />
    {children}
  </Layout>
);
