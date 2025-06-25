import { View, Text, Image, StyleSheet } from 'react-native';

export default function Shrek() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/shrek.jpg')} style={styles.image} />
      <Text style={styles.title}>Shrek</Text>
      <Text style={styles.synopsis}>
         Um ogro rabugento embarca em uma aventura para recuperar sua privacidade, mas acaba encontrando o amor.
      </Text>
      <Text style={styles.details}>Duração: 90 min</Text>
      <Text style={styles.details}>Estreia: 18 de maio de 2001
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