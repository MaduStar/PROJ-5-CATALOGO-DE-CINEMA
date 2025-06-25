import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryList from '../components/CategoryList';

export default function HomeScreen() {
  const movieCategories = {
    Animação: [
      { title: 'Toy Story', image: require('../assets/filmes/toystory.jpg'), path: 'ToyStory' },
      { title: 'Shrek', image: require('../assets/filmes/shrek.jpg'), path: 'Shrek' },
      { title: 'Frozen', image: require('../assets/filmes/frozen.jpg'), path: 'Frozen' },
    ],
    Aventura: [
      { title: 'Moana', image: require('../assets/filmes/moana.jpg'), path: 'Moana' },
      { title: 'Rei Leão', image: require('../assets/filmes/reileao.jpg'), path: 'ReiLeao' },
      { title: 'Os Incríveis', image: require('../assets/filmes/osincriveis.jpg'), path: 'OsIncriveis' },
    ],
    Comédia: [
      { title: 'As Branquelas', image: require('../assets/filmes/asbranquelas.jpg'), path: 'AsBranquelas' },
      { title: 'Minha mãe é uma peça', image: require('../assets/filmes/minhamae.jpg'), path: 'MinhaMae' },
      { title: 'Os Farofeiros', image: require('../assets/filmes/osfarofeiros.jpg'), path: 'OsFarofeiros' },
    ],
    Romance: [
      { title: 'O amor não tira férias', image: require('../assets/filmes/oamor.jpg'), path: 'OAmor' },
      { title: 'Como eu era antes de você', image: require('../assets/filmes/como.jpg'), path: 'Como' },
      { title: 'Titanic', image: require('../assets/filmes/titanic.jpg'), path: 'Titanic' },
    ],
    Terror: [
      { title: 'Anabelle', image: require('../assets/filmes/anabelle.jpg'), path: 'Anabelle' },
      { title: 'Invocação do Mal', image: require('../assets/filmes/invocacao.jpg'), path: 'Invocacao' },
      { title: 'Chucky', image: require('../assets/filmes/chucky.jpg'), path: 'Chucky' }
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>🎬 Catálogo de Filmes</Text>
      {Object.entries(movieCategories).map(([category, movies], index) => (
        <CategoryList key={index} category={category} movies={movies} />
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
});