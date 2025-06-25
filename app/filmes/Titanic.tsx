import { View, Text, Image, StyleSheet } from 'react-native';

export default function Titanic() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/titanic.jpg')} style={styles.image} />
      <Text style={styles.title}>Titanic</Text>
      <Text style={styles.synopsis}>
         Um romance épico floresce entre dois passageiros a bordo do navio condenado Titanic.
      </Text>
      <Text style={styles.details}>Duração: 195 min</Text>
      <Text style={styles.details}>Estreia: 19 de dezembro de 1997
</Text>
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