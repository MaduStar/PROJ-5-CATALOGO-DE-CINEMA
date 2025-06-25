import { View, Text, Image, StyleSheet } from 'react-native';

export default function MinhaMae() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/minhamae.jpg')} style={styles.image} />
      <Text style={styles.title}>Minha mãe é uma peça</Text>
      <Text style={styles.synopsis}>
        Dona Hermínia, uma mãe divertida e exagerada, vive situações hilárias enquanto tenta controlar sua família.
      </Text>
      <Text style={styles.details}>Duração: 85 min</Text>
      <Text style={styles.details}>Estreia: 21 de junho de 2013</Text>
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