import { View, Text, Image, StyleSheet } from 'react-native';

export default function Moana() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/moana.jpg')} style={styles.image} />
      <Text style={styles.title}>Moana</Text>
      <Text style={styles.synopsis}>
         Uma jovem destemida parte em uma jornada pelo oceano para salvar seu povo, ao lado de um semideus atrapalhado.
      </Text>
      <Text style={styles.details}>Duração: 107 min</Text>
      <Text style={styles.details}>Estreia:  23 de novembro de 2016</Text>
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