import { View, Text, Image, StyleSheet } from 'react-native';

export default function Chucky() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/chucky.jpg')} style={styles.image} />
      <Text style={styles.title}>Chucky</Text>
      <Text style={styles.synopsis}>
         Um boneco assassino, possuído por um espírito maligno, espalha o terror por onde passa.
      </Text>
      <Text style={styles.details}>Duração: 87 min</Text>
      <Text style={styles.details}>Estreia: 9 de novembro de 1988
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