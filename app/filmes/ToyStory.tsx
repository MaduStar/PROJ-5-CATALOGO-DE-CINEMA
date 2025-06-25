import { View, Text, Image, StyleSheet } from 'react-native';

export default function ToyStory() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/toystory.jpg')} style={styles.image} />
      <Text style={styles.title}>Toy Story</Text>
      <Text style={styles.synopsis}>
        Um brinquedo cowboy chamado Woody sente ciúmes quando seu dono Andy ganha um novo brinquedo: Buzz Lightyear.
      </Text>
      <Text style={styles.details}>Duração: 81 min</Text>
      <Text style={styles.details}>Estreia: 22 de novembro de 1995</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  synopsis: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 10,
  },
  details: {
    fontSize: 14,
    color: '#999',
  },
});