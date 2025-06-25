import { View, Text, Image, StyleSheet } from 'react-native';

export default function Abanelle() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/anabelle.jpg')} style={styles.image} />
      <Text style={styles.title}>Anabelle</Text>
      <Text style={styles.synopsis}>
        Uma boneca possuída começa a aterrorizar seus donos, trazendo forças sobrenaturais malignas para suas vidas.
      </Text>
      <Text style={styles.details}>Duração: 99 min</Text>
      <Text style={styles.details}>Estreia: 3 de outubro de 2014</Text>
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