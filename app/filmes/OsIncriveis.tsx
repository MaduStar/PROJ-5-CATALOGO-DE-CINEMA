import { View, Text, Image, StyleSheet } from 'react-native';

export default function OsIncriveis() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/osincriveis.jpg')} style={styles.image} />
      <Text style={styles.title}>Os incriveis</Text>
      <Text style={styles.synopsis}>
        Uma família de super-heróis luta contra um vilão enquanto tenta equilibrar uma vida normal.
      </Text>
      <Text style={styles.details}>Duração: 115 min</Text>
      <Text style={styles.details}>Estreia: 5 de novembro de 2004
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