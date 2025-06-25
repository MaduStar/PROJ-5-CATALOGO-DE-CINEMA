import { View, Text, Image, StyleSheet } from 'react-native';

export default function ReiLeao() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/reileao.jpg')} style={styles.image} />
      <Text style={styles.title}>Rei Leão</Text>
      <Text style={styles.synopsis}>
        Um jovem leão precisa descobrir seu destino e reconquistar o lugar que lhe foi tirado.
      </Text>
      <Text style={styles.details}>Duração: 118 min</Text>
      <Text style={styles.details}>Estreia: 15 de junho de 1994</Text>
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