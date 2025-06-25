import { View, Text, Image, StyleSheet } from 'react-native';

export default function Frozen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/frozen.jpg')} style={styles.image} />
      <Text style={styles.title}>Frozen</Text>
      <Text style={styles.synopsis}>
        Duas irmãs enfrentam uma jornada mágica para salvar um reino congelado e aprender sobre o verdadeiro poder do amor.
      </Text>
      <Text style={styles.details}>Duração: 102 min</Text>
      <Text style={styles.details}>Estreia: 27 de novembro de 2013</Text>
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