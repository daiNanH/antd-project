import { Card } from 'antd';
export default function(props) {
    return (
        <Card
        title="Card title"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }