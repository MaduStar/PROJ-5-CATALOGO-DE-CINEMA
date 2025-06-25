import { View, Text, Image, StyleSheet } from 'react-native';

export default function OsFarofeiros() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/filmes/osfarofeiros.jpg')} style={styles.image} />
      <Text style={styles.title}>Os farofeiros</Text>
      <Text style={styles.synopsis}>
       Um grupo de colegas de trabalho embarca em uma viagem caótica e cheia de confusões para um feriado.
      </Text>
      <Text style={styles.details}>Duração: 103 min</Text>
      <Text style={styles.details}>Estreia: 8 de março de 2018</Text>
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