import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = ({ navigation }) => {
  const [feedItems, setFeedItems] = useState([
    {
      id: '1',
      user: 'Katrina C. Vedra',
      post: 'Hello, this is my first mobile app!',
    },
    {
      id: '2',
      user: 'Sir.Arlene Baldelovar ',
      post: 'Enjoy navigating my app.',
    },
    // Add more feed items as needed
  ]);

  const [newPost, setNewPost] = useState('');

  const renderFeedItem = ({ item }) => (
    <View style={styles.feedItem}>
      <Text style={styles.feedUser}>{item.user}</Text>
      <Text style={styles.feedPost}>{item.post}</Text>
    </View>
  );

  const handlePost = () => {
    if (newPost.trim() !== '') {
      const newItem = {
        id: (feedItems.length + 1).toString(),
        user: 'New User', // You can set the user dynamically if you have user authentication
        post: newPost,
      };
      setFeedItems([...feedItems, newItem]);
      setNewPost('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.postButton}
          onPress={handlePost}
        >
          <Text style={styles.postButtonText}>Create a Post</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Type your post here"
          value={newPost}
          onChangeText={text => setNewPost(text)}
        />

        <FlatList
          data={feedItems}
          keyExtractor={(item) => item.id}
          renderItem={renderFeedItem}
        />

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('LandingPage')}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color of safe area
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  postButton: {
    width: '100%',
    backgroundColor: '#42b72a', //  green color
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  postButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#1877f2', //  blue color
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  feedItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#dcdfe6',
    paddingVertical: 10,
    marginBottom: 10,
  },
  feedUser: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  feedPost: {
    color: '#333333',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: -50,
    marginTop: -50,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#dcdfe6',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default HomePage;
