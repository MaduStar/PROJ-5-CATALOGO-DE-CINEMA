import { View, Text, Image, StyleSheet } from 'react-native';

export default function AsBranquelas() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/asbranquelas.jpg')} style={styles.image} />
      <Text style={styles.title}>As Branquelas</Text>
      <Text style={styles.synopsis}>
       Dois agentes do FBI se disfarçam como socialites para proteger herdeiras de um plano de sequestro.
      </Text>
      <Text style={styles.details}>Duração: 109 min</Text>
      <Text style={styles.details}>Estreia: 23 de junho de 2004 
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