import React from 'react';
import {Table} from 'antd';
import {connect} from 'dva';
class List extends React.Component {
    componentDidMount() {
        this
            .props
            .dispatch({type: 'cards/queryList'});
    }
    columns = [
        {
            title: '名称',
            dataIndex: 'name',
            render: value => <a href={value}>{value}</a>,
        }, {
            title: '描述',
            dataIndex: 'desc',
            render: value => <a href={value}>{value}</a>,
        }, {
            title: '链接',
            dataIndex: 'url',
            render: value => <a href={value}>{value}</a>,
        }
    ];
    render() {
        const {cardsList, cardsLoading} = this.props;
        console.log(this.props)
        return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={cardsList}
                    loading={cardsLoading}
                    rowKey="id"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {cardsList: state.cards.cardsList, cardsLoading: state.loading.effects['cards/queryList']};
}

export default connect(mapStateToProps)(List);