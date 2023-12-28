import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132A13',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  containerHeader: {
    marginTop: 150,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  containerAvatar: {
    backgroundColor: '#4F772D',
    borderRadius: 120,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 120,
    margin: 8,
    padding: 50
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    marginTop: 32
  },
  name: {
    fontSize: 25,
    color: '#FFF',
    marginTop: 6,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  containerBtns: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    marginTop: 32
  },

});
