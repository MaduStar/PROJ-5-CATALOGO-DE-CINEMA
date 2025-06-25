import { View, Text, Image, StyleSheet } from 'react-native';

export default function Como() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/como.jpg')} style={styles.image} />
      <Text style={styles.title}>Como</Text>
      <Text style={styles.synopsis}>
        Uma jovem vibrante começa a cuidar de um homem tetraplégico e transforma sua visão da vida.
      </Text>
      <Text style={styles.details}>Duração: 110 min</Text>
      <Text style={styles.details}>Estreia: 3 de junho de 2016</Text>
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