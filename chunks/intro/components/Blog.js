import React from 'react';
import { Row, Col } from 'antd'
import News from './News'
import { BlogTtile, Line } from './StyledComponents'

class Blog extends React.PureComponent {
  render() {
    const { news } = this.props;
    return (
      <Row style={{paddingLeft: '40px', paddingRight: '40px', paddingTop: '10px'}}>
				<Col span={17}>
					<BlogTtile>Latest News</BlogTtile>
					<Line/>
					<News news={news}/>
				</Col>
      	<Col span={6} offset={1}>
				<BlogTtile>Featured</BlogTtile>
					<Line/>
				</Col>
			</Row>
    )
  }
}

export default Blog;
