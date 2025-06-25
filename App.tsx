import { ScrollView, StyleSheet } from 'react-native';
import CategoryList from './components/CategoryList';
import'./index.tsx'

export default function App() {
  const movieCategories = [
    {
      category: 'Animação',
      movies: [
        { title: 'Toy Story', image: require('./assets/filmes/toystory.jpg'), path: 'ToyStory' },
        { title: 'Rango', image: require('./assets/filmes/rango.jpg'), path: 'Rango' },
        { title: 'Rio', image: require('./assets/filmes/rio.jpg'), path: 'Rio' },
      ],
    },
    {
      category: 'Aventura',
      movies: [
        { title: 'Os Croods', image: require('./assets/filmes/croods.jpg'), path: 'OsCroods' },
        { title: 'Wall-E', image: require('./assets/filmes/wall.jpg'), path: 'WallE' },
        { title: 'Luca', image: require('./assets/filmes/luca.jpg'), path: 'Luca' },
      ],
    },
    {
      category: 'Comédia',
      movies: [
        { title: 'As Branquelas', image: require('./assets/filmes/asbranquelas.jpg'), path: 'AsBranquelas' },
        { title: 'Gente Grande', image: require('./assets/filmes/gente.jpg'), path: 'GenteGrande' },
        { title: 'O Pequenino', image: require('./assets/filmes/pequenino.jpg'), path: 'OPequenino' },
      ],
    },
    {
      category: 'Romance',
      movies: [
        { title: '10 Coisas que eu odeio em você', image: require('./assets/filmes/10coisass.jpg'), path: '10Coisass' },
        { title: 'Fale com as Abelhas', image: require('./assets/filmes/fale_abelhas.jpg'), path: 'FaleComAsAbelhas' },
        { title: 'La La Land', image: require('./assets/filmes/lala.jpg'), path: 'LaLaLand' },
      ],
    },
    {
      category: 'Terror',
      movies: [
        { title: 'Anabelle', image: require('./assets/filmes/anabelle.jpg'), path: 'Anabelle' },
        { title: 'A órfã', image: require('./assets/filmes/orfa.jpg'), path: 'AOrfa' },
        { title: 'Oija', image: require('./assets/filmes/oija.jpg'), path: 'Oija' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {movieCategories.map(({ category, movies }, index) => (
        <CategoryList key={index} category={category} movies={movies} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
});