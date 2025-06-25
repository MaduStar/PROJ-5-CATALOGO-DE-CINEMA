import { View, Text, Image, StyleSheet } from 'react-native';

export default function OAmor() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/oamor.jpg')} style={styles.image} />
      <Text style={styles.title}>O Amor não tira férias</Text>
      <Text style={styles.synopsis}>
         Duas mulheres trocam de casa por um tempo e acabam encontrando o amor inesperadamente.
      </Text>
      <Text style={styles.details}>Duração: 138 min</Text>
      <Text style={styles.details}>Estreia: 8 de dezembro de 2006</Text>
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