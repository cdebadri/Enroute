import React from 'react';
import { View } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import LoginComponent from '../components/LoginComponent';

class HomeScreen extends React.Component {
  componentDidMount() {
    const { getItems } = this.props;
    getItems();
  }
  render() {
    const { items } = this.props; 
    return (
      <View>
        {items && 
          <ItemComponent items={items} />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(actions.getItemsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


