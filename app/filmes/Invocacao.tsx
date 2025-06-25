import { View, Text, Image, StyleSheet } from 'react-native';

export default function Invocacao() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/invocacao.jpg')} style={styles.image} />
      <Text style={styles.title}>Invocação do mal</Text>
      <Text style={styles.synopsis}>
        Investigadores paranormais tentam livrar uma família do assédio de forças demoníacas.
      </Text>
      <Text style={styles.details}>Duração: 112 min</Text>
      <Text style={styles.details}>Estreia: 19 de julho de 2013
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